"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[454],{3905:(e,r,a)=>{a.d(r,{Zo:()=>c,kt:()=>p});var n=a(7294);function t(e,r,a){return r in e?Object.defineProperty(e,r,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[r]=a,e}function s(e,r){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var r=1;r<arguments.length;r++){var a=null!=arguments[r]?arguments[r]:{};r%2?s(Object(a),!0).forEach((function(r){t(e,r,a[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):s(Object(a)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(a,r))}))}return e}function l(e,r){if(null==e)return{};var a,n,t=function(e,r){if(null==e)return{};var a,n,t={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||(t[a]=e[a]);return t}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)a=s[n],r.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var o=n.createContext({}),u=function(e){var r=n.useContext(o),a=r;return e&&(a="function"==typeof e?e(r):i(i({},r),e)),a},c=function(e){var r=u(e.components);return n.createElement(o.Provider,{value:r},e.children)},d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var a=e.components,t=e.mdxType,s=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(a),p=t,g=m["".concat(o,".").concat(p)]||m[p]||d[p]||s;return a?n.createElement(g,i(i({ref:r},c),{},{components:a})):n.createElement(g,i({ref:r},c))}));function p(e,r){var a=arguments,t=r&&r.mdxType;if("string"==typeof e||t){var s=a.length,i=new Array(s);i[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l.mdxType="string"==typeof e?e:t,i[1]=l;for(var u=2;u<s;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},3764:(e,r,a)=>{a.r(r),a.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var n=a(7462),t=(a(7294),a(3905));const s={title:"\xdcbungsaufgabe ClassDiagrams05"},i=void 0,l={unversionedId:"exercises/uml/class-diagrams05",id:"exercises/uml/class-diagrams05",title:"\xdcbungsaufgabe ClassDiagrams05",description:"- Erstelle die Aufz\xe4hlungen SkatCardColor und SkatCardValue sowie die Klassen SkatCard und SkatCardDeck anhand des abgebildeten Klassendiagramms",source:"@site/docs/exercises/uml/class-diagrams05.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams05",permalink:"/programming/docs/exercises/uml/class-diagrams05",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/class-diagrams05.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe ClassDiagrams05"},sidebar:"exercisesSidebar",previous:{title:"\xdcbungsaufgabe ClassDiagrams04",permalink:"/programming/docs/exercises/uml/class-diagrams04"},next:{title:"Polymorphie",permalink:"/programming/docs/exercises/polymorphie/"}},o={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse SkatCardDeck",id:"hinweise-zur-klasse-skatcarddeck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}],c={toc:u};function d(e){let{components:r,...a}=e;return(0,t.kt)("wrapper",(0,n.Z)({},c,a,{components:r,mdxType:"MDXLayout"}),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Erstelle die Aufz\xe4hlungen ",(0,t.kt)("inlineCode",{parentName:"li"},"SkatCardColor")," und ",(0,t.kt)("inlineCode",{parentName:"li"},"SkatCardValue")," sowie die Klassen ",(0,t.kt)("inlineCode",{parentName:"li"},"SkatCard")," und ",(0,t.kt)("inlineCode",{parentName:"li"},"SkatCardDeck")," anhand des abgebildeten Klassendiagramms"),(0,t.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein Skatblatt erzeugt, mischt und auf der Konsole ausgibt")),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177834439-8e42e2eb-f97c-4ad5-9c44-4f1dcf8dbddc.png",alt:"image"})),(0,t.kt)("h2",{id:"hinweise-zur-klasse-skatcarddeck"},"Hinweise zur Klasse SkatCardDeck"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Der Konstruktor soll ein Skatblatt, bestehend aus 32 Karten, erzeugen"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void shuffleSkatCards()")," soll das Skatblatt mischen")),(0,t.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-markdown"},"Kreuz K\xf6nig\nPik 10\nKreuz 9\nPik 9\nKreuz Bube\nPik Ass\nHerz Bube\nKaro Bube\nPik 8\nKaro Dame\n\u2026\n")),(0,t.kt)("h2",{id:"hinweis"},"Hinweis"),(0,t.kt)("p",null,"Die statische Methode ",(0,t.kt)("inlineCode",{parentName:"p"},"T[] values()")," einer Aufz\xe4hlung gibt alle Aufz\xe4hlungskonstanten der Aufz\xe4hlung als Feld zur\xfcck."))}d.isMDXComponent=!0}}]);