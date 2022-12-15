"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4501],{5162:(e,a,t)=>{t.d(a,{Z:()=>o});var r=t(7294),n=t(6010);const s="tabItem_Ymn6";function o(e){let{children:a,hidden:t,className:o}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(s,o),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var r=t(7462),n=t(7294),s=t(6010),o=t(2389),l=t(7392),i=t(7094),u=t(2466);const c="tabList__CuJ",m="tabItem_LNqP";function p(e){var a;const{lazy:t,block:o,defaultValue:p,values:d,groupId:b,className:g}=e,h=n.Children.map(e.children,(e=>{if((0,n.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:a,label:t,attributes:r}}=e;return{value:a,label:t,attributes:r}})),f=(0,l.l)(v,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==k&&!v.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:E}=(0,i.U)(),[w,C]=(0,n.useState)(k),N=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=b){const e=x[b];null!=e&&e!==w&&v.some((a=>a.value===e))&&C(e)}const z=e=>{const a=e.currentTarget,t=N.indexOf(a),r=v[t].value;r!==w&&(Z(a),C(r),null!=b&&E(b,String(r)))},y=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=N.indexOf(e.currentTarget)+1;t=N[a]??N[0];break}case"ArrowLeft":{const a=N.indexOf(e.currentTarget)-1;t=N[a]??N[N.length-1];break}}null==(a=t)||a.focus()};return n.createElement("div",{className:(0,s.Z)("tabs-container",c)},n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":o},g)},v.map((e=>{let{value:a,label:t,attributes:o}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>N.push(e),onKeyDown:y,onFocus:z,onClick:z},o,{className:(0,s.Z)("tabs__item",m,null==o?void 0:o.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,n.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):n.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,n.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function d(e){const a=(0,o.Z)();return n.createElement(p,(0,r.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>i});var r=t(7294),n=t(5488),s=t(5162),o=t(9960),l=t(814);function i(e){let{pullRequest:a,branchSuffix:t}=e;return r.createElement(n.Z,null,r.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},r.createElement(l.Z,{language:"console"},`git switch exercises/${t}`),r.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${t}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"solution",label:"Solution"},r.createElement(l.Z,{language:"console"},`git switch solutions/${t}`),r.createElement(o.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${t}/Exercise.java`},r.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),r.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",r.createElement(o.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},6836:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var r=t(7462),n=(t(7294),t(3905)),s=t(7833);const o={title:"Comparators 02"},l=void 0,i={unversionedId:"exercises/comparators/comparators02",id:"exercises/comparators/comparators02",title:"Comparators 02",description:"- Erstelle die Klasse CoordinateComparator anhand des abgebildeten",source:"@site/docs/exercises/comparators/comparators02.md",sourceDirName:"exercises/comparators",slug:"/exercises/comparators/comparators02",permalink:"/programming/exercises/comparators/comparators02",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/comparators/comparators02.md",tags:[],version:"current",frontMatter:{title:"Comparators 02"},sidebar:"exercisesSidebar",previous:{title:"Comparators 01",permalink:"/programming/exercises/comparators/comparators01"},next:{title:"Ausnahmen (Exceptions)",permalink:"/programming/exercises/exceptions/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse CoordinateComparator",id:"hinweis-zur-klasse-coordinatecomparator",level:2}],m={toc:c};function p(e){let{components:a,...t}=e;return(0,n.kt)("wrapper",(0,r.Z)({},m,t,{components:a,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"CoordinateComparator")," anhand des abgebildeten\nKlassendiagramms"),(0,n.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,n.kt)("a",{parentName:"li",href:"/programming/exercises/comparators/comparators01"},"Comparators01")," so an, dass die Koordinatenliste mit\nHilfe der Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"CoordinateComparator")," sortiert wird")),(0,n.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/179708340-78b63f31-6a3f-4790-9bbb-d60af5cd01a7.png",alt:"image"})),(0,n.kt)("h2",{id:"hinweis-zur-klasse-coordinatecomparator"},"Hinweis zur Klasse CoordinateComparator"),(0,n.kt)("p",null,"Die Methode ",(0,n.kt)("inlineCode",{parentName:"p"},"int compare(Coordinate, Coordinate)")," soll zwei eingehende\nKoordinaten anhand ihrer jeweiligen Distanz zum Nullpunkt vergleichen. Ist die\nDistanz der ersten Koordinate zum Nullpunkt kleiner als bzw. gr\xf6\xdfer als bzw.\ngleich die der zweiten Koordinate, soll der Wert -1 bzw. 1 bzw. 0 zur\xfcckgegeben\nwerden."),(0,n.kt)(s.Z,{pullRequest:"48",branchSuffix:"comparators/02",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);