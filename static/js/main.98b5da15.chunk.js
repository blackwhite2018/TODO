(this["webpackJsonptodo-function"]=this["webpackJsonptodo-function"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(8),o=a(9),l=a(2),u=a(1),i=a(32),s=a(4),d=a.n(s),m=Object(n.createContext)(null),f=(a(24),function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useContext)(m);return c.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",value:a,autoFocus:!0,onChange:function(e){var t=e.target;r(t.value)},onKeyUp:function(e){if(13===e.keyCode&&o){var t=e.target;o(t.value),r("")}}})}),b=(a(25),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"className"),c.a.createElement(f,null))}),v=Object(n.createContext)(null),p=(a(26),["All","Active","Completed"]),j=function(e){var t=e.currentFilter,a=Object(n.useContext)(v),r=function(e){if(a){var t=e.target;a(t.dataset.filter)}},o=p.map((function(e){return c.a.createElement("li",{key:d.a.generate()},c.a.createElement("button",{type:"button",className:t===e?"selected":"",onClick:r,"data-filter":e},e))}));return c.a.createElement("ul",{className:"filters"},o)},O=(a(27),function(e){var t=e.removeAllCompletedTask,a=e.counter,n=e.currentFilter;return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},a," items left"),c.a.createElement(j,{currentFilter:n}),c.a.createElement("button",{type:"button",className:"clear-completed",onClick:function(){t&&t()}},"Clear completed"))}),E=a(10),C=Object(n.createContext)(null),k=Object(n.createContext)(null),N=Object(n.createContext)(null),g=function(e){var t=e.id_,a=e.status,r=e.description,o=e.created,l=Object(n.useState)(r),i=Object(u.a)(l,2),s=i[0],d=i[1],m=Object(n.useContext)(C),f=Object(n.useContext)(N),b=Object(n.useContext)(k);return c.a.createElement("li",{className:a},c.a.createElement("div",{className:"view"},c.a.createElement("input",{className:"toggle",type:"checkbox",defaultChecked:"completed"===a,onChange:function(){m&&t&&m(t)}}),c.a.createElement("label",null,c.a.createElement("span",{className:"description"},r),c.a.createElement("span",{className:"created"},"created ",o," ago")),c.a.createElement("button",{type:"button",className:"icon icon-edit"}),c.a.createElement("button",{type:"button",className:"icon icon-destroy",onClick:function(){f&&t&&f(t)}})),"editing"===a&&c.a.createElement("input",{type:"text",className:"edit",onChange:function(e){var t=e.target;d(t.value)},onKeyUp:function(e){var a=e.target;b&&t&&13===e.keyCode&&b(t,a.value)},value:s}))},x=(a(28),function(e){var t=e.tasks;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.id_,a=Object(E.a)(e,["id_"]);return c.a.createElement(g,Object.assign({key:t,id_:t},a))})))}),h=(a(29),function(e,t){var a=[];switch(t){case"All":a=e;break;default:a=e.filter((function(e){var a=e.status;return!!a&&a[0].toUpperCase()+a.substr(1)===t}))}return a}),y=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("All"),f=Object(u.a)(s,2),p=f[0],j=f[1],E=Object(n.useState)([]),g=Object(u.a)(E,2),y=g[0],w=g[1],A=Object(n.useState)([{status:"completed",description:"Completed task",created:"".concat(Object(i.a)(new Date(2014,6,2)))},{status:"active",description:"Editing task",created:"".concat(Object(i.a)(new Date(2015,0,1,0,0,15))," ")},{status:"active",description:"Active task",created:"".concat(Object(i.a)(new Date(2016,0,1)))}]),_=Object(u.a)(A,2),S=_[0],F=_[1];Object(n.useEffect)((function(){var e=S.reduce((function(e,t){return[].concat(Object(l.a)(e),[Object(o.a)({id_:d.a.generate()},t)])}),[]);F(e),w(h(e,p))}),[]),Object(n.useEffect)((function(){var e=S.reduce((function(e,t){return"completed"!==t.status?e+1:e}),0);r(e)}),[S]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement(m.Provider,{value:function(e){var t={id_:d.a.generate(),status:"Active",description:e,created:Object(i.a)(new Date)};F([].concat(Object(l.a)(S),[t])),w(h([].concat(Object(l.a)(S),[t]),p))}},c.a.createElement(b,null)),c.a.createElement("section",{className:"main"},c.a.createElement(C.Provider,{value:function(e){var t=Object(l.a)(S),a=S.findIndex((function(t){return t.id_===e})),n=t[a].status;t[a].status="completed"===n?"active":"completed",F(t),w(h(t,p))}},c.a.createElement(N.Provider,{value:function(e){var t=Object(l.a)(S),a=S.findIndex((function(t){return t.id_===e}));-1!==a&&(t.splice(a,1),F(t),w(h(t,p)))}},c.a.createElement(k.Provider,{value:function(e,t){var a=Object(l.a)(S),n=S.findIndex((function(t){return t.id_===e}));a[n].status="Active",a[n].description=t,F(a),w(h(a,p))}},c.a.createElement(x,{tasks:y})))),c.a.createElement(v.Provider,{value:function(e){j(e),w(h(Object(l.a)(S),e))}},c.a.createElement(O,{removeAllCompletedTask:function(){var e=Object(l.a)(S).filter((function(e){return"completed"!==e.status}));F(e),w(h(e,p))},counter:a,currentFilter:p}))))};Object(r.render)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(y,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.98b5da15.chunk.js.map