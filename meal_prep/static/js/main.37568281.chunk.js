(this.webpackJsonpmeal_prep=this.webpackJsonpmeal_prep||[]).push([[0],{10:function(t,e,r){},12:function(t,e,r){"use strict";r.r(e);var c=r(2),n=r.n(c),a=r(5),s=r.n(a),o=r(3),i=r(1),u=4,j=9,l=4;function b(t,e,r,c){return{baseQuantity:t,macros:{prots:e,fats:r,carbs:c}}}var d={poulet_cru:b("100g",24,2,0),riz_sec:b("100g",6.7,.5,80),beurre:b("100g",.7,.5,82),huile_olive:b("100ml",0,0,92),coulis_de_tomates:b("100g",1.2,.1,4.5),thon_boite_egoutte:b("100g",8.1,0,27),fromage_blanc_3_2percent:b("100g",5.7,3.2,6.6),fromage_blanc_2_8percent:b("100g",6.7,2.8,4.9),oeuf:b("1unit",6,5,1),beurre_cacahuete:b("100g",29,51,12),lait:b("100ml",3.3,1.6,4.7),flocons_avoine:b("100g",11,8,60),whey:b("100g",75,5.8,7.8),epinards_surgeles:b("100g",3,.5,1.4),courgette:b("1unit",2.3,.7,5.4),pomme:b("1unit",0,0,25),banane:b("1unit",0,1,27)},h={meals:[{name:"main",content:{poulet_cru:100,riz_sec:280,beurre:11,huile_olive:18,thon_boite_egoutte:112/3,oeuf:1}},{name:"peanut butter",content:{beurre_cacahuete:350/3,lait:80/3}},{name:"shaker whey",content:{lait:250,whey:25}},{name:"fruits",content:{pomme:1,banane:1}},{name:"legumes",content:{epinards_surgeles:200,courgette:.5}}],target:Object(o.a)(Object(o.a)({},{nbProtsPerKgOfBodyweight:1.5,fatPercentage:25}),{},{totalCalories:2550})};function O(t,e){var r=d[t];function c(t){var c=e*r.macros[t];return"100g"===r.baseQuantity||"100ml"===r.baseQuantity?c/100:c}return{prots:c("prots"),fats:c("fats"),carbs:c("carbs")}}function f(t){return m(Object.entries(t.content).map((function(t){var e=Object(i.a)(t,2);return O(e[0],e[1])})))}function m(t){return t.reduce((function(t,e){return{prots:t.prots+e.prots,fats:t.fats+e.fats,carbs:t.carbs+e.carbs}}))}function p(t){var e=t.totalCalories,r=t.fatPercentage,c=t.nbProtsPerKgOfBodyweight,n=e*(r/100)/j,a=79*c;return{prots:a,fats:n,carbs:(e-n*j-a*u)/l}}r(10);function g(t,e){var r=Math.pow(10,e);return Math.round(t*r)/r}var x=r(0);function v(t){var e=t.name,r=t.quantity,c=d[e];var n=O(e,r);return Object(x.jsxs)("tr",{children:[Object(x.jsx)("td",{children:function(){var t=g(r,2);switch(c.baseQuantity){case"1unit":return"".concat(t," ").concat(e);case"100g":return"".concat(t,"g de ").concat(e);case"100ml":return"".concat(t,"ml de ").concat(e)}}()}),Object(x.jsx)("td",{children:Math.round(n.prots)}),Object(x.jsx)("td",{children:Math.round(n.fats)}),Object(x.jsx)("td",{children:Math.round(n.carbs)})]})}function _(t){var e=Object.entries(t.content),r=f(t);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)("tr",{className:"meal-title",children:Object(x.jsx)("td",{colSpan:4,children:t.name})}),Object(x.jsxs)("tr",{children:[Object(x.jsx)("th",{children:"ingredient"}),Object(x.jsx)("th",{children:"prots"}),Object(x.jsx)("th",{children:"fats"}),Object(x.jsx)("th",{children:"carbs"})]}),e.map((function(t,e){var r=Object(i.a)(t,2),c=r[0],n=r[1];return n<=0?null:Object(x.jsx)(v,{name:c,quantity:n})})),Object(x.jsxs)("tr",{className:"meal-total",children:[Object(x.jsx)("td",{}),Object(x.jsx)("td",{children:Math.round(r.prots)}),Object(x.jsx)("td",{children:Math.round(r.fats)}),Object(x.jsx)("td",{children:Math.round(r.carbs)})]})]})}function M(t){var e=t.macros;t.targetMacros;function r(t){var r=t.macro,c=e[r];return Object(x.jsx)("td",{children:Math.round(c)})}return Object(x.jsxs)("tr",{className:"total",children:[Object(x.jsx)("td",{children:"all"}),Object(x.jsx)(r,{macro:"prots"}),Object(x.jsx)(r,{macro:"fats"}),Object(x.jsx)(r,{macro:"carbs"})]})}function y(t){var e=t.targetMacros;return Object(x.jsxs)("tr",{className:"target",children:[Object(x.jsx)("td",{children:"target"}),Object(x.jsx)("td",{children:Math.round(e.prots)}),Object(x.jsx)("td",{children:Math.round(e.fats)}),Object(x.jsx)("td",{children:Math.round(e.carbs)})]})}var w=function(){var t=h,e=t.meals,r=t.target,c=function(t){return m(t.map(f))}(e),n=r?p(r):null,a=function(t){var e=t.prots*u,r=t.fats*j,c=t.carbs*l,n=e+r+c;return{calories:n,percentages:{prots:100*e/n,fats:100*r/n,carbs:100*c/n}}}(c),s=a.calories,b=a.percentages,O=function(t,e){var r={};return t.meals.forEach((function(t){Object.entries(t.content).forEach((function(t){var c=Object(i.a)(t,2),n=c[0],a=c[1];r[n]=(r[n]||0)+a*e}))})),Object.entries(r).filter((function(t){return t[1]>0})).map((function(t){var e=Object(i.a)(t,2),r=e[0],c=e[1],n=d[r].baseQuantity,a="100g"===n?"g":"100ml"===n?"ml":"";return"".concat(c).concat(a," ").concat(r)}))}(t,3);return Object(x.jsxs)(x.Fragment,{children:[Object(x.jsxs)("table",{children:[e.map((function(t){return Object(x.jsx)(_,Object(o.a)({},t))})),Object(x.jsx)("tr",{className:"spacer",children:Object(x.jsx)("td",{colSpan:4})}),Object(x.jsx)(M,{macros:c,targetMacros:n}),n?Object(x.jsx)(y,{targetMacros:n}):null]}),Object(x.jsxs)("div",{className:"diagnostic",children:[Object(x.jsxs)("p",{children:["total calories = ",Math.round(s)," calories"]}),Object(x.jsx)("p",{children:"Percentages :"}),Object(x.jsxs)("ul",{children:[Object(x.jsxs)("li",{children:[Math.round(b.prots),"% of prots (",g(c.prots/79,2),"/kg of bodyweight, for ",79,"kg)"]}),Object(x.jsxs)("li",{children:[Math.round(b.fats),"% of fats"]}),Object(x.jsxs)("li",{children:[Math.round(b.carbs),"% of carbs"]})]})]}),Object(x.jsxs)("div",{className:"shopping-list",children:[Object(x.jsxs)("p",{children:["Shopping list pour ",3," jours"]}),Object(x.jsx)("ul",{children:O.map((function(t){return Object(x.jsx)("li",{children:t},t)}))})]})]})};s.a.render(Object(x.jsx)(n.a.StrictMode,{children:Object(x.jsx)(w,{})}),document.getElementById("root"))}},[[12,1,2]]]);
//# sourceMappingURL=main.37568281.chunk.js.map