(this.webpackJsonpreact_pagination=this.webpackJsonpreact_pagination||[]).push([[0],{11:function(e,a,c){"use strict";c.r(a);var t=c(4),n=c.n(t),i=c(3),l=c(1);c(9);function r(e,a){for(var c=[],t=e;t<=a;t+=1)c.push(t);return c}var s=c(0),o=function(e){var a=e.total,c=e.perPage,t=e.currentPage,n=e.onPageChange,i=Math.ceil(a/c),l=r(1,i),o=1===t,j=i===t;return Object(s.jsxs)("ul",{className:"pagination",children:[Object(s.jsx)("li",{className:"page-item ".concat(o&&"disabled"),children:Object(s.jsx)("a",{"data-cy":"prevLink",className:"page-link",href:"#prev","aria-disabled":o,onClick:function(){1!==t&&n(t-1)},children:"\xab"})}),l.map((function(e){return Object(s.jsx)("li",{className:"page-item ".concat(e===t&&"active"),children:Object(s.jsx)("a",{"data-cy":"pageLink",className:"page-link",href:"#".concat(e),onClick:function(){n(e)},children:e})})})),Object(s.jsx)("li",{className:"page-item ".concat(j&&"disabled"),children:Object(s.jsx)("a",{"data-cy":"nextLink",className:"page-link",href:"#next","aria-disabled":j,onClick:function(){t!==i&&n(t+1)},children:"\xbb"})})]})},j=function(){var e=Object(l.useState)(1),a=Object(i.a)(e,2),c=a[0],t=a[1],n=Object(l.useState)(5),j=Object(i.a)(n,2),d=j[0],u=j[1],b=c*d-d+1,h=Math.ceil(42/d)===c?42:c*d,p=r(b,h);return Object(s.jsxs)("div",{className:"container",children:[Object(s.jsx)("h1",{children:"Items with Pagination"}),Object(s.jsx)("p",{className:"lead","data-cy":"info",children:"Page ".concat(c," (items ").concat(b," - ").concat(h," of ").concat(42,")")}),Object(s.jsxs)("div",{className:"form-group row",children:[Object(s.jsx)("div",{className:"col-3 col-sm-2 col-xl-1",children:Object(s.jsxs)("select",{"data-cy":"perPageSelector",id:"perPageSelector",className:"form-control",defaultValue:5,onChange:function(e){u(Number(e.target.value)),t(1)},children:[Object(s.jsx)("option",{value:"3",children:"3"}),Object(s.jsx)("option",{value:"5",children:"5"}),Object(s.jsx)("option",{value:"10",children:"10"}),Object(s.jsx)("option",{value:"20",children:"20"})]})}),Object(s.jsx)("label",{htmlFor:"perPageSelector",className:"col-form-label col",children:"items per page"})]}),Object(s.jsx)(o,{total:42,perPage:d,currentPage:c,onPageChange:function(e){t(e)}}),Object(s.jsx)("ul",{children:p.map((function(e){return Object(s.jsx)("li",{"data-cy":"item",children:"Item ".concat(e)},e)}))})]})};n.a.render(Object(s.jsx)(j,{}),document.getElementById("root"))},9:function(e,a,c){}},[[11,1,2]]]);
//# sourceMappingURL=main.7089c401.chunk.js.map