(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[0],{17:function(e,n,t){},18:function(e,n,t){},19:function(e,n,t){},21:function(e,n,t){},22:function(e,n,t){},23:function(e,n,t){"use strict";t.r(n);var c=t(7),a=t.n(c),i=(t(17),t(8)),s=t(2),o=t(1),r=(t(18),[{id:1,emoji:"\ud83d\ude0a",name:"Smiling Face with Smiling Eyes",meaning:"\u201cA yellow face with smiling eyes and a broad, closed smile turning up to rosy cheeks. Often expresses genuine happiness and warm, positive feelings."},{id:2,emoji:"\ud83d\ude4f",name:"Person With Folded Hands",meaning:"Two hands pressed together. Is currently very introverted, saying a prayer, or hoping for enlightenment. Is also used as a \u201chigh five\u201d or to say thank you."}]),l=(t(19),t(0)),j=function(e){return Object(l.jsx)("div",{className:"col-lg-3 col-md-6",children:Object(l.jsxs)("div",{className:"term",children:[Object(l.jsxs)("dt",{children:[Object(l.jsx)("span",{className:"emoji",role:"img","aria-label":"Tense Biceps",children:e.emoji}),Object(l.jsx)("span",{children:e.name})]}),Object(l.jsx)("dd",{children:e.meaning})]})})},m=t(5),d=(t(21),t(22),function(e){var n=Object(o.useState)(""),t=Object(s.a)(n,2),c=t[0],a=t[1],i=Object(o.useState)(""),r=Object(s.a)(i,2),j=r[0],m=r[1],d=Object(o.useState)(""),u=Object(s.a)(d,2),b=u[0],h=u[1];return Object(l.jsxs)("form",{onSubmit:function(n){n.preventDefault();var t={emoji:c,name:j,meaning:b};e.onSaveEmojiData(t),a(""),m(""),h("")},children:[Object(l.jsxs)("div",{className:"row g-3",children:[Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsx)("input",{required:!0,type:"text",className:"form-control",placeholder:"Emoji Icon",onChange:function(e){a(e.target.value)},value:c})}),Object(l.jsx)("div",{className:"col-sm-6",children:Object(l.jsx)("input",{required:!0,type:"text",className:"form-control",placeholder:"Emoji Name",onChange:function(e){m(e.target.value)},value:j})})]}),Object(l.jsx)("div",{className:"mb-3",children:Object(l.jsx)("textarea",{required:!0,className:"form-control",placeholder:"Emoji Meaning",onChange:function(e){h(e.target.value)},value:b})}),Object(l.jsx)("button",{onClick:e.onCancel,type:"button",className:"btn btn-light",children:"Cancel"}),Object(l.jsx)("button",{type:"submit",className:"btn btn-success",children:"Add Emoji"})]})}),u=function(e){var n=Object(o.useState)(!1),t=Object(s.a)(n,2),c=t[0],a=t[1];return Object(l.jsxs)("div",{className:"container new-emoji",children:[Object(l.jsx)("div",{className:"text-center",children:!c&&Object(l.jsx)("button",{onClick:function(){a(!0)},className:"btn btn-light addBtn",children:"Add New Emoji"})}),c&&Object(l.jsx)(d,{onSaveEmojiData:function(n){var t=Object(m.a)(Object(m.a)({},n),{},{id:Math.random().toString()});e.onAddEmoji(t),a(!1)},onCancel:function(){a(!1)}})]})};var b=function(){var e=Object(o.useState)(r),n=Object(s.a)(e,2),t=n[0],c=n[1];return Object(l.jsxs)("div",{className:"container",children:[Object(l.jsx)(u,{onAddEmoji:function(e){c((function(n){return[e].concat(Object(i.a)(n))}))}}),Object(l.jsx)("div",{className:"row",children:t.map((function(e){return Object(l.jsx)(j,{emoji:e.emoji,name:e.name,meaning:e.meaning},e.id)}))}),Object(l.jsx)("center",{children:Object(l.jsx)("small",{children:"copyright@2022"})})]})};a.a.createRoot(document.getElementById("root")).render(Object(l.jsx)(b,{}))}},[[23,1,2]]]);
//# sourceMappingURL=main.52fd2b64.chunk.js.map