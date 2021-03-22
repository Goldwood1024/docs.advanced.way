(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{335:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return o})),r.d(t,"toc",(function(){return d})),r.d(t,"default",(function(){return u}));var n=r(3),c=r(7),a=(r(0),r(505)),i={title:"\u7f13\u5b58\u7b56\u7565"},o={unversionedId:"cache/cache/cache-strategies",id:"cache/cache/cache-strategies",isDocsHomePage:!1,title:"\u7f13\u5b58\u7b56\u7565",description:"FIFO",source:"@site/docs/cache/cache/cache-strategies.md",slug:"/cache/cache/cache-strategies",permalink:"/docs.advanced.way/docs/cache/cache/cache-strategies",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/cache/cache/cache-strategies.md",version:"current",lastUpdatedAt:1616396760,formattedLastUpdatedAt:"3/22/2021",sidebar:"cache",previous:{title:"README",permalink:"/docs.advanced.way/docs/cache/"},next:{title:"\u6982\u8ff0",permalink:"/docs.advanced.way/docs/cache/redis/\u6982\u8ff0"}},d=[{value:"FIFO",id:"fifo",children:[{value:"\u8bf4\u660e",id:"\u8bf4\u660e",children:[]},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",children:[]}]},{value:"LFU",id:"lfu",children:[]},{value:"LRU",id:"lru",children:[]},{value:"Timed",id:"timed",children:[]},{value:"Weak",id:"weak",children:[]}],l={toc:d};function u(e){var t=e.components,r=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"fifo"},"FIFO"),Object(a.b)("h3",{id:"\u8bf4\u660e"},"\u8bf4\u660e"),Object(a.b)("p",null,"FIFO(first in first out) \u5148\u8fdb\u5148\u51fa\u7b56\u7565\u3002"),Object(a.b)("p",null,"\u5143\u7d20\u4e0d\u505c\u7684\u52a0\u5165\u7f13\u5b58\u76f4\u5230\u7f13\u5b58\u6ee1\u4e3a\u6b62\uff0c\u5f53\u7f13\u5b58\u6ee1\u65f6\uff0c\u6e05\u7406\u8fc7\u671f\u7f13\u5b58\u5bf9\u8c61\uff0c\u6e05\u7406\u540e\u4f9d\u65e7\u6ee1\u5219\u5220\u9664\u5148\u5165\u7684\u7f13\u5b58\uff08\u94fe\u8868\u9996\u90e8\u5bf9\u8c61\uff09\u3002"),Object(a.b)("p",null,"\u4f18\u70b9\uff1a\u7b80\u5355\u5feb\u901f \u7f3a\u70b9\uff1a\u4e0d\u7075\u6d3b\uff0c\u4e0d\u80fd\u4fdd\u8bc1\u6700\u5e38\u7528\u7684\u5bf9\u8c61\u603b\u662f\u88ab\u4fdd\u7559"),Object(a.b)("h3",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),Object(a.b)("h2",{id:"lfu"},"LFU"),Object(a.b)("h2",{id:"lru"},"LRU"),Object(a.b)("h2",{id:"timed"},"Timed"),Object(a.b)("h2",{id:"weak"},"Weak"))}u.isMDXComponent=!0},505:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),c=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=c.a.createContext({}),u=function(e){var t=c.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=u(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},f=c.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),s=u(r),f=n,b=s["".concat(i,".").concat(f)]||s[f]||p[f]||a;return r?c.a.createElement(b,o(o({ref:t},l),{},{components:r})):c.a.createElement(b,o({ref:t},l))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=f;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=r[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);