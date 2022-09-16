"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6901],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),o=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},l=function(e){var t=o(e.components);return n.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,u=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=o(r),d=a,f=p["".concat(u,".").concat(d)]||p[d]||m[d]||c;return r?n.createElement(f,s(s({ref:t},l),{},{components:r})):n.createElement(f,s({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,s=new Array(c);s[0]=p;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var o=2;o<c;o++)s[o]=r[o];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),c=r(2802),s=r(9960),i=r(3919),u=r(5999);const o="cardContainer_fWXF",l="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(s.Z,{href:t,className:(0,a.Z)("card padding--lg",o)},r)}function d(e){let{href:t,icon:r,title:c,description:s}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l),title:c},r," ",c),s&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:s},s))}function f(e){let{item:t}=e;const r=(0,c.Wl)(t);return r?n.createElement(d,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,u.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,c.xz)(t.docId??void 0);return n.createElement(d,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,c.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const s=(0,c.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},s.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},741:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>s,metadata:()=>u,toc:()=>l});var n=r(7462),a=(r(7294),r(3905)),c=r(2991);const s={title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20},i=void 0,u={unversionedId:"exercises/class-structure/class-structure",id:"exercises/class-structure/class-structure",title:"Aufbau einer Java-Klasse",description:"",source:"@site/docs/exercises/class-structure/class-structure.md",sourceDirName:"exercises/class-structure",slug:"/exercises/class-structure/",permalink:"/programming/docs/exercises/class-structure/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/class-structure/class-structure.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Aufbau einer Java-Klasse",description:"",sidebar_position:20},sidebar:"exercisesSidebar",previous:{title:"Programmieren",permalink:"/programming/docs/exercises/programming/"},next:{title:"\xdcbungsaufgabe ClassStructure01",permalink:"/programming/docs/exercises/class-structure/class-structure01"}},o={},l=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}],m={toc:l};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,a.kt)(c.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/intro.html#_fehlermeldungen_der_ide_kennenlernen"},"I-1-1.2.1"))),(0,a.kt)("h2",{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm"},"\xdcbungsaufgaben der Technischen Hochschule Ulm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen01"))))}p.isMDXComponent=!0}}]);