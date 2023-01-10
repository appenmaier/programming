"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2977],{3905:(e,r,a)=>{a.d(r,{Zo:()=>p,kt:()=>c});var n=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function i(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?i(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function o(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var s=n.createContext({}),m=function(e){var r=n.useContext(s),a=r;return e&&(a="function"==typeof e?e(r):l(l({},r),e)),a},p=function(e){var r=m(e.components);return n.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,i=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=m(a),c=t,u=d["".concat(s,".").concat(c)]||d[c]||g[c]||i;return a?n.createElement(u,l(l({ref:r},p),{},{components:a})):n.createElement(u,l({ref:r},p))}));function c(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=d;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:t,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}d.displayName="MDXCreateElement"},3385:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>s,contentTitle:()=>l,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),t=(a(7294),a(3905));const i={title:"Tiefgarage",description:"",tags:["oo","inheritance","polymorphy"]},l=void 0,o={unversionedId:"additional-material/exam-exercises1/parking-garage",id:"additional-material/exam-exercises1/parking-garage",title:"Tiefgarage",description:"",source:"@site/docs/additional-material/exam-exercises1/parking-garage.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/parking-garage",permalink:"/programming/additional-material/exam-exercises1/parking-garage",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/additional-material/exam-exercises1/parking-garage.md",tags:[{label:"oo",permalink:"/programming/tags/oo"},{label:"inheritance",permalink:"/programming/tags/inheritance"},{label:"polymorphy",permalink:"/programming/tags/polymorphy"}],version:"current",frontMatter:{title:"Tiefgarage",description:"",tags:["oo","inheritance","polymorphy"]},sidebar:"additionalMaterialSidebar",previous:{title:"Geschenkesack",permalink:"/programming/additional-material/exam-exercises1/gift-bag"},next:{title:"Geometrische Form",permalink:"/programming/additional-material/exam-exercises1/shape"}},s={},m=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse ParkingGarage",id:"hinweise-zur-klasse-parkinggarage",level:2}],p={toc:m};function g(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},p,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209169139-a04aaf76-269a-4216-8e9e-c9e0aa03d61e.png",alt:"image"})),(0,t.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,t.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden")),(0,t.kt)("h2",{id:"hinweise-zur-klasse-parkinggarage"},"Hinweise zur Klasse ParkingGarage"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean parkIn(car: Car, parkingSpotNumber: int)"),' soll das eingehende Fahrzeug auf dem Parkplatz mit der eingehenden Parkplatznummer "parken", falls dieser\nfrei ist. In diesem Fall soll der Wert ',(0,t.kt)("inlineCode",{parentName:"li"},"true")," zur\xfcckgegeben werden, andernfalls der Wert ",(0,t.kt)("inlineCode",{parentName:"li"},"false")),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean parkOut(car: Car)"),' soll das eingehende Auto "ausparken", falls dieses in der Tiefgarage steht. In diesem Fall soll der Wert ',(0,t.kt)("inlineCode",{parentName:"li"},"true")," zur\xfcckgegeben\nwerden, andernfalls der Wert ",(0,t.kt)("inlineCode",{parentName:"li"},"false")),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"int getNextFreeParkingSpotNumber()")," soll die Nummer des n\xe4chsten freien Parkplatzes zur\xfcckgeben")))}g.isMDXComponent=!0}}]);