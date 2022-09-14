"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6700],{3905:(e,n,r)=>{r.d(n,{Zo:()=>c,kt:()=>g});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function a(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),p=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},c=function(e){var n=p(e.components);return t.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=a(e,["components","mdxType","originalType","parentName"]),d=p(r),g=i,m=d["".concat(l,".").concat(g)]||d[g]||u[g]||o;return r?t.createElement(m,s(s({ref:n},c),{},{components:r})):t.createElement(m,s({ref:n},c))}));function g(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=r.length,s=new Array(o);s[0]=d;var a={};for(var l in n)hasOwnProperty.call(n,l)&&(a[l]=n[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,s[1]=a;for(var p=2;p<o;p++)s[p]=r[p];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},1343:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>p});var t=r(7462),i=(r(7294),r(3905));const o={title:"Gestaltungsprinzipien (Design Principles)",description:"",sidebar_position:10,tags:["gestaltungsprinzip","dry","kiss","yagni","solid","separation of concerns","inversion of control"]},s=void 0,a={unversionedId:"documentation/design/design-principles",id:"documentation/design/design-principles",title:"Gestaltungsprinzipien (Design Principles)",description:"",source:"@site/docs/documentation/design/design-principles.md",sourceDirName:"documentation/design",slug:"/documentation/design/design-principles",permalink:"/programming/docs/documentation/design/design-principles",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/design/design-principles.md",tags:[{label:"gestaltungsprinzip",permalink:"/programming/docs/tags/gestaltungsprinzip"},{label:"dry",permalink:"/programming/docs/tags/dry"},{label:"kiss",permalink:"/programming/docs/tags/kiss"},{label:"yagni",permalink:"/programming/docs/tags/yagni"},{label:"solid",permalink:"/programming/docs/tags/solid"},{label:"separation of concerns",permalink:"/programming/docs/tags/separation-of-concerns"},{label:"inversion of control",permalink:"/programming/docs/tags/inversion-of-control"}],version:"current",sidebarPosition:10,frontMatter:{title:"Gestaltungsprinzipien (Design Principles)",description:"",sidebar_position:10,tags:["gestaltungsprinzip","dry","kiss","yagni","solid","separation of concerns","inversion of control"]},sidebar:"tutorialSidebar",previous:{title:"Softwaregestaltung (Softwaredesign)",permalink:"/programming/docs/documentation/design/"},next:{title:"Entwurfsmuster (Design Patterns)",permalink:"/programming/docs/documentation/design/design-patterns"}},l={},p=[{value:"Die SOLID-Prinzipien",id:"die-solid-prinzipien",level:2},{value:"Separation of Concerns",id:"separation-of-concerns",level:2},{value:"Inversion of Control",id:"inversion-of-control",level:2}],c={toc:p};function u(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},c,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Unter Gestaltungsprinzipien (Design Principles) versteht man Richtlinien, welche eine hohe Softwarequalit\xe4t sicherstellen sollen. Neben einfachen Gestaltungsprinzipen wie ",(0,i.kt)("strong",{parentName:"p"},"DRY")," (Don\xb4t Repeat Yourself), ",(0,i.kt)("strong",{parentName:"p"},"KISS")," (Keep It Simple, Stupid) und ",(0,i.kt)("strong",{parentName:"p"},"YAGNI"),"\n(You Ain\xb4t Gonna Need It), sind in der objektorientierten Programmierung vor allem die SOLID-Prinzipen sowie die Prinzipien ",(0,i.kt)("strong",{parentName:"p"},"Separation of Concerns")," und ",(0,i.kt)("strong",{parentName:"p"},"Inversion of Control")," von Bedeutung."),(0,i.kt)("h2",{id:"die-solid-prinzipien"},"Die SOLID-Prinzipien"),(0,i.kt)("p",null,"Hinter dem Akronym SOLID verbergen sich 5 Gestaltungsprinzipien:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Single Responsibility Principle: jede Klasse sollte genau eine Verantwortung besitzen"),(0,i.kt)("li",{parentName:"ul"},"Open Closed Principle: Software-Einheiten sollten offen f\xfcr Erweiterungen, aber geschlossen f\xfcr Modifikationen sein"),(0,i.kt)("li",{parentName:"ul"},"Liscov Substitution Principle: Objekte von Unterklassen sollten sich so Verhalten wie Objekte der dazugeh\xf6rigen Oberklasse"),(0,i.kt)("li",{parentName:"ul"},"Interface Segregation Principle: Klassen sollten nur Methoden implementieren m\xfcssen, die sie auch verwenden"),(0,i.kt)("li",{parentName:"ul"},"Dependency Inversion Principle: Abh\xe4ngigkeiten sollten immer von den konkreten zu den abstrakten Modulen verlaufen")),(0,i.kt)("p",null,"Das Akronym SOLID geht auf den Softwareentwickler Robert C. Martin zur\xfcck, der unter anderem auch an der Entwicklung des Agilen Manifests beteiligt war. Dieses wurde 2001 verfasst und umfasst die vier wesentlichen Leits\xe4tze der agilen Softwareentwicklung."),(0,i.kt)("h2",{id:"separation-of-concerns"},"Separation of Concerns"),(0,i.kt)("p",null,"Unter dem Begriff ",(0,i.kt)("strong",{parentName:"p"},"Separation of Concerns")," versteht man in der Informatik das Gestaltungsprinzip, die verschiedenen Aufgaben einer Anwendung in verschiedene Bereiche aufzuteilen. Grafische Benutzeroberfl\xe4chen werden zum Beispiel in der Regel in die Bereiche\nAufbau, Aussehen und Verhalten aufgeteilt."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170881912-9a82825c-4f88-401c-adc1-369de09ccecf.png",alt:"image"})),(0,i.kt)("h2",{id:"inversion-of-control"},"Inversion of Control"),(0,i.kt)("p",null,"Der Begriff ",(0,i.kt)("strong",{parentName:"p"},"Inversion of Control")," beschreibt die Arbeitsweise von Frameworks: Die Funktionen einer Anwendung werden beim Framework registriert, welches die Funktionen zu einem sp\xe4teren Zeitpunkt aufruft, d.h. die Steuerung des Kontrollfluss obliegt nicht der\nAnwendung, sondern dem Framework. Daher versteht man unter einem Framework ein Programmierger\xfcst, welches die Architektur f\xfcr die Anwendung vorgibt und den Kontrollfluss der Anwendung steuert."),(0,i.kt)("p",null,"Die Umkehr der Steuerung kann auch als Anwendung des Hollywood-Prinzips (Don\xb4t call us, we\xb4ll call you) verstanden werden."))}u.isMDXComponent=!0}}]);