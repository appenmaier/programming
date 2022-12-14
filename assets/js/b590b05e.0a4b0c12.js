"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[7356],{3905:(e,r,n)=>{n.d(r,{Zo:()=>u,kt:()=>p});var t=n(7294);function a(e,r,n){return r in e?Object.defineProperty(e,r,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[r]=n,e}function i(e,r){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);r&&(t=t.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),n.push.apply(n,t)}return n}function o(e){for(var r=1;r<arguments.length;r++){var n=null!=arguments[r]?arguments[r]:{};r%2?i(Object(n),!0).forEach((function(r){a(e,r,n[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))}))}return e}function l(e,r){if(null==e)return{};var n,t,a=function(e,r){if(null==e)return{};var n,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)n=i[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=t.createContext({}),m=function(e){var r=t.useContext(s),n=r;return e&&(n="function"==typeof e?e(r):o(o({},r),e)),n},u=function(e){var r=m(e.components);return t.createElement(s.Provider,{value:r},e.children)},c={inlineCode:"code",wrapper:function(e){var r=e.children;return t.createElement(t.Fragment,{},r)}},d=t.forwardRef((function(e,r){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=m(n),p=a,g=d["".concat(s,".").concat(p)]||d[p]||c[p]||i;return n?t.createElement(g,o(o({ref:r},u),{},{components:n})):t.createElement(g,o({ref:r},u))}));function p(e,r){var n=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in r)hasOwnProperty.call(r,s)&&(l[s]=r[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var m=2;m<i;m++)o[m]=n[m];return t.createElement.apply(null,o)}return t.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6490:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>m});var t=n(7462),a=(n(7294),n(3905));const i={title:"Personalverwaltung",description:"",tags:["exceptions"]},o=void 0,l={unversionedId:"additional-material/exam-exercises2/human-resources",id:"additional-material/exam-exercises2/human-resources",title:"Personalverwaltung",description:"",source:"@site/docs/additional-material/exam-exercises2/human-resources.md",sourceDirName:"additional-material/exam-exercises2",slug:"/additional-material/exam-exercises2/human-resources",permalink:"/programming/additional-material/exam-exercises2/human-resources",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/additional-material/exam-exercises2/human-resources.md",tags:[{label:"exceptions",permalink:"/programming/tags/exceptions"}],version:"current",frontMatter:{title:"Personalverwaltung",description:"",tags:["exceptions"]},sidebar:"additionalMaterialSidebar",previous:{title:"W\xf6rterbuch",permalink:"/programming/additional-material/exam-exercises2/dictionary"},next:{title:"Lego-Baustein",permalink:"/programming/additional-material/exam-exercises2/lego-brick"}},s={},m=[{value:"Klassendiagramm",id:"klassendiagramm",level:2},{value:"Hinweise zur Klasse HumanResources",id:"hinweise-zur-klasse-humanresources",level:2}],u={toc:m};function c(e){let{components:r,...n}=e;return(0,a.kt)("wrapper",(0,t.Z)({},u,n,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Setze das abgebildete Klassendiagramm vollst\xe4ndig um. Erstelle zum Testen eine ausf\xfchrbare Klasse und/oder eine Testklasse."),(0,a.kt)("h2",{id:"klassendiagramm"},"Klassendiagramm"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/207314769-6ce0ad07-7661-4935-a244-5f27136078fe.png",alt:"image"})),(0,a.kt)("h2",{id:"hinweise-zur-klasse-humanresources"},"Hinweise zur Klasse HumanResources"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addTelephoneNumber(telephoneNumber: TelephoneNumber, person: Person)")," soll dem Telefonbuch (",(0,a.kt)("inlineCode",{parentName:"li"},"telephoneBook"),") die eingehende Telefonnummer als Schl\xfcssel\nsowie die eingehende Person als Wert hinzuf\xfcgen"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"void addStaff(person: Person)")," soll der Personalliste (",(0,a.kt)("inlineCode",{parentName:"li"},"staff"),") die eingehende Person hinzuf\xfcgen. F\xfcr den Fall, dass diese Person bereits in der\nPersonalliste vorhanden ist, soll die Ausnahme ",(0,a.kt)("inlineCode",{parentName:"li"},"DuplicateException")," ausgel\xf6st werden"),(0,a.kt)("li",{parentName:"ul"},"Die Methode ",(0,a.kt)("inlineCode",{parentName:"li"},"ArrayList<TelephoneNumber> getTelephoneNumbersByPersonId(id: int)")," soll alle Telefonnummern zur eingehenden Personennummer zur\xfcckgeben")))}c.isMDXComponent=!0}}]);