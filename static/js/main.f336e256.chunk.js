(this["webpackJsonpreact_dynamic-list-of-goods"]=this["webpackJsonpreact_dynamic-list-of-goods"]||[]).push([[0],{11:function(t,n,o){"use strict";o.r(n);var e=o(3),c=o.n(e),i=o(4),r=o(1),s=(o(9),o(0)),u=function(t){var n=t.shownGoods;return Object(s.jsx)("ul",{className:"goods",children:n.map((function(t){return Object(s.jsx)("li",{style:{color:"".concat(t.color)},children:t.name},t.id)}))})};function a(){return fetch("https://mate-academy.github.io/react_dynamic-list-of-goods/goods.json").then((function(t){return t.json()}))}var l=function(){var t=Object(r.useState)([]),n=Object(i.a)(t,2),o=n[0],e=n[1];return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Dynamic list of Goods"}),Object(s.jsx)("button",{type:"button",onClick:function(){a().then((function(t){e(t)}))},children:"all"}),Object(s.jsx)("button",{type:"button",onClick:function(){a().then((function(t){return t.sort((function(t,n){return t.name.localeCompare(n.name)})).slice(0,5)})).then((function(t){e(t)}))},children:"5"}),Object(s.jsx)("button",{type:"button",onClick:function(){a().then((function(t){return t.filter((function(t){return"red"===t.color}))})).then((function(t){e(t)}))},children:"red"}),Object(s.jsx)(u,{shownGoods:o})]})};c.a.render(Object(s.jsx)(l,{}),document.getElementById("root"))},9:function(t,n,o){}},[[11,1,2]]]);
//# sourceMappingURL=main.f336e256.chunk.js.map