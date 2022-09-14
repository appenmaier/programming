"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[88],{3905:(e,a,t)=>{t.d(a,{Zo:()=>g,kt:()=>p});var r=t(7294);function n(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function u(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?u(Object(t),!0).forEach((function(a){n(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,r,n=function(e,a){if(null==e)return{};var t,r,n={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,a);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var s=r.createContext({}),o=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},g=function(e){var a=o(e.components);return r.createElement(s.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},b=r.forwardRef((function(e,a){var t=e.components,n=e.mdxType,u=e.originalType,s=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),b=o(t),p=n,c=b["".concat(s,".").concat(p)]||b[p]||m[p]||u;return t?r.createElement(c,i(i({ref:a},g),{},{components:t})):r.createElement(c,i({ref:a},g))}));function p(e,a){var t=arguments,n=a&&a.mdxType;if("string"==typeof e||n){var u=t.length,i=new Array(u);i[0]=b;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:n,i[1]=l;for(var o=2;o<u;o++)i[o]=t[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}b.displayName="MDXCreateElement"},2991:(e,a,t)=>{t.d(a,{Z:()=>k});var r=t(7294),n=t(6010),u=t(2802),i=t(9960),l=t(3919),s=t(5999);const o="cardContainer_fWXF",g="cardTitle_rnsV",m="cardDescription_PWke";function b(e){let{href:a,children:t}=e;return r.createElement(i.Z,{href:a,className:(0,n.Z)("card padding--lg",o)},t)}function p(e){let{href:a,icon:t,title:u,description:i}=e;return r.createElement(b,{href:a},r.createElement("h2",{className:(0,n.Z)("text--truncate",g),title:u},t," ",u),i&&r.createElement("p",{className:(0,n.Z)("text--truncate",m),title:i},i))}function c(e){let{item:a}=e;const t=(0,u.Wl)(a);return t?r.createElement(p,{href:t,icon:"\ud83d\uddc3\ufe0f",title:a.label,description:(0,s.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:a.items.length})}):null}function f(e){let{item:a}=e;const t=(0,l.Z)(a.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",n=(0,u.xz)(a.docId??void 0);return r.createElement(p,{href:a.href,icon:t,title:a.label,description:null==n?void 0:n.description})}function d(e){let{item:a}=e;switch(a.type){case"link":return r.createElement(f,{item:a});case"category":return r.createElement(c,{item:a});default:throw new Error(`unknown item type ${JSON.stringify(a)}`)}}function h(e){let{className:a}=e;const t=(0,u.jA)();return r.createElement(k,{items:t.items,className:a})}function k(e){const{items:a,className:t}=e;if(!a)return r.createElement(h,e);const i=(0,u.MN)(a);return r.createElement("section",{className:(0,n.Z)("row",t)},i.map(((e,a)=>r.createElement("article",{key:a,className:"col col--6 margin-bottom--lg"},r.createElement(d,{item:e})))))}},9109:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>l,default:()=>b,frontMatter:()=>i,metadata:()=>s,toc:()=>g});var r=t(7462),n=(t(7294),t(3905)),u=t(2991);const i={title:"Felder (Arrays)",description:"",sidebar_position:70},l=void 0,s={unversionedId:"exercises/arrays/arrays",id:"exercises/arrays/arrays",title:"Felder (Arrays)",description:"",source:"@site/docs/exercises/arrays/arrays.md",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/",permalink:"/programming/docs/exercises/arrays/",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/arrays/arrays.md",tags:[],version:"current",sidebarPosition:70,frontMatter:{title:"Felder (Arrays)",description:"",sidebar_position:70},sidebar:"tutorialSidebar",previous:{title:"\xdcbungsaufgabe Loops06",permalink:"/programming/docs/exercises/control-structures/loops06"},next:{title:"\xdcbungsaufgabe Arrays01",permalink:"/programming/docs/exercises/arrays/arrays01"}},o={},g=[{value:"\xdcbungsaufgaben",id:"\xfcbungsaufgaben",level:2},{value:"\xdcbungsaufgaben von tutego.de",id:"\xfcbungsaufgaben-von-tutegode",level:2},{value:"\xdcbungsaufgaben der Uni Koblenz-Landau",id:"\xfcbungsaufgaben-der-uni-koblenz-landau",level:2},{value:"\xdcbungsaufgaben der Technischen Hochschule Ulm",id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm",level:2}],m={toc:g};function b(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\xfcbungsaufgaben"},"\xdcbungsaufgaben"),(0,n.kt)(u.Z,{mdxType:"DocCardList"}),(0,n.kt)("h2",{id:"\xfcbungsaufgaben-von-tutegode"},"\xdcbungsaufgaben von tutego.de"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_arrays_ablaufen_und_windgeschwindigkeit_windrichtung_ausgeben"},"I-4-1.1.1")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_konstante_umsatzsteigerung_feststellen"},"I-4-1.1.2")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_aufeinanderfolgende_strings_suchen_und_feststellen_ob_salty_snook_kommt"},"I-4-1.1.3")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_array_umdrehen"},"I-4-1.1.4")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_das_n%C3%A4chste_kino_finden"},"I-4-1.1.5")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_s%C3%BC%C3%9Figkeitenladen_%C3%BCberfallen_und_fair_aufteilen"},"I-4-1.1.6")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_berge_zeichnen"},"I-4-1.2.1")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_auf_zustimmung_pr%C3%BCfen"},"I-4-1.4.2")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://tutego.de/javabuch/aufgaben/array.html#_hilfe_tetraphobie_alle_vieren_nach_hinten_setzen"},"I-4-1.4.3"))),(0,n.kt)("h2",{id:"\xfcbungsaufgaben-der-uni-koblenz-landau"},"\xdcbungsaufgaben der Uni Koblenz-Landau"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E1")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E2")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E3")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E4")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E5")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E6")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E7")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E8")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://www.uni-koblenz-landau.de/de/koblenz/fb4/ist/rgebert/teaching/SS08/java-programming/programmieraufgaben.pdf/view"},"E9"))),(0,n.kt)("h2",{id:"\xfcbungsaufgaben-der-technischen-hochschule-ulm"},"\xdcbungsaufgaben der Technischen Hochschule Ulm"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Felder01")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Felder02")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Felder03")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Felder04")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Felder05")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Felder06")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Methoden01")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Methoden02")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Methoden03")),(0,n.kt)("li",{parentName:"ul"},"\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"https://studium.hs-ulm.de/de/org/I/vorkurse/Documents/java_aufgaben.pdf"},"Methoden04"))))}b.isMDXComponent=!0}}]);