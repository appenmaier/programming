"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4527],{5162:(e,n,a)=>{a.d(n,{Z:()=>o});var t=a(7294),l=a(6010);const s="tabItem_Ymn6";function o(e){let{children:n,hidden:a,className:o}=e;return t.createElement("div",{role:"tabpanel",className:(0,l.Z)(s,o),hidden:a},n)}},5488:(e,n,a)=>{a.d(n,{Z:()=>m});var t=a(7462),l=a(7294),s=a(6010),o=a(2389),r=a(7392),i=a(7094),c=a(2466);const u="tabList__CuJ",p="tabItem_LNqP";function d(e){var n;const{lazy:a,block:o,defaultValue:d,values:m,groupId:b,className:h}=e,v=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=m??v.map((e=>{let{props:{value:n,label:a,attributes:t}}=e;return{value:n,label:a,attributes:t}})),f=(0,r.l)(g,((e,n)=>e.value===n.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===d?d:d??(null==(n=v.find((e=>e.props.default)))?void 0:n.props.value)??v[0].props.value;if(null!==E&&!g.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[w,Z]=(0,l.useState)(E),y=[],{blockElementScrollPositionUntilNextRender:z}=(0,c.o5)();if(null!=b){const e=k[b];null!=e&&e!==w&&g.some((n=>n.value===e))&&Z(e)}const N=e=>{const n=e.currentTarget,a=y.indexOf(n),t=g[a].value;t!==w&&(z(n),Z(t),null!=b&&x(b,String(t)))},T=e=>{var n;let a=null;switch(e.key){case"ArrowRight":{const n=y.indexOf(e.currentTarget)+1;a=y[n]??y[0];break}case"ArrowLeft":{const n=y.indexOf(e.currentTarget)-1;a=y[n]??y[y.length-1];break}}null==(n=a)||n.focus()};return l.createElement("div",{className:(0,s.Z)("tabs-container",u)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},h)},g.map((e=>{let{value:n,label:a,attributes:o}=e;return l.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:e=>y.push(e),onKeyDown:T,onFocus:N,onClick:N},o,{className:(0,s.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":w===n})}),a??n)}))),a?(0,l.cloneElement)(v.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},v.map(((e,n)=>(0,l.cloneElement)(e,{key:n,hidden:e.props.value!==w})))))}function m(e){const n=(0,o.Z)();return l.createElement(d,(0,t.Z)({key:String(n)},e))}},7833:(e,n,a)=>{a.d(n,{Z:()=>i});var t=a(7294),l=a(5488),s=a(5162),o=a(9960),r=a(814);function i(e){let{pullRequest:n,branchSuffix:a}=e;return t.createElement(l.Z,null,t.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},t.createElement(r.Z,{language:"console"},`git switch exercises/${a}`)),t.createElement(s.Z,{value:"solution",label:"Solution"},t.createElement(r.Z,{language:"console"},`git switch solutions/${a}`)),t.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",t.createElement(o.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${n}/files?diff=split`},"PR#",n)))}},5729:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>o,metadata:()=>i,toc:()=>u});var t=a(7462),l=(a(7294),a(3905)),s=a(7833);const o={title:"Console Applications 02"},r=void 0,i={unversionedId:"exercises/console-applications/console-applications02",id:"exercises/console-applications/console-applications02",title:"Console Applications 02",description:"Erstelle eine ausf\xfchrbare Klasse, welche zwei Ganzzahlen von der Konsole",source:"@site/docs/exercises/console-applications/console-applications02.md",sourceDirName:"exercises/console-applications",slug:"/exercises/console-applications/console-applications02",permalink:"/programming/docs/exercises/console-applications/console-applications02",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/console-applications/console-applications02.md",tags:[],version:"current",frontMatter:{title:"Console Applications 02"},sidebar:"exercisesSidebar",previous:{title:"Console Applications 01",permalink:"/programming/docs/exercises/console-applications/console-applications01"},next:{title:"Kontrollstrukturen",permalink:"/programming/docs/exercises/control-structures/"}},c={},u=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:u};function d(e){let{components:n,...a}=e;return(0,l.kt)("wrapper",(0,t.Z)({},p,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche zwei Ganzzahlen von der Konsole\neinliest, den prozentualen Anteil der ersten von der zweiten Ganzzahl berechnet\nund das Ergebnis auf der Konsole ausgibt."),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte eine ganze Zahl ein: 5\nGib bitte eine weitere ganze Zahl ein: 50\nEregbnis: 5 von 50 sind 10,00%\n")),(0,l.kt)(s.Z,{pullRequest:"6",branchSuffix:"console-applications/02",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);