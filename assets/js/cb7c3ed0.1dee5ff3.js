"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2913],{3905:(e,t,n)=>{n.d(t,{Zo:()=>g,kt:()=>d});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),l=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=l(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),c=l(n),d=i,m=c["".concat(u,".").concat(d)]||c[d]||p[d]||a;return n?r.createElement(m,o(o({ref:t},g),{},{components:n})):r.createElement(m,o({ref:t},g))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=c;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var l=2;l<a;l++)o[l]=n[l];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},5109:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7294),n(3905));const a={title:"Softwaregestaltung (Softwaredesign)",description:"",sidebar_position:240,tags:["softwaregestaltung","entwurfsmuster","gestaltungsprinzip"]},o=void 0,s={unversionedId:"documentation/design/design",id:"documentation/design/design",title:"Softwaregestaltung (Softwaredesign)",description:"",source:"@site/docs/documentation/design/design.md",sourceDirName:"documentation/design",slug:"/documentation/design/",permalink:"/programming/documentation/design/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/design/design.md",tags:[{label:"softwaregestaltung",permalink:"/programming/tags/softwaregestaltung"},{label:"entwurfsmuster",permalink:"/programming/tags/entwurfsmuster"},{label:"gestaltungsprinzip",permalink:"/programming/tags/gestaltungsprinzip"}],version:"current",sidebarPosition:240,frontMatter:{title:"Softwaregestaltung (Softwaredesign)",description:"",sidebar_position:240,tags:["softwaregestaltung","entwurfsmuster","gestaltungsprinzip"]},sidebar:"documentationSidebar",previous:{title:"Ausnahmen (Exceptions)",permalink:"/programming/documentation/exceptions"},next:{title:"Gestaltungsprinzipien (Design Principles)",permalink:"/programming/documentation/design/design-principles"}},u={},l=[],g={toc:l};function p(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Als Teilprozess der Softwareentwicklumg umfasst die Softwaregestaltung (Softwaredesign) die Datenmodellierung, den Entwurf der Softwarearchitektur sowie das Festlegen ben\xf6tigter Komponenten, Datentypen und Algorithmen. Bei der Datenmodellierung werden alle\nrelevanten Objekte der Anwendung inklusive ihrer Eigenschaften und Beziehungen zueinander dargestellt; die Softwarearchitektur beschreibt alle relevanten Komponenten und deren Interaktionen."),(0,i.kt)("p",null,"Bei der Gestaltung von Software kommen h\xe4ufig ",(0,i.kt)("a",{parentName:"p",href:"/programming/documentation/design/design-patterns"},"Entwurfsmuster")," zur L\xf6sung wiederkehrender Probleme zum Einsatz. Zudem soll durch Beachtung von ",(0,i.kt)("a",{parentName:"p",href:"/programming/documentation/design/design-principles"},"Gestaltungsprinzipien")," eine hohe Softwarequalit\xe4t sichergestellt werden."))}p.isMDXComponent=!0}}]);