"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6629],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=r.createContext({}),u=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=u(e.components);return r.createElement(l.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),m=u(t),d=a,g=m["".concat(l,".").concat(d)]||m[d]||p[d]||i;return t?r.createElement(g,o(o({ref:n},c),{},{components:t})):r.createElement(g,o({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var u=2;u<i;u++)o[u]=t[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},7223:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>u});var r=t(7462),a=(t(7294),t(3905));const i={title:"Konsolenanwendungen",description:"",sidebar_position:90,tags:["console-applications"]},o=void 0,s={unversionedId:"documentation/console-applications",id:"documentation/console-applications",title:"Konsolenanwendungen",description:"",source:"@site/docs/documentation/console-applications.md",sourceDirName:"documentation",slug:"/documentation/console-applications",permalink:"/programming/documentation/console-applications",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/console-applications.md",tags:[{label:"console-applications",permalink:"/programming/tags/console-applications"}],version:"current",sidebarPosition:90,frontMatter:{title:"Konsolenanwendungen",description:"",sidebar_position:90,tags:["console-applications"]},sidebar:"documentationSidebar",previous:{title:"Pseudozufallszahlen",permalink:"/programming/documentation/pseudo-random-numbers"},next:{title:"Kontrollstrukturen",permalink:"/programming/documentation/control-structures/"}},l={},u=[{value:"Konsoleneingaben",id:"konsoleneingaben",level:2},{value:"Konsolenausgaben",id:"konsolenausgaben",level:2}],c={toc:u};function p(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Konsolenanwendungen sind Programme ohne eine grafische Benutzeroberfl\xe4che d.h. die Steuerung sowie die Eingabe und Ausgabe erfolgen ausschlie\xdflich \xfcber textuelle Anweisungen."),(0,a.kt)("h2",{id:"konsoleneingaben"},"Konsoleneingaben"),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Scanner")," im Paket ",(0,a.kt)("inlineCode",{parentName:"p"},"java.util")," stellt Methoden zur Verf\xfcgung, um Eingaben von der Konsole einzulesen und in entsprechende Datentypen umzuwandeln."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Scanner scanner = new Scanner(System.in);\n    int i = scanner.nextInt();\n    System.out.println(i);\n  }\n\n}\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Dem Konstruktor muss der Standard-Eingabestrom ",(0,a.kt)("inlineCode",{parentName:"p"},"System.in")," als Wert mitgegeben werden.")),(0,a.kt)("h2",{id:"konsolenausgaben"},"Konsolenausgaben"),(0,a.kt)("p",null,"Der Standard-Ausgabestrom ",(0,a.kt)("inlineCode",{parentName:"p"},"System.out")," bietet verschiedene Methoden, um Informationen auf der Konsole auszugeben:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Bei den print-Methoden wird die Information unver\xe4ndert und linksb\xfcndig ausgegeben"),(0,a.kt)("li",{parentName:"ul"},"Bei den println-Methoden wird die Information unver\xe4ndert und linksb\xfcndig ausgegeben. Zus\xe4tzlich wird ein Zeilenumbruch ausgef\xfchrt"),(0,a.kt)("li",{parentName:"ul"},"Bei den printf-Methoden wird die Information formatiert ausgegeben. Die Formatierungsregeln sind nach dem Muster ",(0,a.kt)("em",{parentName:"li"},"[flags]","[","width]","[.precision]","conversion-character"),"  aufgebaut")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.print("Winter is Coming");\n    System.out.println("Winter is Coming");\n    System.out.printf("%25S", "Winter is Coming");\n  }\n\n}\n')))}p.isMDXComponent=!0}}]);