//@ts-check
import React from 'react';
import * as Services from './Services';
import Dropdown from './Dropdown';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            requests: [],
            suites: [],
            selectedSuite: null,
            urlFilter: '',
            paused: false,
            include: true,
            filteredTypes: ['xhr', 'document', 'other', 'fetch'],
            supportedtypes: ['xhr', 'document', 'stylesheet', 'script', 'fetch', 'other'],
            error: ''
        }
        this.onSuitSelected = this.onSuitSelected.bind(this);
        this.loadSuites = this.loadSuites.bind(this);
        this.toggleFilterType = this.toggleFilterType.bind(this);
        this.clearAll = this.clearAll.bind(this);
        this.toggleInclude = this.toggleInclude.bind(this);
        this.addToSuite = this.addToSuite.bind(this);
    }

    componentDidMount() {
        this.loadSuites();
        if (window.chrome && window.chrome.devtools) {
            window.chrome.devtools.network.onRequestFinished.addListener(request => {
                request.getContent((content, encoding) => {
                    console.log(request._resourceType, request.request.url);
                    const resourceType = request._resourceType || 'other';
                    const { paused, filteredTypes } = this.state
                    if (!paused && request.request && request.request.url && filteredTypes.includes(resourceType.toLowerCase())) {
                        this.addRequest(request, content, encoding)
                    }
                });
            });
        }
    }

    addRequest(request, content, encoding) {
        if (request.response && request.response.content) {
            request.response.content.text = content;
            request.response.content.encoding = encoding;
        }
        request['_id'] = Services.getId();
        delete request['_initiator'];
        const newRequestsList = [...this.state.requests, request];
        this.setState({
            requests: newRequestsList
        });
    }

    async loadSuites() {
        let suites = await Services.getSuites();
        console.log(suites)
        if (suites && suites.length > 0) {
            this.setState({ suites: [...suites] });
        } else {
            this.setState({ suites: [] });;
        }
    }

    onSuitSelected(selectedSuite) {
        this.setState({ selectedSuite })
    }

    getNewProj() {
        return {
            _id: 'new',
            name: 'New Proj ' + new Date().toLocaleString('default', { month: 'short', day: '2-digit' })
        }
    }
    onFilterChange(event) {
        this.setState({ urlFilter: event.target.value })
    }

    toggleFilterType(type) {
        let { filteredTypes } = this.state;
        if (filteredTypes.includes(type)) {//remove
            this.setState({ filteredTypes: filteredTypes.filter(t => t !== type) })
        } else {//add
            this.setState({ filteredTypes: [...filteredTypes, type] })
        }
    }
    toggleInclude() {
        this.setState({ include: !this.state.include });
    }

    removeReq(reqId) {
        const requests = this.state.requests.filter(req => req._id !== reqId);
        this.setState({ requests })
    }

    clearAll() {
        this.setState({ requests: [] })
    }

    getFilteredRequests(requests, filterString, include) {
        const filters = Services.getFiltersList(filterString);
        return requests.filter(request => { return (!filterString || filters.some(filter => request.request.url.includes(filter)) === include) });
    }

    addToSuite() {
        let { requests, urlFilter, include, selectedSuite } = this.state;
        if (!selectedSuite) {
            if (this.state.suites.length > 0) {
                selectedSuite = this.state.suites[0];
            } else {
                this.setState({ error: 'No Suites found' });
            }
        }
        console.log('selected', this.state.selectedSuite);

        const requestsToAdd = this.getFilteredRequests(requests, urlFilter, include);

        window.chrome.tabs.query({}, (tabs) => {
            const apicTab = tabs.find(tab => tab.url && tab.url.includes(window.chrome.app.getDetails().id))
            console.log(window.chrome.app.getDetails().id, apicTab)
            if (apicTab) {
                console.log('sending...')
                window.chrome.tabs.update(apicTab.id, {
                    active: true
                });
                window.chrome.tabs.sendMessage(apicTab.id, { requests: requestsToAdd, suite: selectedSuite._id }, (response) => {
                    console.log('acknowledge', response);
                });
            } else {
                this.setState({ error: 'APIC extension is not opened. Please open APIC first and then add requests.' })
            }
        });
    }

    render() {
        const { paused, supportedtypes, filteredTypes, error, urlFilter, requests, include } = this.state;
        const filteredReq = this.getFilteredRequests(requests, urlFilter, include);
        return (
            <div className="dark">
                <div className="header">
                    <div className="title">APIC Session Recorder</div>
                    <button onClick={() => this.setState({ paused: !paused })} className="btn red">
                        {paused ?
                            <span><i className="icon-fiber_manual_record"></i><span>Record</span></span> :
                            <span><i className="icon-pause"></i><span>Pause</span></span>
                        }
                    </button>
                    <button className="btn" onClick={this.clearAll}><i className="icon-delete"></i><span>Clear All</span></button>
                    <div className="input-grp proj-dd">
                        <label>Test Suites</label>
                        {<Dropdown onRefresh={this.loadSuites} className="" onChange={this.onSuitSelected} options={this.state.suites} value={this.state.suites.length > 0 && this.state.suites[0]} />}
                    </div>
                    <button className="btn blue" onClick={() => this.addToSuite()}><i className="icon-save"></i><span>Add to Suite</span></button>
                </div>
                <div className="app">
                    <div className="top-menu">
                        <div className="input-grp filter-url">
                            <label htmlFor="url">URL Filter</label>
                            <input className="input" id="url" onChange={(event) => this.onFilterChange(event)} type="text" name="url-filter" placeholder="Use comma separated values for multiple filter" />
                        </div>

                        <div className="switch-cont">
                            <div>Exclude </div>
                            <label className="switch">
                                <input type="checkbox" checked={this.state.include} onChange={this.toggleInclude} />
                                <span className="slider round"></span>
                            </label>
                            <div> Include</div>
                        </div>

                        <div>
                            {supportedtypes.map(type => <button key={type} onClick={() => this.toggleFilterType(type)} className={"type btn" + (filteredTypes.indexOf(type) >= 0 ? ' active' : '')}>{type}</button>)}
                        </div>
                    </div>

                    <div className="req-cont">
                        {error && <div className="error red">
                            <div>{error}</div>
                            <button className="btn" onClick={() => this.setState({ error: '' })}><i className="icon-clear"></i></button>
                        </div>}
                        {filteredReq.map((req, index) => (
                            <div className="req" key={index}>
                                <button onClick={() => this.removeReq(req._id)} className=""><i className="icon-remove_circle red"></i></button>
                                <div className={'method ' + req.request.method}>{req.request.method}</div>
                                <div>{req.request.url}</div>
                            </div>
                        ))}

                        {
                            this.state.requests.length === 0 && <div className="no-req">
                                {this.state.paused ? 'Click Record to start capturing your requests' : 'Interact with the page to start capturing requests'}
                            </div>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default App;
