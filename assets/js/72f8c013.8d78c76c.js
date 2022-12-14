"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[5248],{3905:(e,n,a)=>{a.d(n,{Zo:()=>m,kt:()=>u});var t=a(7294);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function r(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,o=function(e,n){if(null==e)return{};var a,t,o={},i=Object.keys(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||(o[a]=e[a]);return o}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)a=i[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=t.createContext({}),d=function(e){var n=t.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):r(r({},n),e)),a},m=function(e){var n=d(e.components);return t.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},c=t.forwardRef((function(e,n){var a=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=d(a),u=o,v=c["".concat(s,".").concat(u)]||c[u]||p[u]||i;return a?t.createElement(v,r(r({ref:n},m),{},{components:a})):t.createElement(v,r({ref:n},m))}));function u(e,n){var a=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var i=a.length,r=new Array(i);r[0]=c;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:o,r[1]=l;for(var d=2;d<i;d++)r[d]=a[d];return t.createElement.apply(null,r)}return t.createElement.apply(null,a)}c.displayName="MDXCreateElement"},6526:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var t=a(7462),o=(a(7294),a(3905));const i={title:"\xdcbungsaufgabe JavaStreamAPI01"},r=void 0,l={unversionedId:"exercises/java-stream-api/java-stream-api01",id:"exercises/java-stream-api/java-stream-api01",title:"\xdcbungsaufgabe JavaStreamAPI01",description:"- Erstelle die Klasse VideoGameConsoles anhand des abgebildeten Quellcodes",source:"@site/docs/exercises/java-stream-api/java-stream-api01.md",sourceDirName:"exercises/java-stream-api",slug:"/exercises/java-stream-api/java-stream-api01",permalink:"/programming/exercises/java-stream-api/java-stream-api01",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/exercises/java-stream-api/java-stream-api01.md",tags:[],version:"current",frontMatter:{title:"\xdcbungsaufgabe JavaStreamAPI01"},sidebar:"exercisesSidebar",previous:{title:"Die Java Stream API",permalink:"/programming/exercises/java-stream-api/"},next:{title:"\xdcbungsaufgabe JavaStreamAPI02",permalink:"/programming/exercises/java-stream-api/java-stream-api02"}},s={},d=[{value:"Quellcode",id:"quellcode",level:2},{value:"Hinweis zur Klasse VideoGameConsole",id:"hinweis-zur-klasse-videogameconsole",level:2}],m={toc:d};function p(e){let{components:n,...a}=e;return(0,o.kt)("wrapper",(0,t.Z)({},m,a,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Erstelle die Klasse ",(0,o.kt)("inlineCode",{parentName:"li"},"VideoGameConsoles")," anhand des abgebildeten Quellcodes"),(0,o.kt)("li",{parentName:"ul"},"Erstelle eine ausf\xfchrbare Klasse, welche mit Hilfe der Java Stream API folgende Informationen auf der Konsole ausgibt:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"die Namen aller Konsolen, die aktuell noch verkauft werden (",(0,o.kt)("em",{parentName:"li"},"PlayStation 4, Nintendo Switch, XBox One"),")"),(0,o.kt)("li",{parentName:"ul"},"alle Konsolen absteigend sortiert nach der Lebensspanne (",(0,o.kt)("em",{parentName:"li"},"VideoGameConsole","[","title=Nintendo Wii, maker=NINTENDO, lifespan=13, soldUnits=101.63]"),"...)"),(0,o.kt)("li",{parentName:"ul"},"die Antwort auf die Frage, ob es eine Konsole mit mehr als 150 Millionen verkauften Einheiten gibt (",(0,o.kt)("em",{parentName:"li"},"true"),")"),(0,o.kt)("li",{parentName:"ul"},"die Antwort auf die Frage, ob von allen Konsolen mehr als 50 Millionen Einheiten verkauft wurden (",(0,o.kt)("em",{parentName:"li"},"false"),")"),(0,o.kt)("li",{parentName:"ul"},"die Anzahl der Konsolen von Nintendo (",(0,o.kt)("em",{parentName:"li"},"8"),")"),(0,o.kt)("li",{parentName:"ul"},"die Namen aller Konsolen, die nicht mehr verkauft werden sowie die Anzahl verkaufter Einheiten pro Jahr in Millionen (",(0,o.kt)("em",{parentName:"li"},"PlayStation 2 (13.225)"),"...)"),(0,o.kt)("li",{parentName:"ul"},"der Durchschnitt verkaufter Einheiten pro Jahr in Millionen aller Konsolen, die nicht mehr verkauft werden (",(0,o.kt)("em",{parentName:"li"},"OptionalDouble","[","9.900365412365412]"),")"),(0,o.kt)("li",{parentName:"ul"},"alle Konsolen gruppiert nach den Herstellern (",(0,o.kt)("em",{parentName:"li"},"{NINTENDO=","[","VideoGameConsole","[","title=Nintendo DS, maker=NINTENDO, lifespan=10, soldUnits=154.02],"),"...",(0,o.kt)("em",{parentName:"li"},"}"),")"),(0,o.kt)("li",{parentName:"ul"},"die Anzahl verkaufter Einheiten pro Hersteller in Millionen (",(0,o.kt)("em",{parentName:"li"},"NINTENDO: 752.05"),")")))),(0,o.kt)("h2",{id:"quellcode"},"Quellcode"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class VideoGameConsoles {\n\n  private final static VideoGameConsole PS2 =\n      new VideoGameConsole("PlayStation 2", Maker.SONY, 12, 158.70);\n  private final static VideoGameConsole DS =\n      new VideoGameConsole("Nintendo DS", Maker.NINTENDO, 10, 154.02);\n  private final static VideoGameConsole GB =\n      new VideoGameConsole("GameBoy", Maker.NINTENDO, 10, 118.69);\n  private final static VideoGameConsole PS4 =\n      new VideoGameConsole("PlayStation 4", Maker.SONY, -1, 116.93);\n  private final static VideoGameConsole NS =\n      new VideoGameConsole("Nintendo Switch", Maker.NINTENDO, -1, 109.25);\n  private final static VideoGameConsole PSX =\n      new VideoGameConsole("PlayStation", Maker.SONY, 9, 102.49);\n  private final static VideoGameConsole WII =\n      new VideoGameConsole("Nintendo Wii", Maker.NINTENDO, 13, 101.63);\n  private final static VideoGameConsole PS3 =\n      new VideoGameConsole("PlayStation 3", Maker.SONY, 11, 87.40);\n  private final static VideoGameConsole X360 =\n      new VideoGameConsole("XBox 360", Maker.MICROSOFT, 12, 85.81);\n  private final static VideoGameConsole GBA =\n      new VideoGameConsole("GameBoy Advance", Maker.NINTENDO, 7, 81.51);\n  private final static VideoGameConsole PSP =\n      new VideoGameConsole("PlayStation Portable", Maker.SONY, 9, 80.79);\n  private final static VideoGameConsole TDS =\n      new VideoGameConsole("Nintendo 3DS", Maker.NINTENDO, 8, 75.94);\n  private final static VideoGameConsole NES =\n      new VideoGameConsole("Nintendo Entertainment System", Maker.NINTENDO, 9, 61.91);\n  private final static VideoGameConsole XONE =\n      new VideoGameConsole("XBox One", Maker.MICROSOFT, -1, 50.53);\n  private final static VideoGameConsole SNES =\n      new VideoGameConsole("Super Nintendo Entertainment System", Maker.NINTENDO, 7, 49.10);\n\n  public static record VideoGameConsole(String title, Maker maker, int lifespan, double soldUnits) {\n\n  }\n\n  public static enum Maker {\n    NINTENDO, SEGA, SONY, MICROSOFT;\n  }\n\n  public static ArrayList<VideoGameConsole> getVideoGameConsoles() {\n    ArrayList<VideoGameConsole> videoGameConsoles = new ArrayList<>();\n    videoGameConsoles.add(PS2);\n    videoGameConsoles.add(DS);\n    videoGameConsoles.add(GB);\n    videoGameConsoles.add(PS4);\n    videoGameConsoles.add(NS);\n    videoGameConsoles.add(PSX);\n    videoGameConsoles.add(WII);\n    videoGameConsoles.add(PS3);\n    videoGameConsoles.add(X360);\n    videoGameConsoles.add(GBA);\n    videoGameConsoles.add(PSP);\n    videoGameConsoles.add(TDS);\n    videoGameConsoles.add(NES);\n    videoGameConsoles.add(XONE);\n    videoGameConsoles.add(SNES);\n    return videoGameConsoles;\n  }\n\n}\n')),(0,o.kt)("h2",{id:"hinweis-zur-klasse-videogameconsole"},"Hinweis zur Klasse VideoGameConsole"),(0,o.kt)("p",null,"Konsolen, die aktuell noch verkauft werden, besitzen bei der Lebensspanne den Wert ",(0,o.kt)("inlineCode",{parentName:"p"},"-1"),"."))}p.isMDXComponent=!0}}]);