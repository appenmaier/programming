"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[6712],{3905:(e,t,n)=>{n.d(t,{Zo:()=>o,kt:()=>k});var a=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var m=a.createContext({}),s=function(e){var t=a.useContext(m),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},o=function(e){var t=s(e.components);return a.createElement(m.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,m=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),c=s(n),k=r,d=c["".concat(m,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(d,l(l({ref:t},o),{},{components:n})):a.createElement(d,l({ref:t},o))}));function k(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=c;var p={};for(var m in t)hasOwnProperty.call(t,m)&&(p[m]=t[m]);p.originalType=e,p.mdxType="string"==typeof e?e:r,l[1]=p;for(var s=2;s<i;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},8352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>m,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>p,toc:()=>s});var a=n(7462),r=(n(7294),n(3905));const i={title:"JavaFX einrichten",description:"",sidebar_position:30},l=void 0,p={unversionedId:"instructions/setup-javafx",id:"instructions/setup-javafx",title:"JavaFX einrichten",description:"",source:"@site/docs/instructions/setup-javafx.md",sourceDirName:"instructions",slug:"/instructions/setup-javafx",permalink:"/programming/instructions/setup-javafx",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/instructions/setup-javafx.md",tags:[],version:"current",sidebarPosition:30,frontMatter:{title:"JavaFX einrichten",description:"",sidebar_position:30},sidebar:"instructionsSidebar",previous:{title:"Eclipse einrichten",permalink:"/programming/instructions/setup-eclipse"}},m={},s=[{value:"JavaFX SDK herunterladen und installieren",id:"javafx-sdk-herunterladen-und-installieren",level:2},{value:"Eclipse-Plugin e(fx)clipse herunterladen und installieren",id:"eclipse-plugin-efxclipse-herunterladen-und-installieren",level:2},{value:"Scene Builder herunterladen, installieren und mit Eclipse verkn\xfcpfen",id:"scene-builder-herunterladen-installieren-und-mit-eclipse-verkn\xfcpfen",level:2},{value:"Java FX User Library einrichten",id:"java-fx-user-library-einrichten",level:2}],o={toc:s};function u(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},o,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"javafx-sdk-herunterladen-und-installieren"},"JavaFX SDK herunterladen und installieren"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"JavaFX SDK herunterladen (",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"https://gluonhq.com/products/javafx/"},"https://gluonhq.com/products/javafx/"))),")"),(0,r.kt)("li",{parentName:"ul"},"Zip-Datei ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"openjfx-","[","JavaFX SDK Version","]","_windows-x64_bin-sdk.zip"))," entpacken"),(0,r.kt)("li",{parentName:"ul"},"Unterordner ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"javafx-sdk-","[","JavaFX SDK Version","]"))," der Zip-Datei in den Ordner ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"C:\\Progam Files\\Java"))," kopieren")),(0,r.kt)("h2",{id:"eclipse-plugin-efxclipse-herunterladen-und-installieren"},"Eclipse-Plugin e(fx)clipse herunterladen und installieren"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eclipse starten"),(0,r.kt)("li",{parentName:"ul"},"Zu ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Help \u2013 Install new Software..."))," navigieren"),(0,r.kt)("li",{parentName:"ul"},"Bei Feld ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Work with"))," den Wert ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"http://download.eclipse.org/efxclipse/updates-released/3.8.0/site"},"http://download.eclipse.org/efxclipse/updates-released/3.8.0/site")))," eingeben und ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"ENTER"))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"e(fx)clipse - install"))," und Option ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"e(fx)clipse \u2013 single components"))," ausw\xe4hlen und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Next >"))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Druckaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Finish"))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Restart now"))," bet\xe4tigen")),(0,r.kt)("h2",{id:"scene-builder-herunterladen-installieren-und-mit-eclipse-verkn\xfcpfen"},"Scene Builder herunterladen, installieren und mit Eclipse verkn\xfcpfen"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Scene Builder herunterladen (",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"https://gluonhq.com/products/scene-builder/"},"https://gluonhq.com/products/scene-builder/")," - Download Scene Builder")),")"),(0,r.kt)("li",{parentName:"ul"},"Scene Builder installieren"),(0,r.kt)("li",{parentName:"ul"},"Eclipse starten"),(0,r.kt)("li",{parentName:"ul"},"Zu ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Window \u2013 Preferences \u2013 JavaFX"))," navigieren"),(0,r.kt)("li",{parentName:"ul"},"Bei Feld ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"SceneBuilder executable"))," den Wert ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"[","Pfad zur SceneBuilder.exe","]","/SceneBuilder.exe"))," eingeben und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Apply and Close"))," bet\xe4tigen")),(0,r.kt)("h2",{id:"java-fx-user-library-einrichten"},"Java FX User Library einrichten"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Eclipse starten"),(0,r.kt)("li",{parentName:"ul"},"Zu ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Window \u2013 Preferences \u2013 Java \u2013 Build Path \u2013 User Libraries"))," navigieren"),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"New..."))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Bei Feld ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"User library name"))," den Wert ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"JavaFX ","[","JavaFX SDK Version","]"))," eingeben und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"OK"))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Eintrag ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"JavaFX ","[","JavaFX SDK Version","]"))," ausw\xe4hlen und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Add External JARs\u2026"))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Alle .jar-Dateien des Ordners ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"C:\\Progam Files\\Java\\javafx-sdk-","[","JavaFX SDK Version","]","\\lib"))," ausw\xe4hlen und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Open"))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"F\xfcr jede .jar-Datei nachfolgende Schritte durchf\xfchren:",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Eintrag ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"JavaFX ","[","JavaFX SDK Version","]"," \u2013 \\<.jar-Datei",">"," \u2013 Source attachment: (None)"))," ausw\xe4hlen und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Edit..."))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"External location"))," ausw\xe4hlen"),(0,r.kt)("li",{parentName:"ul"},"Bei Feld ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Path C:\\Progam Files\\Java\\javafx-sdk-","[","JavaFX SDK Version","]","\\lib\\src.zip"))," eingeben und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"OK"))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Eintrag ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"JavaFX ","[","JavaFX SDK Version","]"," \u2013 \\<.jar-Datei",">"," \u2013 Javadoc location: (None)"))," ausw\xe4hlen und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Edit..."))," bet\xe4tigen"),(0,r.kt)("li",{parentName:"ul"},"Option ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Javadoc URL"))," ausw\xe4hlen"),(0,r.kt)("li",{parentName:"ul"},"Bei Feld ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Javadoc location path"))," den Wert ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},(0,r.kt)("a",{parentName:"strong",href:"https://openjfx.io/javadoc/"},"https://openjfx.io/javadoc/")," ","[","JavaFX SDK Version","]","/"))," eingeben und Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"OK"))," bet\xe4tigen"))),(0,r.kt)("li",{parentName:"ul"},"Drucktaste ",(0,r.kt)("em",{parentName:"li"},(0,r.kt)("strong",{parentName:"em"},"Apply and Close"))," bet\xe4tigen")))}u.isMDXComponent=!0}}]);