"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9213],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>m});var i=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,i,a=function(e,n){if(null==e)return{};var t,i,a={},r=Object.keys(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)t=r[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var l=i.createContext({}),d=function(e){var n=i.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=d(e.components);return i.createElement(l.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return i.createElement(i.Fragment,{},n)}},u=i.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=d(t),m=a,g=u["".concat(l,".").concat(m)]||u[m]||c[m]||r;return t?i.createElement(g,o(o({ref:n},p),{},{components:t})):i.createElement(g,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=u;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return i.createElement.apply(null,o)}return i.createElement.apply(null,t)}u.displayName="MDXCreateElement"},5041:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var i=t(7462),a=(t(7294),t(3905));const r={title:"Dateien und Verzeichnisse",description:"",sidebar_position:30,tags:["datei","verzeichnis","pfadangabe"]},o=void 0,s={unversionedId:"documentation/java-api/files",id:"documentation/java-api/files",title:"Dateien und Verzeichnisse",description:"",source:"@site/docs/documentation/java-api/files.md",sourceDirName:"documentation/java-api",slug:"/documentation/java-api/files",permalink:"/programming/documentation/java-api/files",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/java-api/files.md",tags:[{label:"datei",permalink:"/programming/tags/datei"},{label:"verzeichnis",permalink:"/programming/tags/verzeichnis"},{label:"pfadangabe",permalink:"/programming/tags/pfadangabe"}],version:"current",sidebarPosition:30,frontMatter:{title:"Dateien und Verzeichnisse",description:"",sidebar_position:30,tags:["datei","verzeichnis","pfadangabe"]},sidebar:"documentationSidebar",previous:{title:"Datums- und Zeitangaben",permalink:"/programming/documentation/java-api/dates-and-times"},next:{title:"Aufz\xe4hlungen (Enumerations)",permalink:"/programming/documentation/enumerations"}},l={},d=[{value:"Lesen von Dateien mit Hilfe der Klasse <code>Scanner</code>",id:"lesen-von-dateien-mit-hilfe-der-klasse-scanner",level:2},{value:"Absolute und relative Pfadangaben",id:"absolute-und-relative-pfadangaben",level:2}],p={toc:d};function c(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,i.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"File")," erm\xf6glicht die Arbeit mit Dateien und Verzeichnissen. Mit Hilfe der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"boolean exists()")," kann beispielsweise gepr\xfcft werden, ob ein entsprechendes Verzeichnis bzw. eine entsprechende Datei existiert oder nicht. Die Klasse bietet zudem M\nethoden zum Erstellen und L\xf6schen von Verzeichnissen bzw. Dateien. Zum Erzeugen eines File-Objekts wird entweder ein Pfad zu einem Verzeichnis bzw. zu einer Datei oder ein URI (Unified Resource Identifier) ben\xf6tigt."),(0,a.kt)("h2",{id:"lesen-von-dateien-mit-hilfe-der-klasse-scanner"},"Lesen von Dateien mit Hilfe der Klasse ",(0,a.kt)("inlineCode",{parentName:"h2"},"Scanner")),(0,a.kt)("p",null,"Zum Lesen einer Datei k\xf6nnen entweder ",(0,a.kt)("a",{parentName:"p",href:"/programming/documentation/io-streams"},"Datenstromklassen")," oder die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Scanner")," verwendet werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class MainClass {\n\n    public static void main(String[] args) throws FileNotFoundException {\n        File file = new File("text.txt");\n        Scanner scanner = new Scanner(file);\n\n        while (scanner.hasNextLine()) {\n            String line = scanner.nextLine();\n            System.out.println(line);\n        }\n\n        scanner.close();\n    }\n\n}\n')),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Nach der letzten Verwendung sollte die Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"void close()")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Scanner")," aufgerufen werden.")),(0,a.kt)("h2",{id:"absolute-und-relative-pfadangaben"},"Absolute und relative Pfadangaben"),(0,a.kt)("p",null,"Beim Zugriff auf Verzeichnisse bzw. Dateien unterscheidet man zwischen absoluten und relativen Pfadangaben. Bei absoluten Pfadangaben wird der vollst\xe4ndige Pfad von der Wurzel des jeweiligen Verzeichnissystems bis zum Ziel angegeben, bei relativen der Weg von\neinem festgelegten Bezugspunkt bis zum Ziel."),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/170679603-aae95922-96a4-4e80-bdba-2a8b509115a8.png",alt:"image"})),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Alle Klassen im Paket ",(0,a.kt)("inlineCode",{parentName:"p"},"java.io")," verwenden als Bezugspunkt das Arbeitsverzeichnis des Benutzers (Systemeigenschaft ",(0,a.kt)("inlineCode",{parentName:"p"},"user.dir"),").")))}c.isMDXComponent=!0}}]);