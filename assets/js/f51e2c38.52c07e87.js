"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2026],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(7294),s=a(6010);const r="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,s.Z)(r,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(7462),s=a(7294),r=a(6010),l=a(2389),n=a(7392),u=a(7094),m=a(2466);const o="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:p,groupId:g,className:v}=e,b=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??b.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),k=(0,n.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:E}=(0,u.U)(),[x,A]=(0,s.useState)(f),Z=[],{blockElementScrollPositionUntilNextRender:w}=(0,m.o5)();if(null!=g){const e=y[g];null!=e&&e!==x&&h.some((t=>t.value===e))&&A(e)}const N=e=>{const t=e.currentTarget,a=Z.indexOf(t),i=h[a].value;i!==x&&(w(t),A(i),null!=g&&E(g,String(i)))},z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=Z.indexOf(e.currentTarget)+1;a=Z[t]??Z[0];break}case"ArrowLeft":{const t=Z.indexOf(e.currentTarget)-1;a=Z[t]??Z[Z.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,r.Z)("tabs-container",o)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,i.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>Z.push(e),onKeyDown:z,onFocus:N,onClick:N},l,{className:(0,r.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,s.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function p(e){const t=(0,l.Z)();return s.createElement(d,(0,i.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var i=a(7294),s=a(5488),r=a(5162),l=a(9960),n=a(814);function u(e){let{pullRequest:t,branchSuffix:a}=e;return i.createElement(s.Z,null,i.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},i.createElement(n.Z,{language:"console"},`git switch exercises/${a}`),i.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/exercises/${a}`},i.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),i.createElement(r.Z,{value:"solution",label:"Solution"},i.createElement(n.Z,{language:"console"},`git switch solutions/${a}`),i.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/solutions/${a}`},i.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),i.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",i.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>o});var i=a(7462),s=(a(7294),a(3905)),r=a(7833);const l={title:"Activity Diagrams 01"},n=void 0,u={unversionedId:"exercises/uml/activity-diagrams01",id:"exercises/uml/activity-diagrams01",title:"Activity Diagrams 01",description:"Erstelle die Klasse MainClass anhand des abgebildeten Klassendiagramms sowie den abgebildeten Aktivit\xe4tsdiagrammen.",source:"@site/docs/exercises/uml/activity-diagrams01.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/activity-diagrams01",permalink:"/programming/exercises/uml/activity-diagrams01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/activity-diagrams01.md",tags:[],version:"current",frontMatter:{title:"Activity Diagrams 01"},sidebar:"exercisesSidebar",previous:{title:"Darstellung von Klassen und Programmabl\xe4ufen",permalink:"/programming/exercises/uml/"},next:{title:"Class Diagrams 01",permalink:"/programming/exercises/uml/class-diagrams01"}},m={},o=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t main",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-main",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t move",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-move",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t play",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-play",level:2}],c={toc:o};function d(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"Erstelle die Klasse ",(0,s.kt)("inlineCode",{parentName:"p"},"MainClass")," anhand des abgebildeten Klassendiagramms sowie den abgebildeten Aktivit\xe4tsdiagrammen."),(0,s.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177834703-3a5c1c58-2901-45fc-87dc-ce51336adcb6.png",alt:"image"})),(0,s.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-main"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t main"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177834768-1d0fb9c7-3170-4779-97ff-4d8bf73ae263.png",alt:"image"})),(0,s.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-move"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t move"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177834827-4125b56f-ac10-4a21-9d83-d857bebbf47f.png",alt:"image"})),(0,s.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-play"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t play"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177834877-826e43f3-843b-4e77-a774-17354269ab1c.png",alt:"image"})),(0,s.kt)(r.Z,{pullRequest:"35",branchSuffix:"activity-diagrams/01",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);