"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[454],{5162:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(7294),s=t(6010);const n="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,s.Z)(n,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>p});var l=t(7462),s=t(7294),n=t(6010),r=t(2389),i=t(7392),u=t(7094),o=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var a;const{lazy:t,block:r,defaultValue:m,values:p,groupId:g,className:b}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??h.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),v=(0,i.l)(k,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:E,setTabGroupChoices:x}=(0,u.U)(),[w,C]=(0,s.useState)(f),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,o.o5)();if(null!=g){const e=E[g];null!=e&&e!==w&&k.some((a=>a.value===e))&&C(e)}const y=e=>{const a=e.currentTarget,t=N.indexOf(a),l=k[t].value;l!==w&&(Z(a),C(l),null!=g&&x(g,String(l)))},D=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}null==(a=t)||a.focus()};return s.createElement("div",{className:(0,n.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":r},b)},k.map((e=>{let{value:a,label:t,attributes:r}=e;return s.createElement("li",(0,l.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>N.push(e),onKeyDown:D,onFocus:y,onClick:y},r,{className:(0,n.Z)("tabs__item",d,null==r?void 0:r.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,s.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,s.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function p(e){const a=(0,r.Z)();return s.createElement(m,(0,l.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>u});var l=t(7294),s=t(5488),n=t(5162),r=t(9960),i=t(814);function u(e){let{pullRequest:a,branchSuffix:t}=e;return l.createElement(s.Z,null,l.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},l.createElement(i.Z,{language:"console"},`git switch exercises/${t}`),l.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},l.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),l.createElement(n.Z,{value:"solution",label:"Solution"},l.createElement(i.Z,{language:"console"},`git switch solutions/${t}`),l.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},l.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),l.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",l.createElement(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},3764:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>r,metadata:()=>u,toc:()=>c});var l=t(7462),s=(t(7294),t(3905)),n=t(7833);const r={title:"ClassDiagrams05",description:""},i=void 0,u={unversionedId:"exercises/uml/class-diagrams05",id:"exercises/uml/class-diagrams05",title:"ClassDiagrams05",description:"",source:"@site/docs/exercises/uml/class-diagrams05.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams05",permalink:"/programming/exercises/uml/class-diagrams05",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/class-diagrams05.md",tags:[],version:"current",frontMatter:{title:"ClassDiagrams05",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams04",permalink:"/programming/exercises/uml/class-diagrams04"},next:{title:"Polymorphie",permalink:"/programming/exercises/polymorphy/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse SkatCardDeck",id:"hinweise-zur-klasse-skatcarddeck",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}],d={toc:c};function m(e){let{components:a,...t}=e;return(0,s.kt)("wrapper",(0,l.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Erstelle die Aufz\xe4hlungen ",(0,s.kt)("inlineCode",{parentName:"li"},"SkatCardColor")," und ",(0,s.kt)("inlineCode",{parentName:"li"},"SkatCardValue")," sowie die\nKlassen ",(0,s.kt)("inlineCode",{parentName:"li"},"SkatCard")," und ",(0,s.kt)("inlineCode",{parentName:"li"},"SkatCardDeck")," anhand des abgebildeten Klassendiagramms"),(0,s.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein Skatblatt erzeugt, mischt und\nauf der Konsole ausgibt")),(0,s.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209156321-f1b6ce12-08ab-42e2-812b-8959cc898e99.png",alt:"image"})),(0,s.kt)("h2",{id:"hinweise-zur-klasse-skatcarddeck"},"Hinweise zur Klasse SkatCardDeck"),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Der Konstruktor soll ein Skatblatt, bestehend aus 32 Karten, erzeugen"),(0,s.kt)("li",{parentName:"ul"},"Die Methode ",(0,s.kt)("inlineCode",{parentName:"li"},"void shuffleSkatCards()")," soll das Skatblatt mischen")),(0,s.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-console"},"Kreuz K\xf6nig\nPik 10\nKreuz 9\nPik 9\nKreuz Bube\nPik Ass\nHerz Bube\nKaro Bube\nPik 8\nKaro Dame\n\u2026\n")),(0,s.kt)("h2",{id:"hinweis"},"Hinweis"),(0,s.kt)("p",null,"Die statische Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"T[] values()")," einer Aufz\xe4hlung gibt alle\nAufz\xe4hlungskonstanten der Aufz\xe4hlung als Feld zur\xfcck."),(0,s.kt)(n.Z,{pullRequest:"40",branchSuffix:"class-diagrams/05",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);