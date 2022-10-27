"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2023],{5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const s="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>p});var n=t(7462),r=t(7294),s=t(6010),l=t(2389),i=t(7392),u=t(7094),o=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function m(e){var a;const{lazy:t,block:l,defaultValue:m,values:p,groupId:g,className:b}=e,f=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=p??f.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,i.l)(h,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===m?m:m??(null==(a=f.find((e=>e.props.default)))?void 0:a.props.value)??f[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:N,setTabGroupChoices:x}=(0,u.U)(),[w,E]=(0,r.useState)(k),y=[],{blockElementScrollPositionUntilNextRender:Z}=(0,o.o5)();if(null!=g){const e=N[g];null!=e&&e!==w&&h.some((a=>a.value===e))&&E(e)}const T=e=>{const a=e.currentTarget,t=y.indexOf(a),n=h[t].value;n!==w&&(Z(a),E(n),null!=g&&x(g,String(n)))},z=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=y.indexOf(e.currentTarget)+1;t=y[a]??y[0];break}case"ArrowLeft":{const a=y.indexOf(e.currentTarget)-1;t=y[a]??y[y.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>y.push(e),onKeyDown:z,onFocus:T,onClick:T},l,{className:(0,s.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,r.cloneElement)(f.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},f.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function p(e){const a=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>u});var n=t(7294),r=t(5488),s=t(5162),l=t(9960),i=t(814);function u(e){let{pullRequest:a,branchSuffix:t}=e;return n.createElement(r.Z,null,n.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(i.Z,{language:"console"},`git switch exercises/${t}`)),n.createElement(s.Z,{value:"solution",label:"Solution"},n.createElement(i.Z,{language:"console"},`git switch solutions/${t}`)),n.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",n.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},2507:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>c});var n=t(7462),r=(t(7294),t(3905)),s=t(7833);const l={title:"Interfaces 01"},i=void 0,u={unversionedId:"exercises/interfaces/interfaces01",id:"exercises/interfaces/interfaces01",title:"Interfaces 01",description:"- Passe die Klasse Rental aus \xdcbungsaufgabe",source:"@site/docs/exercises/interfaces/interfaces01.md",sourceDirName:"exercises/interfaces",slug:"/exercises/interfaces/interfaces01",permalink:"/programming/exercises/interfaces/interfaces01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/interfaces/interfaces01.md",tags:[],version:"current",frontMatter:{title:"Interfaces 01"},sidebar:"exercisesSidebar",previous:{title:"Schnittstellen (Interfaces)",permalink:"/programming/exercises/interfaces/"},next:{title:"Komparatoren",permalink:"/programming/exercises/comparators/"}},o={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse TravelAgency",id:"hinweise-zur-klasse-travelagency",level:2},{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],d={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Rental")," aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/programming/exercises/abstract-and-final/abstract-and-final01"},"Abstract and Final 01")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"TravelAgency")," sowie die\nSchnittstelle ",(0,r.kt)("inlineCode",{parentName:"li"},"Partner")),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/programming/exercises/abstract-and-final/abstract-and-final01"},"Abstract and Final 01"),") so an, dass ein Reiseb\xfcro\nerzeugt wird, dass diesem die Autovermietung hinzugef\xfcgt wird und dass alle\nAttribute des Reiseb\xfcros ausgegeben werden")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170883385-dbd51dae-eeba-49f9-a6ca-a8714f1b994d.png",alt:"image"})),(0,r.kt)("h2",{id:"hinweise-zur-klasse-travelagency"},"Hinweise zur Klasse TravelAgency"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Der Konstruktor soll alle Attribute initialisieren"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void addPartner(Partner)")," soll dem Reiseb\xfcro einen Partner\nhinzuf\xfcgen"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"void print()")," soll alle Attribute auf der Konsole ausgeben")),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Reiseb\xfcro Schmidt\nUnsere Partner:\nFahrzeugvermietung M\xfcller\nUnsere Fahrzeuge:\nPorsche 911 (Elektro, 2 Sitzpl\xe4tze)\nMAN TGX (Diesel, 20t)\nOpel Zafira Life (Diesel, 7 Sitzpl\xe4tze)\n")),(0,r.kt)(s.Z,{pullRequest:"46",branchSuffix:"",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);