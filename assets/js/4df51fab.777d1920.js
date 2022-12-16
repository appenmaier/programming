"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[4214],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>c});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var o=a.createContext({}),d=function(e){var t=a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=d(e.components);return a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,o=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),m=d(n),c=r,b=m["".concat(o,".").concat(c)]||m[c]||p[c]||i;return n?a.createElement(b,l(l({ref:t},u),{},{components:n})):a.createElement(b,l({ref:t},u))}));function c(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,l[1]=s;for(var d=2;d<i;d++)l[d]=n[d];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3499:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>d});var a=n(7462),r=(n(7294),n(3905));const i={title:"Komponententests (Unit Tests)",description:"",sidebar_position:320,tags:["unit-tests"]},l=void 0,s={unversionedId:"documentation/unit-tests",id:"documentation/unit-tests",title:"Komponententests (Unit Tests)",description:"",source:"@site/docs/documentation/unit-tests.md",sourceDirName:"documentation",slug:"/documentation/unit-tests",permalink:"/programming/documentation/unit-tests",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/unit-tests.md",tags:[{label:"unit-tests",permalink:"/programming/tags/unit-tests"}],version:"current",sidebarPosition:320,frontMatter:{title:"Komponententests (Unit Tests)",description:"",sidebar_position:320,tags:["unit-tests"]},sidebar:"documentationSidebar",previous:{title:"Softwaretests",permalink:"/programming/documentation/tests"},next:{title:"JavaFX-Anwendungen",permalink:"/programming/documentation/javafx"}},o={},d=[{value:"Implementieren einer Testklasse",id:"implementieren-einer-testklasse",level:2},{value:"Zusicherungen (Assertions)",id:"zusicherungen-assertions",level:2},{value:"Beispiel",id:"beispiel",level:2}],u={toc:d};function p(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Komponententests (Unit Tests) werden zum Testen einzelner, abgeschlossener Softwarebausteine verwendete. JUnit ist ein weit verbreitetes Framework zur Erstellung von Komponententests bzw. zum automatisierten Testen von Klassen und Methoden in Java. Die aktuelle\nVersion ",(0,r.kt)("em",{parentName:"p"},"JUnit 5")," stellt eine Kombination verschiedener Module der Projekte ",(0,r.kt)("em",{parentName:"p"},"JUnit Platform"),", ",(0,r.kt)("em",{parentName:"p"},"JUnit Jupiter")," sowie ",(0,r.kt)("em",{parentName:"p"},"JUnit Vintage")," dar."),(0,r.kt)("h2",{id:"implementieren-einer-testklasse"},"Implementieren einer Testklasse"),(0,r.kt)("p",null,"JUnit-Testklassen werden mit Hilfe entsprechender Annotationen implementiert:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Die Annotationen ",(0,r.kt)("inlineCode",{parentName:"li"},"@Test")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"@ParameterizedTest")," definieren einfache bzw. parametrisierte Testmethoden"),(0,r.kt)("li",{parentName:"ul"},"Die Annotationen ",(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeAll")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"@AfterAll")," definieren statische Methoden, die aufgerufen werden, wenn die Klasse f\xfcr den Test initialisiert wird bzw. wenn alle Tests abgeschlossen sind"),(0,r.kt)("li",{parentName:"ul"},"Die Annotationen ",(0,r.kt)("inlineCode",{parentName:"li"},"@BeforeEach")," und ",(0,r.kt)("inlineCode",{parentName:"li"},"@AfterEach")," definieren Methoden, die vor bzw. nach jeder Testmethode aufgerufen werden"),(0,r.kt)("li",{parentName:"ul"},"Die Annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"@Disabled")," bewirkt, dass eine Testmethode beim Testen nicht ausgef\xfchrt wird"),(0,r.kt)("li",{parentName:"ul"},"Mit Hilfe der Annotation ",(0,r.kt)("inlineCode",{parentName:"li"},"@DisplayName")," kann einer Testklasse bzw. einer Testmethode ein Anzeigename zugewiesen werden")),(0,r.kt)("h2",{id:"zusicherungen-assertions"},"Zusicherungen (Assertions)"),(0,r.kt)("p",null,"Die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"Assertions")," stellt verschiedene Methoden bereit, die immer dann eine Ausnahme vom Typ ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionError")," ausl\xf6sen, wenn das Ergebnis eines Methodenaufrufs nicht wie erwartet ausgefallen ist. Eine Ausnahme vom Typ ",(0,r.kt)("inlineCode",{parentName:"p"},"AssertionError")," f\xfchrt dazu, dass der Test als nicht erfolgreich gewertet wird."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Assert-Methode"),(0,r.kt)("th",{parentName:"tr",align:null},"Bedeutung"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertTrue(condition: boolean)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob eine Bedingung erf\xfcllt ist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertFalse(condition: boolean)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob eine Bedingung nicht erf\xfcllt ist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertNull(actual: Object)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob etwas ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertNotNull(actual: Object)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob etwas nicht ",(0,r.kt)("inlineCode",{parentName:"td"},"null")," ist")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertSame(expected: Object, actual: Object)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob zwei Objekte identisch sind")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertNotSame(expected: Object, actual: Object)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob zwei Objekte nicht identisch sind")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertEquals(expected: Object, actual: Object)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob zwei Objekte gleich sind")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"void assertNotEquals(expected: Object, actual: Object)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob zwei Objekte nicht gleich sind")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"T assertThrows(expectedType: Class<T>, executable: Executable)")),(0,r.kt)("td",{parentName:"tr",align:null},"Pr\xfcft, ob eine Ausnahme ausgel\xf6st wird")))),(0,r.kt)("h2",{id:"beispiel"},"Beispiel"),(0,r.kt)("p",null,"Die Klasse ",(0,r.kt)("inlineCode",{parentName:"p"},"Calculator")," stellt mehrere Methoden bereit, die getestet werden sollen."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Calculator.java" showLineNumbers',title:'"Calculator.java"',showLineNumbers:!0},"public class Calculator {\n\n  public Calculator() {}\n\n  public int abs(int a) {\n    return a >= 0 ? a : a * -1;\n  }\n\n  public int divide(int a, int b) {\n    return a / b;\n  }\n\n  public int multiply(int a, int b) {\n    return a * b;\n  }\n\n}\n")),(0,r.kt)("p",null,"Die statische Methode ",(0,r.kt)("inlineCode",{parentName:"p"},"setUp()")," der Testklasse ",(0,r.kt)("inlineCode",{parentName:"p"},"CalculatorTest")," stellt sicher, dass vor der Ausf\xfchrung der Testmethoden ein Taschenrechner-Objekt erzeugt wird. In den Testmethoden werden verschiedene Testf\xe4lle wie z.B. die Division durch Null getestet."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class CalculatorTest {\n\n  private static Calculator calculator;\n\n  @BeforeAll\n  static void setUp() {\n    calculator = new Calculator();\n  }\n\n  @Test\n  @DisplayName("Multiplication with Zero")\n  void multiply_withZero_Zero() {\n    assertEquals(0, calculator.multiply(0, 5));\n    assertEquals(0, calculator.multiply(5, 0));\n  }\n\n  @ParameterizedTest\n  @DisplayName("Absolute Values of positive and negative Values")\n  @ValueSource(ints = {-1, 0, 1})\n  void abs_positiveAndNegativeValues_AbsoluteValues(int a) {\n    assertTrue(calculator.abs(a) >= 0);\n  }\n\n  @Test\n  @DisplayName("Division by Zero")\n  void divide_byZero_ArithmeticException() {\n    assertThrows(ArithmeticException.class, () -> calculator.divide(5, 0));\n  }\n\n}\n')))}p.isMDXComponent=!0}}]);