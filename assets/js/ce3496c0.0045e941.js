"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=o,g=m["".concat(s,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(g,a(a({ref:n},c),{},{components:t})):r.createElement(g,a({ref:n},c))}));function d(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=t.length,a=new Array(i);a[0]=m;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=t[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=t(7462),o=(t(7294),t(3905));const i={title:"Konsolenanwendungen",description:"",sidebar_position:90,tags:["console-applications"]},a=void 0,l={unversionedId:"documentation/console-applications",id:"documentation/console-applications",title:"Konsolenanwendungen",description:"",source:"@site/docs/documentation/console-applications.md",sourceDirName:"documentation",slug:"/documentation/console-applications",permalink:"/programming/documentation/console-applications",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/console-applications.md",tags:[{label:"console-applications",permalink:"/programming/tags/console-applications"}],version:"current",sidebarPosition:90,frontMatter:{title:"Konsolenanwendungen",description:"",sidebar_position:90,tags:["console-applications"]},sidebar:"documentationSidebar",previous:{title:"Pseudozufallszahlen",permalink:"/programming/documentation/pseudo-random-numbers"},next:{title:"Kontrollstrukturen",permalink:"/programming/documentation/control-structures/"}},s={},u=[{value:"Konsoleneingaben",id:"konsoleneingaben",level:2},{value:"Konsolenausgaben",id:"konsolenausgaben",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Konsolenanwendungen sind Programme ohne eine grafische Benutzeroberfl\xe4che d.h. die Steuerung sowie die Eingabe und Ausgabe erfolgen ausschlie\xdflich \xfcber textuelle Anweisungen."),(0,o.kt)("h2",{id:"konsoleneingaben"},"Konsoleneingaben"),(0,o.kt)("p",null,"Die Klasse ",(0,o.kt)("inlineCode",{parentName:"p"},"Scanner")," im Paket ",(0,o.kt)("inlineCode",{parentName:"p"},"java.util")," stellt Methoden zur Verf\xfcgung, um Eingaben von der Konsole einzulesen und in entsprechende Datentypen umzuwandeln."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        Scanner scanner = new Scanner(System.in);\n        int i = scanner.nextInt();\n        System.out.println(i);\n    }\n\n}\n")),(0,o.kt)("admonition",{title:"Hinweis",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Dem Konstruktor muss der Standard-Eingabestrom ",(0,o.kt)("inlineCode",{parentName:"p"},"System.in")," als Wert mitgegeben werden.")),(0,o.kt)("h2",{id:"konsolenausgaben"},"Konsolenausgaben"),(0,o.kt)("p",null,"Der Standard-Ausgabestrom ",(0,o.kt)("inlineCode",{parentName:"p"},"System.out")," bietet verschiedene Methoden, um Informationen auf der Konsole auszugeben:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Bei den print-Methoden wird die Information unver\xe4ndert und linksb\xfcndig ausgegeben"),(0,o.kt)("li",{parentName:"ul"},"Bei den println-Methoden wird die Information unver\xe4ndert und linksb\xfcndig ausgegeben. Zus\xe4tzlich wird ein Zeilenumbruch ausgef\xfchrt"),(0,o.kt)("li",{parentName:"ul"},"Bei den printf-Methoden wird die Information formatiert ausgegeben. Die Formatierungsregeln sind nach dem Muster ",(0,o.kt)("em",{parentName:"li"},"[flags]","[","width]","[.precision]","conversion-character"),"  aufgebaut")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class MainClass {\n\n    public static void main(String[] args) {\n        System.out.print("Winter is Coming");\n        System.out.println("Winter is Coming");\n        System.out.printf("%25S", "Winter is Coming");\n    }\n\n}\n')))}p.isMDXComponent=!0}}]);