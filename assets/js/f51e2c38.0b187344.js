"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2026],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var i=a(7294),r=a(6010);const s="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return i.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>p});var i=a(7462),r=a(7294),s=a(6010),l=a(2389),n=a(7392),u=a(7094),o=a(2466);const m="tabList__CuJ",c="tabItem_LNqP";function d(e){var t;const{lazy:a,block:l,defaultValue:d,values:p,groupId:g,className:v}=e,b=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??b.map((e=>{let{props:{value:t,label:a,attributes:i}}=e;return{value:t,label:a,attributes:i}})),k=(0,n.l)(h,((e,t)=>e.value===t.value));if(k.length>0)throw new Error(`Docusaurus error: Duplicate values "${k.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!h.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:y}=(0,u.U)(),[E,A]=(0,r.useState)(f),Z=[],{blockElementScrollPositionUntilNextRender:w}=(0,o.o5)();if(null!=g){const e=x[g];null!=e&&e!==E&&h.some((t=>t.value===e))&&A(e)}const N=e=>{const t=e.currentTarget,a=Z.indexOf(t),i=h[a].value;i!==E&&(w(t),A(i),null!=g&&y(g,String(i)))},z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=Z.indexOf(e.currentTarget)+1;a=Z[t]??Z[0];break}case"ArrowLeft":{const t=Z.indexOf(e.currentTarget)-1;a=Z[t]??Z[Z.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",m)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},v)},h.map((e=>{let{value:t,label:a,attributes:l}=e;return r.createElement("li",(0,i.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>Z.push(e),onKeyDown:z,onFocus:N,onClick:N},l,{className:(0,s.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":E===t})}),a??t)}))),a?(0,r.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function p(e){const t=(0,l.Z)();return r.createElement(d,(0,i.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var i=a(7294),r=a(5488),s=a(5162),l=a(9960),n=a(814);function u(e){let{pullRequest:t,branchSuffix:a}=e;return i.createElement(r.Z,null,i.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},i.createElement(n.Z,{language:"console"},`git switch exercises/${a}`),i.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},i.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),i.createElement(s.Z,{value:"solution",label:"Solution"},i.createElement(n.Z,{language:"console"},`git switch solutions/${a}`),i.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},i.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),i.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",i.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},1478:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>n,default:()=>d,frontMatter:()=>l,metadata:()=>u,toc:()=>m});var i=a(7462),r=(a(7294),a(3905)),s=a(7833);const l={title:"ActivityDiagrams01",description:""},n=void 0,u={unversionedId:"exercises/uml/activity-diagrams01",id:"exercises/uml/activity-diagrams01",title:"ActivityDiagrams01",description:"",source:"@site/docs/exercises/uml/activity-diagrams01.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/activity-diagrams01",permalink:"/programming/exercises/uml/activity-diagrams01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/activity-diagrams01.md",tags:[],version:"current",frontMatter:{title:"ActivityDiagrams01",description:""},sidebar:"exercisesSidebar",previous:{title:"Darstellung von Klassen und Programmabl\xe4ufen",permalink:"/programming/exercises/uml/"},next:{title:"ClassDiagrams01",permalink:"/programming/exercises/uml/class-diagrams01"}},o={},m=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t main",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-main",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t move",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-move",level:2},{value:"Aktivit\xe4tsdiagramm zur Aktivit\xe4t play",id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-play",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"MainClass")," anhand des abgebildeten Klassendiagramms sowie den abgebildeten Aktivit\xe4tsdiagrammen."),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209174473-2ff4d3ce-2ff2-4a65-9c42-4a36f38d72b7.png",alt:"image"})),(0,r.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-main"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t main"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209174497-a0de686c-04e0-4d8f-b0c9-6e1d6b7c9557.png",alt:"image"})),(0,r.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-move"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t move"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209174521-f85ebad6-3d7a-43c2-b796-031e84c01d1f.png",alt:"image"})),(0,r.kt)("h2",{id:"aktivit\xe4tsdiagramm-zur-aktivit\xe4t-play"},"Aktivit\xe4tsdiagramm zur Aktivit\xe4t play"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209174541-bab788f7-7fb2-42f2-8b0f-269db393a8c0.png",alt:"image"})),(0,r.kt)(s.Z,{pullRequest:"35",branchSuffix:"activity-diagrams/01",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);