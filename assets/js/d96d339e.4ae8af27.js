(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[4260],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),l=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=l(n),f=o,y=d["".concat(c,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(y,u(u({ref:t},s),{},{components:n})):r.createElement(y,u({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,u=new Array(i);u[0]=d;var a={};for(var c in t)hasOwnProperty.call(t,c)&&(a[c]=t[c]);a.originalType=e,a.mdxType="string"==typeof e?e:o,u[1]=a;for(var l=2;l<i;l++)u[l]=n[l];return r.createElement.apply(null,u)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},63914:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),u=["components"],a={title:"Linux",slug:"/linux/"},c={unversionedId:"zoology/os/linux/README",id:"zoology/os/linux/README",isDocsHomePage:!1,title:"Linux",description:"Linux",source:"@site/docs/zoology/os/linux/README.md",sourceDirName:"zoology/os/linux",slug:"/linux/",permalink:"/docs.advanced.way/docs/linux/",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/zoology/os/linux/README.md",version:"current",lastUpdatedAt:1625551523,formattedLastUpdatedAt:"7/6/2021",frontMatter:{title:"Linux",slug:"/linux/"},sidebar:"os",previous:{title:"HTTP",permalink:"/docs.advanced.way/docs/zoology/os/network/http"},next:{title:"\u5e38\u7528\u547d\u4ee4",permalink:"/docs.advanced.way/docs/zoology/os/linux/command/\u5e38\u7528\u547d\u4ee4"}},l=[{value:"Linux",id:"linux",children:[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]}]}],s={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,u);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"linux"},"Linux"),(0,i.kt)("h3",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,i.kt)("p",null,"Linux\u5185\u6838\u6700\u521d\u53ea\u662f\u7531\u82ac\u5170\u4eba\u674e\u7eb3\u65af\xb7\u6258\u74e6\u5179\uff08Linus Torvalds\uff09\u5728\u8d6b\u5c14\u8f9b\u57fa\u5927\u5b66\u4e0a\u5b66\u65f6\u51fa\u4e8e\u4e2a\u4eba\u7231\u597d\u800c\u7f16\u5199\u7684\u3002\nLinux\u662f\u4e00\u5957\u514d\u8d39\u4f7f\u7528\u548c\u81ea\u7531\u4f20\u64ad\u7684\u7c7bUnix\u64cd\u4f5c\u7cfb\u7edf\uff0c\u662f\u4e00\u4e2a\u57fa\u4e8ePOSIX\u548cUNIX\u7684\u591a\u7528\u6237\u3001\u591a\u4efb\u52a1\u3001\u652f\u6301\u591a\u7ebf\u7a0b\u548c\u591aCPU\u7684\u64cd\u4f5c\u7cfb\u7edf\u3002\nLinux\u7684\u53d1\u884c\u7248\u8bf4\u7b80\u5355\u70b9\u5c31\u662f\u5c06Linux\u5185\u6838\u4e0e\u5e94\u7528\u8f6f\u4ef6\u505a\u4e00\u4e2a\u6253\u5305\u3002"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"\u76ee\u524d\u5e02\u9762\u4e0a\u8f83\u77e5\u540d\u7684\u53d1\u884c\u7248\u6709\uff1aUbuntu\u3001RedHat\u3001CentOS\u3001Debian\u3001Fedora\u3001SuSE\u3001OpenSUSE\u3001Arch Linux\u3001SolusOS \u7b49")))}p.isMDXComponent=!0}}]);