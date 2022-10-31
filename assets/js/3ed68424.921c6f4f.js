"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[7598],{5162:(e,a,t)=>{t.d(a,{Z:()=>l});var n=t(7294),r=t(6010);const i="tabItem_Ymn6";function l(e){let{children:a,hidden:t,className:l}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(i,l),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),r=t(7294),i=t(6010),l=t(2389),s=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var a;const{lazy:t,block:l,defaultValue:m,values:d,groupId:v,className:b}=e,g=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),h=d??g.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,s.l)(h,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===m?m:m??(null==(a=g.find((e=>e.props.default)))?void 0:a.props.value)??g[0].props.value;if(null!==E&&!h.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${h.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:x,setTabGroupChoices:k}=(0,o.U)(),[j,w]=(0,r.useState)(E),Z=[],{blockElementScrollPositionUntilNextRender:y}=(0,u.o5)();if(null!=v){const e=x[v];null!=e&&e!==j&&h.some((a=>a.value===e))&&w(e)}const N=e=>{const a=e.currentTarget,t=Z.indexOf(a),n=h[t].value;n!==j&&(y(a),w(n),null!=v&&k(v,String(n)))},T=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=Z.indexOf(e.currentTarget)+1;t=Z[a]??Z[0];break}case"ArrowLeft":{const a=Z.indexOf(e.currentTarget)-1;t=Z[a]??Z[Z.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,i.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":l},b)},h.map((e=>{let{value:a,label:t,attributes:l}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:j===a?0:-1,"aria-selected":j===a,key:a,ref:e=>Z.push(e),onKeyDown:T,onFocus:N,onClick:N},l,{className:(0,i.Z)("tabs__item",p,null==l?void 0:l.className,{"tabs__item--active":j===a})}),t??a)}))),t?(0,r.cloneElement)(g.filter((e=>e.props.value===j))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},g.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==j})))))}function d(e){const a=(0,l.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(5488),i=t(5162),l=t(9960),s=t(814);function o(e){let{pullRequest:a,branchSuffix:t}=e;return n.createElement(r.Z,null,n.createElement(i.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(s.Z,{language:"console"},`git switch exercises/${t}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/exercises/${t}`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(i.Z,{value:"solution",label:"Solution"},n.createElement(s.Z,{language:"console"},`git switch solutions/${t}`),n.createElement(l.Z,{to:`https://gitpod.io/#https://github.com/jappuccini/java-exercises/solutions/${t}`},n.createElement("img",{alt:"Open in Gitpod",src:"https://gitpod.io/button/open-in-gitpod.svg"}))),n.createElement(i.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",n.createElement(l.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},5863:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>s,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>c});var n=t(7462),r=(t(7294),t(3905)),i=t(7833);const l={title:"JavaAPI 04"},s=void 0,o={unversionedId:"exercises/java-api/java-api04",id:"exercises/java-api/java-api04",title:"JavaAPI 04",description:"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer",source:"@site/docs/exercises/java-api/java-api04.md",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/java-api04",permalink:"/programming/exercises/java-api/java-api04",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/java-api/java-api04.md",tags:[],version:"current",frontMatter:{title:"JavaAPI 04"},sidebar:"exercisesSidebar",previous:{title:"Java API 03",permalink:"/programming/exercises/java-api/java-api03"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/programming/exercises/enumerations/"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer\neingegebenen negativen short-Zahl (-1 bis -32.768) berechnet und ausgibt."),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte einen Wert zwischen -1 und -32.768 ein: -2854\nErgebnis: Der vorzeichenfreie Dezimalwert betr\xe4gt 62682\n")),(0,r.kt)(i.Z,{pullRequest:"33",branchSuffix:"java-api/04",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);