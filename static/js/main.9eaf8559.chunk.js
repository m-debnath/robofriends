(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(7),o=n.n(c),s=n(1),i=n(2),l=n(4),h=n(3),u=n(5),m=function(e){e.searchField;var t=e.searchChange;return r.a.createElement("div",null,r.a.createElement("input",{className:"pa3 mb3 ba b--light-blue bg-lightest-blue",type:"search",placeholder:"search friends",onChange:t}))},d=function(e){return r.a.createElement("div",{style:{overflowY:"scroll",height:"700px"},className:"bt b--white"},e.children)},f=function(e){var t=e.id,n=e.name,a=e.email;return r.a.createElement("div",{id:"card-".concat(t),className:"tc bg-light-blue dib br3 pa3 ma2 grow bw2 shadow-5"},r.a.createElement("img",{alt:"robohash",src:"https://robohash.org/".concat(t,"?set=set3&size=200x200")}),r.a.createElement("div",null,r.a.createElement("h2",null,n),r.a.createElement("p",null,a)))},b=function(e){var t=e.users;return r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement(f,{key:"card-".concat(t),id:e.id,name:e.name,email:e.email})})))},g=function(e){function t(e){var n;return Object(s.a)(this,t),(n=Object(l.a)(this,Object(h.a)(t).call(this,e))).state={hasError:!1},n}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidCatch",value:function(e,t){console.log(e,t),this.setState({hasError:!0})}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Oops. Something went wrong."):this.props.children}}]),t}(a.Component),p=(n(13),function(e){function t(){var e;return Object(s.a)(this,t),(e=Object(l.a)(this,Object(h.a)(t).call(this))).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={users:[],searchField:""},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e=this,t=this.state.users.filter((function(t){return t.name.toLowerCase().includes(e.state.searchField.toLowerCase())}));return 0===this.state.users.length?r.a.createElement("h1",{className:"tc f1"},"Loading ... "):r.a.createElement("div",{className:"tc"},r.a.createElement("h1",{className:"f1"},"Robot Friends"),r.a.createElement(m,{searchChange:this.onSearchChange}),r.a.createElement(d,null,r.a.createElement(g,null,r.a.createElement(b,{users:t}))))}}]),t}(a.Component));n(14),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(15);o.a.render(r.a.createElement(p,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,n){e.exports=n(16)}},[[8,1,2]]]);
//# sourceMappingURL=main.9eaf8559.chunk.js.map