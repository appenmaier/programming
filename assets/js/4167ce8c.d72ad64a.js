"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[5882],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>p});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),o=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),m=o(n),p=a,g=m["".concat(l,".").concat(p)]||m[p]||d[p]||i;return n?r.createElement(g,s(s({ref:t},c),{},{components:n})):r.createElement(g,s({ref:t},c))}));function p(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:a,s[1]=u;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},366:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>u,toc:()=>o});var r=n(7462),a=(n(7294),n(3905));const i={title:"Entwurfsmuster (Design Patterns)",description:"",sidebar_position:20,tags:["entwurfmuster","mvc","beobachter","einzelst\xfcck","adapter"]},s=void 0,u={unversionedId:"documentation/design/design-patterns",id:"documentation/design/design-patterns",title:"Entwurfsmuster (Design Patterns)",description:"",source:"@site/docs/documentation/design/design-patterns.md",sourceDirName:"documentation/design",slug:"/documentation/design/design-patterns",permalink:"/programming/docs/documentation/design/design-patterns",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/design/design-patterns.md",tags:[{label:"entwurfmuster",permalink:"/programming/docs/tags/entwurfmuster"},{label:"mvc",permalink:"/programming/docs/tags/mvc"},{label:"beobachter",permalink:"/programming/docs/tags/beobachter"},{label:"einzelst\xfcck",permalink:"/programming/docs/tags/einzelstuck"},{label:"adapter",permalink:"/programming/docs/tags/adapter"}],version:"current",sidebarPosition:20,frontMatter:{title:"Entwurfsmuster (Design Patterns)",description:"",sidebar_position:20,tags:["entwurfmuster","mvc","beobachter","einzelst\xfcck","adapter"]},sidebar:"tutorialSidebar",previous:{title:"Gestaltungsprinzipien (Design Principles)",permalink:"/programming/docs/documentation/design/design-principles"},next:{title:"Datenklassen (Records)",permalink:"/programming/docs/documentation/records"}},l={},o=[{value:"Das Adapater-Entwurfsmuster",id:"das-adapater-entwurfsmuster",level:2},{value:"Das MVC-Entwurfsmuster",id:"das-mvc-entwurfsmuster",level:2},{value:"Das Beobachter-Entwurfsmuster",id:"das-beobachter-entwurfsmuster",level:2},{value:"Das Einzelst\xfcck-Entwufsmuster",id:"das-einzelst\xfcck-entwufsmuster",level:2}],c={toc:o};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Entwurfsmuster (Design Patterns) sind L\xf6sungsans\xe4tze f\xfcr wiederkehrende Probleme der Softwareentwicklung und sollen dabei helfen, Programmierfehler zu vermeiden, Programmentw\xfcrfe wiederverwendbar und m\xf6glichst effizient zu gestalten. Sie k\xf6nnen u.a. in\nErzeugungsmuster (z.B. Einzelst\xfcck), Strukturmuster (z.B. Adapter) und Verhaltensmuster (z.B. Beobachter) unterteilt werden."),(0,a.kt)("p",null,"Der Begriff Entwurfsmuster wurde ma\xdfgeblich durch das 1994 erschienene Buch ",(0,a.kt)("em",{parentName:"p"},"Design Patterns \u2013 Elements of Reusable Object-Oriented Software")," von Richard Helm, Ralph Johnson und John Vlissides (auch bekannt als ",(0,a.kt)("em",{parentName:"p"},"Gang of Four"),") gepr\xe4gt."),(0,a.kt)("h2",{id:"das-adapater-entwurfsmuster"},"Das Adapater-Entwurfsmuster"),(0,a.kt)("p",null,"Adapterklassen (auch H\xfcllenklassen oder Wrapper-Klassen) erm\xf6glichen die Kommunikation zwischen Klassen mit zueinander inkompatiblen Schnittstellen. Bekannte Adapterklassen in Java sind die sind Wrapper-Klassen ",(0,a.kt)("inlineCode",{parentName:"p"},"Short"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Byte"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Integer"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Long"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Float"),",\n",(0,a.kt)("inlineCode",{parentName:"p"},"Double"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Character"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Boolean"),". Das Adapter-Entwurfsmuster geh\xf6rt zu den Strukturmustern."),(0,a.kt)("h2",{id:"das-mvc-entwurfsmuster"},"Das MVC-Entwurfsmuster"),(0,a.kt)("p",null,"Das MVC (Model-View-Controller)-Entwurfmuster stellt einen g\xe4ngigen Ansatz zur Entwicklung von grafischen Benutzeroberfl\xe4chen dar, bei dem die grafische Benutzeroberfl\xe4che in drei Bereiche unterteilt wird:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Das ",(0,a.kt)("strong",{parentName:"li"},"Model")," ist f\xfcr die Datenhaltung und -verwaltung zust\xe4ndig"),(0,a.kt)("li",{parentName:"ul"},"Die ",(0,a.kt)("strong",{parentName:"li"},"View")," ist f\xfcr die Darstellung der Oberfl\xe4che zust\xe4ndig, welche wiederum in Aufbau und Aussehen unterteilt ist"),(0,a.kt)("li",{parentName:"ul"},"Der ",(0,a.kt)("strong",{parentName:"li"},"Controller")," \xfcbernimmt die Ereignisbehandlung und erm\xf6glicht so die Benutzerinteraktion")),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/175276227-7ad23517-2a5b-42c4-9a2f-27338cf34644.png",alt:"image"})),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Der Begriff MVC wird oft auch als Synonym f\xfcr MVC-\xe4hnliche Varianten wie z.B. MVP (Model-View-Presenter) oder MVVM (Model-View-ViewModel) verwendet.")),(0,a.kt)("h2",{id:"das-beobachter-entwurfsmuster"},"Das Beobachter-Entwurfsmuster"),(0,a.kt)("p",null,"Das Beobachter-Entwurfsmuster erm\xf6glicht, dass sich Objekte (Observer) bei einem anderen Objekt (Subject) registrieren und von diesem informiert werden, wenn es sich \xe4ndert. Die Ereignisbehandlung in grafischen Benutzeroberfl\xe4chen ist eine konkrete Umsetzung\ndes Beobachter-Entwurfsmusters. Es geh\xf6rt zu den Verhaltensmustern."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/175276105-c2f3545e-2228-437d-abab-b0785a77bb23.png",alt:"image"})),(0,a.kt)("h2",{id:"das-einzelst\xfcck-entwufsmuster"},"Das Einzelst\xfcck-Entwufsmuster"),(0,a.kt)("p",null,"Das Einzelst\xfcck-Entwurfsmuster stellt sicher, dass zu einer Klasse genau ein Objekt (Singleton) zur Laufzeit existiert. Ein Anwendungsbeispiel f\xfcr das Einzelst\xfcck-Entwurfsmuster ist das Model in einer grafischen Benutzeroberfl\xe4che. Es geh\xf6rt zu den\nErzeugungsmustern."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Singleton {\n\n    private static Singleton instance;\n  \n    private Singleton() { }\n  \n    public static Singleton getInstance() {\n        if (instance == null) {\n            instance = new Singleton();\n        }\n        return instance;\n    }\n\n}\n")))}d.isMDXComponent=!0}}]);