"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9080],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>p});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),m=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=m(e.components);return n.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=m(a),p=r,g=u["".concat(s,".").concat(p)]||u[p]||d[p]||i;return a?n.createElement(g,l(l({ref:t},c),{},{components:a})):n.createElement(g,l({ref:t},c))}));function p(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var m=2;m<i;m++)l[m]=a[m];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3841:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(7462),r=(a(7294),a(3905));const i={title:"Messdaten",description:"",tags:["java-stream-api"]},l=void 0,o={unversionedId:"additional-material/exam-exercises2/measurement-data",id:"additional-material/exam-exercises2/measurement-data",title:"Messdaten",description:"",source:"@site/docs/additional-material/exam-exercises2/measurement-data.md",sourceDirName:"additional-material/exam-exercises2",slug:"/additional-material/exam-exercises2/measurement-data",permalink:"/programming/additional-material/exam-exercises2/measurement-data",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/additional-material/exam-exercises2/measurement-data.md",tags:[{label:"java-stream-api",permalink:"/programming/tags/java-stream-api"}],version:"current",frontMatter:{title:"Messdaten",description:"",tags:["java-stream-api"]},sidebar:"additionalMaterialSidebar",previous:{title:"Bibliothek",permalink:"/programming/additional-material/exam-exercises2/library"},next:{title:"Videosammlung",permalink:"/programming/additional-material/exam-exercises2/video-collection"}},s={},m=[{value:"Quellcode",id:"quellcode",level:2}],c={toc:m};function d(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,r.kt)("inlineCode",{parentName:"li"},"MeasurementData")," anhand des abgebildeten Quellcodes"),(0,r.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche mit Hilfe der Java Stream API folgende Informationen auf der Konsole ausgibt:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"die durchschnittliche Temperatur gruppiert nach L\xe4ndern"),(0,r.kt)("li",{parentName:"ul"},"alle Messdaten aus Japan, bei denen die Temperatur im Oktober 202",(0,r.kt)("em",{parentName:"li"},"x")," bei mindestens 30\xb0 lag"),(0,r.kt)("li",{parentName:"ul"},"die Antwort auf die Frage, ob es einen Messdatensatz gibt, der folgende Kriterien erf\xfcllt: Land = Deutschland, Datum > 01.01.202",(0,r.kt)("em",{parentName:"li"},"x"),", Temperatur < 20 "),(0,r.kt)("li",{parentName:"ul"},"die Anzahl aller Messdaten gruppiert nach den Prozentsatzbereichen (0-10, 10-20,\u2026)"),(0,r.kt)("li",{parentName:"ul"},"alle Messdaten aus dem Jahr 202",(0,r.kt)("em",{parentName:"li"},"x")," der Kategorie ",(0,r.kt)("em",{parentName:"li"},"F")," absteigend sortiert nach dem Prozentsatz"),(0,r.kt)("li",{parentName:"ul"},"...")))),(0,r.kt)("h2",{id:"quellcode"},"Quellcode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'public record MeasurementData(String country, LocalDate date, double temperature, int percentage,\n    char category) {\n\n  private final static int NUMBER_OF_ENTRIES = 100;\n  private final static int MAX_DAYS = 2000;\n  private final static int MAX_TEMPERATURE = 40;\n  private final static int MAX_PERCENTAGE = 101;\n  private final static List<String> COUNTRIES =\n      List.of("USA", "Brasilien", "Deutschland", "Japan", "Indien");\n  private final static List<Character> CATEGORIES = List.of(\'D\', \'X\', \'F\');\n\n  public static ArrayList<MeasurementData> getData() {\n    ArrayList<MeasurementData> measurementData = new ArrayList<>();\n\n    Random rnd = new Random();\n    LocalDate now = LocalDate.now();\n\n    for (int i = 0; i < NUMBER_OF_ENTRIES; i++) {\n      LocalDate date = now.minusDays(rnd.nextInt(MAX_DAYS));\n      double temperature = rnd.nextDouble(MAX_TEMPERATURE);\n      int percentage = rnd.nextInt(MAX_PERCENTAGE);\n      String country = COUNTRIES.get(rnd.nextInt(COUNTRIES.size()));\n      char category = CATEGORIES.get(rnd.nextInt(CATEGORIES.size()));\n      measurementData.add(new MeasurementData(country, date, temperature, percentage, category));\n    }\n\n    return measurementData;\n  }\n\n}\n')))}d.isMDXComponent=!0}}]);