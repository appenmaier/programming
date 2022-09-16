"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[8635],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=i.createContext({}),d=function(e){var n=i.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(s.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(s,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},6954:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>l,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={title:"Datenobjekte",description:"",sidebar_position:40,tags:["datenobjekt","deklaration","initialisierung","typinferenz","g\xfcltigkeitsbereich"]},o=void 0,l={unversionedId:"documentation/data-objects",id:"documentation/data-objects",title:"Datenobjekte",description:"",source:"@site/docs/documentation/data-objects.md",sourceDirName:"documentation",slug:"/documentation/data-objects",permalink:"/programming/docs/documentation/data-objects",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/data-objects.md",tags:[{label:"datenobjekt",permalink:"/programming/docs/tags/datenobjekt"},{label:"deklaration",permalink:"/programming/docs/tags/deklaration"},{label:"initialisierung",permalink:"/programming/docs/tags/initialisierung"},{label:"typinferenz",permalink:"/programming/docs/tags/typinferenz"},{label:"g\xfcltigkeitsbereich",permalink:"/programming/docs/tags/gultigkeitsbereich"}],version:"current",sidebarPosition:40,frontMatter:{title:"Datenobjekte",description:"",sidebar_position:40,tags:["datenobjekt","deklaration","initialisierung","typinferenz","g\xfcltigkeitsbereich"]},sidebar:"tutorialSidebar",previous:{title:"JavaFX einrichten",permalink:"/programming/docs/documentation/instructions/setup-javafx"},next:{title:"Zeichenketten (Strings)",permalink:"/programming/docs/documentation/strings"}},s={},d=[{value:"Deklaration von Datenobjekten",id:"deklaration-von-datenobjekten",level:2},{value:"Initialisierung von Datenobjekten",id:"initialisierung-von-datenobjekten",level:2},{value:"Typinferenz bei Datenobjekten",id:"typinferenz-bei-datenobjekten",level:2},{value:"G\xfcltigkeitsbereiche von Datenobjekten",id:"g\xfcltigkeitsbereiche-von-datenobjekten",level:2},{value:"Typumwandlung (Type Casting)",id:"typumwandlung-type-casting",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Ein Datenobjekt ist ein Platzhalter, der zur Laufzeit eine bestimmte Stelle des Arbeitsspeichers belegt. Die Gr\xf6\xdfe des reservierten Speichers ist abh\xe4ngig vom gew\xe4hlten ",(0,a.kt)("a",{parentName:"p",href:"/programming/docs/documentation/data-types"},"Datentyp"),"). Datenobjekte k\xf6nnen mit Werten belegt werden, Bezeichner\nerm\xf6glichen das Ansprechen im Programmablauf. Man unterscheidet zwischen variablen Datenobjekten (Variablen) und fixen Datenobjekten (Konstanten und Literale). Konstanten sind fixe Datenobjekte, die \xfcber einen Bezeichner angesprochen werden k\xf6nnen. Sie werden\nmit dem Schl\xfcsselwort ",(0,a.kt)("inlineCode",{parentName:"p"},"final")," deklariert. Literale sind sogenannte w\xf6rtliche Konstanten, d.h. fixe Datenobjekte ohne Bezeichner. Da Literale \xfcber keinen Bezeichner verf\xfcgen, k\xf6nnen Sie im Programm nicht angesprochen werden."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170474485-efa5dbeb-13e5-489d-ab86-dd4ce222d96e.png",alt:"image"})),(0,a.kt)("h2",{id:"deklaration-von-datenobjekten"},"Deklaration von Datenobjekten"),(0,a.kt)("p",null,"Durch Angabe von Datentyp und Bezeichner wird ein Datenobjekt deklariert, d.h. dem Compiler bekannt gegeben. Deklarationen werden wie jede Anweisung mit einem Semikolon abgeschlossen. Datenobjekte gleichen Datentyps k\xf6nnen mit Komma getrennt aufgef\xfchrt werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        int a, b;\n        boolean error;\n        char char1;\n        String text;\n    }\n\n}\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Java ist case-sensitiv, unterscheidet also zwischen Gro\xdf- und Kleinschreibung. Um die Lesbarkeit zu erh\xf6hen, sollten Variablen mit einem Kleinbuchstaben beginnen, wohingegen Konstanten immer in Gro\xdfbuchstaben geschrieben werden sollten.")),(0,a.kt)("h2",{id:"initialisierung-von-datenobjekten"},"Initialisierung von Datenobjekten"),(0,a.kt)("p",null,"In Java m\xfcssen Datenobjekte vor der ersten Verwendung explizit initialisiert werden, d.h. mit einem Wert belegt werden. Der Zuweisungsoperator ",(0,a.kt)("inlineCode",{parentName:"p"},"=")," weist dem Datenobjekt auf der linken Seite den Wert des Ausdrucks auf der rechten Seite zu."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        int a = 42, b = a;\n        boolean error = true;\n        char char1;\n        String text;\n        \n        char1 = 'M';\n        text = \"Winter is Coming\";\n    }\n\n}\n")),(0,a.kt)("h2",{id:"typinferenz-bei-datenobjekten"},"Typinferenz bei Datenobjekten"),(0,a.kt)("p",null,"Unter Typinferenz versteht man, dass bei der Deklaration eines Datenobjekts auf die Angabe eine Datentyps verzichtet werden kann, wenn der Compiler aufgrund der restlichen Angaben den Typ selbstst\xe4ndig ermitteln kann. F\xfcr die Typinferenz wird das Schl\xfcsselwort\n",(0,a.kt)("inlineCode",{parentName:"p"},"var")," verwendet. "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MainClass {\n\n    public static void main(String[] args) {\n        int i = 5;\n        i = "Text"; // Kompilierungsfehler\n\n        var j = 5;\n        j = "Text"; // Kompilierungsfehler\n    }\n\n}\n')),(0,a.kt)("admonition",{title:"Hinweis",type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"Mit ",(0,a.kt)("inlineCode",{parentName:"p"},"var")," deklarierte Datenobjekte sind weiterhin statisch typisiert. ")),(0,a.kt)("h2",{id:"g\xfcltigkeitsbereiche-von-datenobjekten"},"G\xfcltigkeitsbereiche von Datenobjekten"),(0,a.kt)("p",null,"Datenobjekte sind nur innerhalb eines Anweisungsblocks g\xfcltig, d.h. man kann nur innerhalb dieses Programmabschnitts auf das Datenobjekt zugreifen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        int a = 1, b;\n        b = foo(a);\n    }\n\n    public static int foo(int c) {\n        int d;\n        d = a++; // Kompilierungsfehler\n        d = c++;\n        return d;\n    }\n\n}\n")),(0,a.kt)("h2",{id:"typumwandlung-type-casting"},"Typumwandlung (Type Casting)"),(0,a.kt)("p",null,"Der Cast-Operator ",(0,a.kt)("inlineCode",{parentName:"p"},"()")," erlaubt die explizite Umwandlung eines Datentyps in einen anderen. Bei Wertzuweisungen findet eine implizite Typumwandlung vom niederwertigen zum h\xf6herwertigen Datentyp statt. Zu beachten ist, dass bei einer Typumwandlung ein\nGenauigkeitsverlust stattfinden kann."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class MainClass {\n\n    public static void main(String[] args) {\n        int a = 14;\n        int b = 3;\n        double result;\n\xa0\n        // implizite Typumwandlung\n        result = a / b;\n        System.out.println(result);\xa0\n\n        // explizite Typumwandlung\n        result = (double) a / b;\n        System.out.println(result);\xa0\n    }\n\n}\n")),(0,a.kt)("p",null,"Die Wertigkeit von Datentypen entscheidet dar\xfcber, welche Typumwandlungen m\xf6glich sind."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170633184-e5f0e9c3-0d17-4f46-b718-4b12657aa53c.png",alt:"image"})),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"F\xfcr den Datentyp ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean")," ist keine Typumwandlung m\xf6glich.")))}c.isMDXComponent=!0}}]);