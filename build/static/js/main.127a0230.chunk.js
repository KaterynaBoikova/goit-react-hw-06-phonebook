(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{13:function(e,t,n){"use strict";var c=n(60),a=n(10),r=Object(a.b)("contacts/add",(function(e){return{payload:{id:Object(c.a)(),name:e.name,number:e.number}}})),o=Object(a.b)("contacts/delete"),i=Object(a.b)("contacts/changeFilter");t.a={addContact:r,deleteContact:o,changeFilter:i}},31:function(e,t,n){},59:function(e,t,n){"use strict";n.r(t);var c,a=n(0),r=n.n(a),o=n(14),i=n.n(o),b=(n(31),n(3)),d=n(24),s=n.n(d),l=(n(52),n(4)),j=Object(a.lazy)((function(){return n.e(1).then(n.bind(null,64))})),u=function(){return Object(l.jsx)(l.Fragment,{children:Object(l.jsx)(a.Suspense,{fallback:Object(l.jsx)(s.a,{type:"ThreeDots",color:"teal",height:130,width:130,style:{textAlign:"center"}}),children:Object(l.jsxs)(b.d,{children:[Object(l.jsx)(b.b,{path:"/",exact:!0,component:j}),Object(l.jsx)(b.a,{to:"/"})]})})})},O=n(23),h=n(17),p=n(16),m=n(5),f=n(10),g=n(13),x=Object(f.c)([{id:"id-1",name:"Rosie Simpson",number:"459-12-56"},{id:"id-2",name:"Hermione Kline",number:"443-89-12"},{id:"id-3",name:"Eden Clements",number:"645-17-79"},{id:"id-4",name:"Annie Copeland",number:"227-91-26"}],(c={},Object(p.a)(c,g.a.addContact,(function(e,t){return[].concat(Object(h.a)(e),[t.payload])})),Object(p.a)(c,g.a.deleteContact,(function(e,t){return e.filter((function(e){return e.id!==t.payload}))})),c)),k=Object(f.c)("",Object(p.a)({},g.a.changeFilter,(function(e,t){return t.payload}))),y=Object(m.b)({contacts:x,filter:k}),C=n(11),w=n(25),F=n.n(w),A=Object(h.a)(Object(f.d)({serializableCheck:{ignoredActions:[C.a,C.f,C.b,C.c,C.d,C.e]}})),S={key:"contacts",storage:F.a,blacklist:["filter"]},v=Object(f.a)({reducer:{phonebook:Object(C.g)(S,y)},middleware:A}),z={store:v,persistor:Object(C.h)(v)},E=n(26),J=n(20);i.a.render(Object(l.jsx)(r.a.StrictMode,{children:Object(l.jsx)(O.a,{store:z.store,children:Object(l.jsx)(E.a,{loading:null,persistor:z.persistor,children:Object(l.jsx)(J.a,{children:Object(l.jsx)(u,{})})})})}),document.getElementById("root"))}},[[59,2,3]]]);
//# sourceMappingURL=main.127a0230.chunk.js.map