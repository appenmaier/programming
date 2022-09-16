"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8711],{3905:(e,n,r)=>{r.d(n,{Zo:()=>m,kt:()=>d});var t=r(7294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},m=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,g=c["".concat(l,".").concat(d)]||c[d]||u[d]||i;return r?t.createElement(g,s(s({ref:n},m),{},{components:r})):t.createElement(g,s({ref:n},m))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,s=new Array(i);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:a,s[1]=o;for(var p=2;p<i;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},3128:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var t=r(7462),a=(r(7294),r(3905));const i={title:"\xdcbungsaufgabe Maps01"},s=void 0,o={unversionedId:"exercises/maps/maps01",id:"exercises/maps/maps01",title:"\xdcbungsaufgabe Maps01",description:"- Erstelle die Klassen Person, TelephoneNumber und TelephoneBook anhand des abgebildeten Klassendiagramms",source:"@site/docs/exercises/maps/maps01.md",sourceDirName:"exercises/maps",slug:"/exercises/maps/maps01",permalink:"/programming/docs/exercises/maps/maps01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/maps/maps01.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe Maps01"},sidebar:"exercisesSidebar",previous:{title:"Assoziativspeicher (Maps)",permalink:"/programming/docs/exercises/maps/"},next:{title:"Die Java Stream API",permalink:"/programming/docs/exercises/java-stream-api/"}},l={},p=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse TelephoneBook",id:"hinweise-zur-klasse-telephonebook",level:2}],m={toc:p};function u(e){let{components:n,...r}=e;return(0,a.kt)("wrapper",(0,t.Z)({},m,r,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Erstelle die Klassen ",(0,a.kt)("inlineCode",{parentName:"li"},"Person"),", ",(0,a.kt)("inlineCode",{parentName:"li"},"TelephoneNumber")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"TelephoneBook")," anhand des abgebildeten Klassendiagramms"),(0,a.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein Telefonbuch mit mehreren Eintr\xe4gen erzeugt und zu eingegebenen Namen die dazugeh\xf6rigen Telefonnummern auf der Konsole ausgibt")),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/181770698-8ea1cbfc-0a61-4efb-99f4-8c068b3a8ff9.png",alt:"image"})),(0,a.kt)("h2",{id:"hinweise-zur-klasse-telephonebook"},"Hinweise zur Klasse TelephoneBook"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addEntry(Person, TelephoneNumber)")," soll einen Eintrag im Telefonbuch anlegen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"TelephoneNumber getTelephoneNumberByName(String)")," soll die Telefonnummer zum eingehenden Namen zur\xfcckgeben")))}u.isMDXComponent=!0}}]);