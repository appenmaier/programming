"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9762],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=p(n),c=a,g=d["".concat(o,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(g,s(s({ref:t},m),{},{components:n})):r.createElement(g,s({ref:t},m))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var p=2;p<i;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6387:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var r=n(7462),a=(n(7294),n(3905));const i={title:"Assoziativspeicher (Maps)",description:"",sidebar_position:280,tags:["maps"]},s=void 0,l={unversionedId:"documentation/maps",id:"documentation/maps",title:"Assoziativspeicher (Maps)",description:"",source:"@site/docs/documentation/maps.md",sourceDirName:"documentation",slug:"/documentation/maps",permalink:"/programming/documentation/maps",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/maps.md",tags:[{label:"maps",permalink:"/programming/tags/maps"}],version:"current",sidebarPosition:280,frontMatter:{title:"Assoziativspeicher (Maps)",description:"",sidebar_position:280,tags:["maps"]},sidebar:"documentationSidebar",previous:{title:"Generische Programmierung",permalink:"/programming/documentation/generics"},next:{title:"Optionals",permalink:"/programming/documentation/optionals"}},o={},p=[],m={toc:p};function u(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Unter einem Assoziativspeicher (Map) versteht man eine Menge zusammengeh\xf6riger Paare von Objekten. Das erste Objekt stellt dabei den Schl\xfcssel (Key), das zweite Objekt den Wert (Value) dar. Jeder Schl\xfcssel kann dabei nur einmal in einem Assoziativspeicher\nvorhanden sein. Aufgrund dieses Aufbaus werden Assoziativspeicher auch als W\xf6rterb\xfccher bezeichnet."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/178993798-64074bc6-0a7b-4201-9b40-0d37423e718a.png",alt:"image"})),(0,a.kt)("p",null,"Um auf die Eintr\xe4ge, Schl\xfcssel und Werte eines Assoziativspeichers zugreifen k\xf6nnen, stellt die Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Map")," die Methoden ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<Entry<K, V>> entrySet()"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Set<K> keySet()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"Collection<V> values()")," zur Verf\xfcgung. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n\n    HashMap<Integer, String> foos = new HashMap<>();\n    foos.put(834, "Hans");\n    foos.put(269, "Peter");\n    foos.put(771, "Lisa");\n\n    for (Entry<Integer, String> entry : foos.entrySet()) {\n      System.out.println(entry.getKey());\n      System.out.println(entry.getValue());\n    }\n\n    for (Integer i : foos.keySet()) {\n      System.out.println(i);\n    }\n\n    for (String s : foos.values()) {\n      System.out.println(s);\n    }\n\n  }\n\n}\n')),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"HashMap<K, V>")," implementiert den Assoziativspeicher in Form einer Hashtabelle. F\xfcr den Einsatz einer Hashtabelle ist es zwingend erforderlich, dass die Klasse, die den Schl\xfcssel bildet, die Methoden ",(0,a.kt)("inlineCode",{parentName:"p"},"int hashCode()")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean equals(Object)"),"\ngem\xe4\xdf den entsprechenden Dokumentationskommentaren \xfcberschrieben hat. Im Gegensatz zu einem Bin\xe4rbaum liegen die Paare in einer Hashtabelle unsortiert vor."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Index"),(0,a.kt)("th",{parentName:"tr",align:null},"Schl\xfcssel"),(0,a.kt)("th",{parentName:"tr",align:null},"Wert"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"0"),(0,a.kt)("td",{parentName:"tr",align:null},"Butter"),(0,a.kt)("td",{parentName:"tr",align:null},"3")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"2"),(0,a.kt)("td",{parentName:"tr",align:null},"Brot"),(0,a.kt)("td",{parentName:"tr",align:null},"9")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"13"),(0,a.kt)("td",{parentName:"tr",align:null},"Milch"),(0,a.kt)("td",{parentName:"tr",align:null},"2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"14"),(0,a.kt)("td",{parentName:"tr",align:null},"Eier"),(0,a.kt)("td",{parentName:"tr",align:null},"5")))),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeMap<K, V>")," implementiert den Assoziativspeicher in Form eines Bin\xe4rbaumes. Als Datenstruktur wird dabei ein balancierter Baum verwendet, d.h. spezielle Einf\xfcge- und L\xf6schoperationen stellen sicher, dass der Baum nicht zu einer linearen Liste\nentartet. Da die Paare in einem Bin\xe4rbaum sortiert vorliegen, ist es f\xfcr den Einsatz zwingend erforderlich, dass die Klasse, die den Schl\xfcssel bildet, die Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>")," implementiert hat. Alternativ kann dem Konstruktor der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"TreeMap<K, V>"),"\nein Komparator f\xfcr den Schl\xfcssel mitgegeben werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/178997445-d30d0d12-61e4-4fdc-a2e7-6750384ce8a8.png",alt:"image"})))}u.isMDXComponent=!0}}]);