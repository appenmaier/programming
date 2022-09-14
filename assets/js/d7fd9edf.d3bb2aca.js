"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[565],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>p});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=c(r),p=a,g=f["".concat(l,".").concat(p)]||f[p]||m[p]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>v});var n=r(7294),a=r(6010),i=r(2802),o=r(9960),s=r(3919),l=r(5999);const c="cardContainer_fWXF",u="cardTitle_rnsV",m="cardDescription_PWke";function f(e){let{href:t,children:r}=e;return n.createElement(o.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},r)}function p(e){let{href:t,icon:r,title:i,description:o}=e;return n.createElement(f,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:i},r," ",i),o&&n.createElement("p",{className:(0,a.Z)("text--truncate",m),title:o},o))}function g(e){let{item:t}=e;const r=(0,i.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,i.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function b(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(g,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function h(e){let{className:t}=e;const r=(0,i.jA)();return n.createElement(v,{items:r.items,className:t})}function v(e){const{items:t,className:r}=e;if(!t)return n.createElement(h,e);const o=(0,i.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},o.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(b,{item:e})))))}},507:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>f,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),i=r(2991);const o={title:"Darstellung von Klassen und Programmabl\xe4ufen",description:"",sidebar_position:110},s=void 0,l={unversionedId:"exercises/uml/uml",id:"exercises/uml/uml",title:"Darstellung von Klassen und Programmabl\xe4ufen",description:"",source:"@site/docs/exercises/uml/uml.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/",permalink:"/programming/docs/exercises/uml/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/uml.md",tags:[],version:"current",sidebarPosition:110,frontMatter:{title:"Darstellung von Klassen und Programmabl\xe4ufen",description:"",sidebar_position:110},sidebar:"tutorialSidebar",previous:{title:"\xdcbungsaufgabe Enumerations01",permalink:"/programming/docs/exercises/enumerations/enumerations01"},next:{title:"\xdcbungsaufgabe ActivityDiagrams01",permalink:"/programming/docs/exercises/uml/activity-diagrams01"}},c={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],m={toc:u};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,a.kt)(i.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_bildr%C3%B6hre_mit_fernsehger%C3%A4t_verbinden"},"I-6-1.5.1")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_radios_mit_einer_1n_assoziation_auf_das_schiff_aufnehmen"},"I-6-1.5.2")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_aufz%C3%A4hlung_f%C3%BCr_s%C3%BC%C3%9Fwaren"},"I-8-1.2.1")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_zuf%C3%A4llige_s%C3%BC%C3%9Fwaren_liefern"},"I-8-1.2.2")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/interface_enum_sealed_classes_record.html#_s%C3%BC%C3%9Fwaren_mit_suchtfaktor_auszeichnen"},"I-8-1.2.3"))))}f.isMDXComponent=!0}}]);