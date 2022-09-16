"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8609],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,b=u["".concat(l,".").concat(m)]||u[m]||p[m]||i;return n?r.createElement(b,o(o({ref:t},d),{},{components:n})):r.createElement(b,o({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3989:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=n(7462),a=(n(7294),n(3905));const i={title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstrakt","final"]},o=void 0,s={unversionedId:"documentation/abstract-and-final",id:"documentation/abstract-and-final",title:"Abstrakte und finale Klassen und Methoden",description:"",source:"@site/docs/documentation/abstract-and-final.md",sourceDirName:"documentation",slug:"/documentation/abstract-and-final",permalink:"/programming/docs/documentation/abstract-and-final",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/abstract-and-final.md",tags:[{label:"abstrakt",permalink:"/programming/docs/tags/abstrakt"},{label:"final",permalink:"/programming/docs/tags/final"}],version:"current",sidebarPosition:200,frontMatter:{title:"Abstrakte und finale Klassen und Methoden",description:"",sidebar_position:200,tags:["abstrakt","final"]},sidebar:"tutorialSidebar",previous:{title:"Die Mutter aller Klassen",permalink:"/programming/docs/documentation/object"},next:{title:"Schnittstellen (Interfaces)",permalink:"/programming/docs/documentation/interfaces"}},l={},c=[{value:"Abstrakte Klassen",id:"abstrakte-klassen",level:2},{value:"Abstrakte Methoden",id:"abstrakte-methoden",level:2},{value:"Finale Klassen",id:"finale-klassen",level:2},{value:"Finale Methoden",id:"finale-methoden",level:2}],d={toc:c};function p(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit Hilfe der Schl\xfcsselw\xf6rter ",(0,a.kt)("inlineCode",{parentName:"p"},"abstract")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"final")," kann die Verwendung von Klassen vorgegeben bzw. eingesch\xe4nkt werden."),(0,a.kt)("h2",{id:"abstrakte-klassen"},"Abstrakte Klassen"),(0,a.kt)("p",null,"Abstrakte Klassen k\xf6nnen nicht instanziiert werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177196186-757868ea-a485-430d-bf2a-9f9bd0d60475.png",alt:"image"})),(0,a.kt)("h2",{id:"abstrakte-methoden"},"Abstrakte Methoden"),(0,a.kt)("p",null,"Abstrakte Methoden werden in abstrakten Klassen definiert, besitzen dort keinen Methodenrumpf und m\xfcssen in den abgeleiteten Klassen der abstrakten Klasse \xfcberschrieben werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177196196-15e40771-561e-42b7-8611-ed305a1a82d5.png",alt:"image"})),(0,a.kt)("h2",{id:"finale-klassen"},"Finale Klassen"),(0,a.kt)("p",null,"Finale Klassen k\xf6nnen nicht abgeleitet werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177196313-8af85db4-15e3-4c2f-824a-553aad399260.png",alt:"image"})),(0,a.kt)("h2",{id:"finale-methoden"},"Finale Methoden"),(0,a.kt)("p",null,"Finale Methoden k\xf6nnen nicht \xfcberschrieben werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177196334-0c57be80-993d-4d44-bfbf-04653f26cd07.png",alt:"image"})))}p.isMDXComponent=!0}}]);