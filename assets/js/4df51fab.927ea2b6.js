"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>c});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(n),c=a,b=m["".concat(o,".").concat(c)]||m[c]||d[c]||i;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var r=n(7462),a=(n(7294),n(3905));const i={title:"Komponententests (Unit Tests)",description:"",sidebar_position:320,tags:["unit-tests"]},s=void 0,l={unversionedId:"documentation/unit-tests",id:"documentation/unit-tests",title:"Komponententests (Unit Tests)",description:"",source:"@site/docs/documentation/unit-tests.md",sourceDirName:"documentation",slug:"/documentation/unit-tests",permalink:"/programming/documentation/unit-tests",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/unit-tests.md",tags:[{label:"unit-tests",permalink:"/programming/tags/unit-tests"}],version:"current",sidebarPosition:320,frontMatter:{title:"Komponententests (Unit Tests)",description:"",sidebar_position:320,tags:["unit-tests"]},sidebar:"documentationSidebar",previous:{title:"Softwaretests",permalink:"/programming/documentation/tests"},next:{title:"JavaFX-Anwendungen",permalink:"/programming/documentation/javafx"}},o={},u=[{value:"Implementieren einer Testklasse",id:"implementieren-einer-testklasse",level:2},{value:"Zusicherungen (Assertions)",id:"zusicherungen-assertions",level:2},{value:"Beispiel",id:"beispiel",level:2}],p={toc:u};function d(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Komponententests (Unit Tests) werden zum Testen einzelner, abgeschlossener Softwarebausteine verwendete. JUnit ist ein weit verbreitetes Framework zur Erstellung von Komponententests bzw. zum automatisierten Testen von Klassen und Methoden in Java. Die aktuelle\nVersion ",(0,a.kt)("em",{parentName:"p"},"JUnit 5")," stellt eine Kombination verschiedener Module der Projekte ",(0,a.kt)("em",{parentName:"p"},"JUnit Platform"),", ",(0,a.kt)("em",{parentName:"p"},"JUnit Jupiter")," sowie ",(0,a.kt)("em",{parentName:"p"},"JUnit Vintage")," dar."),(0,a.kt)("h2",{id:"implementieren-einer-testklasse"},"Implementieren einer Testklasse"),(0,a.kt)("p",null,"JUnit-Testklassen werden mit Hilfe entsprechender Annotationen implementiert:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die Annotationen ",(0,a.kt)("inlineCode",{parentName:"li"},"@Test")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"@ParameterizedTest")," definieren einfache bzw. parametrisierte Testmethoden"),(0,a.kt)("li",{parentName:"ul"},"Die Annotationen ",(0,a.kt)("inlineCode",{parentName:"li"},"@BeforeAll")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"@AfterAll")," definieren statische Methoden, die aufgerufen werden, wenn die Klasse f\xfcr den Test initialisiert wird bzw. wenn alle Tests abgeschlossen sind"),(0,a.kt)("li",{parentName:"ul"},"Die Annotationen ",(0,a.kt)("inlineCode",{parentName:"li"},"@BeforeEach")," und ",(0,a.kt)("inlineCode",{parentName:"li"},"@AfterEach")," definieren Methoden, die vor bzw. nach jeder Testmethode aufgerufen werden"),(0,a.kt)("li",{parentName:"ul"},"Die Annotation ",(0,a.kt)("inlineCode",{parentName:"li"},"@Disabled")," bewirkt, dass eine Testmethode beim Testen nicht ausgef\xfchrt wird"),(0,a.kt)("li",{parentName:"ul"},"Mit Hilfe der Annotation ",(0,a.kt)("inlineCode",{parentName:"li"},"@DisplayName")," kann einer Testklasse bzw. einer Testmethode ein Anzeigename zugewiesen werden")),(0,a.kt)("h2",{id:"zusicherungen-assertions"},"Zusicherungen (Assertions)"),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Assertions")," stellt verschiedene Methoden bereit, die immer dann eine Ausnahme vom Typ ",(0,a.kt)("inlineCode",{parentName:"p"},"AssertionError")," ausl\xf6sen, wenn das Ergebnis eines Methodenaufrufs nicht wie erwartet ausgefallen ist. Eine Ausnahme vom Typ ",(0,a.kt)("inlineCode",{parentName:"p"},"AssertionError")," f\xfchrt dazu, dass der Test als nicht erfolgreich gewertet wird."),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Assert-Methode"),(0,a.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assertTrue, assertFalse"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob etwas wahr ist bzw. falsch ist")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assertNull, assertNotNull"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob etwas null ist bzw. nicht null ist")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assertSame, assertNotSame"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob zwei Objekte identisch sind bzw. ob zwei Objekte nicht identisch sind")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assertEquals, assertNotEquals"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob zwei Elemente gleich sind bzw. ob zwei Element ungleich sind")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assertThrows"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob eine Ausnahme ausgel\xf6st wird")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"assertTimeout"),(0,a.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob eine Laufzeit eingehalten wird")))),(0,a.kt)("h2",{id:"beispiel"},"Beispiel"),(0,a.kt)("p",null,"Die Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Calculator")," stellt mehrere Methoden bereit, die getestet werden sollen."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},"public class Calculator {\n \n    public Calculator() { }\n    \n    public int abs(int a) {\n        return a >= 0 ? a : a * -1;\n    }\n    \n    public int divide(int a, int b) {\n        return a / b;\n    }\n    \n    public int multiply(int a, int b) {\n        return a * b;\n    }\n    \n}\n")),(0,a.kt)("p",null,"Die statische Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"setUp()")," der Testklasse ",(0,a.kt)("inlineCode",{parentName:"p"},"CalculatorTest")," stellt sicher, dass vor der Ausf\xfchrung der Testmethoden ein Taschenrechner-Objekt erzeugt wird. In den Testmethoden werden verschiedene Testf\xe4lle wie z.B. die Division durch Null getestet."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java"},'public class CalculatorTest {\n\n    private static Calculator calculator;\n\n    @BeforeAll\n    static void setUp() {\n        calculator = new Calculator();\n    }\n\n    @Test\n    @DisplayName("Multiplication with Zero")\n    void multiply_withZero_Zero() {\n        assertEquals(0, calculator.multiply(0, 5));\n        assertEquals(0, calculator.multiply(5, 0));\n    }\n\n    @ParameterizedTest\n    @DisplayName("Absolute Values of positive and negative Values")\n    @ValueSource(ints = { -1, 0, 1 })\n    void abs_positiveAndNegativeValues_AbsoluteValues(int a) {\n        assertTrue(calculator.abs(a) >= 0);\n    }\n\n    @Test\n    @DisplayName("Division by Zero")\n    void divide_byZero_ArithmeticException() {\n        assertThrows(ArithmeticException.class, () -> calculator.divide(5, 0));\n    }\n\n}\n')))}d.isMDXComponent=!0}}]);