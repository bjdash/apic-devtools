(this["webpackJsonpapic-devtools"]=this["webpackJsonpapic-devtools"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),s=n(4),c=n.n(s),i=(n(17),n(1)),u=n.n(i),o=n(2),l=n(9),d=n(5),p=n(6),m=n(3),h=n(8),f=n(7),v=n(11),b=Object(v.a)("apic",11,{upgrade:function(e){var t=e.createObjectStore("Projects",{keyPath:"_id"});t.createIndex("_created","_created",{unique:!1}),t.createIndex("_id","_id",{unique:!0})}}),g={insert:function(e,t){return Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b;case 2:return n.abrupt("return",n.sent.add(e,t));case 3:case"end":return n.stop()}}),n)})))()},upsert:function(e,t){return Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b;case 2:return n.abrupt("return",n.sent.put(e,t));case 3:case"end":return n.stop()}}),n)})))()},read:function(e){return Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b;case 2:return t.abrupt("return",t.sent.getAll(e));case 3:case"end":return t.stop()}}),t)})))()},readSorted:function(e,t,n){return Object(o.a)(u.a.mark((function a(){return u.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if("asc"!==n){a.next=6;break}return a.next=3,b.getAllFromIndex(e,t);case 3:return a.abrupt("return",a.sent);case 6:return a.next=8,b.getAllFromIndex(e,t);case 8:return a.abrupt("return",a.sent.reverse());case 9:case"end":return a.stop()}}),a)})))()},delete:function(e,t){return Object(o.a)(u.a.mark((function n(){return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b;case 2:return n.abrupt("return",n.sent.delete(e,t));case 3:case"end":return n.stop()}}),n)})))()},deleteMulti:function(e,t){return Object(o.a)(u.a.mark((function n(){var a;return u.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,b;case 2:return a=n.sent,n.next=5,Promise.all(t.map((function(t){return a.delete(e,t)})));case 5:return n.abrupt("return",n.sent);case 6:case"end":return n.stop()}}),n)})))()},findByKey:function(e,t,n){return Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b;case 2:return t.abrupt("return",t.sent.get(e,n));case 3:case"end":return t.stop()}}),t)})))()},getByIds:function(e,t,n,a){return Object(o.a)(u.a.mark((function t(){var a;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b;case 2:return a=t.sent,t.next=5,Promise.all(n.map((function(t){return a.get(e,t)})));case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))()},clear:function(e){return Object(o.a)(u.a.mark((function t(){return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,b;case 2:return t.abrupt("return",t.sent.clear(e));case 3:case"end":return t.stop()}}),t)})))()}};function k(){return w.apply(this,arguments)}function w(){return(w=Object(o.a)(u.a.mark((function e(){return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.read("TestSuits");case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var E=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(e){var a;return Object(d.a)(this,n),(a=t.call(this,e)).state={selected:e.value,initialSelected:e.value,isOpen:!1,options:e.options},a.handleDocumentClick=a.handleDocumentClick.bind(Object(m.a)(a)),a.openMenu=a.openMenu.bind(Object(m.a)(a)),a.selectMenu=a.selectMenu.bind(Object(m.a)(a)),a.wrapper=r.a.createRef(),a}return Object(p.a)(n,[{key:"componentDidMount",value:function(){document.addEventListener("click",this.handleDocumentClick,!1),document.addEventListener("touchend",this.handleDocumentClick,!1),this.state.options.length>0&&this.selectMenu(this.state.options[0])}},{key:"componentWillUnmount",value:function(){document.removeEventListener("click",this.handleDocumentClick,!1),document.removeEventListener("touchend",this.handleDocumentClick,!1)}},{key:"handleDocumentClick",value:function(e){c.a.findDOMNode(this.wrapper.current).contains(e.target)||this.state.isOpen&&this.setState({isOpen:!1})}},{key:"selectMenu",value:function(e){this.setState({selected:e,isOpen:!1}),this.props.onChange(e)}},{key:"openMenu",value:function(){this.setState({isOpen:!this.state.isOpen})}},{key:"buildMenu",value:function(){var e=this;return this.state.options.map((function(t){return r.a.createElement("button",{className:"dropdown-item",key:t._id,onClick:function(){return e.selectMenu(t)}},t.name)}))}},{key:"render",value:function(){return console.log(this.state.selected),r.a.createElement("div",{className:"dropdown-cont "+this.props.className,ref:this.wrapper},r.a.createElement("div",{className:"dropdown-selected"},r.a.createElement("button",{className:"dropdown-anchor",onClick:this.openMenu},this.state.selected?this.state.selected.name:"Nothing found"),r.a.createElement("span",{className:"dropdown-arrow"}),r.a.createElement("button",{className:"dropdown-refresh",onClick:this.props.onRefresh},r.a.createElement("i",{className:"icon-loop"}))),this.state.isOpen&&r.a.createElement("div",{className:"dropdown-menus","aria-expanded":"true"},this.state.options.length>0&&this.buildMenu(),0===this.state.options.length&&r.a.createElement("div",{className:"dropdown-item"},"No test suites found. Please create one.")))}}],[{key:"getDerivedStateFromProps",value:function(e,t){return e.value&&e.value!==t.initialSelected?{selected:e.value,initialSelected:e.value}:e.options?{options:e.options}:null}}]),n}(a.Component),y=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(d.a)(this,n),(e=t.call(this)).state={requests:[],suites:[],selectedSuite:null,urlFilter:"",paused:!1,include:!0,filteredTypes:["xhr","document","other","fetch"],supportedtypes:["xhr","document","stylesheet","script","fetch","other"],error:""},e.onSuitSelected=e.onSuitSelected.bind(Object(m.a)(e)),e.loadSuites=e.loadSuites.bind(Object(m.a)(e)),e.toggleFilterType=e.toggleFilterType.bind(Object(m.a)(e)),e.clearAll=e.clearAll.bind(Object(m.a)(e)),e.toggleInclude=e.toggleInclude.bind(Object(m.a)(e)),e.addToSuite=e.addToSuite.bind(Object(m.a)(e)),e}return Object(p.a)(n,[{key:"componentDidMount",value:function(){var e=this;this.loadSuites(),window.chrome&&window.chrome.devtools&&window.chrome.devtools.network.onRequestFinished.addListener((function(t){t.getContent((function(n,a){console.log(t._resourceType,t.request.url);var r=t._resourceType||"other",s=e.state,c=s.paused,i=s.filteredTypes;!c&&t.request&&t.request.url&&i.includes(r.toLowerCase())&&e.addRequest(t,n,a)}))}))}},{key:"addRequest",value:function(e,t,n){e.response&&e.response.content&&(e.response.content.text=t,e.response.content.encoding=n),e._id=Math.random().toString(36).substring(2,15),delete e._initiator;var a=[].concat(Object(l.a)(this.state.requests),[e]);this.setState({requests:a})}},{key:"loadSuites",value:function(){var e=Object(o.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,k();case 2:t=e.sent,console.log(t),t&&t.length>0?this.setState({suites:Object(l.a)(t)}):this.setState({suites:[]});case 5:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"onSuitSelected",value:function(e){this.setState({selectedSuite:e})}},{key:"getNewProj",value:function(){return{_id:"new",name:"New Proj "+(new Date).toLocaleString("default",{month:"short",day:"2-digit"})}}},{key:"onFilterChange",value:function(e){this.setState({urlFilter:e.target.value})}},{key:"toggleFilterType",value:function(e){var t=this.state.filteredTypes;t.includes(e)?this.setState({filteredTypes:t.filter((function(t){return t!==e}))}):this.setState({filteredTypes:[].concat(Object(l.a)(t),[e])})}},{key:"toggleInclude",value:function(){this.setState({include:!this.state.include})}},{key:"removeReq",value:function(e){var t=this.state.requests.filter((function(t){return t._id!==e}));this.setState({requests:t})}},{key:"clearAll",value:function(){this.setState({requests:[]})}},{key:"getFilteredRequests",value:function(e,t,n){var a=function(e){return e.split(",").map((function(e){return e.trim()})).filter(Boolean)}(t);return e.filter((function(e){return!t||a.some((function(t){return e.request.url.includes(t)}))===n}))}},{key:"addToSuite",value:function(){var e=this,t=this.state,n=t.requests,a=t.urlFilter,r=t.include,s=t.selectedSuite;s||(this.state.suites.length>0?s=this.state.suites[0]:this.setState({error:"No Suites found"})),console.log("selected",this.state.selectedSuite);var c=this.getFilteredRequests(n,a,r);window.chrome.tabs.query({},(function(t){var n=t.find((function(e){return e.url&&e.url.includes(window.chrome.app.getDetails().id)}));console.log(window.chrome.app.getDetails().id,n),n?(console.log("sending..."),window.chrome.tabs.update(n.id,{active:!0}),window.chrome.tabs.sendMessage(n.id,{requests:c,suite:s._id},(function(e){console.log("acknowledge",e)}))):e.setState({error:"APIC extension is not opened. Please open APIC first and then add requests."})}))}},{key:"render",value:function(){var e=this,t=this.state,n=t.paused,a=t.supportedtypes,s=t.filteredTypes,c=t.error,i=t.urlFilter,u=t.requests,o=t.include,l=this.getFilteredRequests(u,i,o);return r.a.createElement("div",{className:"dark"},r.a.createElement("div",{className:"header"},r.a.createElement("div",{className:"title"},"APIC Session Recorder"),r.a.createElement("button",{onClick:function(){return e.setState({paused:!n})},className:"btn red"},n?r.a.createElement("span",null,r.a.createElement("i",{className:"icon-fiber_manual_record"}),r.a.createElement("span",null,"Record")):r.a.createElement("span",null,r.a.createElement("i",{className:"icon-pause"}),r.a.createElement("span",null,"Pause"))),r.a.createElement("button",{className:"btn",onClick:this.clearAll},r.a.createElement("i",{className:"icon-delete"}),r.a.createElement("span",null,"Clear All")),r.a.createElement("div",{className:"input-grp proj-dd"},r.a.createElement("label",null,"Test Suites"),r.a.createElement(E,{onRefresh:this.loadSuites,className:"",onChange:this.onSuitSelected,options:this.state.suites,value:this.state.suites.length>0&&this.state.suites[0]})),r.a.createElement("button",{className:"btn blue",onClick:function(){return e.addToSuite()}},r.a.createElement("i",{className:"icon-save"}),r.a.createElement("span",null,"Add to Suite"))),r.a.createElement("div",{className:"app"},r.a.createElement("div",{className:"top-menu"},r.a.createElement("div",{className:"input-grp filter-url"},r.a.createElement("label",{htmlFor:"url"},"URL Filter"),r.a.createElement("input",{className:"input",id:"url",onChange:function(t){return e.onFilterChange(t)},type:"text",name:"url-filter",placeholder:"Use comma separated values for multiple filter"})),r.a.createElement("div",{className:"switch-cont"},r.a.createElement("div",null,"Exclude "),r.a.createElement("label",{className:"switch"},r.a.createElement("input",{type:"checkbox",checked:this.state.include,onChange:this.toggleInclude}),r.a.createElement("span",{className:"slider round"})),r.a.createElement("div",null," Include")),r.a.createElement("div",null,a.map((function(t){return r.a.createElement("button",{key:t,onClick:function(){return e.toggleFilterType(t)},className:"type btn"+(s.indexOf(t)>=0?" active":"")},t)})))),r.a.createElement("div",{className:"req-cont"},c&&r.a.createElement("div",{className:"error red"},r.a.createElement("div",null,c),r.a.createElement("button",{className:"btn",onClick:function(){return e.setState({error:""})}},r.a.createElement("i",{className:"icon-clear"}))),l.map((function(t,n){return r.a.createElement("div",{className:"req",key:n},r.a.createElement("button",{onClick:function(){return e.removeReq(t._id)},className:""},r.a.createElement("i",{className:"icon-remove_circle red"})),r.a.createElement("div",{className:"method "+t.request.method},t.request.method),r.a.createElement("div",null,t.request.url))})),0===this.state.requests.length&&r.a.createElement("div",{className:"no-req"},this.state.paused?"Click Record to start capturing your requests":"Interact with the page to start capturing requests"))))}}]),n}(r.a.Component);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.7e57d586.chunk.js.map