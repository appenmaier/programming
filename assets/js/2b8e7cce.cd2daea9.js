"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[5139],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>b});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=u(r),b=a,p=d["".concat(s,".").concat(b)]||d[b]||m[b]||i;return r?n.createElement(p,c(c({ref:t},l),{},{components:r})):n.createElement(p,c({ref:t},l))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,c=new Array(i);c[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:a,c[1]=o;for(var u=2;u<i;u++)c[u]=r[u];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),i=r(2802),c=r(9960),o=r(3919),s=r(5999);const u="cardContainer_fWXF",l="cardTitle_rnsV",m="cardDescription_PWke";function d(e){let{href:t,children:r}=e;return n.createElement(c.Z,{href:t,className:(0,a.Z)("card padding--lg",u)},r)}function b(e){let{href:t,icon:r,title:i,description:c}=e;return n.createElement(d,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",l),title:i},r," ",i),c&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:c},c))}function p(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(b,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(b,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const c=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},c.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(g,{item:e})))))}},8133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>c,metadata:()=>s,toc:()=>l});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const c={title:"Datenobjekte",description:"",sidebar_position:30},o=void 0,s={unversionedId:"exercises/data-objects/data-objects",id:"exercises/data-objects/data-objects",title:"Datenobjekte",description:"",source:"@site/docs/exercises/data-objects/data-objects.md",sourceDirName:"exercises/data-objects",slug:"/exercises/data-objects/",permalink:"/programming/docs/exercises/data-objects/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/data-objects/data-objects.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Datenobjekte",description:"",sidebar_position:30},sidebar:"tutorialSidebar",previous:{title:"\xdcbungsaufgabe ClassStructure01",permalink:"/programming/docs/exercises/class-structure/class-structure01"},next:{title:"\xdcbungsaufgabe DataObjects01",permalink:"/programming/docs/exercises/data-objects/data-objects01"}},u={},l=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben der Uni Koblenz-Landau",id:"\xfcbungsaufgaben-der-uni-koblenz-landau",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}],m={toc:l};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben-der-uni-koblenz-landau"},"\xdcbungsaufgaben der Uni Koblenz-Landau"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"A1"))),(0,a.kt)("h2",{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm"},"\xdcbungsaufgaben der Technischen Hochschule Ulm"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen04")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen05")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen02")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Variablen03"))))}d.isMDXComponent=!0}}]);