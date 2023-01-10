"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[7128],{5162:(e,a,t)=>{t.d(a,{Z:()=>l});var r=t(7294),s=t(6010);const n="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,s.Z)(n,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(7462),s=t(7294),n=t(6010),l=t(2389),i=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var a;const{lazy:t,block:l,defaultValue:m,values:d,groupId:b,className:g}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),f=(0,i.l)(v,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const y=null===m?m:m??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==y&&!v.some((e=>e.value===y)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${y}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:x}=(0,o.U)(),[k,Z]=(0,s.useState)(y),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=E[b];null!=e&&e!==k&&v.some((a=>a.value===e))&&Z(e)}const T=e=>{const a=e.currentTarget,t=w.indexOf(a),r=v[t].value;r!==k&&(N(a),Z(r),null!=b&&x(b,String(r)))},j=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,n.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},g)},v.map((e=>{let{value:a,label:t,attributes:l}=e;return s.createElement("li",(0,r.Z)({role:"tab",tabIndex:k===a?0:-1,"aria-selected":k===a,key:a,ref:e=>w.push(e),onKeyDown:j,onFocus:T,onClick:T},l,{className:(0,n.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":k===a})}),t??a)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===k))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==k})))))}function d(e){const a=(0,l.Z)();return s.createElement(m,(0,r.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(7294),s=t(5488),n=t(5162),l=t(9960),i=t(814);function o(e){let{pullRequest:a,branchSuffix:t}=e;return r.createElement(s.Z,null,r.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(i.Z,{language:"console"},`git switch exercises/${t}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(n.Z,{value:"solution",label:"Solution"},r.createElement(i.Z,{language:"console"},`git switch solutions/${t}`),r.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",r.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},7452:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var r=t(7462),s=(t(7294),t(3905)),n=t(7833);const l={title:"Arrays04",description:""},i=void 0,o={unversionedId:"exercises/arrays/arrays04",id:"exercises/arrays/arrays04",title:"Arrays04",description:"",source:"@site/docs/exercises/arrays/arrays04.md",sourceDirName:"exercises/arrays",slug:"/exercises/arrays/arrays04",permalink:"/programming/exercises/arrays/arrays04",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/arrays/arrays04.md",tags:[],version:"current",frontMatter:{title:"Arrays04",description:""},sidebar:"exercisesSidebar",previous:{title:"Arrays03",permalink:"/programming/exercises/arrays/arrays03"},next:{title:"Arrays05",permalink:"/programming/exercises/arrays/arrays05"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,r.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("p",null,'Erstelle eine ausf\xfchrbare Klasse, welche zwei "Bin\xe4rzahlen" aufsummiert und\ndas Ergebnis auf dem Bildschirm ausgibt.'),(0,s.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"  10010110\n+ 01100101\n= 11111011\n")),(0,s.kt)(n.Z,{pullRequest:"21",branchSuffix:"arrays/04",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);