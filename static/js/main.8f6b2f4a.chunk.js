(this["webpackJsonptodo-function"]=this["webpackJsonptodo-function"]||[]).push([[0],[,,,,,,,,,,,function(e,t,a){e.exports=a(30)},,,,,,,,,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(7),l=a(9),o=a(2),u=a(1),i=a(32),s=a(8),d=a.n(s),m=(a(24),function(){return c.a.createElement("input",{className:"new-todo",placeholder:"What needs to be done?",autoFocus:!0})}),f=(a(25),function(){return c.a.createElement("header",{className:"header"},c.a.createElement("h1",null,"className"),c.a.createElement(m,null))}),b=Object(n.createContext)(null),p=(a(26),["All","Active","Completed"]),v=function(e){var t=e.currentFilter,a=Object(n.useContext)(b);console.log(t);var r=function(e){if(a){var t=e.target;a(t.dataset.filter)}},l=p.map((function(e){return c.a.createElement("li",null,c.a.createElement("button",{className:t===e?"selected":"",onClick:r,"data-filter":e},e))}));return c.a.createElement("ul",{className:"filters"},l)},E=(a(27),function(e){var t=e.removeAllCompletedTask,a=e.counter,n=e.currentFilter;return c.a.createElement("footer",{className:"footer"},c.a.createElement("span",{className:"todo-count"},a," items left"),c.a.createElement(v,{currentFilter:n}),c.a.createElement("button",{className:"clear-completed",onClick:function(e){t&&t()}},"Clear completed"))}),j=a(10),O=Object(n.createContext)(null),C=Object(n.createContext)(null),N=Object(n.createContext)(null),k=function(e){var t=e.id_,a=e.status,r=e.description,l=e.created,o=Object(n.useState)(r),i=Object(u.a)(o,2),s=i[0],d=i[1],m=Object(n.useContext)(O),f=Object(n.useContext)(N),b=Object(n.useContext)(C);return c.a.createElement("li",{className:a},c.a.createElement("div",{className:"view"},c.a.createElement("input",{className:"toggle",type:"checkbox",defaultChecked:"completed"===a,onChange:function(e){m&&t&&m(t)}}),c.a.createElement("label",null,c.a.createElement("span",{className:"description"},r),c.a.createElement("span",{className:"created"},"created ",l," ago")),c.a.createElement("button",{className:"icon icon-edit"}),c.a.createElement("button",{className:"icon icon-destroy",onClick:function(e){f&&t&&f(t)}})),"editing"===a&&c.a.createElement("input",{type:"text",className:"edit",onChange:function(e){var t=e.target;d(t.value)},onKeyUp:function(e){var a=e.target;b&&t&&13===e.keyCode&&b(t,a.value)},value:s}))},g=(a(28),function(e){var t=e.tasks;return c.a.createElement("ul",{className:"todo-list"},t.map((function(e){var t=e.id_,a=Object(j.a)(e,["id_"]);return c.a.createElement(k,Object.assign({key:t,id_:t},a))})))}),x=(a(29),function(e,t){var a=[];switch(t){case"All":a=e;break;default:a=e.filter((function(e){var a=e.status;return!!a&&a[0].toUpperCase()+a.substr(1)===t}))}return a}),h=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],r=t[1],s=Object(n.useState)("All"),m=Object(u.a)(s,2),p=m[0],v=m[1],j=Object(n.useState)([]),k=Object(u.a)(j,2),h=k[0],w=k[1],A=Object(n.useState)([{status:"completed",description:"Completed task",created:"".concat(Object(i.a)(new Date(2014,6,2)))},{status:"active",description:"Editing task",created:"".concat(Object(i.a)(new Date(2015,0,1,0,0,15))," ")},{status:"active",description:"Active task",created:"".concat(Object(i.a)(new Date(2016,0,1)))}]),_=Object(u.a)(A,2),y=_[0],S=_[1];Object(n.useEffect)((function(){var e=y.reduce((function(e,t){return[].concat(Object(o.a)(e),[Object(l.a)({id_:d.a.generate()},t)])}),[]);S(e),w(x(e,p))}),[]),Object(n.useEffect)((function(){var e=y.reduce((function(e,t){return"completed"!==t.status&&e++,e}),0);r(e)}),[y]);return c.a.createElement("section",{className:"todoapp"},c.a.createElement(f,null),c.a.createElement("section",{className:"main"},c.a.createElement(O.Provider,{value:function(e){var t=Object(o.a)(y),a=y.findIndex((function(t){return t.id_===e})),n=t[a].status;t[a].status="completed"===n?"active":"completed",S(t),w(x(t,p))}},c.a.createElement(N.Provider,{value:function(e){var t=Object(o.a)(y),a=y.findIndex((function(t){return t.id_===e}));-1!==a&&(t.splice(a,1),S(t),w(x(t,p)))}},c.a.createElement(C.Provider,{value:function(e,t){var a=Object(o.a)(y),n=y.findIndex((function(t){return t.id_===e}));a[n].status="Active",a[n].description=t,S(a),w(x(a,p))}},c.a.createElement(g,{tasks:h})))),c.a.createElement(b.Provider,{value:function(e){v(e),w(x(Object(o.a)(y),e))}},c.a.createElement(E,{removeAllCompletedTask:function(){var e=Object(o.a)(y).filter((function(e){return"completed"!==e.status}));S(e),w(x(e,p))},counter:a,currentFilter:p}))))};Object(r.render)(c.a.createElement(c.a.StrictMode,null,c.a.createElement(h,null)),document.getElementById("root"))}],[[11,1,2]]]);
//# sourceMappingURL=main.8f6b2f4a.chunk.js.map