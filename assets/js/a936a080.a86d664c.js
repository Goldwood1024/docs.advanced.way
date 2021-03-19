(window.webpackJsonp=window.webpackJsonp||[]).push([[131],{200:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(3),a=n(7),o=(n(0),n(269)),i={title:"\u8fed\u4ee3\u5668\u6a21\u5f0f"},c={unversionedId:"patterns/behavior/\u8fed\u4ee3\u5668\u6a21\u5f0f",id:"patterns/behavior/\u8fed\u4ee3\u5668\u6a21\u5f0f",isDocsHomePage:!1,title:"\u8fed\u4ee3\u5668\u6a21\u5f0f",description:"\u5b9a\u4e49",source:"@site/docs/patterns/behavior/\u8fed\u4ee3\u5668\u6a21\u5f0f.md",slug:"/patterns/behavior/\u8fed\u4ee3\u5668\u6a21\u5f0f",permalink:"/docs.advanced.way/docs/patterns/behavior/\u8fed\u4ee3\u5668\u6a21\u5f0f",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/patterns/behavior/\u8fed\u4ee3\u5668\u6a21\u5f0f.md",version:"current",lastUpdatedAt:1616131278,formattedLastUpdatedAt:"3/19/2021",sidebar:"patterns",previous:{title:"\u8bbf\u95ee\u8005\u6a21\u5f0f",permalink:"/docs.advanced.way/docs/patterns/behavior/\u8bbf\u95ee\u8005\u6a21\u5f0f"}},l=[{value:"\u5b9a\u4e49",id:"\u5b9a\u4e49",children:[]},{value:"\u7ed3\u6784",id:"\u7ed3\u6784",children:[]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}],s={toc:l};function b(e){var t=e.components,i=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,i,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u5b9a\u4e49"},"\u5b9a\u4e49"),Object(o.b)("p",null,"\u63d0\u4f9b\u4e00\u4e2a\u5bf9\u8c61\u6765\u987a\u5e8f\u8bbf\u95ee\u805a\u5408\u5bf9\u8c61\u4e2d\u7684\u4e00\u7cfb\u5217\u6570\u636e\uff0c\u800c\u4e0d\u66b4\u9732\u805a\u5408\u5bf9\u8c61\u7684\u5185\u90e8\u8868\u793a"),Object(o.b)("h2",{id:"\u7ed3\u6784"},"\u7ed3\u6784"),Object(o.b)("p",null,Object(o.b)("img",{src:n(421).default})),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"\u62bd\u8c61\u805a\u5408\uff08Aggregate\uff09\u89d2\u8272\uff1a\u5b9a\u4e49\u5b58\u50a8\u3001\u6dfb\u52a0\u3001\u5220\u9664\u805a\u5408\u5bf9\u8c61\u4ee5\u53ca\u521b\u5efa\u8fed\u4ee3\u5668\u5bf9\u8c61\u7684\u63a5\u53e3\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5177\u4f53\u805a\u5408\uff08ConcreteAggregate\uff09\u89d2\u8272\uff1a\u5b9e\u73b0\u62bd\u8c61\u805a\u5408\u7c7b\uff0c\u8fd4\u56de\u4e00\u4e2a\u5177\u4f53\u8fed\u4ee3\u5668\u7684\u5b9e\u4f8b\u3002"),Object(o.b)("li",{parentName:"ul"},"\u62bd\u8c61\u8fed\u4ee3\u5668\uff08Iterator\uff09\u89d2\u8272\uff1a\u5b9a\u4e49\u8bbf\u95ee\u548c\u904d\u5386\u805a\u5408\u5143\u7d20\u7684\u63a5\u53e3\uff0c\u901a\u5e38\u5305\u542b hasNext()\u3001first()\u3001next() \u7b49\u65b9\u6cd5\u3002"),Object(o.b)("li",{parentName:"ul"},"\u5177\u4f53\u8fed\u4ee3\u5668\uff08Concretelterator\uff09\u89d2\u8272\uff1a\u5b9e\u73b0\u62bd\u8c61\u8fed\u4ee3\u5668\u63a5\u53e3\u4e2d\u6240\u5b9a\u4e49\u7684\u65b9\u6cd5\uff0c\u5b8c\u6210\u5bf9\u805a\u5408\u5bf9\u8c61\u7684\u904d\u5386\uff0c\u8bb0\u5f55\u904d\u5386\u7684\u5f53\u524d\u4f4d\u7f6e")),Object(o.b)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'public class IteratorPattern\n{\n    public static void main(String[] args)\n    {\n        Aggregate ag=new ConcreteAggregate(); \n        ag.add("\u4e2d\u5c71\u5927\u5b66"); \n        ag.add("\u534e\u5357\u7406\u5de5"); \n        ag.add("\u97f6\u5173\u5b66\u9662");\n        System.out.print("\u805a\u5408\u7684\u5185\u5bb9\u6709\uff1a");\n        Iterator it=ag.getIterator(); \n        while(it.hasNext())\n        { \n            Object ob=it.next(); \n            System.out.print(ob.toString()+"\\t"); \n        }\n        Object ob=it.first();\n        System.out.println("\\nFirst\uff1a"+ob.toString());\n    }\n}\n\n//\u62bd\u8c61\u805a\u5408\ninterface Aggregate\n{ \n    public void add(Object obj); \n    public void remove(Object obj); \n    public Iterator getIterator(); \n}\n\n//\u5177\u4f53\u805a\u5408\nclass ConcreteAggregate implements Aggregate\n{ \n    private List<Object> list=new ArrayList<Object>(); \n    public void add(Object obj)\n    { \n        list.add(obj); \n    }\n    public void remove(Object obj)\n    { \n        list.remove(obj); \n    }\n    public Iterator getIterator()\n    { \n        return(new ConcreteIterator(list)); \n    }     \n}\n\n//\u62bd\u8c61\u8fed\u4ee3\u5668\ninterface Iterator\n{\n    Object first();\n    Object next();\n    boolean hasNext();\n}\n\n//\u5177\u4f53\u8fed\u4ee3\u5668\nclass ConcreteIterator implements Iterator\n{ \n    private List<Object> list=null; \n    private int index=-1; \n    public ConcreteIterator(List<Object> list)\n    { \n        this.list=list; \n    } \n    public boolean hasNext()\n    { \n        if(index<list.size()-1)\n        { \n            return true;\n        }\n        else\n        {\n            return false;\n        }\n    }\n    public Object first()\n    {\n        index=0;\n        Object obj=list.get(index);;\n        return obj;\n    }\n    public Object next()\n    { \n        Object obj=null; \n        if(this.hasNext())\n        { \n            obj=list.get(++index); \n        } \n        return obj; \n    }   \n}\n')))}b.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return f}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},d=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=b(n),d=r,f=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return n?a.a.createElement(f,c(c({ref:t},s),{},{components:n})):a.a.createElement(f,c({ref:t},s))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},421:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/3-1Q1161PU9528-7d538013700230eb756392f56f8dec18.gif"}}]);