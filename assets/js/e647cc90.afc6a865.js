"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4183],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var n=a(7294),l=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,l.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var n=a(7462),l=a(7294),r=a(6010),i=a(2389),o=a(7392),s=a(7094),u=a(2466);const m="tabList__CuJ",d="tabItem_LNqP";function p(e){var t;const{lazy:a,block:i,defaultValue:p,values:c,groupId:k,className:g}=e,b=l.Children.map(e.children,(e=>{if((0,l.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??b.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),h=(0,o.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:E}=(0,s.U)(),[x,y]=(0,l.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=k){const e=f[k];null!=e&&e!==x&&N.some((t=>t.value===e))&&y(e)}const D=e=>{const t=e.currentTarget,a=w.indexOf(t),n=N[a].value;n!==x&&(Z(t),y(n),null!=k&&E(k,String(n)))},O=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return l.createElement("div",{className:(0,r.Z)("tabs-container",m)},l.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},g)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return l.createElement("li",(0,n.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:O,onFocus:D,onClick:D},i,{className:(0,r.Z)("tabs__item",d,null==i?void 0:i.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,l.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):l.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,l.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,i.Z)();return l.createElement(p,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>s});var n=a(7294),l=a(5488),r=a(5162),i=a(9960),o=a(814);function s(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(l.Z,null,n.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(o.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/exercises/${a}`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(r.Z,{value:"solution",label:"Solution"},n.createElement(o.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(i.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/solutions/${a}`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",n.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},134:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>m});var n=a(7462),l=(a(7294),a(3905)),r=a(7833);const i={title:"OO 03"},o=void 0,s={unversionedId:"exercises/oo/oo03",id:"exercises/oo/oo03",title:"OO 03",description:"- Erstelle die Klasse Dice mit Hilfe der abgebildeten Informationen",source:"@site/docs/exercises/oo/oo03.md",sourceDirName:"exercises/oo",slug:"/exercises/oo/oo03",permalink:"/programming/exercises/oo/oo03",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/oo/oo03.md",tags:[],version:"current",frontMatter:{title:"OO 03"},sidebar:"exercisesSidebar",previous:{title:"OO 02",permalink:"/programming/exercises/oo/oo02"},next:{title:"OO 04",permalink:"/programming/exercises/oo/oo04"}},u={},m=[{value:"Attribute der Klasse Dice",id:"attribute-der-klasse-dice",level:2},{value:"Methoden der Klasse Dice",id:"methoden-der-klasse-dice",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:m};function p(e){let{components:t,...a}=e;return(0,l.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,l.kt)("inlineCode",{parentName:"li"},"Dice")," mit Hilfe der abgebildeten Informationen"),(0,l.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche einen W\xfcrfel erzeugt. Es soll 5-mal\nhintereinander gew\xfcrfelt und das Ergebnis des Wurfes ausgegeben werden")),(0,l.kt)("h2",{id:"attribute-der-klasse-dice"},"Attribute der Klasse Dice"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Attribut"),(0,l.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,l.kt)("th",{parentName:"tr",align:null},"Sichtbarkeit"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"id")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"private"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"value")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"private"))))),(0,l.kt)("h2",{id:"methoden-der-klasse-dice"},"Methoden der Klasse Dice"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Methode"),(0,l.kt)("th",{parentName:"tr",align:null},"R\xfcckgabewert"),(0,l.kt)("th",{parentName:"tr",align:null},"Sichtbarkeit"),(0,l.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Dice(int)")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"public")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Setzen der ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"getId()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"public")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"R\xfcckgabe der ID"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"getValue")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"int")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"public")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"R\xfcckgabe des Wertes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"rollTheDice()")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"void")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"public")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("em",{parentName:"td"},"Setzen des Wertes"))))),(0,l.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-console"},"ID - W\xfcrfelwert\n1 - 1\n1 - 2\n1 - 5\n1 - 3\n1 - 2\n")),(0,l.kt)(r.Z,{pullRequest:"25",branchSuffix:"oo/03",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);