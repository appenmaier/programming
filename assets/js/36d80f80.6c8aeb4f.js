"use strict";(self.webpackChunkprogrammierung=self.webpackChunkprogrammierung||[]).push([[9270],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(7294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return r.createElement(s.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||i;return t?r.createElement(g,o(o({ref:n},p),{},{components:t})):r.createElement(g,o({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=t[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},3860:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=t(7462),a=(t(7294),t(3905));const i={title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},o=void 0,l={unversionedId:"documentation/comparators",id:"documentation/comparators",title:"Komparatoren",description:"",source:"@site/docs/documentation/comparators.md",sourceDirName:"documentation",slug:"/documentation/comparators",permalink:"/programming/documentation/comparators",draft:!1,editUrl:"https://github.com/appenmaier/programming/tree/main/docs/documentation/comparators.md",tags:[{label:"comparators",permalink:"/programming/tags/comparators"}],version:"current",sidebarPosition:220,frontMatter:{title:"Komparatoren",description:"",sidebar_position:220,tags:["comparators"]},sidebar:"documentationSidebar",previous:{title:"Schnittstellen (Interfaces)",permalink:"/programming/documentation/interfaces"},next:{title:"Ausnahmen (Exceptions)",permalink:"/programming/documentation/exceptions"}},s={},c=[],p={toc:c};function m(e){let{components:n,...t}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Mit Hilfe der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compareTo(o: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>")," bzw. der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compare(o1: T, o2: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparator<T>")," k\xf6nnen Objekte einer Klasse miteinander verglichen werden. Der R\xfcckgabewert beider Methoden gibt die Ordnung der zu\nvergleichenden Objekte an:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert kleiner Null: das Vergleichsobjekt ist gr\xf6\xdfer"),(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert gleich Null: beide Objekte sind gleich gro\xdf"),(0,a.kt)("li",{parentName:"ul"},"R\xfcckgabewert gr\xf6\xdfer Null: das Vergleichsobjekt ist kleiner")),(0,a.kt)("p",null,"Objekte der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," k\xf6nnen durch die Implementierung der Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"int compareTo(o: T)")," der Schnittstelle ",(0,a.kt)("inlineCode",{parentName:"p"},"Comparable<T>")," miteinander verglichen werden."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="Container.java" showLineNumbers',title:'"Container.java"',showLineNumbers:!0},"public class Container implements Comparable<Container> {\n\n  private String value;\n\n  public Container(String value) {\n    this.value = value;\n  }\n\n  public void setValue(String value) {\n    this.value = value;\n  }\n\n  public String getValue() {\n    return value;\n  }\n\n  @Override\n  public int compareTo(Container o) {\n    return value.compareTo(o.value);\n  }\n\n}\n")),(0,a.kt)("p",null,"In der main-Methode der Startklasse wird mit Hilfe der statischen Methode ",(0,a.kt)("inlineCode",{parentName:"p"},"void sort(list: List<T>)")," der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Collections")," eine Liste mit Objekten der Klasse ",(0,a.kt)("inlineCode",{parentName:"p"},"Foo")," sortiert. Aufgrund der Implementierung der compareTo-Methode wird die Liste aufsteigend nach dem\nAttribut ",(0,a.kt)("inlineCode",{parentName:"p"},"bar")," sortiert."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="MainClass.java" showLineNumbers',title:'"MainClass.java"',showLineNumbers:!0},'public class MainClass {\n\n  public static void main(String[] args) {\n    ArrayList<Container> containers = new ArrayList<>();\n    containers.add(new Container("Winter"));\n    containers.add(new Container("is"));\n    containers.add(new Container("Coming"));\n\n    Collections.sort(containers);\n  }\n\n}\n')))}m.isMDXComponent=!0}}]);