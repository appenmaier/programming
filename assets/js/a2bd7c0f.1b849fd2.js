"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[1017],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),d=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=d(e.components);return r.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=d(n),c=a,y=u["".concat(o,".").concat(c)]||u[c]||m[c]||i;return n?r.createElement(y,l(l({ref:t},s),{},{components:n})):r.createElement(y,l({ref:t},s))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=u;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var d=2;d<i;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},9419:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const i={title:"Datentypen",description:"",sidebar_position:30,tags:[]},l=void 0,p={unversionedId:"documentation/data-types",id:"documentation/data-types",title:"Datentypen",description:"",source:"@site/docs/documentation/data-types.md",sourceDirName:"documentation",slug:"/documentation/data-types",permalink:"/programming/documentation/data-types",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/data-types.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"Datentypen",description:"",sidebar_position:30,tags:[]},sidebar:"documentationSidebar",previous:{title:"Aufbau einer Java-Klasse",permalink:"/programming/documentation/class-structure"},next:{title:"Datenobjekte",permalink:"/programming/documentation/data-objects"}},o={},d=[{value:"Primitive Datentypen",id:"primitive-datentypen",level:2},{value:"Komplexe Datentypen",id:"komplexe-datentypen",level:2},{value:"Generische Datentypen",id:"generische-datentypen",level:2},{value:"Abstrakte Datentypen",id:"abstrakte-datentypen",level:2}],s={toc:d};function m(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Datentypen legen neben der Gr\xf6\xdfe des Arbeitsspeichers, die ein Datenobjekt ben\xf6tigt, auch die Art der Information fest, die im Datenobjekt gespeichert werden kann."),(0,a.kt)("h2",{id:"primitive-datentypen"},"Primitive Datentypen"),(0,a.kt)("p",null,"Primitve Datentypen sind fest in der Programmiersprache verankert und k\xf6nnen durch entsprechende Schl\xfcsselw\xf6rter angesprochen werden. Java kennt 8 solcher primitver Datentypen. "),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,a.kt)("th",{parentName:"tr",align:null},"Gr\xf6\xdfe"),(0,a.kt)("th",{parentName:"tr",align:null},"Wertbereich"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"boolean"),(0,a.kt)("td",{parentName:"tr",align:null},"-"),(0,a.kt)("td",{parentName:"tr",align:null},"true, false")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"char"),(0,a.kt)("td",{parentName:"tr",align:null},"2 Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"\\","u0000 bis ","\\","uFFFF")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"byte"),(0,a.kt)("td",{parentName:"tr",align:null},"1 Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"-128 bis +127")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"short"),(0,a.kt)("td",{parentName:"tr",align:null},"2 Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"-32.768 bis +32.767")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"int"),(0,a.kt)("td",{parentName:"tr",align:null},"4 Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"-2.147.483.648 bis +2.147.483.647")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"long"),(0,a.kt)("td",{parentName:"tr",align:null},"8 Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"-9.233.372.036.854.775.808 bis +9.233.372.036.854.775.807")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"float"),(0,a.kt)("td",{parentName:"tr",align:null},"4 Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"+/-1,4E-45 bis +/-3,4028235e+38")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"double"),(0,a.kt)("td",{parentName:"tr",align:null},"8 Byte"),(0,a.kt)("td",{parentName:"tr",align:null},"+/-4,9E-324 bis +/-1,7976931348623157e+308")))),(0,a.kt)("h2",{id:"komplexe-datentypen"},"Komplexe Datentypen"),(0,a.kt)("p",null,"Klassen, die \xfcber mehrere Attribute verf\xfcgen, k\xf6nnen im Gegensatz zu den primitiven Datentypen nicht nur eine Information speichern und werden daher als komplexe Datentypen bezeichnet."),(0,a.kt)("h2",{id:"generische-datentypen"},"Generische Datentypen"),(0,a.kt)("p",null,"Klassen, die \xfcber einen oder mehrere formale Typparameter verf\xfcgen, werden als generische Klassen bezeichnet. Generische Klassen k\xf6nnen mit verschiedenen Datentypen verwendet werden und erm\xf6glichen dadurch die Wiederverwendung von Code unter Beibehaltung\nstatischer Typsicherheit. Unter Typsicherheit versteht man, dass Datentypen gem\xe4\xdf ihrer Definition verwendet werden und dabei keine Typverletzungen auftreten. Bei statisch typisierten Sprachen findet die Typpr\xfcfung bei der Kompilierung statt. Beispiele f\xfcr\ngenerische Klassen sind die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayList<E>")," sowie die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>"),"."),(0,a.kt)("h2",{id:"abstrakte-datentypen"},"Abstrakte Datentypen"),(0,a.kt)("p",null,"Abstrakte Datentypen sind Sammlungen von Daten samt den dazugeh\xf6rigen Operationen wie Einf\xfcgen, L\xf6schen etc. Beispiele f\xfcr abstrakte Datentypen sind Listen (z.B. die Klassen ",(0,a.kt)("inlineCode",{parentName:"p"},"ArrayList<E>")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"LinkedList<E>"),"), Mengen (z.B. die Klassen ",(0,a.kt)("inlineCode",{parentName:"p"},"HashSet<E>")," und\n",(0,a.kt)("inlineCode",{parentName:"p"},"TreeSet<E>"),"), Warteschlangen (z.B. die Klassen ",(0,a.kt)("inlineCode",{parentName:"p"},"LinkedList<E>")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"PriorityQueue<E>"),") sowie Assoziativspeicher (z.B. die Klassen ",(0,a.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeMap<K, V>"),")."))}m.isMDXComponent=!0}}]);