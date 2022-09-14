"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[214],{3905:(e,r,n)=>{n.d(r,{Zo:()=>m,kt:()=>d});var a=n(7294);function t(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){t(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,a,t=function(e,r){if(null==e)return{};var n,a,t={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||(t[n]=e[n]);return t}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(t[n]=e[n])}return t}var o=a.createContext({}),u=function(e){var r=a.useContext(o),n=r;return e&&(n="function"==typeof e?e(r):s(s({},r),e)),n},m=function(e){var r=u(e.components);return a.createElement(o.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},c=a.forwardRef((function(e,r){var n=e.components,t=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=t,g=c["".concat(o,".").concat(d)]||c[d]||p[d]||i;return n?a.createElement(g,s(s({ref:r},m),{},{components:n})):a.createElement(g,s({ref:r},m))}));function d(e,r){var n=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var i=n.length,s=new Array(i);s[0]=c;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4813:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var a=n(7462),t=(n(7294),n(3905));const i={title:"\xdcbungsaufgabe ClassDiagrams04"},s=void 0,l={unversionedId:"exercises/uml/class-diagrams04",id:"exercises/uml/class-diagrams04",title:"\xdcbungsaufgabe ClassDiagrams04",description:"- Erstelle die Klassen Company, Employee und Person anhand des abgebildeten Klassendiagramms",source:"@site/docs/exercises/uml/class-diagrams04.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams04",permalink:"/programming/docs/exercises/uml/class-diagrams04",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/class-diagrams04.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe ClassDiagrams04"},sidebar:"tutorialSidebar",previous:{title:"\xdcbungsaufgabe ClassDiagrams03",permalink:"/programming/docs/exercises/uml/class-diagrams03"},next:{title:"\xdcbungsaufgabe ClassDiagrams05",permalink:"/programming/docs/exercises/uml/class-diagrams05"}},o={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Person",id:"hinweis-zur-klasse-person",level:2},{value:"Hinweise zur Klasse Employee",id:"hinweise-zur-klasse-employee",level:2},{value:"Hinweise zur Klasse Company",id:"hinweise-zur-klasse-company",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],m={toc:u};function p(e){let{components:r,...n}=e;return(0,t.kt)("wrapper",(0,a.Z)({},m,n,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,t.kt)("inlineCode",{parentName:"li"},"Company"),", ",(0,t.kt)("inlineCode",{parentName:"li"},"Employee")," und ",(0,t.kt)("inlineCode",{parentName:"li"},"Person")," anhand des abgebildeten Klassendiagramms"),(0,t.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein Unternehmen mit mehreren Mitarbeitern erzeugt und auf der Konsole ausgibt")),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170922615-9bdc8766-e496-45ef-9134-319291585d65.png",alt:"image"})),(0,t.kt)("h2",{id:"hinweis-zur-klasse-person"},"Hinweis zur Klasse Person"),(0,t.kt)("p",null,"Der Konstruktor soll den Namen initialisieren."),(0,t.kt)("h2",{id:"hinweise-zur-klasse-employee"},"Hinweise zur Klasse Employee"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"String getName()")," soll den Namen des Mitarbeiters zur\xfcckgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,t.kt)("h2",{id:"hinweise-zur-klasse-company"},"Hinweise zur Klasse Company"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Der Konstruktor soll den Namen sowie die Mitarbeiterliste initialisieren"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void addEmployee()")," soll der Mitarbeiterliste einen Mitarbeiter hinzuf\xfcgen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,t.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-markdown"},"Maier GmbH (5 Mitarbeiter)\n1 - Max Schmid - 50000\u20ac\n2 - Hans M\xfcller - 75000\u20ac\n3 - Lisa Meier - 40000\u20ac\n4 - Peter Schneider - 55000\u20ac\n5 - Miriam Albers - 90000\u20ac\n")))}p.isMDXComponent=!0}}]);