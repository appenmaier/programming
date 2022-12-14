"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2517],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var s=a(7294),r=a(6010);const n="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return s.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>m});var s=a(7462),r=a(7294),n=a(6010),l=a(2389),o=a(7392),i=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:m,groupId:b,className:h}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=m??g.map((e=>{let{props:{value:t,label:a,attributes:s}}=e;return{value:t,label:a,attributes:s}})),f=(0,o.l)(v,((e,t)=>e.value===t.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===d?d:d??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==E&&!v.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,i.U)(),[Z,w]=(0,r.useState)(E),y=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=x[b];null!=e&&e!==Z&&v.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=y.indexOf(t),s=v[a].value;s!==Z&&(N(t),w(s),null!=b&&k(b,String(s)))},z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=y.indexOf(e.currentTarget)+1;a=y[t]??y[0];break}case"ArrowLeft":{const t=y.indexOf(e.currentTarget)-1;a=y[t]??y[y.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},h)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,s.Z)({role:"tab",tabIndex:Z===t?0:-1,"aria-selected":Z===t,key:t,ref:e=>y.push(e),onKeyDown:z,onFocus:T,onClick:T},l,{className:(0,n.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":Z===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==Z})))))}function m(e){const t=(0,l.Z)();return r.createElement(d,(0,s.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>i});var s=a(7294),r=a(5488),n=a(5162),l=a(9960),o=a(814);function i(e){let{pullRequest:t,branchSuffix:a}=e;return s.createElement(r.Z,null,s.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},s.createElement(o.Z,{language:"console"},`git switch exercises/${a}`),s.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},s.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),s.createElement(n.Z,{value:"solution",label:"Solution"},s.createElement(o.Z,{language:"console"},`git switch solutions/${a}`),s.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},s.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),s.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",s.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},2595:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>c});var s=a(7462),r=(a(7294),a(3905)),n=a(7833);const l={title:"Loops 06"},o=void 0,i={unversionedId:"exercises/control-structures/loops06",id:"exercises/control-structures/loops06",title:"Loops 06",description:"Erstelle eine ausf\xfchrbare Klasse, welche anhand von Startkapital (K) und",source:"@site/docs/exercises/control-structures/loops06.md",sourceDirName:"exercises/control-structures",slug:"/exercises/control-structures/loops06",permalink:"/programming/exercises/control-structures/loops06",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/control-structures/loops06.md",tags:[],version:"current",frontMatter:{title:"Loops 06"},sidebar:"exercisesSidebar",previous:{title:"Loops 05",permalink:"/programming/exercises/control-structures/loops05"},next:{title:"Felder (Arrays)",permalink:"/programming/exercises/arrays/"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,s.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche anhand von Startkapital (K) und\nProzentsatz (p) den Jahreszins (Z) berechnet. Die Berechnung des Jahreszinses\nsoll dabei in eine statische Methode ausgelagert werden."),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte das Startkapital ein (in \u20ac): 10000\nGib bitte den Prozentsatz ein: 3,3\nErgebnis: Der Jahreszins betr\xe4gt 330\u20ac\nWillst Du einen weiteren Jahreszins berechnen (true, false)?: false\n")),(0,r.kt)(n.Z,{pullRequest:"15",branchSuffix:"loops/06",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);