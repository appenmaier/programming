"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9446],{5162:(e,t,a)=>{a.d(t,{Z:()=>l});var n=a(7294),s=a(6010);const i="tabItem_Ymn6";function l(e){let{children:t,hidden:a,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,s.Z)(i,l),hidden:a},t)}},5488:(e,t,a)=>{a.d(t,{Z:()=>d});var n=a(7462),s=a(7294),i=a(6010),l=a(2389),r=a(7392),o=a(7094),u=a(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var t;const{lazy:a,block:l,defaultValue:m,values:d,groupId:g,className:b}=e,h=s.Children.map(e.children,(e=>{if((0,s.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),v=d??h.map((e=>{let{props:{value:t,label:a,attributes:n}}=e;return{value:t,label:a,attributes:n}})),x=(0,r.l)(v,((e,t)=>e.value===t.value));if(x.length>0)throw new Error(`Docusaurus error: Duplicate values "${x.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const f=null===m?m:m??(null==(t=h.find((e=>e.props.default)))?void 0:t.props.value)??h[0].props.value;if(null!==f&&!v.some((e=>e.value===f)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${f}" but none of its children has the corresponding value. Available values are: ${v.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:E}=(0,o.U)(),[y,N]=(0,s.useState)(f),w=[],{blockElementScrollPositionUntilNextRender:Z}=(0,u.o5)();if(null!=g){const e=k[g];null!=e&&e!==y&&v.some((t=>t.value===e))&&N(e)}const C=e=>{const t=e.currentTarget,a=w.indexOf(t),n=v[a].value;n!==y&&(Z(t),N(n),null!=g&&E(g,String(n)))},T=e=>{var t;let a=null;switch(e.key){case"ArrowRight":{const t=w.indexOf(e.currentTarget)+1;a=w[t]??w[0];break}case"ArrowLeft":{const t=w.indexOf(e.currentTarget)-1;a=w[t]??w[w.length-1];break}}null==(t=a)||t.focus()};return s.createElement("div",{className:(0,i.Z)("tabs-container",c)},s.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},v.map((e=>{let{value:t,label:a,attributes:l}=e;return s.createElement("li",(0,n.Z)({role:"tab",tabIndex:y===t?0:-1,"aria-selected":y===t,key:t,ref:e=>w.push(e),onKeyDown:T,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":y===t})}),a??t)}))),a?(0,s.cloneElement)(h.filter((e=>e.props.value===y))[0],{className:"margin-top--md"}):s.createElement("div",{className:"margin-top--md"},h.map(((e,t)=>(0,s.cloneElement)(e,{key:t,hidden:e.props.value!==y})))))}function d(e){const t=(0,l.Z)();return s.createElement(m,(0,n.Z)({key:String(t)},e))}},7833:(e,t,a)=>{a.d(t,{Z:()=>o});var n=a(7294),s=a(5488),i=a(5162),l=a(9960),r=a(814);function o(e){let{pullRequest:t,branchSuffix:a}=e;return n.createElement(s.Z,null,n.createElement(i.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(r.Z,{language:"console"},`git switch exercises/${a}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/exercises/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(i.Z,{value:"solution",label:"Solution"},n.createElement(r.Z,{language:"console"},`git switch solutions/${a}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/blob/solutions/${a}/Exercise.java`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(i.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du im Pull Request "," ",n.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${t}/files?diff=split`},"PR#",t)))}},8311:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>u,contentTitle:()=>r,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=a(7462),s=(a(7294),a(3905)),i=a(7833);const l={title:"Exceptions 03"},r=void 0,o={unversionedId:"exercises/exceptions/exceptions03",id:"exercises/exceptions/exceptions03",title:"Exceptions 03",description:"- Passe die Klasse Employee aus \xdcbungsaufgabe",source:"@site/docs/exercises/exceptions/exceptions03.md",sourceDirName:"exercises/exceptions",slug:"/exercises/exceptions/exceptions03",permalink:"/programming/exercises/exceptions/exceptions03",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/exceptions/exceptions03.md",tags:[],version:"current",frontMatter:{title:"Exceptions 03"},sidebar:"exercisesSidebar",previous:{title:"Exceptions 02",permalink:"/programming/exercises/exceptions/exceptions02"},next:{title:"Generische Programmierung",permalink:"/programming/exercises/generics/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweis zur Klasse Employee",id:"hinweis-zur-klasse-employee",level:2}],p={toc:c};function m(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("ul",null,(0,s.kt)("li",{parentName:"ul"},"Passe die Klasse ",(0,s.kt)("inlineCode",{parentName:"li"},"Employee")," aus \xdcbungsaufgabe\n",(0,s.kt)("a",{parentName:"li",href:"../uml/class-diagrams04"},"ClassDiagrams04")," anhand des abgebildeten\nKlassendiagramms an und erstelle die Ausnahmenklassen\n",(0,s.kt)("inlineCode",{parentName:"li"},"SalaryIncreaseTooHighException")," und ",(0,s.kt)("inlineCode",{parentName:"li"},"SalaryDecreaseException")),(0,s.kt)("li",{parentName:"ul"},"Passe die ausf\xfchrbare Klasse aus \xdcbungsaufgabe\n",(0,s.kt)("a",{parentName:"li",href:"../uml/class-diagrams04"},"ClassDiagrams04")," so an, dass ein oder mehrere\nMitarbeiter eine Gehaltserh\xf6hung bekommen")),(0,s.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,s.kt)("p",null,(0,s.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170884636-d90fbe5c-62b8-4ab2-b301-1d035e969c75.png",alt:"image"})),(0,s.kt)("h2",{id:"hinweis-zur-klasse-employee"},"Hinweis zur Klasse Employee"),(0,s.kt)("p",null,"In der Methode ",(0,s.kt)("inlineCode",{parentName:"p"},"void setSalary(int)")," soll bei einer Gehaltserh\xf6hung gr\xf6\xdfer\n10% die Ausnahme ",(0,s.kt)("inlineCode",{parentName:"p"},"SalaryIncreaseTooHighException")," und bei einer\nGehaltsverringerung die Ausnahme ",(0,s.kt)("inlineCode",{parentName:"p"},"SalaryDecreaseException")," ausgel\xf6st werden."),(0,s.kt)(i.Z,{pullRequest:"51",branchSuffix:"exceptions/03",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);