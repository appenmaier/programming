"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9662],{5162:(e,t,a)=>{a.d(t,{Z:()=>r});var n=a(7294),l=a(6010);const i="tabItem_Ymn6";function r(e){let{children:t,hidden:a,className:r}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(i,r),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),l=a(7294),i=a(6010),r=a(2389),s=a(7392),o=a(7094),u=a(2466);const p="tabList__CuJ",c="tabItem_LNqP";function m(e){var t;const{lazy:a,block:r,defaultValue:m,values:d,groupId:h,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=d??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),v=(0,s.l)(k,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:N}=(0,o.U)(),[x,E]=(0,l.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:T}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&k.some((t=>t.value===e))&&E(e)}const z=e=>{const t=e.currentTarget,a=w.indexOf(t),n=k[a].value;n!==x&&(T(t),E(n),null!=h&&N(h,String(n)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,i.Z)("tabs-container",p)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":r},g)},k.map((e=>{let{value:t,label:a,attributes:r}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:Z,onFocus:z,onClick:z},r,{className:(0,i.Z)("tabs__item",c,null==r?void 0:r.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function d(e){const t=(0,r.Z)();return l.createElement(m,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),l=a(5488),i=a(5162),r=a(9960),s=a(814);function o(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(l.Z,null,n.createElement(i.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(s.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(i.Z,{value:"solution",label:"Solution"},n.createElement(s.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(i.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",n.createElement(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},4303:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var n=a(7462),l=(a(7294),a(3905)),i=a(7833);const r={title:"Polymorphie 01"},s=void 0,o={unversionedId:"exercises/polymorphie/polymorphie01",id:"exercises/polymorphie/polymorphie01",title:"Polymorphie 01",description:"- Passe die Klasse Vehicle aus \xdcbungsaufgabe",source:"@site/docs/exercises/polymorphie/polymorphie01.md",sourceDirName:"exercises/polymorphie",slug:"/exercises/polymorphie/polymorphie01",permalink:"/programming/exercises/polymorphie/polymorphie01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/polymorphie/polymorphie01.md",tags:[],version:"current",frontMatter:{title:"Polymorphie 01"},sidebar:"exercisesSidebar",previous:{title:"Polymorphie",permalink:"/programming/exercises/polymorphie/"},next:{title:"Polymorphie 02",permalink:"/programming/exercises/polymorphie/polymorphie02"}},u={},p=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse Car",id:"hinweise-zur-klasse-car",level:2},{value:"Hinweise zur Klasse Truck",id:"hinweise-zur-klasse-truck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],c={toc:p};function m(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Vehicle")," aus \xdcbungsaufgabe\n",(0,l.kt)("a",{parentName:"li",href:"/programming/exercises/enumerations/enumerations01"},"Enumerations01")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,l.kt)("inlineCode",{parentName:"li"},"Car")," und ",(0,l.kt)("inlineCode",{parentName:"li"},"Truck")),(0,l.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,l.kt)("a",{parentName:"li",href:"/programming/exercises/enumerations/enumerations01"},"Enumerations01")," so an, dass keine\nFahrzeuge, sondern Autos und Lastwagen erzeugt und ausgegeben werden")),(0,l.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170883749-a72e4bd8-4059-432e-a648-f5f6bdbfc6ef.png",alt:"image"})),(0,l.kt)("h2",{id:"hinweise-zur-klasse-car"},"Hinweise zur Klasse Car"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void doATurboBoost()")," soll die Geschwindigkeit verdoppeln"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,l.kt)("h2",{id:"hinweise-zur-klasse-truck"},"Hinweise zur Klasse Truck"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void transform()")," soll das Attribut isTransformed invertieren"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Anzahl Fahrzeuge: 0\nAnzahl Fahrzeuge: 3\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\nPorsche 911 beschleunigt auf 50 km/h\nMAN TGX verwandelt sich in einen Autobot\nPorsche 911 macht einen TurboBoost und beschleunigt auf 100 km/h\nMAN TGX verwandelt sich in einen Lastwagen zur\xfcck\n")),(0,l.kt)(i.Z,{pullRequest:"41",branchSuffix:"polymorphy/01",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);