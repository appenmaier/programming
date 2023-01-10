"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[5225],{5162:(e,t,n)=>{n.d(t,{Z:()=>l});var s=n(7294),r=n(6010);const a="tabItem_Ymn6";function l(e){let{children:t,hidden:n,className:l}=e;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(a,l),hidden:n},t)}},5488:(e,t,n)=>{n.d(t,{Z:()=>m});var s=n(7462),r=n(7294),a=n(6010),l=n(2389),o=n(7392),i=n(7094),u=n(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:n,block:l,defaultValue:d,values:m,groupId:h,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:n,attributes:s}}=e;return{value:t,label:n,attributes:s}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:x}=(0,i.U)(),[Z,w]=(0,r.useState)(k),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=h){const e=E[h];null!=e&&e!==Z&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,n=y.indexOf(t),s=v[n].value;s!==Z&&(N(t),w(s),null!=h&&x(h,String(s)))},L=e=>{var t;let n=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;n=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;n=y[t]??y[y.length-1];break}}null==(t=n)||t.focus()};return r.createElement("div",{className:(0,a.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:n,attributes:l}=e;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>y.push(e),onKeyDown:L,onFocus:T,onClick:T},l,{className:(0,a.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":Z===t})}),n??t)}))),n?(0,r.cloneElement)(g.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,s.Z)({key:String(t)},e))}},7833:(e,t,n)=>{n.d(t,{Z:()=>i});var s=n(7294),r=n(5488),a=n(5162),l=n(9960),o=n(814);function i(e){let{pullRequest:t,branchSuffix:n}=e;return s.createElement(r.Z,null,s.createElement(a.Z,{value:"exercise",label:"Exercise",default:!0},s.createElement(o.Z,{language:"console"},`git switch exercises/${n}`),s.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${n}/Exercise.java`},s.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),s.createElement(a.Z,{value:"solution",label:"Solution"},s.createElement(o.Z,{language:"console"},`git switch solutions/${n}`),s.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${n}/Exercise.java`},s.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),s.createElement(a.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",s.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1128:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=n(7462),r=(n(7294),n(3905)),a=n(7833);const l={title:"Loops04",description:""},o=void 0,i={unversionedId:"exercises/control-structures/loops04",id:"exercises/control-structures/loops04",title:"Loops04",description:"",source:"@site/docs/exercises/control-structures/loops04.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops04",permalink:"/programming/exercises/control-structures/loops04",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/loops04.md",tags:[],version:"current",frontMatter:{title:"Loops04",description:""},sidebar:"exercisesSidebar",previous:{title:"Loops03",permalink:"/programming/exercises/control-structures/loops03"},next:{title:"Loops05",permalink:"/programming/exercises/control-structures/loops05"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}],p={toc:c};function d(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche zwei Zeichenketten unter Missachtung\nder Gro\xdf- und Kleinschreibung zeichenweise auf Gleichheit \xfcberpr\xfcft."),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte die erste Zeichenkette ein: Hallo Welt\nGib bitte die zweite Zeichenkette ein: HALLO WELT\nErgebnis: Die eingegebenen Zeichenketten sind identisch\n")),(0,r.kt)("h2",{id:"hinweis"},"Hinweis"),(0,r.kt)("p",null,"Die statische Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"char toUpperCase(ch: char)")," der Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"Character")," gibt den\nGro\xdfbuchstaben des eingehenden Zeichens zur\xfcck."),(0,r.kt)(a.Z,{pullRequest:"17",branchSuffix:"loops/04",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);