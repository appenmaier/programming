"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[5655],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var n=t(7294);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=n.createContext({}),c=function(e){var r=n.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):s(s({},r),e)),t},u=function(e){var r=c(e.components);return n.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=c(t),d=i,g=m["".concat(o,".").concat(d)]||m[d]||p[d]||a;return t?n.createElement(g,s(s({ref:r},u),{},{components:t})):n.createElement(g,s({ref:r},u))}));function d(e,r){var t=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=t.length,s=new Array(a);s[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=t[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6158:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7462),i=(t(7294),t(3905));const a={title:"\xdcbungsaufgabe Generics01"},s=void 0,l={unversionedId:"exercises/generics/generics01",id:"exercises/generics/generics01",title:"\xdcbungsaufgabe Generics01",description:"- Erstelle die Klassen Bottle, BeerBottle, WineBottle und Crate anhand des abgebildeten Klassendiagramms",source:"@site/docs/exercises/generics/generics01.md",sourceDirName:"exercises/generics",slug:"/exercises/generics/generics01",permalink:"/programming/docs/exercises/generics/generics01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/generics/generics01.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe Generics01"},sidebar:"exercisesSidebar",previous:{title:"Generische Programmierung",permalink:"/programming/docs/exercises/generics/"},next:{title:"\xdcbungsaufgabe Generics02",permalink:"/programming/docs/exercises/generics/generics02"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse BeerBottle",id:"hinweise-zur-klasse-beerbottle",level:2},{value:"Hinweise zur Klasse Crate",id:"hinweise-zur-klasse-crate",level:2}],u={toc:c};function p(e){let{components:r,...t}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,i.kt)("inlineCode",{parentName:"li"},"Bottle"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"BeerBottle"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"WineBottle")," und ",(0,i.kt)("inlineCode",{parentName:"li"},"Crate")," anhand des abgebildeten Klassendiagramms"),(0,i.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche eine Getr\xe4nkiste sowie mehrere Flaschen erzeugt und die Flaschen in die Getr\xe4nkekiste stellt ")),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/179726347-0d746c34-ca62-4624-baa6-f47f12a8d960.png",alt:"image"})),(0,i.kt)("h2",{id:"hinweise-zur-klasse-beerbottle"},"Hinweise zur Klasse BeerBottle"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void chugALug()"),' soll den Text "Ex und Hopp" auf der Konsole ausgeben')),(0,i.kt)("h2",{id:"hinweise-zur-klasse-crate"},"Hinweise zur Klasse Crate"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void insertBottle(Bottle, int)")," soll eine Flasche in eine der 6 Getr\xe4nkef\xe4cher einf\xfcgen"),(0,i.kt)("li",{parentName:"ul"},"Die Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"Bottle takeBottle(int)")," soll die Flasche des entsprechenden Getr\xe4nkefachs zur\xfcckgeben")))}p.isMDXComponent=!0}}]);