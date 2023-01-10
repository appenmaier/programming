"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9344],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>c});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function l(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function s(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=t.createContext({}),m=function(e){var r=t.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):l(l({},r),e)),n},p=function(e){var r=m(e.components);return t.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},u=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=m(n),c=a,g=u["".concat(o,".").concat(c)]||u[c]||d[c]||i;return n?t.createElement(g,l(l({ref:r},p),{},{components:n})):t.createElement(g,l({ref:r},p))}));function c(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var s={};for(var o in r)hasOwnProperty.call(r,o)&&(s[o]=r[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var m=2;m<i;m++)l[m]=n[m];return t.createElement.apply(null,l)}return t.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2593:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var t=n(7462),a=(n(7294),n(3905));const i={title:"Geometrische Form",description:"",tags:["oo","inheritance","polymorphy","io-streams"]},l=void 0,s={unversionedId:"additional-material/exam-exercises1/shape",id:"additional-material/exam-exercises1/shape",title:"Geometrische Form",description:"",source:"@site/docs/additional-material/exam-exercises1/shape.md",sourceDirName:"additional-material/exam-exercises1",slug:"/additional-material/exam-exercises1/shape",permalink:"/programming/additional-material/exam-exercises1/shape",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/additional-material/exam-exercises1/shape.md",tags:[{label:"oo",permalink:"/programming/tags/oo"},{label:"inheritance",permalink:"/programming/tags/inheritance"},{label:"polymorphy",permalink:"/programming/tags/polymorphy"},{label:"io-streams",permalink:"/programming/tags/io-streams"}],version:"current",frontMatter:{title:"Geometrische Form",description:"",tags:["oo","inheritance","polymorphy","io-streams"]},sidebar:"additionalMaterialSidebar",previous:{title:"Tiefgarage",permalink:"/programming/additional-material/exam-exercises1/parking-garage"},next:{title:"Klausuraufgaben Programmierung 2",permalink:"/programming/additional-material/exam-exercises2/"}},o={},m=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Allgemeine Hinweise",id:"allgemeine-hinweise",level:2},{value:"Hinweise zur Klasse Shape",id:"hinweise-zur-klasse-shape",level:2},{value:"Hinweise zur Klasse Circle",id:"hinweise-zur-klasse-circle",level:2},{value:"Hinweise zur Klasse Rectangle",id:"hinweise-zur-klasse-rectangle",level:2},{value:"Hinweise zur Klasse ShapeReader",id:"hinweise-zur-klasse-shapereader",level:2}],p={toc:m};function d(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209169202-d76dfb78-8b31-45c7-b7e4-f99cb50aca70.png",alt:"image"})),(0,a.kt)("h2",{id:"allgemeine-hinweise"},"Allgemeine Hinweise"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Aus Gr\xfcnden der \xdcbersicht werden im Klassendiagramm keine Getter und Object-Methoden dargestellt"),(0,a.kt)("li",{parentName:"ul"},"So nicht anders angegeben, sollen Konstruktoren, Setter, Getter sowie die Object-Methoden wie gewohnt implementiert werden"),(0,a.kt)("li",{parentName:"ul"},"Die statische Konstante ",(0,a.kt)("inlineCode",{parentName:"li"},"PI")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"Math")," stellt die Kreiszahl Pi dar")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-shape"},"Hinweise zur Klasse Shape"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"double getArea()")," soll den Wert ",(0,a.kt)("em",{parentName:"li"},"0")," zur\xfcckgeben"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"double getCircumference()")," soll den Wert ",(0,a.kt)("em",{parentName:"li"},"0")," zur\xfcckgeben")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-circle"},"Hinweise zur Klasse Circle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"double getArea()")," soll den Fl\xe4cheninhalt gem\xe4\xdf der Formel ",(0,a.kt)("em",{parentName:"li"},"Pi ",(0,a.kt)("em",{parentName:"em"}," r ")," r")," berechnen und zur\xfcckgeben"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"double getCircumference()")," soll den Umfang gem\xe4\xdf der Formel ",(0,a.kt)("em",{parentName:"li"},"2 ",(0,a.kt)("em",{parentName:"em"}," Pi ")," r")," berechnen und zur\xfcckgeben")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-rectangle"},"Hinweise zur Klasse Rectangle"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"double getArea()")," soll den Fl\xe4cheninhalt gem\xe4\xdf der Formel ",(0,a.kt)("em",{parentName:"li"},"a * b")," berechnen und zur\xfcckgeben"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"double getCircumference()")," soll den Umfang gem\xe4\xdf der Formel ",(0,a.kt)("em",{parentName:"li"},"2 ",(0,a.kt)("em",{parentName:"em"}," a + 2 ")," b")," berechnen und zur\xfcckgeben")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-shapereader"},"Hinweise zur Klasse ShapeReader"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Konstruktor soll der Formenliste (",(0,a.kt)("inlineCode",{parentName:"li"},"shapes"),") alle Formen der eingehenden Formenliste hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"ArrayList<Circle> getCircles()")," soll alle Kreise der Formenliste (",(0,a.kt)("inlineCode",{parentName:"li"},"shapes"),") zur\xfcckgeben"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"ArrayList<Shape> getShapesWithMinArea(minArea: double)")," soll alle Formen der Formenliste (",(0,a.kt)("inlineCode",{parentName:"li"},"shapes"),") zur\xfcckgeben, die mindestens den eingehenden\nFl\xe4cheninhalt aufweisen")))}d.isMDXComponent=!0}}]);