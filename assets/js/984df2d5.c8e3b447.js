"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[3057],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>f});var n=r(7294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},u=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,s=e.originalType,c=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(r),f=i,d=p["".concat(c,".").concat(f)]||p[f]||m[f]||s;return r?n.createElement(d,a(a({ref:t},u),{},{components:r})):n.createElement(d,a({ref:t},u))}));function f(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=r.length,a=new Array(s);a[0]=p;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var l=2;l<s;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),i=r(6010),s=r(3438),a=r(9960),o=r(3919),c=r(5999);const l="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function p(e){let{href:t,children:r}=e;return n.createElement(a.Z,{href:t,className:(0,i.Z)("card padding--lg",l)},r)}function f(e){let{href:t,icon:r,title:s,description:a}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,i.Z)("text--truncate",u),title:s},r," ",s),a&&n.createElement("p",{className:(0,i.Z)("text--truncate",m),title:a},a))}function d(e){let{item:t}=e;const r=(0,s.Wl)(t);return r?n.createElement(f,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,c.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function g(e){let{item:t}=e;const r=(0,o.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",i=(0,s.xz)(t.docId??void 0);return n.createElement(f,{href:t.href,icon:r,title:t.label,description:null==i?void 0:i.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(g,{item:t});case"category":return n.createElement(d,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,s.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const a=(0,s.MN)(t);return n.createElement("section",{className:(0,i.Z)("row",r)},a.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},8614:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>c,toc:()=>u});var n=r(7462),i=(r(7294),r(3905)),s=r(2991);const a={title:"Komponententests (Unit-Tests)",description:"",sidebar_position:210,tags:["unit-tests"]},o=void 0,c={unversionedId:"exercises/unit-tests/unit-tests",id:"exercises/unit-tests/unit-tests",title:"Komponententests (Unit-Tests)",description:"",source:"@site/docs/exercises/unit-tests/unit-tests.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/",permalink:"/programming/exercises/unit-tests/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/unit-tests/unit-tests.md",tags:[{label:"unit-tests",permalink:"/programming/tags/unit-tests"}],version:"current",sidebarPosition:210,frontMatter:{title:"Komponententests (Unit-Tests)",description:"",sidebar_position:210,tags:["unit-tests"]},sidebar:"exercisesSidebar",previous:{title:"JavaStreamAPI03",permalink:"/programming/exercises/java-stream-api/java-stream-api03"},next:{title:"UnitTests01",permalink:"/programming/exercises/unit-tests/unit-tests01"}},l={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2}],m={toc:u};function p(e){let{components:t,...r}=e;return(0,i.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,i.kt)(s.Z,{mdxType:"DocCardList"}))}p.isMDXComponent=!0}}]);