"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6165],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=i,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var u=2;u<a;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2115:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"\xdcbungsaufgabe UnitTest02"},s=void 0,l={unversionedId:"exercises/unit-tests/unit-tests02",id:"exercises/unit-tests/unit-tests02",title:"\xdcbungsaufgabe UnitTest02",description:"Erstelle die Klasse RentalTest und erweitere die Klasse Rental aus \xdcbungsaufgabe Exceptions01 anhand des abgebildeten Klassendiagramms.",source:"@site/docs/exercises/unit-tests/unit-tests02.md",sourceDirName:"exercises/unit-tests",slug:"/exercises/unit-tests/unit-tests02",permalink:"/programming/docs/exercises/unit-tests/unit-tests02",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/unit-tests/unit-tests02.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe UnitTest02"},sidebar:"tutorialSidebar",previous:{title:"\xdcbungsaufgabe UnitTests01",permalink:"/programming/docs/exercises/unit-tests/unit-tests01"},next:{title:"\xdcbungsaufgabe UnitTests03",permalink:"/programming/docs/exercises/unit-tests/unit-tests03"}},o={},u=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Rental",id:"hinweis-zur-klasse-rental",level:2},{value:"Hinweise zur Klasse RentalTest",id:"hinweise-zur-klasse-rentaltest",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Erstelle die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"RentalTest")," und erweitere die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Rental")," aus \xdcbungsaufgabe ",(0,i.kt)("a",{parentName:"p",href:"/programming/docs/exercises/exceptions/exceptions01"},"Exceptions01")," anhand des abgebildeten Klassendiagramms."),(0,i.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/181769365-4f78bb11-d1d2-4a43-88c9-33e207ae2f49.png",alt:"image"})),(0,i.kt)("h2",{id:"hinweis-zur-klasse-rental"},"Hinweis zur Klasse Rental"),(0,i.kt)("p",null,"Die Methode ",(0,i.kt)("inlineCode",{parentName:"p"},"void accelerateAllVehicles(int)")," soll alle Fahrzeuge der Fahrzeugvermietung um den eingehenden Wert beschleunigen."),(0,i.kt)("h2",{id:"hinweise-zur-klasse-rentaltest"},"Hinweise zur Klasse RentalTest"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Die Lebenszyklus-Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void setUp()")," soll eine Fahrzeugvermietung samt dazugeh\xf6riger Fahrzeuge erzeugen"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testTransformAllTrucks()")," soll pr\xfcfen, ob nach Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void transformAllTrucks()")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Rental")," alle Lastwagen in Autobots umgewandelt werden und nach erneutem Ausf\xfchren wieder zur\xfcckverwandelt werden"),(0,i.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,i.kt)("inlineCode",{parentName:"li"},"void testAccelerateAllVehicles(int)")," soll pr\xfcfen, ob beim Ausf\xfchren der Methode ",(0,i.kt)("inlineCode",{parentName:"li"},"void accelerateAllVehicles(int)")," der Klasse ",(0,i.kt)("inlineCode",{parentName:"li"},"Rental")," mit einem negativen Wert, die Ausnahme ",(0,i.kt)("inlineCode",{parentName:"li"},"InvalidValueException")," ausgel\xf6st wird")))}d.isMDXComponent=!0}}]);