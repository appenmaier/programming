"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9138],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>d});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var m=r.createContext({}),p=function(e){var t=r.useContext(m),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,m=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),d=n,g=c["".concat(m,".").concat(d)]||c[d]||u[d]||i;return a?r.createElement(g,l(l({ref:t},s),{},{components:a})):r.createElement(g,l({ref:t},s))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=c;var o={};for(var m in t)hasOwnProperty.call(t,m)&&(o[m]=t[m]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=a[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},8075:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var r=a(7462),n=(a(7294),a(3905));const i={title:"Programmierung 2 - Messdaten",description:""},l=void 0,o={unversionedId:"additional-material/exam-preparation/measurement-data",id:"additional-material/exam-preparation/measurement-data",title:"Programmierung 2 - Messdaten",description:"",source:"@site/docs/additional-material/exam-preparation/measurement-data.md",sourceDirName:"additional-material/exam-preparation",slug:"/additional-material/exam-preparation/measurement-data",permalink:"/programming/additional-material/exam-preparation/measurement-data",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/additional-material/exam-preparation/measurement-data.md",tags:[],version:"current",frontMatter:{title:"Programmierung 2 - Messdaten",description:""},sidebar:"additionalMaterialSidebar",previous:{title:"Programmierung 2 - Lego-Baustein",permalink:"/programming/additional-material/exam-preparation/lego-brick"}},m={},p=[{value:"Quellcode",id:"quellcode",level:2}],s={toc:p};function u(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,n.kt)("inlineCode",{parentName:"li"},"MeasurementData")," anhand des abgebildeten Quellcodes"),(0,n.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche mit Hilfe der Java Stream API folgende Informationen auf der Konsole ausgibt:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"die durchschnittliche Temperatur gruppiert nach L\xe4ndern"),(0,n.kt)("li",{parentName:"ul"},"alle Messdaten aus Japan, bei denen die Temperatur im Oktober 202",(0,n.kt)("em",{parentName:"li"},"x")," bei mindestens 30\xb0 lag"),(0,n.kt)("li",{parentName:"ul"},"die Antwort auf die Frage, ob es einen Messdatensatz gibt, der folgende Kriterien erf\xfcllt: Land = Deutschland, Datum > 01.01.202",(0,n.kt)("em",{parentName:"li"},"x"),", Temperatur < 20 "),(0,n.kt)("li",{parentName:"ul"},"die Anzahl aller Messdaten gruppiert nach den Prozentsatzbereichen (0-10, 10-20,\u2026)"),(0,n.kt)("li",{parentName:"ul"},"alle Messdaten aus dem Jahr 202",(0,n.kt)("em",{parentName:"li"},"x")," der Kategorie ",(0,n.kt)("em",{parentName:"li"},"F")," absteigend sortiert nach dem Prozentsatz"),(0,n.kt)("li",{parentName:"ul"},"...")))),(0,n.kt)("h2",{id:"quellcode"},"Quellcode"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-java"},'public record MeasurementData(String country, LocalDate date, double temperature, int percentage,\n    char category) {\n\n  private final static int NUMBER_OF_ENTRIES = 100;\n  private final static int MAX_DAYS = 2000;\n  private final static int MAX_TEMPERATURE = 40;\n  private final static int MAX_PERCENTAGE = 101;\n  private final static List<String> COUNTRIES =\n      List.of("USA", "Brasilien", "Deutschland", "Japan", "Indien");\n  private final static List<Character> CATEGORIES = List.of(\'D\', \'X\', \'F\');\n\n  public static ArrayList<MeasurementData> getData() {\n    ArrayList<MeasurementData> measurementData = new ArrayList<>();\n\n    Random rnd = new Random();\n    LocalDate now = LocalDate.now();\n\n    for (int i = 0; i < NUMBER_OF_ENTRIES; i++) {\n      LocalDate date = now.minusDays(rnd.nextInt(MAX_DAYS));\n      double temperature = rnd.nextDouble(MAX_TEMPERATURE);\n      int percentage = rnd.nextInt(MAX_PERCENTAGE);\n      String country = COUNTRIES.get(rnd.nextInt(COUNTRIES.size()));\n      char category = CATEGORIES.get(rnd.nextInt(CATEGORIES.size()));\n      measurementData.add(new MeasurementData(country, date, temperature, percentage, category));\n    }\n\n    return measurementData;\n  }\n\n}\n')))}u.isMDXComponent=!0}}]);