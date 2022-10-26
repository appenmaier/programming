"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9401],{5162:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),n=a(6010);const r="tabItem_Ymn6";function i(e){let{children:t,hidden:a,className:i}=e;return l.createElement("div",{role:"tabpanel",className:(0,n.Z)(r,i),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>c});var l=a(7462),n=a(7294),r=a(6010),i=a(2389),s=a(7392),u=a(7094),o=a(2466);const d="tabList__CuJ",m="tabItem_LNqP";function p(e){var t;const{lazy:a,block:i,defaultValue:p,values:c,groupId:g,className:k}=e,b=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),N=c??b.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),h=(0,s.l)(N,((e,t)=>e.value===t.value));if(h.length>0)throw new Error(`Docusaurus error: Duplicate values "${h.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const v=null===p?p:p??(null==(t=b.find((e=>e.props.default)))?void 0:t.props.value)??b[0].props.value;if(null!==v&&!N.some((e=>e.value===v)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${v}" but none of its children has the corresponding value. Available values are: ${N.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:f,setTabGroupChoices:y}=(0,u.U)(),[x,E]=(0,n.useState)(v),w=[],{blockElementScrollPositionUntilNextRender:O}=(0,o.o5)();if(null!=g){const e=f[g];null!=e&&e!==x&&N.some((t=>t.value===e))&&E(e)}const S=e=>{const t=e.currentTarget,a=w.indexOf(t),l=N[a].value;l!==x&&(O(t),E(l),null!=g&&y(g,String(l)))},Z=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return n.createElement("div",{className:(0,r.Z)("tabs-container",d)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},k)},N.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,l.Z)({role:"tab",tabIndex:x===t?0:-1,"aria-selected":x===t,key:t,ref:e=>w.push(e),onKeyDown:Z,onFocus:S,onClick:S},i,{className:(0,r.Z)("tabs__item",m,null==i?void 0:i.className,{"tabs__item--active":x===t})}),a??t)}))),a?(0,n.cloneElement)(b.filter((e=>e.props.value===x))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},b.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==x})))))}function c(e){const t=(0,i.Z)();return n.createElement(p,(0,l.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>u});var l=a(7294),n=a(5488),r=a(5162),i=a(9960),s=a(814);function u(e){let{pullRequest:t,branchSuffix:a}=e;return l.createElement(n.Z,null,l.createElement(r.Z,{value:"exercise",label:"Exercise",default:!0},l.createElement(s.Z,{language:"console"},`git switch exercises/${a}`)),l.createElement(r.Z,{value:"solution",label:"Solution"},l.createElement(s.Z,{language:"console"},`git switch solutions/${a}`)),l.createElement(r.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",l.createElement(i.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},4265:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>u,toc:()=>d});var l=a(7462),n=(a(7294),a(3905)),r=a(7833);const i={title:"OO 02"},s=void 0,u={unversionedId:"exercises/oo/oo02",id:"exercises/oo/oo02",title:"OO 02",description:"- Passe die Klasse Vehicle aus \xdcbungsaufgabe OO01 mit Hilfe der",source:"@site/docs/exercises/oo/oo02.md",sourceDirName:"exercises/oo",slug:"/exercises/oo/oo02",permalink:"/programming/docs/exercises/oo/oo02",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/oo/oo02.md",tags:[],version:"current",frontMatter:{title:"OO 02"},sidebar:"exercisesSidebar",previous:{title:"OO 01",permalink:"/programming/docs/exercises/oo/oo01"},next:{title:"OO 03",permalink:"/programming/docs/exercises/oo/oo03"}},o={},d=[{value:"Attribute der Klasse Vehicle",id:"attribute-der-klasse-vehicle",level:2},{value:"Methoden der Klasse Vehicle",id:"methoden-der-klasse-vehicle",level:2}],m={toc:d};function p(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"Vehicle")," aus \xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"/programming/docs/exercises/oo/oo01"},"OO01")," mit Hilfe der\nabgebildeten Informationen an"),(0,n.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe ",(0,n.kt)("a",{parentName:"li",href:"/programming/docs/exercises/oo/oo01"},"OO01")," so an, dass\nsie fehlerfrei ausgef\xfchrt werden kann")),(0,n.kt)("h2",{id:"attribute-der-klasse-vehicle"},"Attribute der Klasse Vehicle"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Attribut"),(0,n.kt)("th",{parentName:"tr",align:null},"Datentyp"),(0,n.kt)("th",{parentName:"tr",align:null},"Sichtbarkeit"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"make"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"private")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"model"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"private")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"speed"),(0,n.kt)("td",{parentName:"tr",align:null},"double"),(0,n.kt)("td",{parentName:"tr",align:null},"private")))),(0,n.kt)("h2",{id:"methoden-der-klasse-vehicle"},"Methoden der Klasse Vehicle"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Methode"),(0,n.kt)("th",{parentName:"tr",align:null},"R\xfcckgabewert"),(0,n.kt)("th",{parentName:"tr",align:null},"Sichtbarkeit"),(0,n.kt)("th",{parentName:"tr",align:null},"Beschreibung"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~setMake(String)~")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~void~")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~public~")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~Festlegen des Herstellers~"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~setModel(String)~")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~void~")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~public~")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"~Festlegen des Modells~"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Vehicle(String, String)")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"void")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"public")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("em",{parentName:"td"},"Festlegen des Herstellers und des Modells"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getMake()"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"public"),(0,n.kt)("td",{parentName:"tr",align:null},"R\xfcckgabe des Herstellers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getModel()"),(0,n.kt)("td",{parentName:"tr",align:null},"String"),(0,n.kt)("td",{parentName:"tr",align:null},"public"),(0,n.kt)("td",{parentName:"tr",align:null},"R\xfcckgabe des Modells")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"getSpeed()"),(0,n.kt)("td",{parentName:"tr",align:null},"double"),(0,n.kt)("td",{parentName:"tr",align:null},"public"),(0,n.kt)("td",{parentName:"tr",align:null},"R\xfcckgabe der Geschwindigkeit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"accelerate(int)"),(0,n.kt)("td",{parentName:"tr",align:null},"void"),(0,n.kt)("td",{parentName:"tr",align:null},"public"),(0,n.kt)("td",{parentName:"tr",align:null},"Erh\xf6hung der Geschwindigkeit um den eingehenden Wert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"brake(int)"),(0,n.kt)("td",{parentName:"tr",align:null},"void"),(0,n.kt)("td",{parentName:"tr",align:null},"public"),(0,n.kt)("td",{parentName:"tr",align:null},"Reduzierung der Geschwindigkeit um den eingehenden Wert")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"print()"),(0,n.kt)("td",{parentName:"tr",align:null},"void"),(0,n.kt)("td",{parentName:"tr",align:null},"public"),(0,n.kt)("td",{parentName:"tr",align:null},"Ausgabe: Hersteller Modell")))),(0,n.kt)(r.Z,{pullRequest:"24",branchSuffix:"oo/02",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);