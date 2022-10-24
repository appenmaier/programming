"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4926],{5162:(e,a,r)=>{r.d(a,{Z:()=>l});var t=r(7294),s=r(6010);const n="tabItem_Ymn6";function l(e){let{children:a,hidden:r,className:l}=e;return t.createElement("div",{role:"tabpanel",className:(0,s.Z)(n,l),hidden:r},a)}},5488:(e,a,r)=>{r.d(a,{Z:()=>p});var t=r(7462),s=r(7294),n=r(6010),l=r(2389),o=r(7392),i=r(7094),u=r(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var a;const{lazy:r,block:l,defaultValue:m,values:p,groupId:b,className:h}=e,v=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=p??v.map((e=>{let{props:{value:a,label:r,attributes:t}}=e;return{value:a,label:r,attributes:t}})),f=(0,o.l)(g,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==y&&!g.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:k}=(0,i.U)(),[x,Z]=(0,s.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=E[b];null!=e&&e!==x&&g.some((a=>a.value===e))&&Z(e)}const T=e=>{const a=e.currentTarget,r=w.indexOf(a),t=g[r].value;t!==x&&(N(a),Z(t),null!=b&&k(b,String(t)))},A=e=>{var a;let r=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;r=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;r=w[a]??w[w.length-1];break}}null==(a=r)||a.focus()};return s.createElement("div",{className:(0,n.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},h)},g.map((e=>{let{value:a,label:r,attributes:l}=e;return s.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>w.push(e),onKeyDown:A,onFocus:T,onClick:T},l,{className:(0,n.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":x===a})}),r??a)}))),r?(0,s.cloneElement)(v.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function p(e){const a=(0,l.Z)();return s.createElement(m,(0,t.Z)({key:String(a)},e))}},7833:(e,a,r)=>{r.d(a,{Z:()=>i});var t=r(7294),s=r(5488),n=r(5162),l=r(9960),o=r(814);function i(e){let{pullRequest:a,branchSuffix:r}=e;return t.createElement(s.Z,null,t.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},t.createElement(o.Z,{language:"console"},`git switch exercises/${r}`)),t.createElement(n.Z,{value:"solution",label:"Solution"},t.createElement(o.Z,{language:"console"},`git switch solutions/${r}`)),t.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",t.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},6417:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var t=r(7462),s=(r(7294),r(3905)),n=r(7833);const l={title:"Arrays 02"},o=void 0,i={unversionedId:"exercises/arrays/arrays02",id:"exercises/arrays/arrays02",title:"Arrays 02",description:"Erstelle eine ausf\xfchrbare Klasse zum Umdrehen von Feldern (d.h. das erste",source:"@site/docs/exercises/arrays/arrays02.md",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays02",permalink:"/programming/docs/exercises/arrays/arrays02",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/arrays/arrays02.md",tags:[],version:"current",frontMatter:{title:"Arrays 02"},sidebar:"exercisesSidebar",previous:{title:"Arrays 01",permalink:"/programming/docs/exercises/arrays/arrays01"},next:{title:"Arrays 03",permalink:"/programming/docs/exercises/arrays/arrays03"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c};function m(e){let{components:a,...r}=e;return(0,s.kt)("wrapper",(0,t.Z)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse zum Umdrehen von Feldern (d.h. das erste\nElement soll nach dem Umdrehen an letzter Position stehen, das letzte an\nerster Position usw.)."),(0,s.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"Eingabe: 4 8 2 6 9 1\nAusgabe: 1 9 6 2 8 4\n")),(0,s.kt)(n.Z,{pullRequest:"19",branchSuffix:"arrays/02",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);