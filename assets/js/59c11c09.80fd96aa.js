"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[3759],{3905:(e,t,a)=>{a.d(t,{Zo:()=>o,kt:()=>g});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},o=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),p=m(a),g=r,b=p["".concat(s,".").concat(g)]||p[g]||c[g]||i;return a?n.createElement(b,u(u({ref:t},o),{},{components:a})):n.createElement(b,u({ref:t},o))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,u=new Array(i);u[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var m=2;m<i;m++)u[m]=a[m];return n.createElement.apply(null,u)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},2991:(e,t,a)=>{a.d(t,{Z:()=>v});var n=a(7294),r=a(6010),i=a(3438),u=a(9960),l=a(3919),s=a(5999);const m="cardContainer_fWXF",o="cardTitle_rnsV",c="cardDescription_PWke";function p(e){let{href:t,children:a}=e;return n.createElement(u.Z,{href:t,className:(0,r.Z)("card padding--lg",m)},a)}function g(e){let{href:t,icon:a,title:i,description:u}=e;return n.createElement(p,{href:t},n.createElement("h2",{className:(0,r.Z)("text--truncate",o),title:i},a," ",i),u&&n.createElement("p",{className:(0,r.Z)("text--truncate",c),title:u},u))}function b(e){let{item:t}=e;const a=(0,i.Wl)(t);return a?n.createElement(g,{href:a,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function f(e){let{item:t}=e;const a=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return n.createElement(g,{href:t.href,icon:a,title:t.label,description:null==r?void 0:r.description})}function h(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(f,{item:t});case"category":return n.createElement(b,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function d(e){let{className:t}=e;const a=(0,i.jA)();return n.createElement(v,{items:a.items,className:t})}function v(e){const{items:t,className:a}=e;if(!t)return n.createElement(d,e);const u=(0,i.MN)(t);return n.createElement("section",{className:(0,r.Z)("row",a)},u.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},8717:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>u,metadata:()=>s,toc:()=>o});var n=a(7462),r=(a(7294),a(3905)),i=a(2991);const u={title:"Die Java Stream API",description:"",sidebar_position:200},l=void 0,s={unversionedId:"exercises/java-stream-api/java-stream-api",id:"exercises/java-stream-api/java-stream-api",title:"Die Java Stream API",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api.md",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/",permalink:"/programming/exercises/java-stream-api/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/java-stream-api/java-stream-api.md",tags:[],version:"current",sidebarPosition:200,frontMatter:{title:"Die Java Stream API",description:"",sidebar_position:200},sidebar:"exercisesSidebar",previous:{title:"\xdcbungsaufgabe Maps01",permalink:"/programming/exercises/maps/maps01"},next:{title:"\xdcbungsaufgabe JavaStreamAPI01",permalink:"/programming/exercises/java-stream-api/java-stream-api01"}},m={},o=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],c={toc:o};function p(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,r.kt)(i.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_heldenepos_stream_api_kennenlernen"},"II-5-1.1.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_den_geliebten_captain_aus_einer_liste_ermitteln"},"II-5-1.1.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_bilder_einrahmen"},"II-5-1.1.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_schau_und_sag"},"II-5-1.1.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_doppelte_inseln_mit_metallen_der_seltenen_erden_entfernen"},"II-5-1.1.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_wo_gibt_es_die_segel"},"II-5-1.1.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_das_beliebteste_auto_kaufen"},"II-5-1.1.7")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_nan_in_einem_array_erkennen"},"II-5-1.2.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_jahrzehnte_erzeugen"},"II-5-1.2.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_array_mit_konstantem_inhalt_%C3%BCber_stream_erzeugen"},"II-5-1.2.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_pyramiden_zeichnen"},"II-5-1.2.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_buchstabenh%C3%A4ufigkeit_eines_strings_ermitteln"},"II-5-1.2.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_von_1_auf_0_von_10_auf_9"},"II-5-1.2.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_zwei_int_arrays_zusammenf%C3%BChren"},"II-5-1.2.7")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_gewinnkombinationen_ermitteln"},"II-5-1.2.8")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_die_schnellsten_und_langsamsten_paddler"},"II-5-1.3.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_median_berechnen"},"II-5-1.3.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_temperaturstatistiken_berechnen_und_charts_zeichnen"},"II-5-1.3.3"))))}p.isMDXComponent=!0}}]);