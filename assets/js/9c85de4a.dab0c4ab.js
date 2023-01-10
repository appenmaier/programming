"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[1431],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>g});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function m(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},s=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,p=m(e,["components","mdxType","originalType","parentName"]),s=d(n),g=r,k=s["".concat(o,".").concat(g)]||s[g]||u[g]||i;return n?a.createElement(k,l(l({ref:t},p),{},{components:n})):a.createElement(k,l({ref:t},p))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=s;var m={};for(var o in t)hasOwnProperty.call(t,o)&&(m[o]=t[o]);m.originalType=e,m.mdxType="string"==typeof e?e:r,l[1]=m;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},6421:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>m,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Die Java Stream API",description:"",sidebar_position:300,tags:["java-stream-api"]},l=void 0,m={unversionedId:"documentation/java-stream-api",id:"documentation/java-stream-api",title:"Die Java Stream API",description:"",source:"@site/docs/documentation/java-stream-api.md",sourceDirName:"documentation",slug:"/documentation/java-stream-api",permalink:"/programming/documentation/java-stream-api",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/java-stream-api.md",tags:[{label:"java-stream-api",permalink:"/programming/tags/java-stream-api"}],version:"current",sidebarPosition:300,frontMatter:{title:"Die Java Stream API",description:"",sidebar_position:300,tags:["java-stream-api"]},sidebar:"documentationSidebar",previous:{title:"Optionals",permalink:"/programming/documentation/optionals"},next:{title:"Softwaretests",permalink:"/programming/documentation/tests"}},o={},d=[{value:"Erzeugen von Str\xf6men",id:"erzeugen-von-str\xf6men",level:2},{value:"Intermedi\xe4re Operationen",id:"intermedi\xe4re-operationen",level:2},{value:"Terminale Operationen",id:"terminale-operationen",level:2},{value:"Bedarfsauswertung (Lazy Evaluation)",id:"bedarfsauswertung-lazy-evaluation",level:2},{value:"Unendliche Str\xf6me",id:"unendliche-str\xf6me",level:2}],p={toc:d};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Die Java Stream API stellt Klassen zum Erzeugen von und Arbeiten mit Str\xf6men (Streams) bereit. Ein Strom stellt eine Folge von Elementen dar, die das Ausf\xfchren verketteter, intermedi\xe4rer und terminaler Operationen auf diesen Elementen nacheinander oder parallel\nerm\xf6glicht. Die Daten, die durch die Elemente des Stromes repr\xe4sentiert werden, werden dabei durch den Strom selbst nicht ver\xe4ndert. Die Verarbeitung der Elemente erfolgt nach dem Prinzip der Bedarfsauswertung (Lazy Evaluation). Neben endlichen Str\xf6men stellt\ndie Java Stream API auch Methoden zum Erzeugen unendlicher Str\xf6me bereit."),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/47243617/209135855-a190fe54-8d3a-46e8-82d8-2589da9158a6.png",alt:"image"})),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Str\xf6me (Paket ",(0,r.kt)("inlineCode",{parentName:"p"},"java.util.stream"),") haben nichts mit ",(0,r.kt)("a",{parentName:"p",href:"/programming/documentation/io-streams"},"Datenstr\xf6men (IO-Streams)")," (Paket ",(0,r.kt)("inlineCode",{parentName:"p"},"java.io"),") zu tun.")),(0,r.kt)("h2",{id:"erzeugen-von-str\xf6men"},"Erzeugen von Str\xf6men"),(0,r.kt)("p",null,"Str\xf6me k\xf6nnen unter anderem aus Feldern, Datensammlungen wie z.B. Listen und Mengen sowie Einzelobjekten erzeugt werden. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int[] array = {4, 8, 15, 16, 23, 42};\n    IntStream integerStream = Arrays.stream(array);\n\n    List<Integer> list = List.of(4, 8, 15, 16, 23, 42);\n    Stream<Integer> integerStream2 = list.stream();\n\n    Stream<Integer> integerStream3 = Stream.of(4, 8, 15, 16, 23, 42);\n  }\n\n}\n")),(0,r.kt)("admonition",{title:"Hinweis",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Die Zahlenfolge 4-8-15-16-23-42 spielt eine gro\xdfe Rolle in der Fernsehserie ",(0,r.kt)("em",{parentName:"p"},"Lost"),".")),(0,r.kt)("p",null,'Im Gegensatz zu "normalen" Str\xf6men besitzen Objekte der Klassen ',(0,r.kt)("inlineCode",{parentName:"p"},"IntStreams"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DoubleStreams")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"LongStreams")," Methoden zur Weiterverarbeitung ihrer primitiver Werte."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    int[] array = {4, 8, 15, 16, 23, 42};\n    IntStream integerStream = Arrays.stream(array);\n    int sum = integerStream.sum();\n  }\n\n}\n")),(0,r.kt)("h2",{id:"intermedi\xe4re-operationen"},"Intermedi\xe4re Operationen"),(0,r.kt)("p",null,"Intermedi\xe4re Operationen erm\xf6glichen unter anderem das Filtern, Abbilden sowie das Sortieren von Str\xf6men und liefern als Ergebnis wiederum einen Strom."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Methode"),(0,r.kt)("th",{parentName:"tr",align:null},"Schnittstellen-Methode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Filtern"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stream<T> filter(predicate: Predicate<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean test(t: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Abbilden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stream<T> map(mapper: Function<T, R>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"R apply(t: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Abbilden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"DoubleStream mapToDouble(mapper: ToDoubleFunction<T, R>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"double applyAsDouble(value: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Abbilden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"IntStream mapToInt(mapper: ToIntFunction<T, R>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int applyAsInt(vaue: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Abbilden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"LongStream mapToLong(mapper: ToLongFunction<T, R>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long applyAsLong(value: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sp\xe4hen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stream<T> peek(consumer: Consumer<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void accept(t: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sortieren"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stream<T> sorted(comparator: Comparator<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int compare(o1: T, o2: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Unterscheiden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stream<T> distinct()")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Begrenzen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stream<T> limit(maxSize: long)")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"\xdcberspringen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Stream<T> skip(n: long)")),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"terminale-operationen"},"Terminale Operationen"),(0,r.kt)("p",null,"Terminale Operationen werden z.B. zum Pr\xfcfen, zum Aggregieren oder zum Sammeln verwendet. Da terminale Operationen den Strom schlie\xdfen, k\xf6nnen auf ihnen keine weiteren Operationen mehr ausgef\xfchrt werden."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Operation"),(0,r.kt)("th",{parentName:"tr",align:null},"Methode"),(0,r.kt)("th",{parentName:"tr",align:null},"Schnittstellen-Methode"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Finden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Optional<T> findAny()")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Finden"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Optional<T> findFirst()")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcfen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean allMatch(predicate: Predicate<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean test(t: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcfen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean anyMatch(predicate: Predicate<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean test(t: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcfen"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean noneMatch(predicate: Predicate<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"boolean test(t: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aggregieren"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Optional<T> min(comparator: Comparator<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int compare(o1: T, o2: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aggregieren"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"Optional<T> max(comparator: Comparator<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"int compare(o1: T, o2: T)"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Aggregieren"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"long count()")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Sammeln"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"R collect(collector: Collector<T, A, R>)")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"Ausf\xfchren"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void forEach(action: Consumer<T>)")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void accept(t: T)"))))),(0,r.kt)("p",null,"Zahlenstr\xf6me (",(0,r.kt)("inlineCode",{parentName:"p"},"IntStream"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"DoubleStream"),", ",(0,r.kt)("inlineCode",{parentName:"p"},"LongStream"),") besitzen die zus\xe4tzlichen terminale Operationen ",(0,r.kt)("inlineCode",{parentName:"p"},"int|double|long sum()")," und ",(0,r.kt)("inlineCode",{parentName:"p"},"OptionalDouble average()"),"."),(0,r.kt)("h2",{id:"bedarfsauswertung-lazy-evaluation"},"Bedarfsauswertung (Lazy Evaluation)"),(0,r.kt)("p",null,"Die Elemente in Str\xf6men werden nur bei Bedarf ausgewertet. Intermedi\xe4re Operationen werden also nur dann ausgef\xfchrt, wenn eine terminale Operation vorhanden ist und bei verketteten Operationen werden f\xfcr jedes Element die einzelnen Operationen nacheinander\nausgef\xfchrt."),(0,r.kt)("p",null,"In der main-Methode der Startklasse wird auf den Zahlenstrom 4-8-15-16-23-42 zun\xe4chst der Filter ",(0,r.kt)("em",{parentName:"p"},"Zahl > 15")," angewendet, anschlie\xdfend der Filter ",(0,r.kt)("em",{parentName:"p"},"Zahl = ganze Zahl")," und abschlie\xdfend werden die verbliebenen Zahlen auf der Konsole ausgegeben. Zum Nachvollziehen\nwerden die Zahlen auch bei den beiden Filtern auf der Konsole ausgegeben."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    Stream.of(4, 8, 15, 16, 23, 42).filter(i -> {\n      System.out.println(i + ": filter 1");\n      return i % 2 == 0;\n    }).filter(i -> {\n      System.out.println(i + ": filter 2");\n      return i > 15;\n    }).forEach(i -> System.out.println(i + ": forEach"));\n  }\n\n}\n')),(0,r.kt)("p",null,"Ohne Bedarfsauswertung w\xfcrden die verschiedenen Operationen f\xfcr die jeweils verbliebenen Elemente ausgef\xfchrt nacheinander werden. Die Ausgabe s\xe4he wie folgt aus:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"}," 4: filter 1\n 8: filter 1\n 15: filter 1\n 16: filter 1\n 23: filter 1\n 42: filter 1\n 4: filter 2\n 8: filter 2\n 16: filter 2\n 42: filter 2\n 16: forEach\n 42: forEach\n")),(0,r.kt)("p",null,"Aufgrund der Bedarfsauswertung werden die verschiedenen Operationen aber f\xfcr jedes Element einzeln nacheinander ausgef\xfchrt. Dadurch ergibt sich folgende Ausgabe:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"4: filter 1\n4: filter 2\n8: filter 1\n8: filter 2\n15: filter 1\n16: filter 1\n16: filter 2\n16: forEach\n23: filter 1\n42: filter 1\n42: filter 2\n42: forEach\n")),(0,r.kt)("h2",{id:"unendliche-str\xf6me"},"Unendliche Str\xf6me"),(0,r.kt)("p",null,"Die Java Stream API stellt drei Methoden zur Verf\xfcgung, mit deren Hilfe (un)endliche Str\xf6me erzeugt werden k\xf6nnen:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Stream<T> iterate(seed: T, f: UnaryOperator<T>)")," generiert einen unendlichen Strom aus einem Startwert und einer Funktion, welche das n\xe4chste Element erstellt"),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Stream<T> iterate(seed: T, hasNext: Predicat <T>, next: UnaryOperator<T>)"),' erweitert die "normale" iterate-Methode um eine Pr\xe4dikatsfunktion zum Beenden des Stroms'),(0,r.kt)("li",{parentName:"ul"},"Die Methode ",(0,r.kt)("inlineCode",{parentName:"li"},"Stream<T> generate(s: Supplier<T>)")," kann zum Beispiel zum Erzeugen unendlich vieler zuf\xe4lliger Elemente genutzt werden")),(0,r.kt)("p",null,"In der main-Methode der Startklasse werden drei (un)endliche Zahlenstr\xf6me erzeugt."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},"public class MainClass {\n\n  public static void main(String[] args) {\n    Stream.iterate(0, i -> ++i).limit(100).forEach(System.out::println);\n    Stream.iterate(0, i -> i < 100, i -> ++i).forEach(System.out::println);\n    Stream.generate(() -> new Random().nextInt(100)).limit(100).forEach(System.out::println);\n  }\n\n}\n")),(0,r.kt)("p",null,"Die ersten beiden Zahlenstr\xf6me geben die Zahlen von 0 bis 99 aus, der dritte Zahlenstrom 100 Pseudozufallszahlen von 0 bis 99. Der erste und dritte Zahlenstrom w\xfcrden eigentlich unendliche viele (Pseudozufalls-)Zahlen erzeugen, werden aber durch die Methode\n",(0,r.kt)("inlineCode",{parentName:"p"},"Stream<T> limit(maxSize: long)")," auf 100 (Pseudozufalls-)Zahlen begrenzt."))}u.isMDXComponent=!0}}]);