"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2817],{5162:(e,t,a)=>{a.d(t,{Z:()=>s});var l=a(7294),r=a(6010);const n="tabItem_Ymn6";function s(e){let{children:t,hidden:a,className:s}=e;return l.createElement("div",{role:"tabpanel",className:(0,r.Z)(n,s),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var l=a(7462),r=a(7294),n=a(6010),s=a(2389),o=a(7392),i=a(7094),u=a(2466);const p="tabList__CuJ",m="tabItem_LNqP";function c(e){var t;const{lazy:a,block:s,defaultValue:c,values:d,groupId:h,className:y}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),b=d??g.map((e=>{let{props:{value:t,label:a,attributes:l}}=e;return{value:t,label:a,attributes:l}})),v=(0,o.l)(b,((e,t)=>e.value===t.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===c?c:c??(null==(t=g.find((e=>e.props.default)))?void 0:t.props.value)??g[0].props.value;if(null!==f&&!b.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${b.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,i.U)(),[E,w]=(0,r.useState)(f),Z=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=h){const e=k[h];null!=e&&e!==E&&b.some((t=>t.value===e))&&w(e)}const T=e=>{const t=e.currentTarget,a=Z.indexOf(t),l=b[a].value;l!==E&&(N(t),w(l),null!=h&&x(h,String(l)))},P=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=Z.indexOf(e.currentTarget)+1;a=Z[t]??Z[0];break}case"ArrowLeft":{const t=Z.indexOf(e.currentTarget)-1;a=Z[t]??Z[Z.length-1];break}}null==(t=a)||t.focus()};return r.createElement("div",{className:(0,n.Z)("tabs-container",p)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":s},y)},b.map((e=>{let{value:t,label:a,attributes:s}=e;return r.createElement("li",(0,l.Z)({role:"tab",tabIndex:E===t?0:-1,"aria-selected":E===t,key:t,ref:e=>Z.push(e),onKeyDown:P,onFocus:T,onClick:T},s,{className:(0,n.Z)("tabs__item",m,null==s?void 0:s.className,{"tabs__item--active":E===t})}),a??t)}))),a?(0,r.cloneElement)(g.filter((e=>e.props.value===E))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==E})))))}function d(e){const t=(0,s.Z)();return r.createElement(c,(0,l.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>i});var l=a(7294),r=a(5488),n=a(5162),s=a(9960),o=a(814);function i(e){let{pullRequest:t,branchSuffix:a}=e;return l.createElement(r.Z,null,l.createElement(n.Z,{value:"exercise",label:"Exercise",default:!0},l.createElement(o.Z,{language:"console"},`git switch exercises/${a}`),l.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},l.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),l.createElement(n.Z,{value:"solution",label:"Solution"},l.createElement(o.Z,{language:"console"},`git switch solutions/${a}`),l.createElement(s.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},l.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),l.createElement(n.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",l.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},6951:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var l=a(7462),r=(a(7294),a(3905)),n=a(7833);const s={title:"Polymorphy03",description:""},o=void 0,i={unversionedId:"exercises/polymorphy/polymorphy03",id:"exercises/polymorphy/polymorphy03",title:"Polymorphy03",description:"",source:"@site/docs/exercises/polymorphy/polymorphy03.md",sourceDirName:"exercises/polymorphy",slug:"/exercises/polymorphy/polymorphy03",permalink:"/programming/exercises/polymorphy/polymorphy03",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/polymorphy/polymorphy03.md",tags:[],version:"current",frontMatter:{title:"Polymorphy03",description:""},sidebar:"exercisesSidebar",previous:{title:"Polymorphy02",permalink:"/programming/exercises/polymorphy/polymorphy02"},next:{title:"Polymorphy04",permalink:"/programming/exercises/polymorphy/polymorphy04"}},u={},p=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Rental",id:"hinweis-zur-klasse-rental",level:2}],m={toc:p};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,l.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"Rental")," aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/programming/exercises/polymorphy/polymorphy02"},"Polymorphy02")," anhand des abgebildeten Klassendiagramms an"),(0,r.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"li",href:"/programming/exercises/polymorphy/polymorphy02"},"Polymorphy02")," so an, dass sich alle Lastwagen der\nFahrzeugvermietung in Autobots verwandeln")),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209156712-bdd0af15-bf09-48b3-a32a-f7090f492244.png",alt:"image"})),(0,r.kt)("h2",{id:"hinweis-zur-klasse-rental"},"Hinweis zur Klasse Rental"),(0,r.kt)("p",null,"Die Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"void transformAllTrucks()")," soll alle Lastwagen in Autobots\nverwandeln."),(0,r.kt)(n.Z,{pullRequest:"43",branchSuffix:"polymorphy/03",mdxType:"Exercise"}))}c.isMDXComponent=!0}}]);