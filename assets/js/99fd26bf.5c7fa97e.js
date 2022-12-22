"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9410],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>c});var t=n(7294);function i(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function a(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function m(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?a(Object(n),!0).forEach((function(r){i(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function o(e,r){if(null==e)return{};var n,t,i=function(e,r){if(null==e)return{};var n,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(i[n]=e[n]);return i}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=t.createContext({}),l=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):m(m({},r),e)),n},u=function(e){var r=l(e.components);return t.createElement(s.Provider,{value:r},e.children)},g={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},p=t.forwardRef((function(e,r){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=l(n),c=i,d=p["".concat(s,".").concat(c)]||p[c]||g[c]||a;return n?t.createElement(d,m(m({ref:r},u),{},{components:n})):t.createElement(d,m({ref:r},u))}));function c(e,r){var n=arguments,i=r&&r.mdxType;if("string"==typeof e||i){var a=n.length,m=new Array(a);m[0]=p;var o={};for(var s in r)hasOwnProperty.call(r,s)&&(o[s]=r[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,m[1]=o;for(var l=2;l<a;l++)m[l]=n[l];return t.createElement.apply(null,m)}return t.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7079:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>m,default:()=>g,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var t=n(7462),i=(n(7294),n(3905));const a={title:"Programmieren",description:"",sidebar_position:10,tags:["programming"]},m=void 0,o={unversionedId:"documentation/programming",id:"documentation/programming",title:"Programmieren",description:"",source:"@site/docs/documentation/programming.md",sourceDirName:"documentation",slug:"/documentation/programming",permalink:"/programming/documentation/programming",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/programming.md",tags:[{label:"programming",permalink:"/programming/tags/programming"}],version:"current",sidebarPosition:10,frontMatter:{title:"Programmieren",description:"",sidebar_position:10,tags:["programming"]},sidebar:"documentationSidebar",previous:{title:"Einf\xfchrung",permalink:"/programming/"},next:{title:"Aufbau einer Java-Klasse",permalink:"/programming/documentation/class-structure"}},s={},l=[{value:"Programmierparadigmen",id:"programmierparadigmen",level:2},{value:"Imperative Programmierung",id:"imperative-programmierung",level:3},{value:"Deklarative Programmierung",id:"deklarative-programmierung",level:3},{value:"Objektorientierte Programmierung",id:"objektorientierte-programmierung",level:3},{value:"Programmausf\xfchrung",id:"programmausf\xfchrung",level:2},{value:"Programmiersprachen",id:"programmiersprachen",level:2},{value:"Die Programmiersprache Java",id:"die-programmiersprache-java",level:2},{value:"Die Geschichte von Java",id:"die-geschichte-von-java",level:3},{value:"JDK und JRE",id:"jdk-und-jre",level:3}],u={toc:l};function g(e){let{components:r,...n}=e;return(0,i.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Als ein Teilbereich der Softwareentwicklung umfasst das Programmieren vor allem die Umsetzung eines Softwareentwurfes in Quellcode. Generell versteht man unter Programmieren die Umsetzung von Algorithmen in lauff\xe4hige Computer-Programme."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209094888-fa91bfac-1968-4213-916f-7ebc1c36ee02.png",alt:"image"})),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Ein Algorithmus ist eine Handlungsvorschrift zur L\xf6sung eines Problems.")),(0,i.kt)("h2",{id:"programmierparadigmen"},"Programmierparadigmen"),(0,i.kt)("p",null,"Unter einem Programmierparadigma versteht man die grundlegende Herangehensweise, Probleme mit Hilfe einer Programmiersprache zu l\xf6sen:"),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Auch wenn Programmiersprachen oft anhand ihrer grundlegenden Merkmale genau einem Programmierparadigma zugeordnet werden, unterst\xfctzen viele Programmiersprachen mehrerer Programmierparadigmen.")),(0,i.kt)("h3",{id:"imperative-programmierung"},"Imperative Programmierung"),(0,i.kt)("p",null,"Bei der imperativen Programmierung bestehen Programme aus verzweigten und sich wiederholenden Folgen von Anweisungen, die den Programmablauf steuern."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209141943-9e9c985d-3c48-4ad5-8766-753f21f923ec.png",alt:"image"})),(0,i.kt)("h3",{id:"deklarative-programmierung"},"Deklarative Programmierung"),(0,i.kt)("p",null,'Die deklarative Programmierung stellt einen Gegenentwurf zur imperativen Programmierung dar, bei der nicht das "Wie", sondern das "Was" im Vordergrund steht.'),(0,i.kt)("h3",{id:"objektorientierte-programmierung"},"Objektorientierte Programmierung"),(0,i.kt)("p",null,"Die ojektorientierte Programmierung baut auf der imperativen Programmierung auf, setzt den Fokus aber auf abstrakte Datentypen und die Verbindung von Daten und Routinen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209148346-eb2ea659-5242-4e6e-bf79-56de39fbb88a.png",alt:"image"})),(0,i.kt)("h2",{id:"programmausf\xfchrung"},"Programmausf\xfchrung"),(0,i.kt)("p",null,"Programme auf einem Computer k\xf6nnen auf unterschiedliche Arten ausgef\xfchrt werden:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Compiler")," \xfcbersetzen den Quellcode in eine Datei, die vom jeweiligen Betriebssystem ausgef\xfchrt werden kann"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Interpreter")," \xfcbersetzen den Quellcode direkt in den Arbeitsspeicher und f\xfchrt das Programm sofort aus"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"Just-In-Time-Compiler")," vereinen die Vorteile von Compiler und Interpreter: Der Compiler \xfcbersetzt den Quellcode zun\xe4chst in den sogenannten Bytecode, anschlie\xdfend \xfcberf\xfchrt der Interpreter den Bytecode in Maschinencode")),(0,i.kt)("p",null,"Compilersprachen wie z.B. C++ sind deutlich performanter und erm\xf6glichen eine sicherere Entwicklung, Interpretersprachen wie z.B. PHP sind dagegen plattformunabh\xe4ngig."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209095011-8c4920fb-66c7-435d-9f76-279f4fca0612.png",alt:"image"})),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In Java wird der Interpreter als ",(0,i.kt)("em",{parentName:"p"},"Java Virtual Machine")," bezeichnet.")),(0,i.kt)("h2",{id:"programmiersprachen"},"Programmiersprachen"),(0,i.kt)("p",null,"Maschinen sind im Vergleich zu menschlichen Gehirnen sehr primitive Gebilde. Die Diskrepanz zwischen der menschlichen Denkweise und der Arbeitsweise von Maschinen bezeichnet mal als ",(0,i.kt)("em",{parentName:"p"},"Semantische L\xfccke"),". Programmiersprachen erm\xf6glichen es, Problemstellungen der\nrealen Welt abstrahiert und maschinengerecht abzubilden und damit die Semantische L\xfccke zu verringern. Je h\xf6her die Abstraktion einer Programmiersprache dabei ist, desto mehr kann die Semantische L\xfccke verringert werden: Maschinenorientierte Programmiersprachen\n(wie z.B. Assembler) abstrahieren kaum und sind daher f\xfcr den Menschen schwerer verst\xe4ndlich, problemorientierte Programmiersprachen (wie z.B. Java) abstrahieren stark und sind daher f\xfcr den Menschen leichter verst\xe4ndlich."),(0,i.kt)("p",null,"Die Programmiersprachen Java, Python und JavaScript geh\xf6ren zu den am weitesten verbreiteten bzw. beliebtesten Programmiersprachen."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/171617641-175825ae-3f27-4411-a7bc-4591e78899a7.png",alt:"image"})),(0,i.kt)("h2",{id:"die-programmiersprache-java"},"Die Programmiersprache Java"),(0,i.kt)("p",null,"Die Programmiersprache Java geh\xf6rt zu den problemorientierten Programmiersprachen und ist daher einfacher zu erlernen und einfacher zu verstehen als maschinenorientierte Programmiersprachen. Bei der Entwicklung von Java verfolgte man das Ziel, eine einfache,\nobjektorientierte, robuste, architekturneutrale und parallelisierbare Programmiersprache zu entwickeln. Java wurde haupts\xe4chlich von C und C++ beeinflusst, ist allerdings im Gegensatz zu C und C++ nicht darauf ausgelegt, m\xf6glichst leistungsf\xe4hige Programme zu\nerzeugen, sondern m\xf6glichst sichere und fehlerfreie Programme."),(0,i.kt)("h3",{id:"die-geschichte-von-java"},"Die Geschichte von Java"),(0,i.kt)("p",null,"Anfang der 90er begannen bei der Firma Sun Microsystems unter Federf\xfchrung des Chefentwicklers James Gosling die Arbeiten an einem Projekt mit dem Codenamen ",(0,i.kt)("em",{parentName:"p"},"The Green Project")," mit dem Ziel, eine vollst\xe4ndige Betriebssystemumgebung f\xfcr unterschiedliche Zwecke\n(interaktives Kabelfernsehen, intelligente Kaffeemaschinen etc.) zu entwickeln. Die daraus entstehende Programmiersprache sollte urspr\xfcnglich den Namen ",(0,i.kt)("em",{parentName:"p"},"Oak")," (Object Application Kernel) tragen, wurde aber schlie\xdflich im Mai 1995 unter dem Namen ",(0,i.kt)("em",{parentName:"p"},"Java"),"\nver\xf6ffentlicht. Der gro\xdfe Durchbruch von Java kam 1996 durch eine Kooperation mit der Firma Netscape zustande, die eine Integration von Java-Applets mit Hilfe von JavaScript in den Browser Netscape Navigator 2.0 erm\xf6glichte. Weitere wichtige Meilensteine in der\nGeschichte von Java waren die Ver\xf6ffentlichungen der Google-Entwicklungsumgebung Android 2008 sowie des Computerspiels Minecraft 2009."),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Java war der Name der beliebtesten Kaffeesorte der Entwickler.")),(0,i.kt)("h3",{id:"jdk-und-jre"},"JDK und JRE"),(0,i.kt)("p",null,"Das JDK (Java Development Kit) stellt die wichtigste Komponente zum Programmieren von Java-Programmen dar. Es enth\xe4lt neben dem Compiler und Debugger weitere wichtige Werkzeuge sowie umfangreiche Bibliotheken (siehe ",(0,i.kt)("a",{parentName:"p",href:"/programming/documentation/java-api/"},"Die Java API"),"). Die\nJRE (Java Runtime Environment) enth\xe4lt den Interpreter (die ",(0,i.kt)("em",{parentName:"p"},"Java Virtual Machine"),") und wird zum Ausf\xfchren von Java-Applikationen ben\xf6tigt."))}g.isMDXComponent=!0}}]);