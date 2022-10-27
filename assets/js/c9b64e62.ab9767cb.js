"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6983],{5162:(e,a,l)=>{l.d(a,{Z:()=>n});var s=l(7294),t=l(6010);const r="tabItem_Ymn6";function n(e){let{children:a,hidden:l,className:n}=e;return s.createElement("div",{role:"tabpanel",className:(0,t.Z)(r,n),hidden:l},a)}},5488:(e,a,l)=>{l.d(a,{Z:()=>p});var s=l(7462),t=l(7294),r=l(6010),n=l(2389),i=l(7392),u=l(7094),o=l(2466);const c="tabList__CuJ",m="tabItem_LNqP";function d(e){var a;const{lazy:l,block:n,defaultValue:d,values:p,groupId:g,className:b}=e,v=t.Children.map(e.children,(e=>{if((0,t.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),f=p??v.map((e=>{let{props:{value:a,label:l,attributes:s}}=e;return{value:a,label:l,attributes:s}})),h=(0,i.l)(f,((e,a)=>e.value===a.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===d?d:d??(null==(a=v.find((e=>e.props.default)))?void 0:a.props.value)??v[0].props.value;if(null!==k&&!f.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${f.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:w,setTabGroupChoices:x}=(0,u.U)(),[E,N]=(0,t.useState)(k),y=[],{blockElementScrollPositionUntilNextRender:Z}=(0,o.o5)();if(null!=g){const e=w[g];null!=e&&e!==E&&f.some((a=>a.value===e))&&N(e)}const S=e=>{const a=e.currentTarget,l=y.indexOf(a),s=f[l].value;s!==E&&(Z(a),N(s),null!=g&&x(g,String(s)))},D=e=>{var a;let l=null;switch(e.key){case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;l=y[a]??y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;l=y[a]??y[y.length-1];break}}null==(a=l)||a.focus()};return t.createElement("div",{className:(0,r.Z)("tabs-container",c)},t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},b)},f.map((e=>{let{value:a,label:l,attributes:n}=e;return t.createElement("li",(0,s.Z)({role:"tab",tabIndex:E===a?0:-1,"aria-selected":E===a,key:a,ref:e=>y.push(e),onKeyDown:D,onFocus:S,onClick:S},n,{className:(0,r.Z)("tabs__item",m,null==n?void 0:n.className,{"tabs__item--active":E===a})}),l??a)}))),l?(0,t.cloneElement)(v.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):t.createElement("div",{className:"margin-top--md"},v.map(((e,a)=>(0,t.cloneElement)(e,{key:a,hidden:e.props.value!==E})))))}function p(e){const a=(0,n.Z)();return t.createElement(d,(0,s.Z)({key:String(a)},e))}},7833:(e,a,l)=>{l.d(a,{Z:()=>u});var s=l(7294),t=l(5488),r=l(5162),n=l(9960),i=l(814);function u(e){let{pullRequest:a,branchSuffix:l}=e;return s.createElement(t.Z,null,s.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},s.createElement(i.Z,{language:"console"},`git switch exercises/${l}`)),s.createElement(r.Z,{value:"solution",label:"Solution"},s.createElement(i.Z,{language:"console"},`git switch solutions/${l}`)),s.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",s.createElement(n.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},3345:(e,a,l)=>{l.r(a),l.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>n,metadata:()=>u,toc:()=>c});var s=l(7462),t=(l(7294),l(3905)),r=l(7833);const n={title:"Class Diagrams 01"},i=void 0,u={unversionedId:"exercises/uml/class-diagrams01",id:"exercises/uml/class-diagrams01",title:"Class Diagrams 01",description:"- Erstelle die Klasse Player anhand des abgebildeten Klassendiagramms",source:"@site/docs/exercises/uml/class-diagrams01.md",sourceDirName:"exercises/uml",slug:"/exercises/uml/class-diagrams01",permalink:"/programming/exercises/uml/class-diagrams01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/uml/class-diagrams01.md",tags:[],version:"current",frontMatter:{title:"Class Diagrams 01"},sidebar:"exercisesSidebar",previous:{title:"Activity Diagrams 01",permalink:"/programming/exercises/uml/activity-diagrams01"},next:{title:"Class Diagrams 02",permalink:"/programming/exercises/uml/class-diagrams02"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Player",id:"hinweis-zur-klasse-player",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2},{value:"Hinweis",id:"hinweis",level:2}],m={toc:c};function d(e){let{components:a,...l}=e;return(0,t.kt)("wrapper",(0,s.Z)({},m,l,{components:a,mdxType:"MDXLayout"}),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,t.kt)("inlineCode",{parentName:"li"},"Player")," anhand des abgebildeten Klassendiagramms"),(0,t.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche ein einfaches W\xfcrfelduell zwischen\n2 Spielern simuliert:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"W\xfcrfelwert von Spieler 1 > W\xfcrfelwert von Spieler 2: Spieler 1 gewinnt"),(0,t.kt)("li",{parentName:"ul"},"W\xfcrfelwert von Spieler 1 < W\xfcrfelwert von Spieler 2: Spieler 2 gewinnt"),(0,t.kt)("li",{parentName:"ul"},"W\xfcrfelwert von Spieler 1 = W\xfcrfelwert von Spieler 2: Unentschieden")))),(0,t.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("p",null,(0,t.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170923374-95bd6412-67d4-40cf-bf39-ea7739fcbca1.png",alt:"image"})),(0,t.kt)("h2",{id:"hinweis-zur-klasse-player"},"Hinweis zur Klasse Player"),(0,t.kt)("p",null,"Der Konstruktor soll den Namen initialisieren."),(0,t.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-console"},"Hans w\xfcrfelt eine 2\nLisa w\xfcrfelt eine 3\nLisa gewinnt\n")),(0,t.kt)("h2",{id:"hinweis"},"Hinweis"),(0,t.kt)("p",null,"Verwende die Klasse ",(0,t.kt)("inlineCode",{parentName:"p"},"Dice")," aus \xdcbungsaufgabe ",(0,t.kt)("a",{parentName:"p",href:"/programming/exercises/oo/oo03"},"OO03")),(0,t.kt)(r.Z,{pullRequest:"36",branchSuffix:"class-diagrams/01",mdxType:"Exercise"}))}d.isMDXComponent=!0}}]);