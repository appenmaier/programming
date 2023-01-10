"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9927],{5162:(e,a,t)=>{t.d(a,{Z:()=>i});var s=t(7294),l=t(6010);const n="tabItem_Ymn6";function i(e){let{children:a,hidden:t,className:i}=e;return s.createElement("div",{role:"tabpanel",className:(0,l.Z)(n,i),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>p});var s=t(7462),l=t(7294),n=t(6010),i=t(2389),r=t(7392),u=t(7094),o=t(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var a;const{lazy:t,block:i,defaultValue:d,values:p,groupId:g,className:h}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),k=p??b.map((e=>{let{props:{value:a,label:t,attributes:s}}=e;return{value:a,label:t,attributes:s}})),v=(0,r.l)(k,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===d?d:d??(null==(a=b.find((e=>e.props.default)))?void 0:a.props.value)??b[0].props.value;if(null!==f&&!k.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${k.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,u.U)(),[E,N]=(0,l.useState)(f),D=[],{blockElementScrollPositionUntilNextRender:y}=(0,o.o5)();if(null!=g){const e=w[g];null!=e&&e!==E&&k.some((a=>a.value===e))&&N(e)}const P=e=>{const a=e.currentTarget,t=D.indexOf(a),s=k[t].value;s!==E&&(y(a),N(s),null!=g&&x(g,String(s)))},Z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=D.indexOf(e.currentTarget)+1;t=D[a]??D[0];break}case"ArrowLeft":{const a=D.indexOf(e.currentTarget)-1;t=D[a]??D[D.length-1];break}}null==(a=t)||a.focus()};return l.createElement("div",{className:(0,n.Z)("tabs-container",c)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":i},h)},k.map((e=>{let{value:a,label:t,attributes:i}=e;return l.createElement("li",(0,s.Z)({role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,key:a,ref:e=>D.push(e),onKeyDown:Z,onFocus:P,onClick:P},i,{className:(0,n.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":E===a})}),t??a)}))),t?(0,l.cloneElement)(b.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,a)=>(0,l.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function p(e){const a=(0,i.Z)();return l.createElement(d,(0,s.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>u});var s=t(7294),l=t(5488),n=t(5162),i=t(9960),r=t(814);function u(e){let{pullRequest:a,branchSuffix:t}=e;return s.createElement(l.Z,null,s.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},s.createElement(r.Z,{language:"console"},`git switch exercises/${t}`),s.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},s.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),s.createElement(n.Z,{value:"solution",label:"Solution"},s.createElement(r.Z,{language:"console"},`git switch solutions/${t}`),s.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},s.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),s.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",s.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},7760:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>r,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var s=t(7462),l=(t(7294),t(3905)),n=t(7833);const i={title:"ClassDiagrams02",description:""},r=void 0,u={unversionedId:"exercises/uml/class-diagrams02",id:"exercises/uml/class-diagrams02",title:"ClassDiagrams02",description:"",source:"@site/docs/exercises/uml/class-diagrams02.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams02",permalink:"/programming/exercises/uml/class-diagrams02",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/class-diagrams02.md",tags:[],version:"current",frontMatter:{title:"ClassDiagrams02",description:""},sidebar:"exercisesSidebar",previous:{title:"ClassDiagrams01",permalink:"/programming/exercises/uml/class-diagrams01"},next:{title:"ClassDiagrams03",permalink:"/programming/exercises/uml/class-diagrams03"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Player",id:"hinweis-zur-klasse-player",level:2},{value:"Hinweise zur Klasse DiceGame",id:"hinweise-zur-klasse-dicegame",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],m={toc:c};function d(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,s.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Player")," aus \xdcbungsaufgabe\n",(0,l.kt)("a",{parentName:"li",href:"/programming/exercises/uml/class-diagrams01"},"ClassDiagrams01")," anhand des abgebildeten Klassendiagramms\nan und erstelle die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"DiceGame")),(0,l.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche beliebig vielen Spielern erm\xf6glicht,\nabwechselnd mit 3 W\xfcrfeln zu w\xfcrfeln. F\xfcr jedes gew\xfcrfelte Auge bekommt der\njeweilige Spieler einen Punkt. Ziel des Spieles ist es, so nah wie m\xf6glich an\n50 Punkte heranzukommen, ohne allerdings die 50 Punkte zu \xfcberschreiten")),(0,l.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209156029-69be8cff-4ffb-4bd6-9b7b-e52be476b2d9.png",alt:"image"})),(0,l.kt)("h2",{id:"hinweis-zur-klasse-player"},"Hinweis zur Klasse Player"),(0,l.kt)("p",null,"Passe den Konstruktor so an, dass auch weiterhin alle Attribute initialisiert\nwerden."),(0,l.kt)("h2",{id:"hinweise-zur-klasse-dicegame"},"Hinweise zur Klasse DiceGame"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void start()")," soll die Spieler abwechselnd einen Spielzug\nmachen lassen und am Ende den Sieger des Spiels auf der Konsole ausgeben"),(0,l.kt)("li",{parentName:"ul"},"Die Methode ",(0,l.kt)("inlineCode",{parentName:"li"},"void move(player: Player)")," soll es dem Spieler erm\xf6glichen zu w\xfcrfeln,\nbzw. seinen Spielzug zu beenden")),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"Hans hat aktuell 0 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nHans hat 8 Punkte\nHans hat insgesamt 8 Punkte\n\u2026\nHans hat aktuell 43 Punkte\nHans, m\xf6chtest Du w\xfcrfeln (true, false)?: false\nLisa hat aktuell 41 Punkte\nLisa, m\xf6chtest Du w\xfcrfeln (true, false)?: true\nLisa hat 10 Punkte\nLisa hat insgesamt 51 Punkte\nLisa hat verloren\nDer Sieger hei\xdft Hans und hat 43 Punkte\n")),(0,l.kt)(n.Z,{pullRequest:"37",branchSuffix:"class-diagrams/02",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);