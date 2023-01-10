"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4690],{3905:(e,t,n)=>{n.d(t,{Zo:()=>i,kt:()=>d});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},i=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,u=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,b=m["".concat(u,".").concat(d)]||m[d]||p[d]||l;return n?r.createElement(b,o(o({ref:t},i),{},{components:n})):r.createElement(b,o({ref:t},i))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var c=2;c<l;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294),a=n(6010);const l="tabItem_Ymn6";function o(e){let{children:t,hidden:n,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,o),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>d});var r=n(7462),a=n(7294),l=n(6010),o=n(2389),s=n(7392),u=n(7094),c=n(2466);const i="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:n,block:o,defaultValue:m,values:d,groupId:b,className:g}=e,f=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??f.map((e=>{let{props:{value:t,label:n,attributes:r}}=e;return{value:t,label:n,attributes:r}})),y=(0,s.l)(v,((e,t)=>e.value===t.value));if(y.length>0)throw new Error(`Docusaurus error: Duplicate values "${y.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=f.find((e=>e.props.default)))?void 0:t.props.value)??f[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:h,setTabGroupChoices:T}=(0,u.U)(),[N,x]=(0,a.useState)(k),O=[],{blockElementScrollPositionUntilNextRender:w}=(0,c.o5)();if(null!=b){const e=h[b];null!=e&&e!==N&&v.some((t=>t.value===e))&&x(e)}const j=e=>{const t=e.currentTarget,n=O.indexOf(t),r=v[n].value;r!==N&&(w(t),x(r),null!=b&&T(b,String(r)))},E=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=O.indexOf(e.currentTarget)+1;n=O[t]??O[0];break}case"ArrowLeft":{const t=O.indexOf(e.currentTarget)-1;n=O[t]??O[O.length-1];break}}null==(t=n)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",i)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":o},g)},v.map((e=>{let{value:t,label:n,attributes:o}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:N===t?0:-1,"aria-selected":N===t,key:t,ref:e=>O.push(e),onKeyDown:E,onFocus:j,onClick:j},o,{className:(0,l.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":N===t})}),n??t)}))),n?(0,a.cloneElement)(f.filter((e=>e.props.value===N))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},f.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==N})))))}function d(e){const t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},6513:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>u,default:()=>d,frontMatter:()=>s,metadata:()=>c,toc:()=>p});var r=n(7462),a=(n(7294),n(3905)),l=n(5488),o=n(5162);const s={title:"Cases05",description:""},u=void 0,c={unversionedId:"exercises/control-structures/cases05",id:"exercises/control-structures/cases05",title:"Cases05",description:"",source:"@site/docs/exercises/control-structures/cases05.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/cases05",permalink:"/programming/exercises/control-structures/cases05",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/cases05.md",tags:[],version:"current",frontMatter:{title:"Cases05",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases04",permalink:"/programming/exercises/control-structures/cases04"},next:{title:"Cases06",permalink:"/programming/exercises/control-structures/cases06"}},i={},p=[{value:"Coding",id:"coding",level:2},{value:"L\xf6sung",id:"l\xf6sung",level:2}],m={toc:p};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Welche Ausgabe erwartest Du nach Ablauf des abgebildeten Codings?"),(0,a.kt)("h2",{id:"coding"},"Coding"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'int a = 5;\nint b = 5;\nboolean c = true;\nboolean d = true;\nboolean e;\nint f = 5;\nint g = 3;\nint h = 2;\nint i = 4;\nint j = 0;\n\ne = c && (a > 2 ? (b == (a = a * 2)) : d);\nj += ((h < ((f - g == 3) ? 3 : 2)) && (i < 5)) ? 1 : 2;\n\nSystem.out.println("a: " + a);\nSystem.out.println("b: " + b);\nSystem.out.println("c: " + c);\nSystem.out.println("d: " + d);\nSystem.out.println("e: " + e);\nSystem.out.println("f: " + f);\nSystem.out.println("g: " + g);\nSystem.out.println("h: " + h);\nSystem.out.println("i: " + i);\nSystem.out.println("j: " + j);\n')),(0,a.kt)("h2",{id:"l\xf6sung"},"L\xf6sung"),(0,a.kt)(l.Z,{mdxType:"Tabs"},(0,a.kt)(o.Z,{value:"a",label:"a",default:!0,mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"a: 10\n"))),(0,a.kt)(o.Z,{value:"b",label:"b",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"b: 5\n"))),(0,a.kt)(o.Z,{value:"c",label:"c",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"c: true\n"))),(0,a.kt)(o.Z,{value:"d",label:"d",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"d: true\n"))),(0,a.kt)(o.Z,{value:"e",label:"e",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"e: false\n"))),(0,a.kt)(o.Z,{value:"f",label:"f",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"f: 5\n"))),(0,a.kt)(o.Z,{value:"g",label:"g",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"g: 3\n"))),(0,a.kt)(o.Z,{value:"h",label:"h",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"h: 2\n"))),(0,a.kt)(o.Z,{value:"i",label:"i",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"i: 4\n"))),(0,a.kt)(o.Z,{value:"j",label:"j",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"j: 2\n")))))}d.isMDXComponent=!0}}]);