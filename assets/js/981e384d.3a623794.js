(window.webpackJsonp=window.webpackJsonp||[]).push([[119],{190:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return b})),n.d(t,"default",(function(){return d}));var r=n(3),a=n(7),c=(n(0),n(270)),l={title:"\u6301\u4e45\u5316"},i={unversionedId:"cache/redis/\u6301\u4e45\u5316",id:"cache/redis/\u6301\u4e45\u5316",isDocsHomePage:!1,title:"\u6301\u4e45\u5316",description:"RDB",source:"@site/docs/cache/redis/\u6301\u4e45\u5316.md",slug:"/cache/redis/\u6301\u4e45\u5316",permalink:"/docs.advanced.way/docs/cache/redis/\u6301\u4e45\u5316",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/cache/redis/\u6301\u4e45\u5316.md",version:"current",lastUpdatedAt:1616148576,formattedLastUpdatedAt:"3/19/2021",sidebar:"cache",previous:{title:"\u6570\u636e\u7ed3\u6784",permalink:"/docs.advanced.way/docs/cache/redis/\u6570\u636e\u7ed3\u6784"},next:{title:"\u590d\u5236",permalink:"/docs.advanced.way/docs/cache/redis/\u590d\u5236"}},b=[{value:"RDB",id:"rdb",children:[{value:"\u89e6\u53d1\u673a\u5236",id:"\u89e6\u53d1\u673a\u5236",children:[]},{value:"\u6267\u884c\u6d41\u7a0b",id:"\u6267\u884c\u6d41\u7a0b",children:[]},{value:"\u4f18\u52a3",id:"\u4f18\u52a3",children:[]}]},{value:"AOF",id:"aof",children:[{value:"\u547d\u4ee4\u5199\u5165",id:"\u547d\u4ee4\u5199\u5165",children:[]},{value:"\u6587\u4ef6\u540c\u6b65",id:"\u6587\u4ef6\u540c\u6b65",children:[]},{value:"\u91cd\u5199\u673a\u5236",id:"\u91cd\u5199\u673a\u5236",children:[]},{value:"\u91cd\u542f\u52a0\u8f7d",id:"\u91cd\u542f\u52a0\u8f7d",children:[]}]},{value:"\u6df7\u5408\u6301\u4e45\u5316",id:"\u6df7\u5408\u6301\u4e45\u5316",children:[]}],o={toc:b};function d(e){var t=e.components,l=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},o,l,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"rdb"},"RDB"),Object(c.b)("p",null,"\u5c06\u5f53\u524d\u6570\u636e\u751f\u6210\u5feb\u7167\u4fdd\u5b58\u5230\u786c\u76d8\u7684\u8fc7\u7a0b\uff0c\u5206\u4e3a\u624b\u52a8\u89e6\u53d1\u548c\u81ea\u52a8\u89e6\u53d1"),Object(c.b)("h3",{id:"\u89e6\u53d1\u673a\u5236"},"\u89e6\u53d1\u673a\u5236"),Object(c.b)("h4",{id:"\u624b\u52a8"},"\u624b\u52a8"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"save: \u963b\u585e\u5f53\u524d\u670d\u52a1\u5668")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"bgsave: fork\u5b50\u8fdb\u7a0b"))),Object(c.b)("h4",{id:"\u81ea\u52a8\u89e6\u53d1"},"\u81ea\u52a8\u89e6\u53d1"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-shell"},"save m n # \u8868\u793am\u79d2\u5185\u5b58\u5728n\u6b21\u4fee\u6539\n")),Object(c.b)("h3",{id:"\u6267\u884c\u6d41\u7a0b"},"\u6267\u884c\u6d41\u7a0b"),Object(c.b)("p",null,Object(c.b)("img",{src:n(458).default})),Object(c.b)("h3",{id:"\u4f18\u52a3"},"\u4f18\u52a3"),Object(c.b)("h4",{id:"\u4f18\u70b9"},"\u4f18\u70b9"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"RDB\u6587\u4ef6\u7d27\u51d1\uff0c\u5168\u91cf\u5907\u4efd\uff0c\u975e\u5e38\u9002\u5408\u7528\u4e8e\u8fdb\u884c\u5907\u4efd\u548c\u707e\u96be\u6062\u590d\u3002"),Object(c.b)("li",{parentName:"ul"},"\u751f\u6210RDB\u6587\u4ef6\u7684\u65f6\u5019\uff0credis\u4e3b\u8fdb\u7a0b\u4f1afork()\u4e00\u4e2a\u5b50\u8fdb\u7a0b\u6765\u5904\u7406\u6240\u6709\u4fdd\u5b58\u5de5\u4f5c\uff0c\u4e3b\u8fdb\u7a0b\u4e0d\u9700\u8981\u8fdb\u884c\u4efb\u4f55\u78c1\u76d8IO\u64cd\u4f5c\u3002"),Object(c.b)("li",{parentName:"ul"},"RDB \u5728\u6062\u590d\u5927\u6570\u636e\u96c6\u65f6\u7684\u901f\u5ea6\u6bd4 AOF \u7684\u6062\u590d\u901f\u5ea6\u8981\u5feb")),Object(c.b)("h4",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9"),Object(c.b)("h2",{id:"aof"},"AOF"),Object(c.b)("p",null,"AOF(append only file),\u4ee5\u72ec\u7acb\u65e5\u5fd7\u7684\u65b9\u5f0f\u8bb0\u5f55\u6bcf\u6b21\u5199\u547d\u4ee4"),Object(c.b)("h3",{id:"\u547d\u4ee4\u5199\u5165"},"\u547d\u4ee4\u5199\u5165"),Object(c.b)("p",null,"\u4ee5\u6587\u672c\u534f\u8bae\u683c\u5f0f\u5199\u5165\u6587\u4ef6\uff0c\u6240\u6709\u7684\u5199\u547d\u4ee4\u4f1a\u8ffd\u52a0\u5230 ",Object(c.b)("inlineCode",{parentName:"p"},"aof_buf")," \u4e2d"),Object(c.b)("h3",{id:"\u6587\u4ef6\u540c\u6b65"},"\u6587\u4ef6\u540c\u6b65"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"appendfsync always\u3002\u6bcf\u6b21\u6709\u65b0\u547d\u4ee4\u8ffd\u52a0\u5230 AOF \u6587\u4ef6\u65f6\u5c31\u6267\u884c\u4e00\u6b21 fsync \uff1a\u975e\u5e38\u6162\uff0c\u4e5f\u975e\u5e38\u5b89\u5168\u3002"),Object(c.b)("li",{parentName:"ul"},"appendfsync everysec\u3002\u6bcf\u79d2 fsync \u4e00\u6b21\uff1a\u8db3\u591f\u5feb\uff08\u548c\u4f7f\u7528 RDB \u6301\u4e45\u5316\u5dee\u4e0d\u591a\uff09\uff0c\u5e76\u4e14\u5728\u6545\u969c\u65f6\u53ea\u4f1a\u4e22\u5931 1 \u79d2\u949f\u7684\u6570\u636e\u3002"),Object(c.b)("li",{parentName:"ul"},"appendfsync no\u3002\u4ece\u4e0d fsync \uff1a\u5c06\u6570\u636e\u4ea4\u7ed9\u64cd\u4f5c\u7cfb\u7edf\u6765\u5904\u7406\u3002\u66f4\u5feb\uff0c\u4e5f\u66f4\u4e0d\u5b89\u5168\u7684\u9009\u62e9")),Object(c.b)("h3",{id:"\u91cd\u5199\u673a\u5236"},"\u91cd\u5199\u673a\u5236"),Object(c.b)("p",null,"\u4f7f\u7528\u91cd\u5199\u673a\u5236\u6765\u538b\u7f29\u6587\u4ef6\u4f53\u79ef\uff0c\u5c06\u8fdb\u7a0b\u5185\u7684\u6570\u636e\u8f6c\u5316\u6210\u5199\u547d\u4ee4\u540c\u6b65\u5230\u65b0\u7684AOF\u6587\u4ef6\u91cc"),Object(c.b)("p",null,Object(c.b)("img",{src:n(459).default})),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u6267\u884c\u91cd\u5199\u8bf7\u6c42"),Object(c.b)("li",{parentName:"ol"},"\u7236\u8fdb\u7a0bfork\u5b50\u8fdb\u7a0b",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u4e3b\u8fdb\u7a0b\u7ee7\u7eed\u54cd\u5e94\u547d\u4ee4\uff0c\u6240\u6709\u7684\u547d\u4ee4\u4f9d\u7136\u5199\u5165aof\u7f13\u5b58\u533a"),Object(c.b)("li",{parentName:"ul"},"\u4f7f\u7528aof_rewrite_buf\uff08aof\u91cd\u5199\u7f13\u51b2\u533a\uff09\u4fdd\u5b58\u65b0\u7684\u6570\u636e"))),Object(c.b)("li",{parentName:"ol"},"\u5b50\u8fdb\u7a0b\u6309\u7167\u547d\u4ee4\u5408\u5e76\u89c4\u5219\u5199\u5165\u65b0\u7684AOF\u6587\u4ef6"),Object(c.b)("li",{parentName:"ol"},"\u5b50\u8fdb\u7a0b\u5b8c\u6210AOF",Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"\u5b50\u8fdb\u7a0b\u5b8c\u6210\u540e\u53d1\u9001\u4fe1\u53f7\u7ed9\u8fdb\u7a0b\uff0c\u7236\u8fdb\u7a0b\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f"),Object(c.b)("li",{parentName:"ul"},"\u7236\u8fdb\u7a0b\u628aAOF\u91cd\u5199\u7f13\u51b2\u533a\u7684\u6570\u636e\u5199\u5165\u5230\u65b0\u7684AOF\u6587\u4ef6"))),Object(c.b)("li",{parentName:"ol"},"\u65b0\u6587\u4ef6\u66ff\u4ee3\u65e7\u7684\u6587\u4ef6")),Object(c.b)("h3",{id:"\u91cd\u542f\u52a0\u8f7d"},"\u91cd\u542f\u52a0\u8f7d"),Object(c.b)("h2",{id:"\u6df7\u5408\u6301\u4e45\u5316"},"\u6df7\u5408\u6301\u4e45\u5316"),Object(c.b)("p",null,"\u5b50\u8fdb\u7a0b\u5148\u5c06\u5171\u4eab\u7684\u5185\u5b58\u526f\u672c\u5168\u91cf\u7684\u4ee5RDB\u65b9\u5f0f\u5199\u5165aof\u6587\u4ef6\uff0c\u7136\u540e\u5728\u5c06 ",Object(c.b)("inlineCode",{parentName:"p"},"aof_rewrite_buf")," \u91cd\u5199\u7f13\u51b2\u533a\u7684\u589e\u91cf\u547d\u4ee4\u4ee5AOF\u65b9\u5f0f\u5199\u5165\u5230\u6587\u4ef6\uff0c\n\u5199\u5165\u5b8c\u6210\u540e\u901a\u77e5\u4e3b\u8fdb\u7a0b\u66f4\u65b0\u7edf\u8ba1\u4fe1\u606f\uff0c\u5e76\u5c06\u65b0\u7684\u542b\u6709RDB\u683c\u5f0f\u548cAOF\u683c\u5f0f\u7684AOF\u6587\u4ef6\u66ff\u6362\u65e7\u7684\u7684AOF\u6587\u4ef6"))}d.isMDXComponent=!0},270:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return s}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=a.a.createContext({}),d=function(e){var t=a.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=d(e.components);return a.a.createElement(o.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},O=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),u=d(n),O=r,s=u["".concat(l,".").concat(O)]||u[O]||p[O]||c;return n?a.a.createElement(s,i(i({ref:t},o),{},{components:n})):a.a.createElement(s,i({ref:t},o))}));function s(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,l=new Array(c);l[0]=O;var i={};for(var b in t)hasOwnProperty.call(t,b)&&(i[b]=t[b]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var o=2;o<c;o++)l[o]=n[o];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},458:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/023b5bb5c9ea15cefb035bc8431132f53b87b21e-85e2312e625cd500fe19d24d611e4968.jpg"},459:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/1414690-20200412193117336-1589482807-07dcdb9b52da4aa492ced6c5d9f7e733.png"}}]);