"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[1115],{5162:(e,t,r)=>{r.d(t,{Z:()=>n});var l=r(7294),s=r(6010);const a="tabItem_Ymn6";function n(e){let{children:t,hidden:r,className:n}=e;return l.createElement("div",{role:"tabpanel",className:(0,s.Z)(a,n),hidden:r},t)}},5488:(e,t,r)=>{r.d(t,{Z:()=>d});var l=r(7462),s=r(7294),a=r(6010),n=r(2389),o=r(7392),i=r(7094),u=r(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:r,block:n,defaultValue:m,values:d,groupId:b,className:h}=e,g=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??g.map((e=>{let{props:{value:t,label:r,attributes:l}}=e;return{value:t,label:r,attributes:l}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===m?m:m??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==E&&!v.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[Z,w]=(0,s.useState)(E),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=k[b];null!=e&&e!==Z&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,r=y.indexOf(t),l=v[r].value;l!==Z&&(N(t),w(l),null!=b&&x(b,String(l)))},L=e=>{var t;let r=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;r=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;r=y[t]??y[y.length-1];break}}null==(t=r)||t.focus()};return s.createElement("div",{className:(0,a.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},h)},v.map((e=>{let{value:t,label:r,attributes:n}=e;return s.createElement("li",(0,l.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>y.push(e),onKeyDown:L,onFocus:T,onClick:T},n,{className:(0,a.Z)("tabs__item",p,null==n?void 0:n.className,{"tabs__item--active":Z===t})}),r??t)}))),r?(0,s.cloneElement)(g.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function d(e){const t=(0,n.Z)();return s.createElement(m,(0,l.Z)({key:String(t)},e))}},7833:(e,t,r)=>{r.d(t,{Z:()=>i});var l=r(7294),s=r(5488),a=r(5162),n=r(9960),o=r(814);function i(e){let{pullRequest:t,branchSuffix:r}=e;return l.createElement(s.Z,null,l.createElement(a.Z,{value:"exercise",label:"Exercise",default:!0},l.createElement(o.Z,{language:"console"},`git switch exercises/${r}`)),l.createElement(a.Z,{value:"solution",label:"Solution"},l.createElement(o.Z,{language:"console"},`git switch solutions/${r}`)),l.createElement(a.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",l.createElement(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},5300:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>n,metadata:()=>i,toc:()=>c});var l=r(7462),s=(r(7294),r(3905)),a=r(7833);const n={title:"Loops 02"},o=void 0,i={unversionedId:"exercises/control-structures/loops02",id:"exercises/control-structures/loops02",title:"Loops 02",description:"Erstelle eine ausf\xfchrbare Klasse, welche ermittelt, ob es sich bei einer",source:"@site/docs/exercises/control-structures/loops02.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops02",permalink:"/programming/docs/exercises/control-structures/loops02",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/loops02.md",tags:[],version:"current",frontMatter:{title:"Loops 02"},sidebar:"exercisesSidebar",previous:{title:"Loops 01",permalink:"/programming/docs/exercises/control-structures/loops01"},next:{title:"Loops 03",permalink:"/programming/docs/exercises/control-structures/loops03"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function m(e){let{components:t,...r}=e;return(0,s.kt)("wrapper",(0,l.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche ermittelt, ob es sich bei einer\neingegebenen Zahl um eine Primzahl handelt oder nicht."),(0,s.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte eine ganze Zahl ein 13\nErgebnis: Die eingegebene Zahl ist eine Primzahl\n")),(0,s.kt)(a.Z,{pullRequest:"13",branchSuffix:"loops/02",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);