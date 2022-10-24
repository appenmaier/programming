"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8695],{5162:(e,t,s)=>{s.d(t,{Z:()=>n});var l=s(7294),r=s(6010);const a="tabItem_Ymn6";function n(e){let{children:t,hidden:s,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,n),hidden:s},t)}},5488:(e,t,s)=>{s.d(t,{Z:()=>m});var l=s(7462),r=s(7294),a=s(6010),n=s(2389),o=s(7392),u=s(7094),i=s(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:s,block:n,defaultValue:d,values:m,groupId:b,className:v}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??g.map((e=>{let{props:{value:t,label:s,attributes:l}}=e;return{value:t,label:s,attributes:l}})),f=(0,o.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==x&&!h.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,u.U)(),[w,Z]=(0,r.useState)(x),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,i.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&h.some((t=>t.value===e))&&Z(e)}const T=e=>{const t=e.currentTarget,s=y.indexOf(t),l=h[s].value;l!==w&&(N(t),Z(l),null!=b&&E(b,String(l)))},C=e=>{var t;let s=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;s=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;s=y[t]??y[y.length-1];break}}null==(t=s)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},v)},h.map((e=>{let{value:t,label:s,attributes:n}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>y.push(e),onKeyDown:C,onFocus:T,onClick:T},n,{className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":w===t})}),s??t)}))),s?(0,r.cloneElement)(g.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,n.Z)();return r.createElement(d,(0,l.Z)({key:String(t)},e))}},7833:(e,t,s)=>{s.d(t,{Z:()=>u});var l=s(7294),r=s(5488),a=s(5162),n=s(9960),o=s(814);function u(e){let{pullRequest:t,branchSuffix:s}=e;return l.createElement(r.Z,null,l.createElement(a.Z,{value:"exercise",label:"Exercise",default:!0},l.createElement(o.Z,{language:"console"},`git switch exercises/${s}`)),l.createElement(a.Z,{value:"solution",label:"Solution"},l.createElement(o.Z,{language:"console"},`git switch solutions/${s}`)),l.createElement(a.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",l.createElement(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6851:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var l=s(7462),r=(s(7294),s(3905)),a=s(7833);const n={title:"Loops 01"},o=void 0,u={unversionedId:"exercises/control-structures/loops01",id:"exercises/control-structures/loops01",title:"Loops 01",description:"Erstelle eine ausf\xfchrbare Klasse, welche das kleine Einmaleins ausgibt.",source:"@site/docs/exercises/control-structures/loops01.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops01",permalink:"/programming/docs/exercises/control-structures/loops01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/loops01.md",tags:[],version:"current",frontMatter:{title:"Loops 01"},sidebar:"exercisesSidebar",previous:{title:"Cases 06",permalink:"/programming/docs/exercises/control-structures/cases06"},next:{title:"Loops 02",permalink:"/programming/docs/exercises/control-structures/loops02"}},i={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function d(e){let{components:t,...s}=e;return(0,r.kt)("wrapper",(0,l.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche das kleine Einmaleins ausgibt."),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"1 x 1 = 1\n2 x 1 = 2\n\u2026\n1 x 2 = 2\n2 x 2 = 4\n\u2026\n9 x 10 = 90\n10 x 10 = 100\n")),(0,r.kt)(a.Z,{pullRequest:"12",branchSuffix:"loops/01",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);