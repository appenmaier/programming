"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=r.createContext({}),c=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=i,g=p["".concat(o,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(g,s(s({ref:t},d),{},{components:n})):r.createElement(g,s({ref:t},d))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,s=new Array(a);s[0]=p;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:i,s[1]=l;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},8174:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var r=n(7462),i=(n(7294),n(3905));const a={title:"Listen",description:"",sidebar_position:120,tags:[]},s=void 0,l={unversionedId:"documentation/lists",id:"documentation/lists",title:"Listen",description:"",source:"@site/docs/documentation/lists.md",sourceDirName:"documentation",slug:"/documentation/lists",permalink:"/programming/documentation/lists",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/lists.md",tags:[],version:"current",sidebarPosition:120,frontMatter:{title:"Listen",description:"",sidebar_position:120,tags:[]},sidebar:"documentationSidebar",previous:{title:"Felder (Arrays)",permalink:"/programming/documentation/arrays"},next:{title:"Objektorientierte Programmierung",permalink:"/programming/documentation/oo"}},o={},c=[{value:"Die Klasse <code>ArrayList&lt;E&gt;</code>",id:"die-klasse-arrayliste",level:2},{value:"Die Klasse <code>Arrays</code>",id:"die-klasse-arrays",level:2},{value:"Die Schnittstelle <code>List&lt;E&gt;</code>",id:"die-schnittstelle-liste",level:2}],d={toc:c};function u(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Die Java API stellt eine Reihe von Klassen und Schnittstellen zur Verf\xfcgung, mit deren Hilfe Listen realisiert werden. Unter einer Liste versteht man eine geordnete Folge von Elementen, die auch doppelt enthalten sein k\xf6nnen. Der Zugriff auf die Elemente erfolgt\n\xfcber den Index oder sequentiell."),(0,i.kt)("h2",{id:"die-klasse-arrayliste"},"Die Klasse ",(0,i.kt)("inlineCode",{parentName:"h2"},"ArrayList<E>")),(0,i.kt)("p",null,"Die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"ArrayList<E>")," stellt eine ver\xe4nderbare Liste dynamischer Gr\xf6\xdfe auf Basis eine Feldes dar."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class MainClass {\n\n    public static void main(String[] args) {\n        List<String> list = new ArrayList<>();\n        list.add("Hans");\n        list.add("Peter");\n        list.add("Lisa");\n\n        System.out.println(list.size());\n        System.out.println(list.get(0));\n        list.set(0, "Max");\n        list.add("Heidi");\n        list.remove(0);\n   }\n\n}\n')),(0,i.kt)("h2",{id:"die-klasse-arrays"},"Die Klasse ",(0,i.kt)("inlineCode",{parentName:"h2"},"Arrays")),(0,i.kt)("p",null,"Die Klasse ",(0,i.kt)("inlineCode",{parentName:"p"},"Arrays")," stellt neben Methoden zum Sortieren und Durchsuchen von Feldern auch eine Methode zum Erzeugen ver\xe4nderbarer Listen fixer Gr\xf6\xdfe zur Verf\xfcgung."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class MainClass {\n\n    public static void main(String[] args) {\n        List<String> list = Arrays.asList("Hans", "Peter", "Lisa");\n\n        System.out.println(list.size());\n        System.out.println(list.get(0));\n        list.set(0, "Max");\n        list.add("Heidi"); // Laufzeitfehler\n        list.remove(0); // Laufzeitfehler\n    }\n\n}\n')),(0,i.kt)("h2",{id:"die-schnittstelle-liste"},"Die Schnittstelle ",(0,i.kt)("inlineCode",{parentName:"h2"},"List<E>")),(0,i.kt)("p",null,"Die Schnittstelle ",(0,i.kt)("inlineCode",{parentName:"p"},"List<E>")," stellt verschiedene Fabrikmethoden zum Erzeugen unver\xe4nderlicher Listen zur Verf\xfcgung."),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Fabrikmethoden sind Methoden, die Objekte erzeugen.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class MainClass {\n\n    public static void main(String[] args) {\n        List<String> list = List.of("Hans", "Peter", "Lisa");\n\n        System.out.println(list.size());\n        System.out.println(list.get(0));\n        list.set(0, "Max"); // Laufzeitfehler\n        list.add("Heidi"); // Laufzeitfehler\n        list.remove(0); // Laufzeitfehler\n    }\n\n}\n')))}u.isMDXComponent=!0}}]);