import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Dropdown extends Component {
    constructor(props) {
        super(props)
        this.state = {
            selected: props.value,
            initialSelected: props.value,
            isOpen: false,
            options: props.options
        }
        this.handleDocumentClick = this.handleDocumentClick.bind(this);
        this.openMenu = this.openMenu.bind(this);
        this.selectMenu = this.selectMenu.bind(this);
        this.wrapper = React.createRef();
    }

    // componentWillReceiveProps(newProps) {
    //     console.log('updating');
    //     if (newProps.value) {
    //         if (newProps.value._id !== this.state.selected._id) {
    //             this.setState({ selected: newProps.value })
    //         }
    //     }
    //     if (newProps.options) {
    //         this.setState({ options: newProps.options });
    //     }
    // }
    static getDerivedStateFromProps(nextProps, prevState) {
        if (nextProps.value && nextProps.value !== prevState.initialSelected) {
            return { selected: nextProps.value, initialSelected: nextProps.value };
        }
        if (nextProps.options) {
            return { options: nextProps.options };
        }
        return null;
    }

    componentDidMount() {
        document.addEventListener('click', this.handleDocumentClick, false);
        document.addEventListener('touchend', this.handleDocumentClick, false);
        if (this.state.options.length > 0) {
            this.selectMenu(this.state.options[0]);
        }
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleDocumentClick, false)
        document.removeEventListener('touchend', this.handleDocumentClick, false)
    }

    handleDocumentClick(event) {
        // if (this.mounted) {
        // if (!ReactDOM.findDOMNode(this).contains(event.target)) {
        if (!ReactDOM.findDOMNode(this.wrapper.current).contains(event.target)) {
            if (this.state.isOpen) {
                this.setState({ isOpen: false })
            }
        }
        // }
    }
    selectMenu(option) {
        this.setState({ selected: option, isOpen: false })
        this.props.onChange(option);
    }

    openMenu() {
        this.setState({
            isOpen: !this.state.isOpen
        })
    }

    buildMenu() {
        return this.state.options.map(optn => <button className="dropdown-item" key={optn._id} onClick={() => this.selectMenu(optn)}>
            {optn.name}
        </button>)
    }

    render() {
        console.log(this.state.selected)
        return (<div className={"dropdown-cont " + this.props.className} ref={this.wrapper}>
            <div className="dropdown-selected">
                <button className="dropdown-anchor" onClick={this.openMenu}>{this.state.selected ? this.state.selected.name : 'Nothing found'}</button>
                <span className="dropdown-arrow"></span>
                <button className="dropdown-refresh" onClick={this.props.onRefresh}><i className="icon-loop"></i></button>
            </div>
            {
                this.state.isOpen && <div className="dropdown-menus" aria-expanded='true'>
                    {this.state.options.length > 0 && this.buildMenu()}
                    {this.state.options.length === 0 && <div className="dropdown-item">No test suites found. Please create one.</div>}
                </div>
            }
        </div>)
    }
}

export default Dropdown;