"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2223],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=c(r),g=a,f=m["".concat(l,".").concat(g)]||m[g]||p[g]||o;return r?n.createElement(f,i(i({ref:t},u),{},{components:r})):n.createElement(f,i({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>y});var n=r(7294),a=r(6010),o=r(2802),i=r(9960),s=r(3919),l=r(5999);const c="cardContainer_fWXF",u="cardTitle_rnsV",p="cardDescription_PWke";function m(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,a.Z)("card padding--lg",c)},r)}function g(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(m,{href:t},n.createElement("h2",{className:(0,a.Z)("text--truncate",u),title:o},r," ",o),i&&n.createElement("p",{className:(0,a.Z)("text--truncate",p),title:i},i))}function f(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(g,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function b(e){let{item:t}=e;const r=(0,s.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",a=(0,o.xz)(t.docId??void 0);return n.createElement(g,{href:t.href,icon:r,title:t.label,description:null==a?void 0:a.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(b,{item:t});case"category":return n.createElement(f,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function d(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(y,{items:r.items,className:t})}function y(e){const{items:t,className:r}=e;if(!t)return n.createElement(d,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,a.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},1522:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(7462),a=(r(7294),r(3905)),o=r(2991);const i={title:"Polymorphie",description:"",sidebar_position:120},s=void 0,l={unversionedId:"exercises/polymorphie/polymorphie",id:"exercises/polymorphie/polymorphie",title:"Polymorphie",description:"",source:"@site/docs/exercises/polymorphie/polymorphie.md",sourceDirName:"exercises/polymorphie",slug:"/exercises/polymorphie/",permalink:"/programming/docs/exercises/polymorphie/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/polymorphie/polymorphie.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"Polymorphie",description:"",sidebar_position:120},sidebar:"exercisesSidebar",previous:{title:"\xdcbungsaufgabe ClassDiagrams05",permalink:"/programming/docs/exercises/uml/class-diagrams05"},next:{title:"\xdcbungsaufgabe Polymorphie01",permalink:"/programming/docs/exercises/polymorphie/polymorphie01"}},c={},u=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],p={toc:u};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,a.kt)(o.Z,{mdxType:"DocCardList"}),(0,a.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_abstraktion_in_elektroger%C3%A4te_%C3%BCber_vererbung_einf%C3%BChren"},"I-6-1.6.1")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_anzahl_eingeschalteter_elektroger%C3%A4te_ermitteln"},"I-6-1.6.2")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_schiff_soll_jedes_elektroger%C3%A4t_aufnehmen"},"I-6-1.6.3")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_feuermelder_geht_nicht_aus_%C3%BCberschreiben_von_methoden"},"I-6-1.6.6")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_tostring_%C3%BCberschreiben"},"I-6-1.6.7")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_aufruf_der_methoden_der_oberklasse"},"I-6-1.6.8")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_urlaub_alle_ger%C3%A4te_ausschalten"},"I-6-1.7.1")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_funktionierende_radios_auf_das_schiff_nehmen"},"I-6-1.6.4")),(0,a.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/oop_classes.html#_gleichwertigkeitstest_mit_pattern_variable_l%C3%B6sen_neu"},"I-6-1.6.5"))))}m.isMDXComponent=!0}}]);