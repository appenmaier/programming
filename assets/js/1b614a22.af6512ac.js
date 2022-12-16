"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8695],{5162:(e,t,s)=>{s.d(t,{Z:()=>n});var r=s(7294),a=s(6010);const l="tabItem_Ymn6";function n(e){let{children:t,hidden:s,className:n}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,n),hidden:s},t)}},5488:(e,t,s)=>{s.d(t,{Z:()=>d});var r=s(7462),a=s(7294),l=s(6010),n=s(2389),o=s(7392),i=s(7094),u=s(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:s,block:n,defaultValue:m,values:d,groupId:b,className:g}=e,v=a.Children.map(e.children,(e=>{if((0,a.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??v.map((e=>{let{props:{value:t,label:s,attributes:r}}=e;return{value:t,label:s,attributes:r}})),f=(0,o.l)(h,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const x=null===m?m:m??(null==(t=v.find((e=>e.props.default)))?void 0:t.props.value)??v[0].props.value;if(null!==x&&!h.some((e=>e.value===x)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${x}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,i.U)(),[Z,w]=(0,a.useState)(x),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=E[b];null!=e&&e!==Z&&h.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,s=y.indexOf(t),r=h[s].value;r!==Z&&(N(t),w(r),null!=b&&k(b,String(r)))},j=e=>{var t;let s=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;s=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;s=y[t]??y[y.length-1];break}}null==(t=s)||t.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",c)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},g)},h.map((e=>{let{value:t,label:s,attributes:n}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>y.push(e),onKeyDown:j,onFocus:T,onClick:T},n,{className:(0,l.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":Z===t})}),s??t)}))),s?(0,a.cloneElement)(v.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},v.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function d(e){const t=(0,n.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},7833:(e,t,s)=>{s.d(t,{Z:()=>i});var r=s(7294),a=s(5488),l=s(5162),n=s(9960),o=s(814);function i(e){let{pullRequest:t,branchSuffix:s}=e;return r.createElement(a.Z,null,r.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(o.Z,{language:"console"},`git switch exercises/${s}`),r.createElement(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${s}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(l.Z,{value:"solution",label:"Solution"},r.createElement(o.Z,{language:"console"},`git switch solutions/${s}`),r.createElement(n.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${s}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",r.createElement(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6851:(e,t,s)=>{s.r(t),s.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var r=s(7462),a=(s(7294),s(3905)),l=s(7833);const n={title:"Loops01",description:""},o=void 0,i={unversionedId:"exercises/control-structures/loops01",id:"exercises/control-structures/loops01",title:"Loops01",description:"",source:"@site/docs/exercises/control-structures/loops01.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops01",permalink:"/programming/exercises/control-structures/loops01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/loops01.md",tags:[],version:"current",frontMatter:{title:"Loops01",description:""},sidebar:"exercisesSidebar",previous:{title:"Cases06",permalink:"/programming/exercises/control-structures/cases06"},next:{title:"Loops02",permalink:"/programming/exercises/control-structures/loops02"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function m(e){let{components:t,...s}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche das kleine Einmaleins ausgibt."),(0,a.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-console"},"1 x 1 = 1\n2 x 1 = 2\n\u2026\n1 x 2 = 2\n2 x 2 = 4\n\u2026\n9 x 10 = 90\n10 x 10 = 100\n")),(0,a.kt)(l.Z,{pullRequest:"12",branchSuffix:"loops/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);