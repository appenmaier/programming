"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6383],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>g});var r=n(7294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),d=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(o.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=d(n),g=a,s=k["".concat(o,".").concat(g)]||k[g]||m[g]||l;return n?r.createElement(s,i(i({ref:e},u),{},{components:n})):r.createElement(s,i({ref:e},u))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p.mdxType="string"==typeof t?t:a,i[1]=p;for(var d=2;d<l;d++)i[d]=n[d];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},7019:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>p,toc:()=>d});var r=n(7462),a=(n(7294),n(3905));const l={title:"Operatoren",description:"",sidebar_position:60,tags:["operators"]},i=void 0,p={unversionedId:"documentation/operators",id:"documentation/operators",title:"Operatoren",description:"",source:"@site/docs/documentation/operators.md",sourceDirName:"documentation",slug:"/documentation/operators",permalink:"/programming/documentation/operators",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/operators.md",tags:[{label:"operators",permalink:"/programming/tags/operators"}],version:"current",sidebarPosition:60,frontMatter:{title:"Operatoren",description:"",sidebar_position:60,tags:["operators"]},sidebar:"documentationSidebar",previous:{title:"Zeichenketten (Strings)",permalink:"/programming/documentation/strings"},next:{title:"Mathematische Berechnungen",permalink:"/programming/documentation/calculations"}},o={},d=[{value:"Arithmetische Operatoren",id:"arithmetische-operatoren",level:2},{value:"Bitweise Operatoren",id:"bitweise-operatoren",level:2},{value:"Logische Operatoren",id:"logische-operatoren",level:2},{value:"Vergleichsoperatoren",id:"vergleichsoperatoren",level:2},{value:"Priorit\xe4t von Operatoren",id:"priorit\xe4t-von-operatoren",level:2}],u={toc:d};function m(t){let{components:e,...n}=t;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Operatoren sind Zeichen, mit denen Daten manipuliert werden k\xf6nnen. Mit Hilfe von Operanden und Operatoren k\xf6nnen beliebig komplexe Ausdr\xfccke abgebildet werden. Operatoren mit einem, zwei oder drei Operanden werden als ",(0,a.kt)("strong",{parentName:"p"},"un\xe4re Operatoren"),", ",(0,a.kt)("strong",{parentName:"p"},"bin\xe4re Operatoren"),"\nund ",(0,a.kt)("strong",{parentName:"p"},"tern\xe4re Operatoren")," bezeichnet. Man unterscheidet zudem zwischen arithmetischen, bitweisen und logischen Operatoren sowie Vergleichsoperatoren."),(0,a.kt)("h2",{id:"arithmetische-operatoren"},"Arithmetische Operatoren"),(0,a.kt)("p",null,"F\xfcr die arithmetischen Grundrechenarten stehen verschiedene arithmetische Operatoren zur Verf\xfcgung."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x + y"),(0,a.kt)("td",{parentName:"tr",align:null},"Addiere y zu x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x - y"),(0,a.kt)("td",{parentName:"tr",align:null},"Subtrahiere y von x")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x * y"),(0,a.kt)("td",{parentName:"tr",align:null},"Multipliziere x mit y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x / y"),(0,a.kt)("td",{parentName:"tr",align:null},"Dividiere x durch y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x % y"),(0,a.kt)("td",{parentName:"tr",align:null},"Divisionsrest von x / y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x++"),(0,a.kt)("td",{parentName:"tr",align:null},"Inkrementiere x und gib den alten Wert an den Ausdruck zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"++x"),(0,a.kt)("td",{parentName:"tr",align:null},"Inkrementiere x und gib den neuen Wert an den Ausdruck zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x--"),(0,a.kt)("td",{parentName:"tr",align:null},"Dekrementiere x und gib den alten Wert an den Ausdruck zur\xfcck")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"--x"),(0,a.kt)("td",{parentName:"tr",align:null},"Dekrementiere x und gib den neuen Wert an den Ausdruck zur\xfcck")))),(0,a.kt)("h2",{id:"bitweise-operatoren"},"Bitweise Operatoren"),(0,a.kt)("p",null,"Bitweise Operatoren k\xf6nnen dazu verwendet werden, Bin\xe4roperationen auf Operanden durchzuf\xfchren."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a & b"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweise AND-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a ","|"," b"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweise OR-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a ^ b"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweise XOR-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"~a"),(0,a.kt)("td",{parentName:"tr",align:null},"Bitweises NOT")))),(0,a.kt)("h2",{id:"logische-operatoren"},"Logische Operatoren"),(0,a.kt)("p",null,"Logische Operatoren k\xf6nnen dazu verwendet werden, logische Aussagen miteinander zu verkn\xfcpfen."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a && b"),(0,a.kt)("td",{parentName:"tr",align:null},"Logische AND-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"a ","|","|"," b"),(0,a.kt)("td",{parentName:"tr",align:null},"Logische OR-Verkn\xfcpfung")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"!a"),(0,a.kt)("td",{parentName:"tr",align:null},"Logisches NOT")))),(0,a.kt)("h2",{id:"vergleichsoperatoren"},"Vergleichsoperatoren"),(0,a.kt)("p",null,"Logische Bedingungen f\xfcr zwei Werte eines elementaren Datentyps k\xf6nnen durch Vergleichsoperatoren realisiert werden."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Ausdruck mit Operator"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x == y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist gleich y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x != y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist ungleich y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x ",">"," y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist gr\xf6\xdfer y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x < y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist kleiner y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x ",">","= y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist gr\xf6\xdfer gleich y")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"x <= y"),(0,a.kt)("td",{parentName:"tr",align:null},"x ist kleiner gleich y")))),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Da der Vergleichsoperator ",(0,a.kt)("inlineCode",{parentName:"p"},"==")," auf referenzielle Gleichheit pr\xfcft, sollte zum Vergleich von zwei Objekten die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int equals(Object)")," verwendet werden.")),(0,a.kt)("h2",{id:"priorit\xe4t-von-operatoren"},"Priorit\xe4t von Operatoren"),(0,a.kt)("p",null,"Operatoren werden gem\xe4\xdf ihrer Priorit\xe4t verarbeitet."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Priorit\xe4t"),(0,a.kt)("th",{parentName:"tr",align:null},"Operator"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"1"),(0,a.kt)("td",{parentName:"tr",align:null},"()")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"++, --, Vorzeichenplus, Vorzeichenminus, ","~",", !, (",(0,a.kt)("em",{parentName:"td"},"Datentyp"),")")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"3"),(0,a.kt)("td",{parentName:"tr",align:null},"*",", /, %")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"4"),(0,a.kt)("td",{parentName:"tr",align:null},"+, -")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"5"),(0,a.kt)("td",{parentName:"tr",align:null},"<, <=, ",">",", ",">","=")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"6"),(0,a.kt)("td",{parentName:"tr",align:null},"==, !=")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"7"),(0,a.kt)("td",{parentName:"tr",align:null},"&")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"8"),(0,a.kt)("td",{parentName:"tr",align:null},"^")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"9"),(0,a.kt)("td",{parentName:"tr",align:null},"|")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"10"),(0,a.kt)("td",{parentName:"tr",align:null},"&&")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"11"),(0,a.kt)("td",{parentName:"tr",align:null},"|","|")))))}m.isMDXComponent=!0}}]);