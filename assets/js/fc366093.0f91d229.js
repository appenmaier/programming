"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2259],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>f});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),p=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),m=p(t),f=o,b=m["".concat(c,".").concat(f)]||m[f]||u[f]||a;return t?n.createElement(b,s(s({ref:r},l),{},{components:t})):n.createElement(b,s({ref:r},l))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,s=new Array(a);s[0]=m;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=t[p];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},5640:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var n=t(7462),o=(t(7294),t(3905));const a={title:"\xdcbungsaufgabe Operators03"},s=void 0,i={unversionedId:"exercises/operators/operators03",id:"exercises/operators/operators03",title:"\xdcbungsaufgabe Operators03",description:"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?",source:"@site/docs/exercises/operators/operators03.md",sourceDirName:"exercises/operators",slug:"/exercises/operators/operators03",permalink:"/programming/docs/exercises/operators/operators03",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/operators/operators03.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe Operators03"},sidebar:"exercisesSidebar",previous:{title:"\xdcbungsaufgabe Operators02",permalink:"/programming/docs/exercises/operators/operators02"},next:{title:"Konsolenanwendungen",permalink:"/programming/docs/exercises/console-applications/"}},c={},p=[{value:"Coding",id:"coding",level:2}],l={toc:p};function u(e){let{components:r,...t}=e;return(0,o.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"),(0,o.kt)("h2",{id:"coding"},"Coding"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'byte a = 116, b = 59;\nbyte c, d, e, f;\n\nc = (byte) (a & b);\nd = (byte) (a | b);\ne = (byte) (a ^ b);\nf = (byte) (~a);\n\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("e: " + e);\nSystem.out.println("f: " + f);\n')))}u.isMDXComponent=!0}}]);