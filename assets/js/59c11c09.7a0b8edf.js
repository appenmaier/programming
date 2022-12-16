"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[3759],{3905:(e,a,t)=>{t.d(a,{Zo:()=>o,kt:()=>g});var n=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function i(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function u(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?i(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),m=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):u(u({},a),e)),t},o=function(e){var a=m(e.components);return n.createElement(s.Provider,{value:a},e.children)},p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},c=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,o=l(e,["components","mdxType","originalType","parentName"]),c=m(t),g=r,b=c["".concat(s,".").concat(g)]||c[g]||p[g]||i;return t?n.createElement(b,u(u({ref:a},o),{},{components:t})):n.createElement(b,u({ref:a},o))}));function g(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var i=t.length,u=new Array(i);u[0]=c;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,u[1]=l;for(var m=2;m<i;m++)u[m]=t[m];return n.createElement.apply(null,u)}return n.createElement.apply(null,t)}c.displayName="MDXCreateElement"},2991:(e,a,t)=>{t.d(a,{Z:()=>v});var n=t(7294),r=t(6010),i=t(3438),u=t(9960),l=t(3919),s=t(5999);const m="cardContainer_fWXF",o="cardTitle_rnsV",p="cardDescription_PWke";function c(e){let{href:a,children:t}=e;return n.createElement(u.Z,{href:a,className:(0,r.Z)("card padding--lg",m)},t)}function g(e){let{href:a,icon:t,title:i,description:u}=e;return n.createElement(c,{href:a},n.createElement("h2",{className:(0,r.Z)("text--truncate",o),title:i},t," ",i),u&&n.createElement("p",{className:(0,r.Z)("text--truncate",p),title:u},u))}function b(e){let{item:a}=e;const t=(0,i.Wl)(a);return t?n.createElement(g,{href:t,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function f(e){let{item:a}=e;const t=(0,l.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(a.docId??void 0);return n.createElement(g,{href:a.href,icon:t,title:a.label,description:null==r?void 0:r.description})}function h(e){let{item:a}=e;switch(a.type){case"link":return n.createElement(f,{item:a});case"category":return n.createElement(b,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function d(e){let{className:a}=e;const t=(0,i.jA)();return n.createElement(v,{items:t.items,className:a})}function v(e){const{items:a,className:t}=e;if(!a)return n.createElement(d,e);const u=(0,i.MN)(a);return n.createElement("section",{className:(0,r.Z)("row",t)},u.map(((e,a)=>n.createElement("article",{key:a,className:"col col--6 margin-bottom--lg"},n.createElement(h,{item:e})))))}},8717:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>m,contentTitle:()=>l,default:()=>c,frontMatter:()=>u,metadata:()=>s,toc:()=>o});var n=t(7462),r=(t(7294),t(3905)),i=t(2991);const u={title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},l=void 0,s={unversionedId:"exercises/java-stream-api/java-stream-api",id:"exercises/java-stream-api/java-stream-api",title:"Die Java Stream API",description:"",source:"@site/docs/exercises/java-stream-api/java-stream-api.md",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/",permalink:"/programming/exercises/java-stream-api/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/java-stream-api/java-stream-api.md",tags:[{label:"java-stream-api",permalink:"/programming/tags/java-stream-api"}],version:"current",sidebarPosition:200,frontMatter:{title:"Die Java Stream API",description:"",sidebar_position:200,tags:["java-stream-api"]},sidebar:"exercisesSidebar",previous:{title:"Maps01",permalink:"/programming/exercises/maps/maps01"},next:{title:"JavaStreamAPI01",permalink:"/programming/exercises/java-stream-api/java-stream-api01"}},m={},o=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2}],p={toc:o};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,r.kt)(i.Z,{mdxType:"DocCardList"}),(0,r.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_heldenepos_stream_api_kennenlernen"},"II-5-1.1.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_den_geliebten_captain_aus_einer_liste_ermitteln"},"II-5-1.1.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_bilder_einrahmen"},"II-5-1.1.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_schau_und_sag"},"II-5-1.1.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_doppelte_inseln_mit_metallen_der_seltenen_erden_entfernen"},"II-5-1.1.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_wo_gibt_es_die_segel"},"II-5-1.1.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_das_beliebteste_auto_kaufen"},"II-5-1.1.7")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_nan_in_einem_array_erkennen"},"II-5-1.2.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_jahrzehnte_erzeugen"},"II-5-1.2.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_array_mit_konstantem_inhalt_%C3%BCber_stream_erzeugen"},"II-5-1.2.3")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_pyramiden_zeichnen"},"II-5-1.2.4")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_buchstabenh%C3%A4ufigkeit_eines_strings_ermitteln"},"II-5-1.2.5")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_von_1_auf_0_von_10_auf_9"},"II-5-1.2.6")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_zwei_int_arrays_zusammenf%C3%BChren"},"II-5-1.2.7")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_gewinnkombinationen_ermitteln"},"II-5-1.2.8")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_die_schnellsten_und_langsamsten_paddler"},"II-5-1.3.1")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_median_berechnen"},"II-5-1.3.2")),(0,r.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,r.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/java.util.stream-api.html#_temperaturstatistiken_berechnen_und_charts_zeichnen"},"II-5-1.3.3"))))}c.isMDXComponent=!0}}]);