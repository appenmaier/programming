"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[5188],{3905:(e,n,r)=>{r.d(n,{Zo:()=>p,kt:()=>m});var t=r(7294);function i(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function s(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){i(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function o(e,n){if(null==e)return{};var r,t,i=function(e,n){if(null==e)return{};var r,t,i={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(i[r]=e[r]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=t.createContext({}),u=function(e){var n=t.useContext(l),r=n;return e&&(r="function"==typeof e?e(n):s(s({},n),e)),r},p=function(e){var n=u(e.components);return t.createElement(l.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(r),m=i,g=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return r?t.createElement(g,s(s({ref:n},p),{},{components:r})):t.createElement(g,s({ref:n},p))}));function m(e,n){var r=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=r.length,s=new Array(a);s[0]=c;var o={};for(var l in n)hasOwnProperty.call(n,l)&&(o[l]=n[l]);o.originalType=e,o.mdxType="string"==typeof e?e:i,s[1]=o;for(var u=2;u<a;u++)s[u]=r[u];return t.createElement.apply(null,s)}return t.createElement.apply(null,r)}c.displayName="MDXCreateElement"},2256:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var t=r(7462),i=(r(7294),r(3905));const a={title:"Vererbung",description:"",sidebar_position:170,tags:["vererbung","\xfcberschriebene methode","unterklasse","oberklasse","generalisierung","spezialisierung"]},s=void 0,o={unversionedId:"documentation/inheritance",id:"documentation/inheritance",title:"Vererbung",description:"",source:"@site/docs/documentation/inheritance.md",sourceDirName:"documentation",slug:"/documentation/inheritance",permalink:"/programming/docs/documentation/inheritance",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/inheritance.md",tags:[{label:"vererbung",permalink:"/programming/docs/tags/vererbung"},{label:"\xfcberschriebene methode",permalink:"/programming/docs/tags/uberschriebene-methode"},{label:"unterklasse",permalink:"/programming/docs/tags/unterklasse"},{label:"oberklasse",permalink:"/programming/docs/tags/oberklasse"},{label:"generalisierung",permalink:"/programming/docs/tags/generalisierung"},{label:"spezialisierung",permalink:"/programming/docs/tags/spezialisierung"}],version:"current",sidebarPosition:170,frontMatter:{title:"Vererbung",description:"",sidebar_position:170,tags:["vererbung","\xfcberschriebene methode","unterklasse","oberklasse","generalisierung","spezialisierung"]},sidebar:"tutorialSidebar",previous:{title:"Aktivit\xe4tsdiagramme",permalink:"/programming/docs/documentation/uml/activity-diagrams"},next:{title:"Polymorphie",permalink:"/programming/docs/documentation/polymorphie"}},l={},u=[{value:"Implementieren von Vererbung",id:"implementieren-von-vererbung",level:2},{value:"\xdcberschreiben von Methoden",id:"\xfcberschreiben-von-methoden",level:2}],p={toc:u};function d(e){let{components:n,...r}=e;return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Bei der Modellierung von Klassen stellt man h\xe4ufig fest, dass sich einige Klassen der Struktur und dem Verhalten nach \xe4hneln. In solchen F\xe4llen hat man die M\xf6glichkeit, die gemeinsamen Strukturen und Verhaltensweisen aus den speziellen Klassen zu extrahieren\nund in einer allgemeineren Klasse unterzubringen. Dies wird als ",(0,i.kt)("strong",{parentName:"p"},"Generalisierung")," bezeichnet. Umgekehrt gibt es oftmals auch Bedarf, eine bestehende Klasse um zus\xe4tzliche Attribute und/oder Methoden zu erweitern. Dies bezeichnet man als ",(0,i.kt)("strong",{parentName:"p"},"Spezialisierung"),".\nDie Beziehung zwischen einer speziellen Klasse und einer allgemeinen Klasse wird ",(0,i.kt)("strong",{parentName:"p"},"Vererbung")," bezeichnet. Die speziellen Klasse einer Vererbung werden als ",(0,i.kt)("strong",{parentName:"p"},"Unterklassen")," (Sub Classes), die allgemeinen Klassen als ",(0,i.kt)("strong",{parentName:"p"},"Oberklassen")," (Super Classes) bezeichnet."),(0,i.kt)("h2",{id:"implementieren-von-vererbung"},"Implementieren von Vererbung"),(0,i.kt)("p",null,"Die Vererbung wird mit dem Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"extends")," realisiert. In der Oberklasse k\xf6nnen Attribute und Methoden mit dem Schl\xfcsselwort ",(0,i.kt)("inlineCode",{parentName:"p"},"protected")," als gesch\xfctzt festlegt werden. Unterklassen k\xf6nnen auf alle \xf6ffentlichen und gesch\xfctzten Attribute und Methoden der\nOberklasse zugreifen."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},"public class SuperClass {\n\n    public Foo foo;\n    protected Bar bar;\n    private Baz baz;\n  \n    public SuperClass(Foo foo) {\n        this.foo = foo;\n    }\n    \n}\n\npublic class SubClass extends SuperClass {\n\n    public SubClass(Foo foo) {\n        super(foo);\n    }\n  \n    public void foobar() {\n        System.out.println(foo);\n        System.out.println(bar);\n        System.out.println(baz); // Kompilierungsfehler\n    }\n  \n}\n")),(0,i.kt)("admonition",{title:"Hinweis",type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"In den Konstruktoren der Unterklasse muss ein Konstruktor der Oberklasse mit Hilfe von ",(0,i.kt)("inlineCode",{parentName:"p"},"super")," aufgerufen werden.")),(0,i.kt)("h2",{id:"\xfcberschreiben-von-methoden"},"\xdcberschreiben von Methoden"),(0,i.kt)("p",null,'Wird in einer Unterklasse eine Methode definiert, die der Signatur einer Methode der Oberklasse entspricht, wird die Methode der Oberklasse "\xfcberschrieben", d.h. von der Unterklasse neu implementiert. Bei Bedarf kann die urspr\xfcngliche Methodenimplementierung\nder Oberklasse mit Hilfe der Objektreferenz ',(0,i.kt)("inlineCode",{parentName:"p"},"super")," aufgerufen werden."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-java"},'public class SuperClass {\n\n    public void foo(){\n        System.out.println("foo");\n    }\n    \n}\n\npublic class SubClass extends SuperClass {\n\n    @Override\n    public void foo(){\n        super.foo();\n        System.out.println("bar");\n    }\n  \n} \n')),(0,i.kt)("admonition",{title:"Hinweis",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Die Annotation ",(0,i.kt)("inlineCode",{parentName:"p"},"@Override")," sorgt bei fehlerhaftem \xdcberschreiben der Methode f\xfcr entsprechende Kompilierungsfehler.")))}d.isMDXComponent=!0}}]);