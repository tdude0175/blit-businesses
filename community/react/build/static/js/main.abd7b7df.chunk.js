(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e,t,n){},17:function(e,t,n){},19:function(e,t,n){"use strict";n.r(t);var a=n(0),o=n.n(a),r=n(2),s=n.n(r),c=(n(15),n(3)),i=n(4),l=n(7),u=n(5),m=n(8),p=n(6),h=n.n(p),d=(n(17),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(l.a)(this,Object(u.a)(t).call(this,e))).state={businesses:[]},n}return Object(m.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("img",{src:h.a,className:"App-logo",alt:"logo"}),o.a.createElement("p",null,"Edit ",o.a.createElement("code",null,"src/App.js")," and save to reload."),o.a.createElement("a",{className:"App-link",href:"https://reactjs.org",target:"_blank",rel:"noopener noreferrer"},"Learn React")),o.a.createElement("h2",null,"test"),this.state.businesses.map(function(e){return o.a.createElement("li",{key:e.objectID},o.a.createElement("a",{href:e.url},e.name))}))}},{key:"componentDidMount",value:function(){var e=this;fetch("https://blacklatinoit.com/api/businesses").then(function(e){return e.json()}).then(function(t){var n=Object.keys(t).map(function(e){return t[e]});console.log(n),e.setState({businesses:n})})}}]),t}(a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(o.a.createElement(d,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},6:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},9:function(e,t,n){e.exports=n(19)}},[[9,2,1]]]);
//# sourceMappingURL=main.abd7b7df.chunk.js.map