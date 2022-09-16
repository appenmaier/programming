"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9022],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>d});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function s(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?s(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},s=Object.keys(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(t=0;t<s.length;t++)n=s[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=t.createContext({}),i=function(e){var r=t.useContext(c),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=i(e.components);return t.createElement(c.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},m=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,s=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(n),d=a,g=m["".concat(c,".").concat(d)]||m[d]||p[d]||s;return n?t.createElement(g,o(o({ref:r},u),{},{components:n})):t.createElement(g,o({ref:r},u))}));function d(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var s=n.length,o=new Array(s);o[0]=m;var l={};for(var c in r)hasOwnProperty.call(r,c)&&(l[c]=r[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<s;i++)o[i]=n[i];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}m.displayName="MDXCreateElement"},1:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>l,toc:()=>i});var t=n(7462),a=(n(7294),n(3905));const s={title:"\xdcbungsaufgabe Cases03"},o=void 0,l={unversionedId:"exercises/control-structures/cases03",id:"exercises/control-structures/cases03",title:"\xdcbungsaufgabe Cases03",description:"Erstelle eine ausf\xfchrbare Klasse, welche den Vornamen, den Nachnamen, das Alter sowie das Geschlecht einer Person einliest und je nach Fall eine andere Begr\xfc\xdfungsformel anzeigt.",source:"@site/docs/exercises/control-structures/cases03.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/cases03",permalink:"/programming/docs/exercises/control-structures/cases03",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/cases03.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe Cases03"},sidebar:"exercisesSidebar",previous:{title:"\xdcbungsaufgabe Cases02",permalink:"/programming/docs/exercises/control-structures/cases02"},next:{title:"\xdcbungsaufgabe Cases04",permalink:"/programming/docs/exercises/control-structures/cases04"}},c={},i=[{value:"Regelwerk",id:"regelwerk",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],u={toc:i};function p(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche den Vornamen, den Nachnamen, das Alter sowie das Geschlecht einer Person einliest und je nach Fall eine andere Begr\xfc\xdfungsformel anzeigt."),(0,a.kt)("h2",{id:"regelwerk"},"Regelwerk"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},'"Hallo Herr Nachname" f\xfcr M\xe4nner ab 18'),(0,a.kt)("li",{parentName:"ul"},'"Hallo Frau Nachname" f\xfcr Frauen ab 18'),(0,a.kt)("li",{parentName:"ul"},'"Hallo Vorname" f\xfcr Kinder, Jugendliche unter 18 und Diverse')),(0,a.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-markdown"},"Gib bitte den Vornamen ein: Peter\nGib bitte den Nachnamen ein: M\xfcller\nGib bitte das Alter ein: 60\nGib bitte das Geschlecht ein (m, w, d): m\nHallo Herr M\xfcller\n")))}p.isMDXComponent=!0}}]);