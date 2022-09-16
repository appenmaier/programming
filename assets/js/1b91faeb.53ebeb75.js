"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4705],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,s=e.originalType,l=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),d=u(n),c=i,g=d["".concat(l,".").concat(c)]||d[c]||p[c]||s;return n?r.createElement(g,a(a({ref:t},m),{},{components:n})):r.createElement(g,a({ref:t},m))}));function c(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var s=n.length,a=new Array(s);a[0]=d;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,a[1]=o;for(var u=2;u<s;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},5489:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const s={title:"\xdcbungsaufgabe UnitTests03"},a=void 0,o={unversionedId:"exercises/unit-tests/unit-tests03",id:"exercises/unit-tests/unit-tests03",title:"\xdcbungsaufgabe UnitTests03",description:"Erstelle die Klasse TelephoneBookTest anhand des abgebildeten Klassendiagramms.",source:"@site/docs/exercises/unit-tests/unit-tests03.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests03",permalink:"/programming/docs/exercises/unit-tests/unit-tests03",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/unit-tests/unit-tests03.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe UnitTests03"},sidebar:"exercisesSidebar",previous:{title:"\xdcbungsaufgabe UnitTest02",permalink:"/programming/docs/exercises/unit-tests/unit-tests02"}},l={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse <code>TelephoneBookTest</code>",id:"hinweise-zur-klasse-telephonebooktest",level:2},{value:"Hinweis",id:"hinweis",level:2}],m={toc:u};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Erstelle die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"TelephoneBookTest")," anhand des abgebildeten Klassendiagramms."),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/181770524-bef4ba8e-a5cd-4d4a-8f4b-9c022c105650.png",alt:"image"})),(0,i.kt)("h2",{id:"hinweise-zur-klasse-telephonebooktest"},"Hinweise zur Klasse ",(0,i.kt)("inlineCode",{parentName:"h2"},"TelephoneBookTest")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Lebenszyklus-Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void setUp()")," soll ein Telefonbuch samt dazugeh\xf6riger Eintr\xe4ge erzeugen"),(0,i.kt)("li",{parentName:"ul"},"Die Testmetode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testAddEntry()")," soll pr\xfcfen, ob nach dem Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void addEntry(Person, TelephoneNumber)")," mit einer Person, zu der es bereits einen Eintrag im Telefonbuch gibt, die Telefonnummer aktualisiert wurde"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testGetTelephoneNumberByName1()")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"TelephoneNumber getTelephoneNUmberByName(String)")," mit einem Namen, zu dem es eine entsprechende Person im Telefonbuch gibt, die dazugeh\xf6rige Telefonnummer zur\xfcckgegeben wird "),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testGetTelephoneNumberByName2()")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"TelephoneNumber getTelephoneNUmberByName(String)")," mit einem Namen, zu dem es keine entsprechende Person im Telefonbuch gibt, der Wert ",(0,i.kt)("inlineCode",{parentName:"li"},"null")," zur\xfcckgegeben wird ")),(0,i.kt)("h2",{id:"hinweis"},"Hinweis"),(0,i.kt)("p",null,"Verweden die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"TelephoneBook")," aus \xdcbungsaufgabe ",(0,i.kt)("a",{parentName:"p",href:"/programming/docs/exercises/maps/maps01"},"Maps01"),"."))}p.isMDXComponent=!0}}]);