"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8695],{5162:(e,t,s)=>{s.d(t,{Z:()=>n});var a=s(7294),l=s(6010);const r="tabItem_Ymn6";function n(e){let{children:t,hidden:s,className:n}=e;return a.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,n),hidden:s},t)}},5488:(e,t,s)=>{s.d(t,{Z:()=>d});var a=s(7462),l=s(7294),r=s(6010),n=s(2389),o=s(7392),i=s(7094),u=s(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:s,block:n,defaultValue:m,values:d,groupId:b,className:g}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:s,attributes:a}}=e;return{value:t,label:s,attributes:a}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==x&&!v.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,i.U)(),[Z,w]=(0,l.useState)(x),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=E[b];null!=e&&e!==Z&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,s=y.indexOf(t),a=v[s].value;a!==Z&&(N(t),w(a),null!=b&&k(b,String(a)))},j=e=>{var t;let s=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;s=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;s=y[t]??y[y.length-1];break}}null==(t=s)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},g)},v.map((e=>{let{value:t,label:s,attributes:n}=e;return l.createElement("li",(0,a.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>y.push(e),onKeyDown:j,onFocus:T,onClick:T},n,{className:(0,r.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":Z===t})}),s??t)}))),s?(0,l.cloneElement)(h.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function d(e){const t=(0,n.Z)();return l.createElement(m,(0,a.Z)({key:String(t)},e))}},7833:(e,t,s)=>{s.d(t,{Z:()=>i});var a=s(7294),l=s(5488),r=s(5162),n=s(9960),o=s(814);function i(e){let{pullRequest:t,branchSuffix:s}=e;return a.createElement(l.Z,null,a.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},a.createElement(o.Z,{language:"console"},`git switch exercises/${s}`),a.createElement(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(r.Z,{value:"solution",label:"Solution"},a.createElement(o.Z,{language:"console"},`git switch solutions/${s}`),a.createElement(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`},a.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),a.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",a.createElement(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6851:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var a=s(7462),l=(s(7294),s(3905)),r=s(7833);const n={title:"Loops 01"},o=void 0,i={unversionedId:"exercises/control-structures/loops01",id:"exercises/control-structures/loops01",title:"Loops 01",description:"Erstelle eine ausf\xfchrbare Klasse, welche das kleine Einmaleins ausgibt.",source:"@site/docs/exercises/control-structures/loops01.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops01",permalink:"/programming/exercises/control-structures/loops01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/loops01.md",tags:[],version:"current",frontMatter:{title:"Loops 01"},sidebar:"exercisesSidebar",previous:{title:"Cases 06",permalink:"/programming/exercises/control-structures/cases06"},next:{title:"Loops 02",permalink:"/programming/exercises/control-structures/loops02"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function m(e){let{components:t,...s}=e;return(0,l.kt)("wrapper",(0,a.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche das kleine Einmaleins ausgibt."),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"1 x 1 = 1\n2 x 1 = 2\n\u2026\n1 x 2 = 2\n2 x 2 = 4\n\u2026\n9 x 10 = 90\n10 x 10 = 100\n")),(0,l.kt)(r.Z,{pullRequest:"12",branchSuffix:"loops/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);