"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9662],{3905:(e,r,n)=>{n.d(r,{Zo:()=>p,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),u=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},p=function(e){var r=u(e.components);return t.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},c=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,g=c["".concat(s,".").concat(d)]||c[d]||m[d]||i;return n?t.createElement(g,o(o({ref:r},p),{},{components:n})):t.createElement(g,o({ref:r},p))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=n[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}c.displayName="MDXCreateElement"},4303:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var t=n(7462),a=(n(7294),n(3905));const i={title:"\xdcbungsaufgabe Polymorphie01"},o=void 0,l={unversionedId:"exercises/polymorphie/polymorphie01",id:"exercises/polymorphie/polymorphie01",title:"\xdcbungsaufgabe Polymorphie01",description:"- Passe die Klasse Vehicle aus \xdcbungsaufgabe Enumerations01 anhand des abgebildeten Klassendiagramms an und erstelle die Klassen Car und Truck",source:"@site/docs/exercises/polymorphie/polymorphie01.md",sourceDirName:"exercises/polymorphie",slug:"/exercises/polymorphie/polymorphie01",permalink:"/programming/docs/exercises/polymorphie/polymorphie01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/polymorphie/polymorphie01.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe Polymorphie01"},sidebar:"tutorialSidebar",previous:{title:"Polymorphie",permalink:"/programming/docs/exercises/polymorphie/"},next:{title:"\xdcbungsaufgabe Polymorphie02",permalink:"/programming/docs/exercises/polymorphie/polymorphie02"}},s={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Car",id:"hinweise-zur-klasse-car",level:2},{value:"Hinweise zur Klasse Truck",id:"hinweise-zur-klasse-truck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:u};function m(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},p,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,a.kt)("inlineCode",{parentName:"li"},"Vehicle")," aus \xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"/programming/docs/exercises/enumerations/enumerations01"},"Enumerations01")," anhand des abgebildeten Klassendiagramms an und erstelle die Klassen ",(0,a.kt)("inlineCode",{parentName:"li"},"Car")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"Truck")),(0,a.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,a.kt)("a",{parentName:"li",href:"/programming/docs/exercises/enumerations/enumerations01"},"Enumerations01")," so an, dass keine Fahrzeuge, sondern Autos und Lastwagen erzeugt und ausgegeben werden")),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170883749-a72e4bd8-4059-432e-a648-f5f6bdbfc6ef.png",alt:"image"})),(0,a.kt)("h2",{id:"hinweise-zur-klasse-car"},"Hinweise zur Klasse Car"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void doATurboBoost()")," soll die Geschwindigkeit verdoppeln"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,a.kt)("h2",{id:"hinweise-zur-klasse-truck"},"Hinweise zur Klasse Truck"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void transform()")," soll das Attribut isTransformed invertieren"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,a.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"Anzahl Fahrzeuge: 0\nAnzahl Fahrzeuge: 3\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\nPorsche 911 beschleunigt auf 50 km/h\nMAN TGX verwandelt sich in einen Autobot\nPorsche 911 macht einen TurboBoost und beschleunigt auf 100 km/h\nMAN TGX verwandelt sich in einen Lastwagen zur\xfcck \n")))}m.isMDXComponent=!0}}]);