"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[7598],{5162:(e,a,t)=>{t.d(a,{Z:()=>s});var n=t(7294),r=t(6010);const l="tabItem_Ymn6";function s(e){let{children:a,hidden:t,className:s}=e;return n.createElement("div",{role:"tabpanel",className:(0,r.Z)(l,s),hidden:t},a)}},5488:(e,a,t)=>{t.d(a,{Z:()=>d});var n=t(7462),r=t(7294),l=t(6010),s=t(2389),i=t(7392),o=t(7094),u=t(2466);const c="tabList__CuJ",p="tabItem_LNqP";function m(e){var a;const{lazy:t,block:s,defaultValue:m,values:d,groupId:v,className:b}=e,h=r.Children.map(e.children,(e=>{if((0,r.isValidElement)(e)&&"value"in e.props)return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})),g=d??h.map((e=>{let{props:{value:a,label:t,attributes:n}}=e;return{value:a,label:t,attributes:n}})),f=(0,i.l)(g,((e,a)=>e.value===a.value));if(f.length>0)throw new Error(`Docusaurus error: Duplicate values "${f.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`);const E=null===m?m:m??(null==(a=h.find((e=>e.props.default)))?void 0:a.props.value)??h[0].props.value;if(null!==E&&!g.some((e=>e.value===E)))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${E}" but none of its children has the corresponding value. Available values are: ${g.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);const{tabGroupChoices:k,setTabGroupChoices:x}=(0,o.U)(),[w,j]=(0,r.useState)(E),Z=[],{blockElementScrollPositionUntilNextRender:y}=(0,u.o5)();if(null!=v){const e=k[v];null!=e&&e!==w&&g.some((a=>a.value===e))&&j(e)}const N=e=>{const a=e.currentTarget,t=Z.indexOf(a),n=g[t].value;n!==w&&(y(a),j(n),null!=v&&x(v,String(n)))},T=e=>{var a;let t=null;switch(e.key){case"ArrowRight":{const a=Z.indexOf(e.currentTarget)+1;t=Z[a]??Z[0];break}case"ArrowLeft":{const a=Z.indexOf(e.currentTarget)-1;t=Z[a]??Z[Z.length-1];break}}null==(a=t)||a.focus()};return r.createElement("div",{className:(0,l.Z)("tabs-container",c)},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":s},b)},g.map((e=>{let{value:a,label:t,attributes:s}=e;return r.createElement("li",(0,n.Z)({role:"tab",tabIndex:w===a?0:-1,"aria-selected":w===a,key:a,ref:e=>Z.push(e),onKeyDown:T,onFocus:N,onClick:N},s,{className:(0,l.Z)("tabs__item",p,null==s?void 0:s.className,{"tabs__item--active":w===a})}),t??a)}))),t?(0,r.cloneElement)(h.filter((e=>e.props.value===w))[0],{className:"margin-top--md"}):r.createElement("div",{className:"margin-top--md"},h.map(((e,a)=>(0,r.cloneElement)(e,{key:a,hidden:e.props.value!==w})))))}function d(e){const a=(0,s.Z)();return r.createElement(m,(0,n.Z)({key:String(a)},e))}},7833:(e,a,t)=>{t.d(a,{Z:()=>o});var n=t(7294),r=t(5488),l=t(5162),s=t(9960),i=t(814);function o(e){let{pullRequest:a,branchSuffix:t}=e;return n.createElement(r.Z,null,n.createElement(l.Z,{value:"exercise",label:"Exercise",default:!0},n.createElement(i.Z,{language:"console"},`git switch exercises/${t}`)),n.createElement(l.Z,{value:"solution",label:"Solution"},n.createElement(i.Z,{language:"console"},`git switch solutions/${t}`)),n.createElement(l.Z,{value:"pullrequest",label:"Pull Request"},"Alle \xa0\xc4nderungen zwischen der Aufgabe und der L\xf6sung findest du in diesem"," ",n.createElement(s.Z,{to:`https://github.com/jappuccini/java-exercises/pull/${a}/files?diff=split`},"PR#",a)))}},5863:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>u,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var n=t(7462),r=(t(7294),t(3905)),l=t(7833);const s={title:"JavaAPI 04"},i=void 0,o={unversionedId:"exercises/java-api/java-api04",id:"exercises/java-api/java-api04",title:"JavaAPI 04",description:"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer",source:"@site/docs/exercises/java-api/java-api04.md",sourceDirName:"exercises/java-api",slug:"/exercises/java-api/java-api04",permalink:"/programming/exercises/java-api/java-api04",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/java-api/java-api04.md",tags:[],version:"current",frontMatter:{title:"JavaAPI 04"},sidebar:"exercisesSidebar",previous:{title:"Java API 03",permalink:"/programming/exercises/java-api/java-api03"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/programming/exercises/enumerations/"}},u={},c=[{value:"Konsolenausgabe",id:"konsolenausgabe",level:2}],p={toc:c};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Erstelle eine ausf\xfchrbare Klasse, welche den vorzeichenfreien Dezimalwert einer\neingegebenen negativen short-Zahl (-1 bis -32.768) berechnet und ausgibt."),(0,r.kt)("h2",{id:"konsolenausgabe"},"Konsolenausgabe"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-console"},"Gib bitte einen Wert zwischen -1 und -32.768 ein: -2854\nErgebnis: Der vorzeichenfreie Dezimalwert betr\xe4gt 62682\n")),(0,r.kt)(l.Z,{pullRequest:"33",branchSuffix:"java-api/04",mdxType:"Exercise"}))}m.isMDXComponent=!0}}]);