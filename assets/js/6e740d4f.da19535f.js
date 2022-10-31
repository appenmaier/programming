"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[436],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>d});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),p=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),u=p(n),d=r,g=u["".concat(l,".").concat(d)]||u[d]||c[d]||i;return n?a.createElement(g,o(o({ref:t},m),{},{components:n})):a.createElement(g,o({ref:t},m))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:r,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1965:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var a=n(7462),r=(n(7294),n(3905));const i={title:"Datums- und Zeitangaben",description:"",sidebar_position:20,tags:["java-api","dates-and-times"]},o=void 0,s={unversionedId:"documentation/java-api/dates-and-times",id:"documentation/java-api/dates-and-times",title:"Datums- und Zeitangaben",description:"",source:"@site/docs/documentation/java-api/dates-and-times.md",sourceDirName:"documentation/java-api",slug:"/documentation/java-api/dates-and-times",permalink:"/programming/documentation/java-api/dates-and-times",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/java-api/dates-and-times.md",tags:[{label:"java-api",permalink:"/programming/tags/java-api"},{label:"dates-and-times",permalink:"/programming/tags/dates-and-times"}],version:"current",sidebarPosition:20,frontMatter:{title:"Datums- und Zeitangaben",description:"",sidebar_position:20,tags:["java-api","dates-and-times"]},sidebar:"documentationSidebar",previous:{title:"Wrapper-Klassen",permalink:"/programming/documentation/java-api/wrappers"},next:{title:"Dateien und Verzeichnisse",permalink:"/programming/documentation/java-api/files"}},l={},p=[],m={toc:p};function c(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"LocalDateTime")," liefert alle relevanten Informationen zum fast weltweit verwendeten Kalendersystem ISO-8601 (gregorianischer Kalender)."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public class MainClass {\n\n    public static void main(String[] args) {\n        LocalDateTime now = LocalDateTime.now();\n\n        System.out.println("Jahr: " + now.getYear());\n        System.out.println("Monat: " + now.getMonth());\n        System.out.println("Tag: " + now.getDayOfMonth());\n    }\n\n}\n')),(0,r.kt)("p",null,"Neben den print-Methoden des Standard-Ausgabestroms ",(0,r.kt)("inlineCode",{parentName:"p"},"System.out")," besitzt die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"System")," auch die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"currentTimeMillis()"),", die die Differenz in Millisekunden zwischen der aktuellen Systemzeit und dem Nullpunkt zur\xfcckgibt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        long timeInMilliseconds = System.currentTimeMillis();    \n        System.out.println(timeInMilliseconds);\n    }\n\n}\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Der festgelegte Nullpunkt ist der 1. Januar 1970, 0 Uhr.")))}c.isMDXComponent=!0}}]);