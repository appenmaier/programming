"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[3770],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=r.createContext({}),c=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(o.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(o,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,s(s({ref:n},p),{},{components:t})):r.createElement(g,s({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,s=new Array(i);s[0]=u;var l={};for(var o in n)hasOwnProperty.call(n,o)&&(l[o]=n[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var c=2;c<i;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},758:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>s,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Generische Programmierung",description:"",sidebar_position:270,tags:["generics"]},s=void 0,l={unversionedId:"documentation/generics",id:"documentation/generics",title:"Generische Programmierung",description:"",source:"@site/docs/documentation/generics.md",sourceDirName:"documentation",slug:"/documentation/generics",permalink:"/programming/documentation/generics",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/generics.md",tags:[{label:"generics",permalink:"/programming/tags/generics"}],version:"current",sidebarPosition:270,frontMatter:{title:"Generische Programmierung",description:"",sidebar_position:270,tags:["generics"]},sidebar:"documentationSidebar",previous:{title:"Innere Klassen (Inner Classes)",permalink:"/programming/documentation/inner-classes"},next:{title:"Assoziativspeicher (Maps)",permalink:"/programming/documentation/maps"}},o={},c=[{value:"Generische Klassen ohne Java Generics",id:"generische-klassen-ohne-java-generics",level:2},{value:"Generische Klassen mit Java Generics",id:"generische-klassen-mit-java-generics",level:2},{value:"Generische Methoden mit Java Generics",id:"generische-methoden-mit-java-generics",level:2},{value:"Namensrichtlinien f\xfcr Typparameter",id:"namensrichtlinien-f\xfcr-typparameter",level:2},{value:"Varianz",id:"varianz",level:2}],p={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Quellcode sollte generell so allgemein bzw. generisch geschrieben werden, dass er f\xfcr unterschiedliche Datenstrukturen und Datentypen verwendet werden kann. Das Ziel der generischen Programmierung ist die Entwicklung von wiederverwendbarem Code. In Java\nverwendet man das Konzept der generischen Datentypen, also Klassen, die mit verschiedene Datentypen verwendet werden k\xf6nnen."),(0,a.kt)("h2",{id:"generische-klassen-ohne-java-generics"},"Generische Klassen ohne Java Generics"),(0,a.kt)("p",null,"Auch ohne Java Generics kann in Java mit Hilfe der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," generisch programmiert werden. Der Nachteil besteht darin, dass durch den Upcast einer beliebigen Klasse auf die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Object")," die spezifischen Methoden der Klasse nicht mehr verwendet werden\nk\xf6nnen und der dadurch notwendige Downcast zu Laufzeitfehlern f\xfchren kann. "),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Box")," erm\xf6glicht das Speichern einer beliebig typisierten Information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Box.java" showLineNumbers',title:'"Box.java"',showLineNumbers:!0},"public class Box {\n\n  private Object content;\n\n  public void set(Object content) {\n    this.content = content;\n  }\n\n  public Object get() {\n    return content;\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-Methode der Startklasse wird zun\xe4chst eine ganze Zahl in einer Box gespeichert und anschlie\xdfend wieder ausgelesen. Die Umwandlung der ganzen Zahl in eine Zeichenkette f\xfchrt erst zur Laufzeit zu einem Fehler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Box box = new Box();\n    box.set(5);\n    String i = (String) box.get(); // Laufzeitfehler\n    System.out.println(i);\n  }\n\n}\n")),(0,a.kt)("h2",{id:"generische-klassen-mit-java-generics"},"Generische Klassen mit Java Generics"),(0,a.kt)("p",null,"Klassen und Methoden k\xf6nnen in Java mit Typen parametrisiert werden. Diese werden durch spitze Klammern ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," gekennzeichnet und stellen Platzhalter f\xfcr konkrete Datentypen dar. Beim Kompilieren werden alle generischen Informationen vollst\xe4ndig entfernt und\ndurch die konkreten Datentypen ersetzt. Durch die dadurch vorhandene statische Typsicherheit k\xf6nnen Laufzeitfehler verhindert und Fehler bereits beim Kompilieren entdeckt werden."),(0,a.kt)("p",null,"Die generische Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericBox<T>")," erm\xf6glicht das Speichern einer beliebig typisierten Information mit Hilfe des Typparameters ",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GenericBox.java" showLineNumbers',title:'"GenericBox.java"',showLineNumbers:!0},"public class GenericBox<T> {\n\n  private T content;\n\n  public void set(T content) {\n    this.content = content;\n  }\n\n  public T get() {\n    return content;\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-Methode der Startklasse wird zun\xe4chst eine ganze Zahl in einer generischen Box gespeichert und anschlie\xdfend wieder ausgelesen. Die Umwandlung der ganzen Zahl in eine Zeichenkette f\xfchrt aufgrund der statischen Typsicherheit zu einem\nKompilierungsfehler."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    GenericBox<Integer> genericBox = new GenericBox<>();\n    genericBox.set(5);\n    String i = genericBox.get(); // Kompilierungsfehler\n    System.out.println(i);\n  }\n\n}\n")),(0,a.kt)("admonition",{title:"Hinweis",type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Die Typisierung kann entweder explizit oder implizit \xfcber den Diamantenoperator ",(0,a.kt)("inlineCode",{parentName:"p"},"<>")," erfolgen.")),(0,a.kt)("h2",{id:"generische-methoden-mit-java-generics"},"Generische Methoden mit Java Generics"),(0,a.kt)("p",null,"Die generische Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"<T> getIndex(T, T[])")," gibt den Index eines beliebig typisierten gesuchten Wertes innerhalb eines gleichtypisierten Feldes zur\xfcck."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    System.out.println(getIndex(5, new Integer[] {3, 5, 2, 4, 1}));\n  }\n\n  public static <T> int getIndex(T value, T[] values) {\n    for (int i = 0; i < values.length; i++) {\n      if (values[i].equals(value)) {\n        return i;\n      }\n    }\n    return -1;\n  }\n\n}\n")),(0,a.kt)("h2",{id:"namensrichtlinien-f\xfcr-typparameter"},"Namensrichtlinien f\xfcr Typparameter"),(0,a.kt)("p",null,"Um den Einsatzbereich von Typparameteren in generischen Klassen und Methoden kenntlich zu machen, sollte man festgelegte Zeichen verwenden."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Typparameter"),(0,a.kt)("th",{parentName:"tr",align:null},"Einsatzbereich"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"T, U, V, W..."),(0,a.kt)("td",{parentName:"tr",align:null},"Datentyp (Type)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"E"),(0,a.kt)("td",{parentName:"tr",align:null},"Element einer Datensammlung (Element)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"K"),(0,a.kt)("td",{parentName:"tr",align:null},"Schl\xfcssel eines Assoziativspeichers (Key)")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"V"),(0,a.kt)("td",{parentName:"tr",align:null},"Wert eines Assoziativspeichers (Value)")))),(0,a.kt)("h2",{id:"varianz"},"Varianz"),(0,a.kt)("p",null,"Typparameter k\xf6nnen gar nicht (",(0,a.kt)("strong",{parentName:"p"},"Bivarianz"),"), nach oben (",(0,a.kt)("strong",{parentName:"p"},"Kovarianz"),"), nach unten (",(0,a.kt)("strong",{parentName:"p"},"Kontravarianz"),"), oder sowohl nach oben als auch nach unten (",(0,a.kt)("strong",{parentName:"p"},"Invarianz"),") eingeschr\xe4nkt werden. Zus\xe4tzlich erm\xf6glicht der Wildcard-Typ ",(0,a.kt)("inlineCode",{parentName:"p"},"?")," bei parametrisierten Typen die\nAngabe eines unbestimmten Typs. "),(0,a.kt)("p",null,"Die generische Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"GenericBox<T>")," erm\xf6glicht das Speichern einer beliebig typisierten Information."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="GenericBox.java" showLineNumbers',title:'"GenericBox.java"',showLineNumbers:!0},"public class GenericBox<T> {\n\n  private T content;\n\n  public void set(T content) {\n    this.content = content;\n  }\n\n  public T get() {\n    return content;\n  }\n\n}\n")),(0,a.kt)("p",null,"Die Drei Klassen ",(0,a.kt)("inlineCode",{parentName:"p"},"Above"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"Center")," und ",(0,a.kt)("inlineCode",{parentName:"p"},"Below")," bilden eine Generalisierungshierarchie ab, wobei die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Below")," eine Unterklasse der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Center")," und diese wiederum eine Unterklasse der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Above")," darstellt."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Above.java" showLineNumbers',title:'"Above.java"',showLineNumbers:!0},"public class Above {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Center.java" showLineNumbers',title:'"Center.java"',showLineNumbers:!0},"public class Center extends Above {}\n")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Below.java" showLineNumbers',title:'"Below.java"',showLineNumbers:!0},"public class Below extends Center {}\n")),(0,a.kt)("p",null,"In der main-methode der Startklasse werden verschiedene generische Boxen unterschiedlich deklariert und anschlie\xdfend initialisiert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    GenericBox<?> bivariant;\n    bivariant = new GenericBox<Above>();\n    bivariant = new GenericBox<Center>();\n    bivariant = new GenericBox<Below>();\n\n    GenericBox<? extends Center> covariant;\n    covariant = new GenericBox<Above>(); // Kompilierungsfehler\n    covariant = new GenericBox<Center>();\n    covariant = new GenericBox<Below>();\n\n    GenericBox<? super Center> contravariant;\n    contravariant = new GenericBox<Above>();\n    contravariant = new GenericBox<Center>();\n    contravariant = new GenericBox<Below>(); // Kompilierungsfehler\n\n    GenericBox<Center> invariant;\n    invariant = new GenericBox<Above>(); // Kompilierungsfehler\n    invariant = new GenericBox<Center>();\n    invariant = new GenericBox<Below>(); // Kompilierungsfehler\n  }\n\n}\n")))}m.isMDXComponent=!0}}]);