"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8193],{5162:(e,a,t)=>{t.d(a,{Z:()=>r});var l=t(7294),n=t(6010);const s="tabItem_Ymn6";function r(e){let{children:a,hidden:t,className:r}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,r),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var l=t(7462),n=t(7294),s=t(6010),r=t(2389),i=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var a;const{lazy:t,block:r,defaultValue:p,values:d,groupId:h,className:g}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:a,label:t,attributes:l}}=e;return{value:a,label:t,attributes:l}})),v=(0,i.l)(f,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)??b[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[x,E]=(0,n.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:D}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&f.some((a=>a.value===e))&&E(e)}const P=e=>{const a=e.currentTarget,t=N.indexOf(a),l=f[t].value;l!==x&&(D(a),E(l),null!=h&&w(h,String(l)))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},g)},f.map((e=>{let{value:a,label:t,attributes:r}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>N.push(e),onKeyDown:Z,onFocus:P,onClick:P},r,{className:(0,s.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":x===a})}),t??a)}))),t?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function d(e){const a=(0,r.Z)();return n.createElement(p,(0,l.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>o});var l=t(7294),n=t(5488),s=t(5162),r=t(9960),i=t(814);function o(e){let{pullRequest:a,branchSuffix:t}=e;return l.createElement(n.Z,null,l.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},l.createElement(i.Z,{language:"console"},`git switch exercises/${t}`),l.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},l.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),l.createElement(s.Z,{value:"solution",label:"Solution"},l.createElement(i.Z,{language:"console"},`git switch solutions/${t}`),l.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},l.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),l.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",l.createElement(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},620:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var l=t(7462),n=(t(7294),t(3905)),s=t(7833);const r={title:"Polymorphy04",description:""},i=void 0,o={unversionedId:"exercises/polymorphy/polymorphy04",id:"exercises/polymorphy/polymorphy04",title:"Polymorphy04",description:"",source:"@site/docs/exercises/polymorphy/polymorphy04.md",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy04",permalink:"/programming/exercises/polymorphy/polymorphy04",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/polymorphy/polymorphy04.md",tags:[],version:"current",frontMatter:{title:"Polymorphy04",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy03",permalink:"/programming/exercises/polymorphy/polymorphy03"},next:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/programming/exercises/abstract-and-final/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse HighValueDice",id:"hinweis-zur-klasse-highvaluedice",level:2},{value:"Hinweis zur Klasse LowValueDice",id:"hinweis-zur-klasse-lowvaluedice",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],m={toc:c};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Dice")," aus \xdcbungsaufgabe\n",(0,n.kt)("a",{parentName:"li",href:"/programming/exercises/uml/class-diagrams02"},"ClassDiagrams02")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,n.kt)("inlineCode",{parentName:"li"},"HighValueDice")," und\n",(0,n.kt)("inlineCode",{parentName:"li"},"LowValueDice")),(0,n.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Player")," aus \xdcbungsaufgabe\n",(0,n.kt)("a",{parentName:"li",href:"/programming/exercises/uml/class-diagrams02"},"ClassDiagrams02")," anhand des abgebildeten\nKlassendiagramms an"),(0,n.kt)("li",{parentName:"ul"},"Passe die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean move(player: Player)")," der Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"DiceGame")," aus\n\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"/programming/exercises/uml/class-diagrams02"},"ClassDiagrams02")," so an, dass\njeder Spieler w\xe4hrend des Spiels einmal die M\xf6glichkeit hat, entweder nur\nmit 4-5-6-W\xfcrfeln oder 1-2-3-W\xfcrfeln zu w\xfcrfeln")),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209156833-abc8b6ab-d9a2-4f45-96a8-b2df8fdf9c3a.png",alt:"image"})),(0,n.kt)("h2",{id:"hinweis-zur-klasse-highvaluedice"},"Hinweis zur Klasse HighValueDice"),(0,n.kt)("p",null,"Die Methode ",(0,n.kt)("inlineCode",{parentName:"p"},"void rollTheDice()"),' soll nur 4er, 5er und 6er "w\xfcrfeln".'),(0,n.kt)("h2",{id:"hinweis-zur-klasse-lowvaluedice"},"Hinweis zur Klasse LowValueDice"),(0,n.kt)("p",null,"Die Methode ",(0,n.kt)("inlineCode",{parentName:"p"},"void rollTheDice()"),' soll nur 1er, 2er und 3er "w\xfcrfeln".'),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du einmalig Spezialw\xfcrfel verwenden (true, false)?: true\nHans, welche Spezialw\xfcrfel m\xf6chtest Du verwenden (1=4-5-6-W\xfcrfel, 2=1-2-3-W\xfcrfel)?: 1\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 12 Punkte\nHans hat insgesamt 12 Punkte\n\u2026\nLisa hat aktuell 46 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 12 Punkte\nLisa hat insgesamt 58 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 49 Punkte\n")),(0,n.kt)(s.Z,{pullRequest:"44",branchSuffix:"polymorphy/04",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);