"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[3750],{5162:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(6010);const s="tabItem_Ymn6";function o(e){let{children:t,hidden:a,className:o}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,o),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var n=a(7462),l=a(7294),s=a(6010),o=a(2389),i=a(7392),r=a(7094),c=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:o,defaultValue:d,values:m,groupId:b,className:g}=e,h=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),f=(0,i.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===d?d:d??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==E&&!v.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,r.U)(),[w,Z]=(0,l.useState)(E),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,c.o5)();if(null!=b){const e=x[b];null!=e&&e!==w&&v.some((t=>t.value===e))&&Z(e)}const T=e=>{const t=e.currentTarget,a=y.indexOf(t),n=v[a].value;n!==w&&(N(t),Z(n),null!=b&&k(b,String(n)))},C=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]??y[y.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},g)},v.map((e=>{let{value:t,label:a,attributes:o}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:e=>y.push(e),onKeyDown:C,onFocus:T,onClick:T},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===t})}),a??t)}))),a?(0,l.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==w})))))}function m(e){const t=(0,o.Z)();return l.createElement(d,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(5488),s=a(5162),o=a(9960),i=a(814);function r(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(l.Z,null,n.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(i.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"solution",label:"Solution"},n.createElement(i.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(o.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},4930:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>u});var n=a(7462),l=(a(7294),a(3905)),s=a(7833);const o={title:"Console Applications 01"},i=void 0,r={unversionedId:"exercises/console-applications/console-applications01",id:"exercises/console-applications/console-applications01",title:"Console Applications 01",description:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Ganzzahlen von der Konsole",source:"@site/docs/exercises/console-applications/console-applications01.md",sourceDirName:"exercises/console-applications",slug:"/exercises/console-applications/console-applications01",permalink:"/programming/exercises/console-applications/console-applications01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/console-applications/console-applications01.md",tags:[],version:"current",frontMatter:{title:"Console Applications 01"},sidebar:"exercisesSidebar",previous:{title:"Konsolenanwendungen",permalink:"/programming/exercises/console-applications/"},next:{title:"Console Applications 02",permalink:"/programming/exercises/console-applications/console-applications02"}},c={},u=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:u};function d(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche zwei Ganzzahlen von der Konsole\neinliest, addiert und das Ergebnis auf der Konsole ausgibt."),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte eine ganze Zahl ein: 4\nGib bitte eine weitere ganze Zahl ein: 5\nErgebnis: 4 + 5 = 9\n")),(0,l.kt)(s.Z,{pullRequest:"5",branchSuffix:"console-applications/01",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);