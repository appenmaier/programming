"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8193],{5162:(e,a,l)=>{l.d(a,{Z:()=>r});var t=l(7294),n=l(6010);const s="tabItem_Ymn6";function r(e){let{children:a,hidden:l,className:r}=e;return t.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,r),hidden:l},a)}},5488:(e,a,l)=>{l.d(a,{Z:()=>d});var t=l(7462),n=l(7294),s=l(6010),r=l(2389),i=l(7392),o=l(7094),u=l(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var a;const{lazy:l,block:r,defaultValue:p,values:d,groupId:h,className:g}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=d??b.map((e=>{let{props:{value:a,label:l,attributes:t}}=e;return{value:a,label:l,attributes:t}})),v=(0,i.l)(f,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)??b[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:y,setTabGroupChoices:w}=(0,o.U)(),[x,D]=(0,n.useState)(k),E=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=h){const e=y[h];null!=e&&e!==x&&f.some((a=>a.value===e))&&D(e)}const P=e=>{const a=e.currentTarget,l=E.indexOf(a),t=f[l].value;t!==x&&(N(a),D(t),null!=h&&w(h,String(t)))},Z=e=>{var a;let l=null;switch(e.key){case"ArrowRight":{const a=E.indexOf(e.currentTarget)+1;l=E[a]??E[0];break}case"ArrowLeft":{const a=E.indexOf(e.currentTarget)-1;l=E[a]??E[E.length-1];break}}null==(a=l)||a.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},g)},f.map((e=>{let{value:a,label:l,attributes:r}=e;return n.createElement("li",(0,t.Z)({role:"tab",tabIndex:x===a?0:-1,"aria-selected":x===a,key:a,ref:e=>E.push(e),onKeyDown:Z,onFocus:P,onClick:P},r,{className:(0,s.Z)("tabs__item",m,null==r?void 0:r.className,{"tabs__item--active":x===a})}),l??a)}))),l?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==x})))))}function d(e){const a=(0,r.Z)();return n.createElement(p,(0,t.Z)({key:String(a)},e))}},7833:(e,a,l)=>{l.d(a,{Z:()=>o});var t=l(7294),n=l(5488),s=l(5162),r=l(9960),i=l(814);function o(e){let{pullRequest:a,branchSuffix:l}=e;return t.createElement(n.Z,null,t.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},t.createElement(i.Z,{language:"console"},`git switch exercises/${l}`),t.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${l}/Exercise.java`},t.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),t.createElement(s.Z,{value:"solution",label:"Solution"},t.createElement(i.Z,{language:"console"},`git switch solutions/${l}`),t.createElement(r.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${l}/Exercise.java`},t.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),t.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",t.createElement(r.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},620:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>r,metadata:()=>o,toc:()=>c});var t=l(7462),n=(l(7294),l(3905)),s=l(7833);const r={title:"Polymorphy 04"},i=void 0,o={unversionedId:"exercises/polymorphy/polymorphy04",id:"exercises/polymorphy/polymorphy04",title:"Polymorphy 04",description:"- Passe die Klasse Dice aus \xdcbungsaufgabe",source:"@site/docs/exercises/polymorphy/polymorphy04.md",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy04",permalink:"/programming/exercises/polymorphy/polymorphy04",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/polymorphy/polymorphy04.md",tags:[],version:"current",frontMatter:{title:"Polymorphy 04"},sidebar:"exercisesSidebar",previous:{title:"Polymorphy 03",permalink:"/programming/exercises/polymorphy/polymorphy03"},next:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/programming/exercises/abstract-and-final/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse HighValueDice",id:"hinweis-zur-klasse-highvaluedice",level:2},{value:"Hinweis zur Klasse LowValueDice",id:"hinweis-zur-klasse-lowvaluedice",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],m={toc:c};function p(e){let{components:a,...l}=e;return(0,n.kt)("wrapper",(0,t.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Dice")," aus \xdcbungsaufgabe\n",(0,n.kt)("a",{parentName:"li",href:"/programming/exercises/uml/class-diagrams02"},"ClassDiagrams02")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klassen ",(0,n.kt)("inlineCode",{parentName:"li"},"HighValueDice")," und\n",(0,n.kt)("inlineCode",{parentName:"li"},"LowValueDice")),(0,n.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Player")," aus \xdcbungsaufgabe\n",(0,n.kt)("a",{parentName:"li",href:"/programming/exercises/uml/class-diagrams02"},"ClassDiagrams02")," anhand des abgebildeten\nKlassendiagramms an"),(0,n.kt)("li",{parentName:"ul"},"Passe die Methode ",(0,n.kt)("inlineCode",{parentName:"li"},"boolean move(Player)")," der Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"DiceGame")," aus\n\xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"/programming/exercises/uml/class-diagrams02"},"ClassDiagrams02")," so an, dass\njeder Spieler w\xe4hrend des Spiels einmal die M\xf6glichkeit hat, entweder nur\nmit 4-5-6-W\xfcrfeln oder 1-2-3-W\xfcrfeln zu w\xfcrfeln")),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170884123-4f6ae3ad-612d-490c-94f3-1f9882b38002.png",alt:"image"})),(0,n.kt)("h2",{id:"hinweis-zur-klasse-highvaluedice"},"Hinweis zur Klasse HighValueDice"),(0,n.kt)("p",null,"Die rollTheDice-Methode soll nur 4er, 5er und 6er zur\xfcckgeben."),(0,n.kt)("h2",{id:"hinweis-zur-klasse-lowvaluedice"},"Hinweis zur Klasse LowValueDice"),(0,n.kt)("p",null,"Die rollTheDice-Methode soll nur 1er, 2er und 3er zur\xfcckgeben."),(0,n.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-console"},"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du einmalig Spezialw\xfcrfel verwenden (true, false)?: true\nHans, welche Spezialw\xfcrfel m\xf6chtest Du verwenden (1=4-5-6-W\xfcrfel, 2=1-2-3-W\xfcrfel)?: 1\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 12 Punkte\nHans hat insgesamt 12 Punkte\n\u2026\nLisa hat aktuell 46 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 12 Punkte\nLisa hat insgesamt 58 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 49 Punkte\n")),(0,n.kt)(s.Z,{pullRequest:"44",branchSuffix:"polymorphy/04",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);