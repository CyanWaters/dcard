(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{131:function(e,t,a){e.exports=a(230)},155:function(e,t,a){},229:function(e,t,a){},230:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),l=a(33),o=a.n(l),r=a(59),u=a.n(r),i=a(72),d=a(5),s=a(233),m=a(234),v=a(235),f=a(236),p=a(237),b=a(65),E=a(238),g=function(e){var t=e.loadMore,a=e.component,l=e.loading,o=Object(n.useState)(!1),r=Object(d.a)(o,2),u=r[0],i=r[1],s=function(){var e,t,a,n=(null===(e=document)||void 0===e?void 0:e.documentElement.scrollTop)||document.body.scrollTop,c=(null===(t=document)||void 0===t?void 0:t.documentElement.scrollHeight)||document.body.scrollHeight,o=(null===(a=document)||void 0===a?void 0:a.documentElement.clientHeight)||window.innerHeight;!(Math.ceil(n+o)>=c)||l||u||i(!0)};return Object(n.useEffect)((function(){u&&t()}),[u]),Object(n.useEffect)((function(){!l&&u&&i(!1)}),[l]),Object(n.useEffect)((function(){return window.addEventListener("scroll",s),function(){window.removeEventListener("scroll",s)}}),[]),c.a.createElement(c.a.Fragment,null,a," ",function(){if(l)return c.a.createElement("div",{className:"data-loading"},c.a.createElement(b.a,null))}())},h=a(118),j=a.n(h),O="".concat("https://api.github.com","/search/repositories"),w=function(){var e=Object(i.a)(u.a.mark((function e(t,a,n){var c,l,o,r,i,d;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c="".concat(O,"?q=").concat(t,"&per_page=").concat(a,"&page=").concat(n),e.prev=1,e.next=4,j.a.get(c);case 4:return l=e.sent,o=l.data,i=(null===(r=void 0===o?{}:o)||void 0===r?void 0:r.total_count)||0,d=(null===r||void 0===r?void 0:r.items)||[],e.abrupt("return",{items:d,totalCount:i});case 12:return e.prev=12,e.t0=e.catch(1),e.abrupt("return",{errorMessage:(null===e.t0||void 0===e.t0?void 0:e.t0.message)||e.t0,error:!0});case 15:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t,a,n){return e.apply(this,arguments)}}(),N=function(e,t){var a=null;return function(){a&&clearTimeout(a),a=setTimeout(e,t)}},k=(a(155),Object(f.a)({scriptUrl:"//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js"})),C=function(){var e=Object(n.useState)(""),t=Object(d.a)(e,2),a=t[0],l=t[1],o=Object(n.useState)(30),r=Object(d.a)(o,2),f=r[0],h=r[1],j=Object(n.useState)(1),O=Object(d.a)(j,2),C=O[0],y=O[1],S=Object(n.useState)(!1),x=Object(d.a)(S,2),F=x[0],T=x[1],_=Object(n.useState)([]),H=Object(d.a)(_,2),L=H[0],M=H[1],P=Object(n.useState)(""),I=Object(d.a)(P,2),R=I[0],U=I[1],B=s.a.Header,D=(s.a.Footer,s.a.Sider,s.a.Content),J=!(a&&C&&f),q=Object(n.useCallback)((function(e){N((function(){var t;return l(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}),600)()}),[]),z=Object(n.useCallback)((function(e){N((function(){var t;return h(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}),600)()}),[]),G=Object(n.useCallback)((function(e){N((function(){var t;return y(null===e||void 0===e||null===(t=e.target)||void 0===t?void 0:t.value)}),600)()}),[]),V=function(){var e=Object(i.a)(u.a.mark((function e(){var t,n,c,l,o,r,i,d,s=arguments;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=s.length>0&&void 0!==s[0]&&s[0],T(!0),e.next=4,w(a,f,C);case 4:n=e.sent,c=n.items,n.totalCount,l=n.error,o=void 0!==l&&l,r=n.errorMessage,i=void 0===r?"":r,o?U(i):(d=c.map((function(e,t){return{key:t,name:null===e||void 0===e?void 0:e.name,url:null===e||void 0===e?void 0:e.url,updated_at:null===e||void 0===e?void 0:e.updated_at}})),M(t?d:L.concat(d)),U("")),T(!1);case 13:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=Object(n.useCallback)((function(){y(C+1)}),[C]),A=c.a.createElement(m.a,{className:"repo-table",dataSource:L,columns:[{title:"Name",dataIndex:"name",key:"name"},{title:"URL",dataIndex:"url",key:"url"},{title:"Latest Updated Time",dataIndex:"updated_at",key:"updated_at"}],pagination:!1});return Object(n.useEffect)((function(){J||V(!0)}),[a]),Object(n.useEffect)((function(){J||V()}),[C,f]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"app"},c.a.createElement(s.a,null,c.a.createElement(B,{className:"header"},c.a.createElement("a",{className:"link",href:"https://github.com/CyanWaters",target:"popup"},c.a.createElement(p.a,null)," GitHub"),c.a.createElement("div",{className:"float-right link"},c.a.createElement(k,{type:"icon-tuichu"})),c.a.createElement("div",{className:"clear-float"})),c.a.createElement(D,null,c.a.createElement("div",null,c.a.createElement("p",{className:"field-name"},"Repoitory Name:"),c.a.createElement(v.a,{"data-testid":"repoName",placeholder:"Repo Name",onChange:q})),c.a.createElement("div",null,c.a.createElement("p",{className:"field-name"}," Per Page Count:"),c.a.createElement(v.a,{"data-testid":"per-page-count",type:"number",placeholder:"Count",min:1,onChange:z,defaultValue:f})),c.a.createElement("div",null,c.a.createElement("p",{className:"field-name"}," Page:"),c.a.createElement(v.a,{type:"number",placeholder:"Page",min:1,onChange:G,value:C,disabled:!0})),R?c.a.createElement("div",{className:"field-name no-data"},"Something went wrong: ".concat(R)):J||!L.length?F?c.a.createElement("div",{className:"data-loading"},c.a.createElement(b.a,null)):c.a.createElement("div",{className:"field-name no-data"},c.a.createElement(E.a,null),"No Data"):c.a.createElement(g,{key:"".concat(f,"+").concat(C,"+").concat(F),loadMore:W,component:A,loading:F})))))},y=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,239)).then((function(t){var a=t.getCLS,n=t.getFID,c=t.getFCP,l=t.getLCP,o=t.getTTFB;a(e),n(e),c(e),l(e),o(e)}))};a(229);o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(C,null)),document.getElementById("root")),y()}},[[131,1,2]]]);
//# sourceMappingURL=main.23fe7740.chunk.js.map