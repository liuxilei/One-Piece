(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{1707:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o,i=e(0),a=(o=i)&&o.__esModule?o:{default:o},l=e(2246),d=e(94),r=e(70),f=e(103),u=e(208);var p=(0,i.memo)((function(t){var n=t.getDetailInfo,e=t.detailInfo;return console.log(t),(0,i.useEffect)((function(){n(t.match.params.id)}),[]),a.default.createElement(l.DetailWrapper,null,a.default.createElement(l.Header,null,e.get("title")),a.default.createElement(l.Content,{dangerouslySetInnerHTML:{__html:e.get("content")}}))}));n.default=(0,f.connect)((function(t){return{detailInfo:t.ShortBook.get("detailInfo")}}),(function(t){return(0,r.bindActionCreators)({getDetailInfo:u.getDetailInfo},t)}))((0,d.withRouter)(p))},2246:function(t,n,e){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n.Content=n.Header=n.DetailWrapper=void 0;var o=r(e(104)),i=(0,o.default)(["\n\toverflow: hidden;\n\twidth: 620px;\n\tmargin: 0 auto;\n\tpadding-bottom: 100px;\n"],["\n\toverflow: hidden;\n\twidth: 620px;\n\tmargin: 0 auto;\n\tpadding-bottom: 100px;\n"]),a=(0,o.default)(["\n\tmargin: 50px 0 20px 0;\n\tfont-size: 34px;\n\tline-height: 44px;\n\tcolor: #333;\n\tfont-weight: bold;\n"],["\n\tmargin: 50px 0 20px 0;\n\tfont-size: 34px;\n\tline-height: 44px;\n\tcolor: #333;\n\tfont-weight: bold;\n"]),l=(0,o.default)(["\n\tcolor: #2f2f2f;\n\timg {\n\t\tmax-width: 100%;\n\t}\n\tp {\n\t\tmargin: 25px 0;\n\t\tfont-size: 16px;\n\t\tline-height: 30px;\n\t\tb {\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n"],["\n\tcolor: #2f2f2f;\n\timg {\n\t\tmax-width: 100%;\n\t}\n\tp {\n\t\tmargin: 25px 0;\n\t\tfont-size: 16px;\n\t\tline-height: 30px;\n\t\tb {\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n"]),d=r(e(105));function r(t){return t&&t.__esModule?t:{default:t}}n.DetailWrapper=d.default.div(i),n.Header=d.default.div(a),n.Content=d.default.div(l)}}]);
//# sourceMappingURL=4.bundle.js.map