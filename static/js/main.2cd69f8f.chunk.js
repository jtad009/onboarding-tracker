(this["webpackJsonpreact-typescript"]=this["webpackJsonpreact-typescript"]||[]).push([[0],{53:function(e,t,n){},81:function(e,t,n){"use strict";n.r(t);var r,o,c=n(0),s=n(34),i=(n(53),n(7)),a=n(2),l=n(1),d=function(e){var t=e.text,n=e.cssClass,r=void 0===n?"":n;return Object(l.jsx)("h4",{className:"text-3xl ".concat(r),children:t})},u=n(22),j=n(23),b=j.a.label(r||(r=Object(u.a)(["\n    display: block;\n    position: relative;\n    padding-left: 35px;\n    margin-bottom: 12px;\n    cursor: pointer;\n    font-size: 0.6rem;\n    line-height:1.5rem;\n    -webkit-user-select: none;\n    -moz-user-select: none;\n    -ms-user-select: none;\n    user-select: none;\n\n    > input {\n      position: absolute;\n      opacity: 0;\n      cursor: pointer;\n      height: 0;\n      width: 0;\n      &:checked ~ span {\n        background-color: Transparent;\n        border: 0px;\n      }\n      &:checked ~ span:after {\n        display: block;\n      }\n    }\n    &:hover input ~ span {\n      background-color: #ccc;\n    }\n    span:after {\n      left: 9px;\n      top: 8px;\n      width: 8px;\n      height: 10px;\n      border: solid black;\n      border-width: 0 3px 3px 0;\n      -webkit-transform: rotate(45deg);\n      -ms-transform: rotate(45deg);\n      transform: rotate(45deg);\n    }\n  "]))),f=j.a.span(o||(o=Object(u.a)(['\n    position: absolute;\n    top: 0;\n    left: 0;\n    height: 25px;\n    width: 25px;\n    background-color: #eee;\n    border: 2px solid black;\n    &:after {\n      content: "";\n      position: absolute;\n      display: none;\n    }\n    \n  ']))),m=function(e){var t=e.message,n=e.showLoader;return Object(l.jsxs)("div",{className:"self-center",children:[Object(l.jsx)("div",{className:"flex items-end justify-center ".concat(n?"display":"hidden"),children:Object(l.jsxs)("span",{className:"flex absolute h-20 w-20 -mt-1 -mr-1",children:[Object(l.jsx)("span",{className:"animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-600 opacity-75"}),Object(l.jsx)("span",{className:"relative inline-flex rounded-full h-20 w-20 bg-gray-300"})]})}),Object(l.jsx)("div",{className:"flex justify-center ",children:Object(l.jsx)("p",{className:"text-center text-lg font-sans text-gray-600",children:t||"Authenticating, please wait."})})]})},h=function(e){var t,n=e.todoItems;return e.loading?Object(l.jsx)("div",{className:"min-h-screen h-full flex items-center justify-center w-full",children:Object(l.jsx)(m,{message:"Loading checklist...",showLoader:!1})}):Object(l.jsxs)("div",{className:"flex flex-col ",children:[Object(l.jsx)(d,{text:"Task List",cssClass:" mb-6 "}),!n&&Object(l.jsx)("p",{className:"font-semibold ",children:"No Todos found for this user...  "}),n&&!n.length&&Object(l.jsx)("p",{className:"font-semibold ",children:"No Todos found for this user...  "}),n&&(null===(t=n||[])||void 0===t?void 0:t.map((function(e,t){return Object(l.jsxs)(b,{children:[null===e||void 0===e?void 0:e.title,Object(l.jsx)("input",{type:"checkbox",checked:!0===(null===e||void 0===e?void 0:e.completed),readOnly:!0}),Object(l.jsx)(f,{})]},"".concat(e,"-").concat(t))})))]})},p=n(38),O=n(39),x=n(46),v=n(45),g=function(e){var t=e.title,n=e.subtitle,r=e.goto,o=e.cta;return Object(l.jsx)("div",{className:"self-center",children:Object(l.jsxs)("div",{className:" m-auto flex flex-col justify-center items-center min-h-max h-screen px-3",children:[Object(l.jsx)("img",{src:"data:image/png;base64,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",alt:"page not found",className:"noCourseImg"}),Object(l.jsx)(d,{cssClass:"text-3xl mt-3",text:"".concat(t||"Page Not Found")}),Object(l.jsx)("p",{className:"noDiscussionP mt-3 mb-6",children:n||"Sorry, it seems the page you are looking for does not exist or has been moved to a different location."}),Object(l.jsx)(i.b,{to:r||"/",children:Object(l.jsx)("button",{className:"px-4 py-2 font-semibold text-sm bg-white text-slate-700 border border-slate-300 rounded-md shadow-sm outline outline-2 outline-offset-2 outline-slate-500 dark:bg-slate-700 dark:text-slate-200 dark:border-transparent",children:o||"Goto Home"})})]})})},w=function(e){Object(x.a)(n,e);var t=Object(v.a)(n);function n(){var e;Object(p.a)(this,n);for(var r=arguments.length,o=new Array(r),c=0;c<r;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).state={hasError:!1},e}return Object(O.a)(n,[{key:"componentDidCatch",value:function(e,t){console.error("Uncaught errored:",e,t)}},{key:"render",value:function(){return this.state.hasError?Object(l.jsx)(g,{}):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),n}(c.Component),I=w,A=n(4),B=function(e){var t=e.name,n=e.id,r=Object(a.g)().userId,o=void 0===r?"1":r;return Object(l.jsx)(i.b,{to:"/users/".concat(n),children:Object(l.jsxs)("p",{className:"bg-white p-3 mb-3 flex items-center justify-between",children:[t,n===parseInt(null!==o&&void 0!==o?o:"",10)?Object(l.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-4 w-4",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",strokeWidth:2,children:Object(l.jsx)("path",{strokeLinecap:"round",strokeLinejoin:"round",d:"M13 5l7 7-7 7M5 5l7 7-7 7"})}):null]})})},C="/users",E="/users/@id/todos",R=n(16),U=n(42),k=n.n(U).a.create({baseURL:"https://jsonplaceholder.typicode.com"}),N=function(e,t){return t&&{}.toString.call(t)==="[object ".concat(e,"]")},T="ERROR_MESSAGE";function X(e){var t={type:T,error:e};return function(e){e(t)}}var D=function(e,t,n){null!==e&&void 0!==e&&e.response?n(X({title:"Error message",body:"Error getting ".concat(t,": ").concat(e.message),showError:!0})):n(X({title:"Error message",body:"Error PERFORMING ACTION",showError:!0}))},S=function(e,t,n,r){var o=Object(c.useRef)(!0),s=r,i=Object(R.b)(),a=Object(c.useState)(null),l=Object(A.a)(a,2),d=l[0],u=l[1],j=Object(c.useState)(!1),b=Object(A.a)(j,2),f=b[0],m=b[1];return n&&(e=function(e){var t,n=["?","&"];return e.customIdentifier&&!n.includes(e.customIdentifier)&&(n=n.concat(e.customIdentifier)),null===(t=Object.keys(e.params||{}))||void 0===t||t.forEach((function(t){var r=((null===e||void 0===e?void 0:e.params)||[])[t],o=new RegExp("([".concat(n.join(""),"])")+t+"=.*?(&|$)","i");if(void 0!==r&&null!==r){var c=e.customIdentifier||(-1!==e.route.toString().indexOf("?")?"&":"?");e.route.toString().match(o)?e.route=e.route.toString().replace(o,"$1"+t+"="+r+"$2"):e.route=e.route+c+t+"="+r}else e.route=""})),e}({route:e,params:n}).route),s&&!N("Function",null===s||void 0===s?void 0:s.errorCallBack)&&(s.errorCallBack=D),Object(c.useEffect)((function(){return function(){o.current=!1}}),[]),Object(c.useEffect)((function(){null!==s&&void 0!==s&&s.reloadCondition&&(u(null),m(!0),k.get(e).then((function(e){if(!o.current)return null;u(e.data),m(!1)}),(function(e){if(!o.current)return null;null!==s&&void 0!==s&&s.errorCallBack&&N("Function",null===s||void 0===s?void 0:s.errorCallBack)&&(null===s||void 0===s||s.errorCallBack(e,t,i),s.errorData&&u(null===s||void 0===s?void 0:s.errorData),m(!1))})))}),[e,t,d,null===s||void 0===s?void 0:s.reloadCondition,null===s||void 0===s?void 0:s.errorCallBack,null===s||void 0===s?void 0:s.errorData,s,i]),{loading:f,data:d}},y=function(){var e=Object(a.g)().userId,t=void 0===e?"1":e,n=Object(c.useState)(),r=Object(A.a)(n,2),o=r[0],s=r[1],i=Object(c.useState)(),u=Object(A.a)(i,2),j=u[0],b=u[1],f=Object(c.useState)(!0),p=Object(A.a)(f,2),O=p[0],x=p[1],v=S(C,"Users",{},{reloadCondition:!o}),g=S(function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return(Object.keys(t).reduce((function(e,n){var r=new RegExp("@".concat(n));return e.replace(r,t[n]||"")}),e)||e).toString().trim()}(E,{id:t}),"Todos",{},{reloadCondition:void 0!==t&&O});return Object(c.useEffect)((function(){v&&!v.loading&&s(v.data)}),[v]),Object(c.useEffect)((function(){if(g&&!g.loading){if(Array.isArray(g.data)&&!g.data.length)throw new Error("No todos found for this user. ");b(g.data),x(!1)}}),[g]),Object(c.useEffect)((function(){b(void 0),x(!0)}),[t]),v.loading?Object(l.jsx)("div",{className:"min-h-screen h-full flex items-center justify-center",children:Object(l.jsx)(m,{message:"Loading users...",showLoader:!0})}):Object(l.jsxs)("div",{className:"App border min-h-screen h-full w-3/6",children:[Object(l.jsx)("h1",{className:"text-4xl text-center mt-6 mb-6 font-bold",children:"Onboarding Tracker"}),Object(l.jsxs)("div",{className:"flex ".concat(null!==g&&void 0!==g&&g.loading?"justify-evenly":"justify-between"," mx-9"),children:[Object(l.jsxs)("div",{children:[Object(l.jsx)(d,{text:"Users",cssClass:"mb-6 "}),Object(l.jsxs)("div",{children:[v&&(v.data||[]).map((function(e){return Object(l.jsx)(B,{name:null===e||void 0===e?void 0:e.name,id:null===e||void 0===e?void 0:e.id},"u-".concat(null===e||void 0===e?void 0:e.id))})),Object(l.jsx)("p",{className:"mx-45 text-sm my-5 font-bold",children:"Simulate Unavailable User"}),Object(l.jsx)(B,{name:"Test User",id:112},"u-".concat(112))]})]}),t?Object(l.jsx)(h,{todoItems:j,loading:null===g||void 0===g?void 0:g.loading}):null]})]})};function F(){return Object(l.jsx)("div",{className:"flex items-center flex-col",children:Object(l.jsx)(i.a,{children:Object(l.jsx)(I,{children:Object(l.jsxs)(a.c,{children:[Object(l.jsx)(a.a,{path:"/",element:Object(l.jsx)(y,{}),children:Object(l.jsx)(a.a,{path:"/users/:userId/*",element:Object(l.jsx)(h,{})})}),Object(l.jsx)(a.a,{path:"*",element:Object(l.jsx)(g,{})})]})})})})}var M=n(13),W=n(44),K=n(11),L={error:{title:"post 1",body:"Error One"}},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:L,t=arguments.length>1?arguments[1]:void 0;if(t.type===T){var n={title:t.error.title,body:t.error.body};return Object(K.a)(Object(K.a)({},e),{},{error:n})}return e},P=n(43),G=Object(M.combineReducers)({errorState:J}),V=Object(M.createStore)(G,Object(P.composeWithDevTools)(Object(M.applyMiddleware)(W.a))),Z=document.getElementById("root");if(!Z)throw new Error("Unknown root element");s.createRoot(Z).render(Object(l.jsx)(c.StrictMode,{children:Object(l.jsx)(R.a,{store:V,children:Object(l.jsx)(F,{})})}))}},[[81,1,2]]]);
//# sourceMappingURL=main.2cd69f8f.chunk.js.map