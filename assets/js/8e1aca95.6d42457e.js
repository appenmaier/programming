"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[5436],{5162:(e,t,s)=>{s.d(t,{Z:()=>l});var a=s(7294),r=s(6010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:s,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,l),hidden:s},t)}},5488:(e,t,s)=>{s.d(t,{Z:()=>p});var a=s(7462),r=s(7294),n=s(6010),l=s(2389),o=s(7392),u=s(7094),i=s(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var t;const{lazy:s,block:l,defaultValue:m,values:p,groupId:b,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=p??g.map((e=>{let{props:{value:t,label:s,attributes:a}}=e;return{value:t,label:s,attributes:a}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:x}=(0,u.U)(),[Z,w]=(0,r.useState)(k),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=b){const e=E[b];null!=e&&e!==Z&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,s=y.indexOf(t),a=v[s].value;a!==Z&&(N(t),w(a),null!=b&&x(b,String(a)))},C=e=>{var t;let s=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;s=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;s=y[t]??y[y.length-1];break}}null==(t=s)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},h)},v.map((e=>{let{value:t,label:s,attributes:l}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>y.push(e),onKeyDown:C,onFocus:T,onClick:T},l,{className:(0,n.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":Z===t})}),s??t)}))),s?(0,r.cloneElement)(g.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function p(e){const t=(0,l.Z)();return r.createElement(m,(0,a.Z)({key:String(t)},e))}},7833:(e,t,s)=>{s.d(t,{Z:()=>u});var a=s(7294),r=s(5488),n=s(5162),l=s(9960),o=s(814);function u(e){let{pullRequest:t,branchSuffix:s}=e;return a.createElement(r.Z,null,a.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(o.Z,{language:"console"},`git switch exercises/${s}`)),a.createElement(n.Z,{value:"solution",label:"Solution"},a.createElement(o.Z,{language:"console"},`git switch solutions/${s}`)),a.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",a.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},7926:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var a=s(7462),r=(s(7294),s(3905)),n=s(7833);const l={title:"Cases 01"},o=void 0,u={unversionedId:"exercises/control-structures/cases01",id:"exercises/control-structures/cases01",title:"Cases 01",description:"Erstelle eine ausf\xfchrbare Klasse, welche eine Ganzzahl von der Konsole einliest",source:"@site/docs/exercises/control-structures/cases01.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/cases01",permalink:"/programming/docs/exercises/control-structures/cases01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/cases01.md",tags:[],version:"current",frontMatter:{title:"Cases 01"},sidebar:"exercisesSidebar",previous:{title:"Kontrollstrukturen",permalink:"/programming/docs/exercises/control-structures/"},next:{title:"Cases 02",permalink:"/programming/docs/exercises/control-structures/cases02"}},i={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c};function m(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche eine Ganzzahl von der Konsole einliest\nund auf der Konsole ausgibt, ob es sich um eine gerade oder ungerade Zahl handelt."),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte eine ganze Zahl ein: 5\nErgebnis: Die eingegebene Zahl ist ungerade\n")),(0,r.kt)(n.Z,{pullRequest:"7",branchSuffix:"cases/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);