"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[2784],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>u});var r=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):l(l({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(t),u=i,h=m["".concat(o,".").concat(u)]||m[u]||d[u]||a;return t?r.createElement(h,l(l({ref:n},p),{},{components:t})):r.createElement(h,l({ref:n},p))}));function u(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,l=new Array(a);l[0]=m;var s={};for(var o in n)hasOwnProperty.call(n,o)&&(s[o]=n[o]);s.originalType=e,s.mdxType="string"==typeof e?e:i,l[1]=s;for(var c=2;c<a;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},4375:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=t(7462),i=(t(7294),t(3905));const a={title:"Schnittstellen (Interfaces)",description:"",sidebar_position:210,tags:["schnittstelle"]},l=void 0,s={unversionedId:"documentation/interfaces",id:"documentation/interfaces",title:"Schnittstellen (Interfaces)",description:"",source:"@site/docs/documentation/interfaces.md",sourceDirName:"documentation",slug:"/documentation/interfaces",permalink:"/programming/docs/documentation/interfaces",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/interfaces.md",tags:[{label:"schnittstelle",permalink:"/programming/docs/tags/schnittstelle"}],version:"current",sidebarPosition:210,frontMatter:{title:"Schnittstellen (Interfaces)",description:"",sidebar_position:210,tags:["schnittstelle"]},sidebar:"documentationSidebar",previous:{title:"Abstrakte und finale Klassen und Methoden",permalink:"/programming/docs/documentation/abstract-and-final"},next:{title:"Komparatoren",permalink:"/programming/docs/documentation/comparators"}},o={},c=[{value:"Definition von Schnittstellen",id:"definition-von-schnittstellen",level:2},{value:"Implementieren von Schnittstellen",id:"implementieren-von-schnittstellen",level:2},{value:"Verwenden von Schnittstellen",id:"verwenden-von-schnittstellen",level:2}],p={toc:c};function d(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Wird eine Klasse von mehreren Klassen abgeleitet, spricht man von Mehrfachvererbung. Das Prinzip der Mehrfachvererbung wird von vielen Programmiersprachen allerdings nicht (direkt) unterst\xfctzt. Der Hauptgrund hier sind m\xf6gliche Mehrdeutigkeiten. Erbt eine Klasse\n\xfcber mehrere m\xf6gliche Pfade von einer Basisklasse und werden dabei m\xf6glicherweise Methoden der Basisklasse unterschiedlich \xfcberschrieben, entstehen dadurch nicht eindeutige Varianten. Aufgrund der Rautenform des Klassendiagramms wird dieses Szenario also\n",(0,i.kt)("strong",{parentName:"p"},"Diamantenproblem")," bezeichnet."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/177196507-3e41e441-c9f6-45df-a913-7737746190f9.png",alt:"image"})),(0,i.kt)("p",null,"Zur L\xf6sung des Diamantenproblems werden Schnittstellen (Interfaces) verwendet. Schnittstellen sind im Prinzip abstrakte Klassen, die ausschlie\xdflich abstrakte Methoden besitzen. Durch Schnittstellen wird sichergestellt, dass Klassen bestimmte Methoden\nbereitstellen und dass verschiedene Klassen miteinander kommunizieren k\xf6nnen."),(0,i.kt)("h2",{id:"definition-von-schnittstellen"},"Definition von Schnittstellen"),(0,i.kt)("p",null,"Die Definition einer Schnittstelle erfolgt analog zur Definition von Klassen. Das Schl\xfcsselwort f\xfcr Schnittstellen lautet ",(0,i.kt)("inlineCode",{parentName:"p"},"interface"),". Eine Schnittstelle kann nur \xf6ffentliche, abstrakte und \xf6ffentliche, statische Methoden beinhalten."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public interface Foo {  \n\n    void bar();\n    void baz();  \n\n}\n")),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Die Angabe von ",(0,i.kt)("inlineCode",{parentName:"p"},"abstract")," und ",(0,i.kt)("inlineCode",{parentName:"p"},"public")," bei Methoden ist nicht erforderlich.")),(0,i.kt)("h2",{id:"implementieren-von-schnittstellen"},"Implementieren von Schnittstellen"),(0,i.kt)("p",null,"Schnittstellen werden mit Hilfe des Schl\xfcsselworts ",(0,i.kt)("inlineCode",{parentName:"p"},"implements")," von einer Klasse implementiert. Durch die Implementierung der Schnittstelle verpflichtet sich die Klasse, alle Methoden der Schnittstelle zu implementieren."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class Qux implements Foo {\n\n    public void bar() { }\n    public void baz() { }\n\n}\n")),(0,i.kt)("h2",{id:"verwenden-von-schnittstellen"},"Verwenden von Schnittstellen"),(0,i.kt)("p",null,"Schnittstellen k\xf6nnen ebenso wie Klassen als Datentypen verwendet werden. Die Typumwandlung von der implementierenden Klasse zur Schnittstelle bezeichnet man als ",(0,i.kt)("strong",{parentName:"p"},"Upcast"),", die R\xfcckumwandlung als ",(0,i.kt)("strong",{parentName:"p"},"Downcast"),"."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        Foo foo;\n        Qux qux = new Qux();\n        foo = qux; // Upcast\n    }\n\n}\n")))}d.isMDXComponent=!0}}]);