"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8972],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>d});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return r?n.createElement(g,o(o({ref:t},l),{},{components:r})):n.createElement(g,o({ref:t},l))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=u;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},362:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var n=r(7462),a=(r(7294),r(3905));const i={title:"Wrapper-Klassen",description:"",sidebar_position:10,tags:["java-api","wrappers"]},o=void 0,p={unversionedId:"documentation/java-api/wrappers",id:"documentation/java-api/wrappers",title:"Wrapper-Klassen",description:"",source:"@site/docs/documentation/java-api/wrappers.md",sourceDirName:"documentation/java-api",slug:"/documentation/java-api/wrappers",permalink:"/programming/documentation/java-api/wrappers",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/java-api/wrappers.md",tags:[{label:"java-api",permalink:"/programming/tags/java-api"},{label:"wrappers",permalink:"/programming/tags/wrappers"}],version:"current",sidebarPosition:10,frontMatter:{title:"Wrapper-Klassen",description:"",sidebar_position:10,tags:["java-api","wrappers"]},sidebar:"documentationSidebar",previous:{title:"Die Java API",permalink:"/programming/documentation/java-api/"},next:{title:"Datums- und Zeitangaben",permalink:"/programming/documentation/java-api/dates-and-times"}},s={},c=[],l={toc:c};function m(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Wrapper-Klassen verpacken primitive Datentypen in vollwertigen Klassen und erweitern so die primitiven Datentypen um hilfreiche Methoden. Das Verpacken eines primitiven Datentyps bezeichnet man als ",(0,a.kt)("strong",{parentName:"p"},"Boxing"),", das Entpacken als ",(0,a.kt)("strong",{parentName:"p"},"Unboxing"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Integer i = Integer.valueOf(\"631\");\n    System.out.println(i);\n    Boolean b = Boolean.logicalXor(true, false);\n    System.out.println(b);\n    Character c = Character.toUpperCase('a');\n    System.out.println(c);\n  }\n\n}\n")))}m.isMDXComponent=!0}}]);