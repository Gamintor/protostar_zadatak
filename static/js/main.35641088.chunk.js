(this.webpackJsonpprotostar_zadatak=this.webpackJsonpprotostar_zadatak||[]).push([[0],{20:function(e,t,n){},22:function(e,t,n){},24:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(13),s=n.n(r),o=(n(20),n(2)),a=n(4),i=n.n(a),l=n(7),u=n(5),p=n(8),j=(n(22),n(1)),d=function(e){var t=e.comments,n=e.propsMessage;return Object(c.useEffect)((function(){console.log("".concat(n," CommentSection"))}),[]),Object(j.jsxs)("div",{className:"comments",children:[Object(j.jsx)("h2",{id:"comSectionTitle",children:"Comments:"}),t.length&&t.map((function(e){return Object(j.jsxs)("div",{id:"comment",children:[Object(j.jsx)("h3",{id:"comName",children:e.name}),Object(j.jsx)("span",{id:"comEmail",children:e.email}),Object(j.jsx)("p",{id:"comBody",children:e.body})]},e.id)}))]})},h=(n(24),function(e){var t,n=e.title,r=e.body,s=e.comments,o=e.id,a=e.user,i=e.propsMessage;return Object(c.useEffect)((function(){console.log("".concat(i," SinglePost"))}),[]),Object(j.jsxs)(p.b,{to:"/post/".concat(o),target:"_blank",rel:"noopener noreferrer",className:"singlePost",children:[Object(j.jsx)("h3",{id:"title",children:n}),Object(j.jsx)("span",{id:"body",children:r}),Object(j.jsx)("span",{id:"userName",children:null===(t=a[0])||void 0===t?void 0:t.name}),Object(j.jsx)(d,{comments:s,propsMessage:i})]})}),f=n(15),b=n(14),O=(n(30),function(e){var t=e.propsMessage,n=e.setPosts,r=Object(c.useState)("all"),s=Object(u.a)(r,2),o=s[0],a=s[1],p=Object(c.useState)(""),d=Object(u.a)(p,2),h=d[0],O=d[1],v=Object(c.useRef)(!0),x=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts".concat("all"!==o?"?userId=".concat(o):"")).then((function(e){return e.json()}));case 3:t=e.sent,n(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),console.log("GET request failed!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),m=function(){var e=Object(l.a)(i.a.mark((function e(){var t,c;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(isNaN(o)){e.next=14;break}return e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/posts".concat("all"!==o?"?userId=".concat(o):"")).then((function(e){return e.json()}));case 4:t=e.sent,n(t.filter((function(e){return e.title.toLowerCase().includes(h.toLowerCase())}))),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),console.log("GET request failed!");case 12:e.next=25;break;case 14:return e.prev=14,e.next=17,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()}));case 17:c=e.sent,n(c.filter((function(e){return e.title.toLowerCase().includes(h.toLowerCase())}))),e.next=25;break;case 21:e.prev=21,e.t1=e.catch(14),console.error(e.t1),console.log("GET request failed!");case 25:case"end":return e.stop()}}),e,null,[[1,8],[14,21]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){console.log("".concat(t," Toolbar")),v.current?v.current=!1:x()}),[o]),Object(j.jsxs)("div",{className:"toolbar",children:[Object(j.jsxs)("div",{id:"searchDiv",children:[Object(j.jsx)("input",{type:"text",id:"search",size:"25",minLength:"3",autoComplete:"off",placeholder:"Search",onChange:function(e){return O(e.target.value)}}),Object(j.jsx)("button",{id:"searchBtn",onClick:m,children:Object(j.jsx)(b.a,{icon:f.a,id:"icon"})})]}),Object(j.jsx)("div",{id:"filterDiv",children:Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{htmlFor:"filter",children:"Filter By User's name:"}),Object(j.jsxs)("select",{onChange:function(e){return a(e.target.value)},children:[Object(j.jsx)("option",{value:"all",children:"--Choose an option--"}),Object(j.jsx)("option",{value:"10",children:"Clementina DuBuque"}),Object(j.jsx)("option",{value:"9",children:"Glenna Reichert"}),Object(j.jsx)("option",{value:"8",children:"Nicholas Runolfsdottir"}),Object(j.jsx)("option",{value:"7",children:"Kurtis Weissnat"}),Object(j.jsx)("option",{value:"6",children:"Dennis Schulist"}),Object(j.jsx)("option",{value:"5",children:"Chelsey Dietrich"}),Object(j.jsx)("option",{value:"4",children:"Patricia Lebsack"}),Object(j.jsx)("option",{value:"3",children:"Clementine Bauch"}),Object(j.jsx)("option",{value:"2",children:"Ervin Howell"}),Object(j.jsx)("option",{value:"1",children:"Leanne Graham"})]})]})})]})}),v=function(e){var t=e.propsMessage,n=Object(c.useState)([]),r=Object(u.a)(n,2),s=r[0],o=r[1],a=Object(c.useState)([]),p=Object(u.a)(a,2),d=p[0],f=p[1],b=Object(c.useState)([]),v=Object(u.a)(b,2),x=v[0],m=v[1],g=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts").then((function(e){return e.json()}));case 3:t=e.sent,o(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),console.log("GET request failed!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),y=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/comments").then((function(e){return e.json()}));case 3:t=e.sent,f(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),console.log("GET request failed!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()}));case 3:t=e.sent,m(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),console.log("GET request failed!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){g(),y(),k(),console.log("".concat(t," HomePage"))}),[]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{id:"mainTitle",children:"Home Page"}),Object(j.jsx)(O,{propsMessage:t,setPosts:o}),Object(j.jsx)("div",{id:"posts",children:s&&s.map((function(e){var n=d.filter((function(t){return t.postId===e.id})),c=x.filter((function(t){return t.id===e.userId}));return Object(j.jsx)(h,{title:e.title,body:e.body,id:e.id,comments:n,user:c,propsMessage:t},e.id)}))})]})},x=(n(31),function(e){var t,n=e.propsMessage,r=Object(c.useState)([]),s=Object(u.a)(r,2),a=s[0],p=s[1],h=Object(c.useState)([]),f=Object(u.a)(h,2),b=f[0],O=f[1],v=Object(c.useState)([]),x=Object(u.a)(v,2),m=x[0],g=x[1],y=Object(o.h)().id,k=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/posts/".concat(y)).then((function(e){return e.json()}));case 3:t=e.sent,p(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),console.log("GET request failed!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),w=function(){var e=Object(l.a)(i.a.mark((function e(){var t;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,fetch("https://jsonplaceholder.typicode.com/comments?postId=".concat(y)).then((function(e){return e.json()}));case 3:t=e.sent,O(t),e.next=11;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0),console.log("GET request failed!");case 11:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),E=function(){var e=Object(l.a)(i.a.mark((function e(){var t,n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=Math.ceil(y/10),e.prev=1,e.next=4,fetch("https://jsonplaceholder.typicode.com/users?id=".concat(t)).then((function(e){return e.json()}));case 4:n=e.sent,g(n),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.error(e.t0),console.log("GET request failed!");case 12:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}}();return Object(c.useEffect)((function(){k(),w(),E(),console.log("".concat(n," SinglePagePost"))}),[]),Object(j.jsxs)("div",{className:"singlePagePost",children:[Object(j.jsx)("h3",{id:"titleSP",children:a.title}),Object(j.jsx)("span",{id:"bodySP",children:a.body}),Object(j.jsx)("span",{id:"userNameSP",children:null===(t=m[0])||void 0===t?void 0:t.name}),Object(j.jsx)(d,{comments:b,propsMessage:n})]})}),m="Hello From";var g=function(){return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(o.d,{children:[Object(j.jsx)(o.b,{path:"/",element:Object(j.jsx)(o.a,{replace:!0,to:"/posts"})}),Object(j.jsx)(o.b,{path:"/posts",element:Object(j.jsx)(v,{propsMessage:m})}),Object(j.jsx)(o.b,{path:"/post/:id",element:Object(j.jsx)(x,{propsMessage:m})})]})})};s.a.render(Object(j.jsx)(p.a,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[32,1,2]]]);
//# sourceMappingURL=main.35641088.chunk.js.map