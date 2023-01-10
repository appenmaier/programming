"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2259],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=o(a),g=n,k=d["".concat(c,".").concat(g)]||d[g]||s[g]||l;return a?r.createElement(k,p(p({ref:t},m),{},{components:a})):r.createElement(k,p({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var o=2;o<l;o++)p[o]=a[o];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>p});var r=a(7294),n=a(6010);const l="tabItem_Ymn6";function p(e){let{children:t,hidden:a,className:p}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(l,p),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(7462),n=a(7294),l=a(6010),p=a(2389),i=a(7392),c=a(7094),o=a(2466);const m="tabList__CuJ",s="tabItem_LNqP";function d(e){var t;const{lazy:a,block:p,defaultValue:d,values:g,groupId:k,className:u}=e,N=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=g??N.map((e=>{let{props:{value:t,label:a,attributes:r}}=e;return{value:t,label:a,attributes:r}})),h=(0,i.l)(b,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=N.find((e=>e.props.default)))?void 0:t.props.value)??N[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:v}=(0,c.U)(),[O,x]=(0,n.useState)(f),T=[],{blockElementScrollPositionUntilNextRender:w}=(0,o.o5)();if(null!=k){const e=y[k];null!=e&&e!==O&&b.some((t=>t.value===e))&&x(e)}const E=e=>{const t=e.currentTarget,a=T.indexOf(t),r=b[a].value;r!==O&&(w(t),x(r),null!=k&&v(k,String(r)))},j=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=T.indexOf(e.currentTarget)+1;a=T[t]??T[0];break}case"ArrowLeft":{const t=T.indexOf(e.currentTarget)-1;a=T[t]??T[T.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,l.Z)("tabs-container",m)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":p},u)},b.map((e=>{let{value:t,label:a,attributes:p}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:O===t?0:-1,"aria-selected":O===t,key:t,ref:e=>T.push(e),onKeyDown:j,onFocus:E,onClick:E},p,{className:(0,l.Z)("tabs__item",s,null==p?void 0:p.className,{"tabs__item--active":O===t})}),a??t)}))),a?(0,n.cloneElement)(N.filter((e=>e.props.value===O))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},N.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==O})))))}function g(e){const t=(0,p.Z)();return n.createElement(d,(0,r.Z)({key:String(t)},e))}},5640:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>c,default:()=>g,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(7462),n=(a(7294),a(3905)),l=a(5488),p=a(5162);const i={title:"Operators03",description:""},c=void 0,o={unversionedId:"exercises/operators/operators03",id:"exercises/operators/operators03",title:"Operators03",description:"",source:"@site/docs/exercises/operators/operators03.md",sourceDirName:"exercises/operators",slug:"/exercises/operators/operators03",permalink:"/programming/exercises/operators/operators03",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/operators/operators03.md",tags:[],version:"current",frontMatter:{title:"Operators03",description:""},sidebar:"exercisesSidebar",previous:{title:"Operators02",permalink:"/programming/exercises/operators/operators02"},next:{title:"Konsolenanwendungen",permalink:"/programming/exercises/console-applications/"}},m={},s=[{value:"Coding",id:"coding",level:2},{value:"L\xf6sung",id:"l\xf6sung",level:2}],d={toc:s};function g(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"),(0,n.kt)("h2",{id:"coding"},"Coding"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'byte a = 116;\nbyte b = 59;\nbyte c, d, e, f;\n\nc = (byte) (a & b);\nd = (byte) (a | b);\ne = (byte) (a ^ b);\nf = (byte) (~a);\n\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("e: " + e);\nSystem.out.println("f: " + f);\n')),(0,n.kt)("h2",{id:"l\xf6sung"},"L\xf6sung"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"116"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"59"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)(l.Z,{mdxType:"Tabs"},(0,n.kt)(p.Z,{value:"c",label:"c",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a & b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"c: 48\n"))),(0,n.kt)(p.Z,{value:"d",label:"d",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a ","|"," b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"d: 127\n"))),(0,n.kt)(p.Z,{value:"e",label:"e",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"a ^ b"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"d: 79\n"))),(0,n.kt)(p.Z,{value:"f",label:"f",mdxType:"TabItem"},(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Berechnung")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"center"},"Dezimal"),(0,n.kt)("th",{parentName:"tr",align:"center"},"128"),(0,n.kt)("th",{parentName:"tr",align:"center"},"64"),(0,n.kt)("th",{parentName:"tr",align:"center"},"32"),(0,n.kt)("th",{parentName:"tr",align:"center"},"16"),(0,n.kt)("th",{parentName:"tr",align:"center"},"8"),(0,n.kt)("th",{parentName:"tr",align:"center"},"4"),(0,n.kt)("th",{parentName:"tr",align:"center"},"2"),(0,n.kt)("th",{parentName:"tr",align:"center"},"1"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"~a"),(0,n.kt)("td",{parentName:"tr",align:"center"},(0,n.kt)("strong",{parentName:"td"},"1")),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"~"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"},"+"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"center"}),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1"),(0,n.kt)("td",{parentName:"tr",align:"center"},"0"),(0,n.kt)("td",{parentName:"tr",align:"center"},"1")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Konsolenausgabe")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"d: -117\n")))))}g.isMDXComponent=!0}}]);