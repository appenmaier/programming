"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[1999],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>p});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var m=r.createContext({}),u=function(e){var t=r.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(m.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,m=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),d=u(n),p=i,g=d["".concat(m,".").concat(p)]||d[p]||c[p]||a;return n?r.createElement(g,o(o({ref:t},s),{},{components:n})):r.createElement(g,o({ref:t},s))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var r=n(7462),i=(n(7294),n(3905));const a={title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:20,tags:["uml","aktivit\xe4tsdiagramm"]},o=void 0,l={unversionedId:"documentation/uml/activity-diagrams",id:"documentation/uml/activity-diagrams",title:"Aktivit\xe4tsdiagramme",description:"",source:"@site/docs/documentation/uml/activity-diagrams.md",sourceDirName:"documentation/uml",slug:"/documentation/uml/activity-diagrams",permalink:"/programming/documentation/uml/activity-diagrams",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/uml/activity-diagrams.md",tags:[{label:"uml",permalink:"/programming/tags/uml"},{label:"aktivit\xe4tsdiagramm",permalink:"/programming/tags/aktivitatsdiagramm"}],version:"current",sidebarPosition:20,frontMatter:{title:"Aktivit\xe4tsdiagramme",description:"",sidebar_position:20,tags:["uml","aktivit\xe4tsdiagramm"]},sidebar:"documentationSidebar",previous:{title:"Klassendiagramme",permalink:"/programming/documentation/uml/class-diagrams"},next:{title:"Vererbung",permalink:"/programming/documentation/inheritance"}},m={},u=[],s={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Aktivit\xe4tsdiagramme sind ein Diagrammtyp der UML und geh\xf6ren dort zum Bereich der Verhaltensdiagramme. Der Fokus von Aktivit\xe4tsdiagrammen liegt auf imperativen Verarbeitungsaspekten. Eine Aktivit\xe4t stellt einen gerichteten Graphen dar, der \xfcber Knoten (Aktionen,\nDatenknoten und Kontrollknoten) und Kanten (Kontrollfl\xfcsse und Datenfl\xfcsse) verf\xfcgt:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Aktionen sind elementare Bausteine f\xfcr beliebiges, benutzerdefiniertes Verhalten"),(0,i.kt)("li",{parentName:"ul"},"Kontrollknoten steuern den Kontroll- und Datenfluss in einer Aktivit\xe4t:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Startknoten: legen den Beginn der Aktivit\xe4t fest"),(0,i.kt)("li",{parentName:"ul"},"Endknoten: legen das Ende der Aktivit\xe4t fest"),(0,i.kt)("li",{parentName:"ul"},"Ablaufendknoten: legen das Ende eines Ablaufes fest"),(0,i.kt)("li",{parentName:"ul"},"Verzweigungsknoten: erm\xf6glichen die Verzweigung von Abl\xe4ufen"),(0,i.kt)("li",{parentName:"ul"},"Zusammenf\xfchrungsknoten: erm\xf6glichen die Zusammenf\xfchrung von Abl\xe4ufen"))),(0,i.kt)("li",{parentName:"ul"},"Datenknoten sind Hilfsknoten, die als ein- oder ausgehende Parameter einer Aktion verwendet werden k\xf6nnen"),(0,i.kt)("li",{parentName:"ul"},"Kontroll- und Datenfl\xfcsse legen Abl\xe4ufe zwischen Vorg\xe4nger- und Nachfolger-Knoten fest")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170695263-f09e5299-bfcd-4b7d-a28e-65a78481e6c0.png",alt:"image"})))}c.isMDXComponent=!0}}]);