(this["webpackJsonpkeeper-app"]=this["webpackJsonpkeeper-app"]||[]).push([[0],{12:function(e,t,n){e.exports=n(19)},19:function(e,t,n){"use strict";n.r(t);var a=n(1),l=n.n(a),r=n(8),c=n.n(r),o=n(10),i=n(2),u=n(11),m=n(9);var f=function(){return l.a.createElement("header",null,l.a.createElement("h1",null,"RemindWrite ",l.a.createElement(u.a,{icon:m.a})))};var d=function(){var e=(new Date).getFullYear();return l.a.createElement("footer",null,l.a.createElement("p",null,"Developed by Ali Hassan Copyright \xa9 ",e))};var E=function(e){var t=Object(a.useState)(null),n=Object(i.a)(t,2),r=n[0],c=n[1];return Object(a.useEffect)((function(){if(e.image){var t=new Image;t.src=e.image,t.onload=function(){var e=document.createElement("canvas"),n=t.width,a=t.height;n>200&&(a*=200/n,n=200),a>200&&(n*=200/a,a=200),e.width=n,e.height=a,e.getContext("2d").drawImage(t,0,0,n,a),c(e.toDataURL("image/jpeg"))}}}),[e.image]),l.a.createElement("div",{className:"note"},l.a.createElement("h1",null,e.title),l.a.createElement("p",null,e.content),r&&l.a.createElement("img",{src:r,alt:"Note Image"}),l.a.createElement("button",{onClick:function(){e.onDelete(e.id)},style:{boxShadow:"none"}},"DELETE"))},g=n(5),p=n(6);var s=function(e){var t=Object(a.useState)({title:"",content:"",image:null}),n=Object(i.a)(t,2),r=n[0],c=n[1];function o(e){var t=e.target,n=t.name,a=t.value;c((function(e){return Object(p.a)({},e,Object(g.a)({},n,a))}))}return l.a.createElement("div",null,l.a.createElement("form",null,l.a.createElement("input",{name:"title",onChange:o,value:r.title,placeholder:"Title"}),l.a.createElement("textarea",{onChange:o,name:"content",value:r.content,placeholder:"Take a note...",rows:"3"}),l.a.createElement("input",{type:"file",onChange:function(e){var t=e.target.files[0],n=new FileReader;n.onloadend=function(){c((function(e){return Object(p.a)({},e,{image:n.result})}))},t&&n.readAsDataURL(t)}}),l.a.createElement("button",{onClick:function(t){e.onAdd(r),c({title:"",content:"",image:null}),t.preventDefault()}},"Add")))};var v=function(){var e=Object(a.useState)([]),t=Object(i.a)(e,2),n=t[0],r=t[1];function c(e){r((function(t){return t.filter((function(t,n){return n!==e}))}))}return l.a.createElement("div",null,l.a.createElement(f,null),l.a.createElement(s,{onAdd:function(e){r((function(t){return[].concat(Object(o.a)(t),[e])}))}}),n.map((function(e,t){return l.a.createElement(E,{key:t,id:t,title:e.title,content:e.content,image:e.image,onDelete:c})})),l.a.createElement(d,null))};c.a.render(l.a.createElement(v,null),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.68ba370c.chunk.js.map