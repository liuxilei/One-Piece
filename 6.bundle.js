(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{1703:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var d=s(n(50)),o=s(n(7)),u=s(n(18)),a=s(n(6)),r=s(n(9)),i=n(0),l=s(i),f=s(n(468));function s(e){return e&&e.__esModule?e:{default:e}}var c={nodes:[{id:"node1",x:100,y:200},{id:"node2",x:300,y:200}],edges:[{target:"node2",source:"node1"}]},h=function(e){function t(e){(0,o.default)(this,t);var n=(0,a.default)(this,(t.__proto__||(0,d.default)(t)).call(this,e));return n.mountNode=(0,i.createRef)(),n}return(0,r.default)(t,e),(0,u.default)(t,[{key:"componentDidMount",value:function(){this.graph=new f.default.Graph({container:"mountNode",width:500,height:500,nodeStyle:{default:{fill:"#40a9ff",stroke:"#096dd9"}},edgeStyle:{default:{stroke:"#A3B1BF"}}}),this.graph.read(c)}},{key:"render",value:function(){return l.default.createElement("div",{id:"mountNode"})}}]),t}(i.Component);t.default=h}}]);
//# sourceMappingURL=6.bundle.js.map