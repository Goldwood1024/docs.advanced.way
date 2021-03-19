(window.webpackJsonp=window.webpackJsonp||[]).push([[151],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return l})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),c=(n(0),n(269)),o={title:"Base64\u7f16\u7801",sidebar_label:"Base64\u7f16\u7801"},l={unversionedId:"java/base/base64",id:"java/base/base64",isDocsHomePage:!1,title:"Base64\u7f16\u7801",description:"Base64",source:"@site/docs/java/base/base64.md",slug:"/java/base/base64",permalink:"/docs.advanced.way/docs/java/base/base64",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/java/base/base64.md",version:"current",lastUpdatedAt:1616131278,formattedLastUpdatedAt:"3/19/2021",sidebar_label:"Base64\u7f16\u7801",sidebar:"java",previous:{title:"\u7b80\u4ecb",permalink:"/docs.advanced.way/docs/java/"},next:{title:"I/O",permalink:"/docs.advanced.way/docs/java/base/io"}},b=[{value:"Base64",id:"base64",children:[]},{value:"\u7d22\u5f15\u8868",id:"\u7d22\u5f15\u8868",children:[]},{value:"\u7f16\u7801\u6b65\u9aa4",id:"\u7f16\u7801\u6b65\u9aa4",children:[]}],i={toc:b};function u(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},i,o,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"base64"},"Base64"),Object(c.b)("p",null,"Base64 \u662f\u7f51\u7edc\u4e0a\u6700\u5e38\u89c1\u7684\u7528\u4e8e\u4f20\u8f93 8Bit \u5b57\u8282\u7801\u7684\u7f16\u7801\u65b9\u5f0f\u4e4b\u4e00\uff0cBase64\u5c31\u662f\u4e00\u79cd\u57fa\u4e8e64\u4e2a\u53ef\u6253\u5370\u5b57\u7b26\u6765\u8868\u793a\u4e8c\u8fdb\u5236\u6570\u636e\u7684\u65b9\u6cd5\u3002"),Object(c.b)("p",null,"Base64\u7f16\u7801\u53ef\u7528\u4e8e\u5728HTTP\u73af\u5883\u4e0b\u4f20\u9012\u8f83\u957f\u7684\u6807\u8bc6\u4fe1\u606f"),Object(c.b)("h3",{id:"\u7d22\u5f15\u8868"},"\u7d22\u5f15\u8868"),Object(c.b)("p",null,Object(c.b)("img",{src:n(435).default})),Object(c.b)("h3",{id:"\u7f16\u7801\u6b65\u9aa4"},"\u7f16\u7801\u6b65\u9aa4"),Object(c.b)("p",null,Object(c.b)("img",{src:n(436).default})),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7b2c\u4e00\u6b65")),Object(c.b)("p",null,"'M'\u3001'a'\u3001'n' \u5bf9\u5e94\u7684ASCII\u7801\u503c\u5206\u522b\u4e3a77\uff0c97\uff0c110\uff0c\u5bf9\u5e94\u7684\u4e8c\u8fdb\u5236\u503c\u662f01001101\u300101100001\u300101101110\u3002"),Object(c.b)("p",null,"\u5982\u56fe\u7b2c\u4e8c\u4e09\u884c\u6240\u793a\uff0c\u7531\u6b64\u7ec4\u6210\u4e00\u4e2a24\u4f4d\u7684\u4e8c\u8fdb\u5236\u5b57\u7b26\u4e32\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7b2c\u4e8c\u6b65")),Object(c.b)("p",null,"\u5982\u56fe\u7ea2\u8272\u6846\uff0c\u5c0624\u4f4d\u6bcf6\u4f4d\u4e8c\u8fdb\u5236\u4f4d\u4e00\u7ec4\u5206\u6210\u56db\u7ec4\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7b2c\u4e09\u6b65")),Object(c.b)("p",null,"\u5728\u4e0a\u9762\u6bcf\u4e00\u7ec4\u524d\u9762\u8865\u4e24\u4e2a0\uff0c\u6269\u5c55\u621032\u4e2a\u4e8c\u8fdb\u5236\u4f4d\uff0c\u6b64\u65f6\u53d8\u4e3a\u56db\u4e2a\u5b57\u8282\uff1a00010011\u300100010110\u300100000101\u300100101110\u3002"),Object(c.b)("p",null,"\u5206\u522b\u5bf9\u5e94\u7684\u503c\uff08Base64\u7f16\u7801\u7d22\u5f15\uff09\u4e3a\uff1a19\u300122\u30015\u300146\u3002"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"\u7b2c\u56db\u6b65")),Object(c.b)("p",null,"\u7528\u4e0a\u9762\u7684\u503c\u5728Base64\u7f16\u7801\u8868\u4e2d\u8fdb\u884c\u67e5\u627e\uff0c\u5206\u522b\u5bf9\u5e94\uff1aT\u3001W\u3001F\u3001u\u3002\u56e0\u6b64\u201cMan\u201dBase64\u7f16\u7801\u4e4b\u540e\u5c31\u53d8\u4e3a\uff1aTWFu\u3002"))}u.isMDXComponent=!0},269:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return f}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},d=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,i=b(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(o,".").concat(d)]||s[d]||p[d]||c;return n?r.a.createElement(f,l(l({ref:t},i),{},{components:n})):r.a.createElement(f,l({ref:t},i))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=d;var l={};for(var b in t)hasOwnProperty.call(t,b)&&(l[b]=t[b]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var i=2;i<c;i++)o[i]=n[i];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},435:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20180313122446386-8c630c442fedb38be6c88abc7af77ded.png"},436:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/20190517212249969-e1070a557f2552baec7b6b6b548f8958.jpg"}}]);