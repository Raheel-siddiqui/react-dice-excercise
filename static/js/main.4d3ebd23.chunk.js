(this["webpackJsonpreact-dice-excercise"]=this["webpackJsonpreact-dice-excercise"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports=a(15)},,,,,function(e,t,a){},function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(6),c=a.n(r),i=(a(12),a(13),a(14),a(1)),l=a(2),s=a(4),u=a(3),f=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("i",{className:"fas fa-dice-".concat(this.props.face)}))}}]),a}(n.Component),d=function(e){Object(s.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={face1:"one",face2:"one",isroll:!1},e.roll=function(){var t=Math.floor(Math.random()*e.props.side.length),a=Math.floor(Math.random()*e.props.side.length);e.setState({isroll:!0}),setTimeout((function(){e.setState({face1:e.props.side[t],face2:e.props.side[a],isroll:!1})}),500)},e}return Object(l.a)(a,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement("div",{className:"flex-container"},o.a.createElement(f,{face:this.state.face1}),o.a.createElement(f,{face:this.state.face2}),o.a.createElement("button",{className:"roll-dice-btn",onClick:this.roll},!this.state.isroll&&"Roll Dice",this.state.isroll&&"Rolling....")))}}]),a}(n.Component);d.defaultProps={side:["one","two","three","four","five","six"]};var h=function(){return o.a.createElement("div",{className:"App"},o.a.createElement("h1",null,"React Roll Dic Exercise"),o.a.createElement(d,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(h,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[7,1,2]]]);
//# sourceMappingURL=main.4d3ebd23.chunk.js.map