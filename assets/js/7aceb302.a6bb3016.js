"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8972],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>d});var n=t(7294);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function p(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),c=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},l=function(e){var r=c(e.components);return n.createElement(s.Provider,{value:r},e.children)},m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},u=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?n.createElement(g,o(o({ref:r},l),{},{components:t})):n.createElement(g,o({ref:r},l))}));function d(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var p={};for(var s in r)hasOwnProperty.call(r,s)&&(p[s]=r[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=t[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,t)}u.displayName="MDXCreateElement"},362:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=t(7462),a=(t(7294),t(3905));const i={title:"Wrapper-Klassen",description:"",sidebar_position:10,tags:["java-api","wrappers"]},o=void 0,p={unversionedId:"documentation/java-api/wrappers",id:"documentation/java-api/wrappers",title:"Wrapper-Klassen",description:"",source:"@site/docs/documentation/java-api/wrappers.md",sourceDirName:"documentation/java-api",slug:"/documentation/java-api/wrappers",permalink:"/programming/documentation/java-api/wrappers",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/java-api/wrappers.md",tags:[{label:"java-api",permalink:"/programming/tags/java-api"},{label:"wrappers",permalink:"/programming/tags/wrappers"}],version:"current",sidebarPosition:10,frontMatter:{title:"Wrapper-Klassen",description:"",sidebar_position:10,tags:["java-api","wrappers"]},sidebar:"documentationSidebar",previous:{title:"Die Java API",permalink:"/programming/documentation/java-api/"},next:{title:"Datums- und Zeitangaben",permalink:"/programming/documentation/java-api/dates-and-times"}},s={},c=[],l={toc:c};function m(e){let{components:r,...t}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wrapper-Klassen verpacken primitive Datentypen in vollwertigen Klassen und erweitern so die primitiven Datentypen um hilfreiche Methoden. Das Verpacken eines primitiven Datentyps bezeichnet man als ",(0,a.kt)("strong",{parentName:"p"},"Boxing"),", das Entpacken als ",(0,a.kt)("strong",{parentName:"p"},"Unboxing"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        Integer i = Integer.valueOf(\"631\");\n        Boolean b = Boolean.logicalXor(true, false);\n        Character c = Character.toUpperCase('a');\n    }\n\n}\n")))}m.isMDXComponent=!0}}]);