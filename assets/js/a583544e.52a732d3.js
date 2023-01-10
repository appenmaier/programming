"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6418],{3905:(e,r,n)=>{n.d(r,{Zo:()=>d,kt:()=>u});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),m=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},d=function(e){var r=m(e.components);return t.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=m(n),u=a,g=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return n?t.createElement(g,o(o({ref:r},d),{},{components:n})):t.createElement(g,o({ref:r},d))}));function u(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},6990:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=n(7462),a=(n(7294),n(3905));const i={title:"Tante-Emma-Laden",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","maps"]},o=void 0,l={unversionedId:"additional-material/exam-exercises2/corner-shop",id:"additional-material/exam-exercises2/corner-shop",title:"Tante-Emma-Laden",description:"",source:"@site/docs/additional-material/exam-exercises2/corner-shop.md",sourceDirName:"additional-material/exam-exercises2",slug:"/additional-material/exam-exercises2/corner-shop",permalink:"/programming/additional-material/exam-exercises2/corner-shop",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/additional-material/exam-exercises2/corner-shop.md",tags:[{label:"inheritance",permalink:"/programming/tags/inheritance"},{label:"polymorphy",permalink:"/programming/tags/polymorphy"},{label:"interfaces",permalink:"/programming/tags/interfaces"},{label:"comparators",permalink:"/programming/tags/comparators"},{label:"exceptions",permalink:"/programming/tags/exceptions"},{label:"maps",permalink:"/programming/tags/maps"}],version:"current",frontMatter:{title:"Tante-Emma-Laden",description:"",tags:["inheritance","polymorphy","interfaces","comparators","exceptions","maps"]},sidebar:"additionalMaterialSidebar",previous:{title:"Klausuraufgaben Programmierung 2",permalink:"/programming/additional-material/exam-exercises2/"},next:{title:"W\xf6rterbuch",permalink:"/programming/additional-material/exam-exercises2/dictionary"}},s={},m=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweis zur Klasse Goods",id:"hinweis-zur-klasse-goods",level:2},{value:"Hinweise zur Klasse CornerShop",id:"hinweise-zur-klasse-cornershop",level:2}],d={toc:m};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},d,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse und/oder eine Testklasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209169368-d2ffc19d-d2ab-4472-858c-2b7d4f722f3b.png",alt:"image"})),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,a.kt)("h2",{id:"hinweis-zur-klasse-goods"},"Hinweis zur Klasse Goods"),(0,a.kt)("p",null,"Die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compareTo(other: Goods)")," soll so implementiert werden, dass damit Waren aufsteigend nach ihrer Beschreibung sortiert werden k\xf6nnen."),(0,a.kt)("h2",{id:"hinweise-zur-klasse-cornershop"},"Hinweise zur Klasse CornerShop"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"int getAmountByDescription(description: String)")," soll die Anzahl Waren zur eingehenden Warenbeschreibung zur\xfcckgeben"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void buyGoods(goods: Goods, amount: int)")," soll die eingehende Ware im Lager (",(0,a.kt)("inlineCode",{parentName:"li"},"store"),") um die eingehende Anzahl erh\xf6hen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void sellGoods(goods: Goods, amount: int)")," soll die eingehende Ware im Lager (",(0,a.kt)("inlineCode",{parentName:"li"},"store"),") um die eingehende Anzahl reduzieren. F\xfcr den Fall, dass keine\nausreichende Anzahl an Waren vorhanden ist, soll die Ausnahme ",(0,a.kt)("inlineCode",{parentName:"li"},"OutOfStockException")," ausgel\xf6st werden")))}p.isMDXComponent=!0}}]);