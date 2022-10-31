"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[3657],{5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const s="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(s,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>m});var n=t(7462),r=t(7294),s=t(6010),l=t(2389),i=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",d="tabItem_LNqP";function p(e){var a;const{lazy:t,block:l,defaultValue:p,values:m,groupId:b,className:f}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=m??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),v=(0,i.l)(h,((e,a)=>e.value===a.value));if(v.length>0)throw new Error(`Docusaurus error: Duplicate values "${v.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const k=null===p?p:p??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??g[0].props.value;if(null!==k&&!h.some((e=>e.value===k)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${k}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:E}=(0,o.U)(),[Z,y]=(0,r.useState)(k),w=[],{blockElementScrollPositionUntilNextRender:N}=(0,u.o5)();if(null!=b){const e=x[b];null!=e&&e!==Z&&h.some((a=>a.value===e))&&y(e)}const T=e=>{const a=e.currentTarget,t=w.indexOf(a),n=h[t].value;n!==Z&&(N(a),y(n),null!=b&&E(b,String(n)))},C=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=w.indexOf(e.currentTarget)+1;t=w[a]??w[0];break}case"ArrowLeft":{const a=w.indexOf(e.currentTarget)-1;t=w[a]??w[w.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,s.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":l},f)},h.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:Z===a?0:-1,"aria-selected":Z===a,key:a,ref:e=>w.push(e),onKeyDown:C,onFocus:T,onClick:T},l,{className:(0,s.Z)("tabs__item",d,null==l?void 0:l.className,{"tabs__item--active":Z===a})}),t??a)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===Z))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==Z})))))}function m(e){const a=(0,l.Z)();return r.createElement(p,(0,n.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(5488),s=t(5162),l=t(9960),i=t(814);function o(e){let{pullRequest:a,branchSuffix:t}=e;return n.createElement(r.Z,null,n.createElement(s.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(i.Z,{language:"console"},`git switch exercises/${t}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/exercises/${t}`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"solution",label:"Solution"},n.createElement(i.Z,{language:"console"},`git switch solutions/${t}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/solutions/${t}`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(s.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",n.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},9112:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>p,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(7462),r=(t(7294),t(3905)),s=t(7833);const l={title:"Abstract and Final 01"},i=void 0,o={unversionedId:"exercises/abstract-and-final/abstract-and-final01",id:"exercises/abstract-and-final/abstract-and-final01",title:"Abstract and Final 01",description:"Passe die Klassen Vehicle, Car und Truck aus \xdcbungsaufgabe",source:"@site/docs/exercises/abstract-and-final/abstract-and-final01.md",sourceDirName:"exercises/abstract-and-final",slug:"/exercises/abstract-and-final/abstract-and-final01",permalink:"/programming/exercises/abstract-and-final/abstract-and-final01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/abstract-and-final/abstract-and-final01.md",tags:[],version:"current",frontMatter:{title:"Abstract and Final 01"},sidebar:"exercisesSidebar",previous:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/programming/exercises/abstract-and-final/"},next:{title:"Schnittstellen (Interfaces)",permalink:"/programming/exercises/interfaces/"}},u={},c=[{value:"Klassendiagramm",id:"klassendiagramm",level:2}],d={toc:c};function p(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},d,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Passe die Klassen ",(0,r.kt)("inlineCode",{parentName:"p"},"Vehicle"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"Car")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"Truck")," aus \xdcbungsaufgabe\n",(0,r.kt)("a",{parentName:"p",href:"/programming/exercises/polymorphie/polymorphie03"},"Polymorphie03")," anhand des abgebildeten\nKlassendiagramms an."),(0,r.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170884302-5569e488-03f3-4b59-a886-2a81dd97eeff.png",alt:"image"})),(0,r.kt)(s.Z,{pullRequest:"45",branchSuffix:"abstract-and-final/01",mdxType:"Exercise"}))}p.isMDXComponent=!0}}]);