(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5600],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return d},kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),k=u(n),s=a,v=k["".concat(c,".").concat(s)]||k[s]||p[s]||o;return n?r.createElement(v,l(l({ref:t},d),{},{components:n})):r.createElement(v,l({ref:t},d))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=k;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},46619:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return u},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=["components"],i={title:"\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b"},c={unversionedId:"java/jvm/\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b",id:"java/jvm/\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b",isDocsHomePage:!1,title:"\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b",description:"jvm\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",source:"@site/docs/java/jvm/\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b.md",sourceDirName:"java/jvm",slug:"/java/jvm/\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b",permalink:"/docs.advanced.way/docs/java/jvm/\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/java/jvm/\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b.md",version:"current",lastUpdatedAt:1622709462,formattedLastUpdatedAt:"6/3/2021",frontMatter:{title:"\u5bf9\u8c61\u521b\u5efa\u8fc7\u7a0b"},sidebar:"java",previous:{title:"\u9501",permalink:"/docs.advanced.way/docs/java/hc/\u9501"},next:{title:"\u5bf9\u8c61\u56de\u6536\u673a\u5236",permalink:"/docs.advanced.way/docs/java/jvm/\u5bf9\u8c61\u56de\u6536\u673a\u5236"}},u=[{value:"jvm\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",id:"jvm\u7c7b\u52a0\u8f7d\u8fc7\u7a0b",children:[{value:"\u52a0\u8f7d",id:"\u52a0\u8f7d",children:[]},{value:"\u9a8c\u8bc1",id:"\u9a8c\u8bc1",children:[]},{value:"\u51c6\u5907",id:"\u51c6\u5907",children:[]},{value:"\u89e3\u6790",id:"\u89e3\u6790",children:[]},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[]}]},{value:"\u7c7b\u52a0\u8f7d\u5668",id:"\u7c7b\u52a0\u8f7d\u5668",children:[{value:"\u91c7\u7528\u53cc\u4eb2\u59d4\u6d3e\u7684\u597d\u5904",id:"\u91c7\u7528\u53cc\u4eb2\u59d4\u6d3e\u7684\u597d\u5904",children:[]}]},{value:"jvm \u5bf9\u8c61\u5206\u914d\u5185\u5b58",id:"jvm-\u5bf9\u8c61\u5206\u914d\u5185\u5b58",children:[{value:"\u6307\u9488\u78b0\u649e\u65b9\u6cd5",id:"\u6307\u9488\u78b0\u649e\u65b9\u6cd5",children:[]},{value:"\u7a7a\u95f2\u5217\u8868\u65b9\u6cd5",id:"\u7a7a\u95f2\u5217\u8868\u65b9\u6cd5",children:[]}]},{value:"\u5bf9\u8c61\u7684\u5185\u5b58\u5e03\u5c40",id:"\u5bf9\u8c61\u7684\u5185\u5b58\u5e03\u5c40",children:[{value:"\u5bf9\u8c61\u5934",id:"\u5bf9\u8c61\u5934",children:[]},{value:"\u5bf9\u9f50\u586b\u5145\uff1a",id:"\u5bf9\u9f50\u586b\u5145\uff1a",children:[]},{value:"\u5bf9\u8c61\u7684\u8bbf\u95ee\u5b9a\u4f4d",id:"\u5bf9\u8c61\u7684\u8bbf\u95ee\u5b9a\u4f4d",children:[]}]},{value:"GC\u5206\u4ee3\u5e74\u9f84",id:"gc\u5206\u4ee3\u5e74\u9f84",children:[{value:"\u5806\u5212\u5206",id:"\u5806\u5212\u5206",children:[]},{value:"\u5bf9\u8c61\u5206\u914d\u89c4\u5219",id:"\u5bf9\u8c61\u5206\u914d\u89c4\u5219",children:[]},{value:"GC\u65e5\u5fd7",id:"gc\u65e5\u5fd7",children:[]},{value:"JDK8 \u53d8\u5316",id:"jdk8-\u53d8\u5316",children:[]}]}],d={toc:u};function p(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"jvm\u7c7b\u52a0\u8f7d\u8fc7\u7a0b"},"jvm\u7c7b\u52a0\u8f7d\u8fc7\u7a0b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"JVM\u628aclass\u6587\u4ef6\u52a0\u8f7d\u5230\u5185\u5b58\u91cc\u9762\uff0c\u5e76\u5bf9\u6570\u636e\u8fdb\u884c\u6821\u9a8c\u3001\u51c6\u5907\u3001\u89e3\u6790\u548c\u521d\u59cb\u5316\uff0c\u6700\u7ec8\u80fd\u591f\u88ab\u5f62\u6210\u88abJVM\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u7684Java\u7c7b\u578b\u7684\u8fc7\u7a0b\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(85266).Z})),(0,o.kt)("h3",{id:"\u52a0\u8f7d"},"\u52a0\u8f7d"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06class\u6587\u4ef6\u52a0\u8f7d\u5728\u5185\u5b58\u4e2d\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5c06\u9759\u6001\u6570\u636e\u7ed3\u6784(\u6570\u636e\u5b58\u5728\u4e8eclass\u6587\u4ef6\u7684\u7ed3\u6784)\u8f6c\u5316\u6210\u65b9\u6cd5\u533a\u4e2d\u8fd0\u884c\u65f6\u7684\u6570\u636e\u7ed3\u6784(\u6570\u636e\u5b58\u5728\u4e8eJVM\u65f6\u7684\u6570\u636e\u7ed3\u6784)\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5728\u5806\u4e2d\u751f\u6210\u4e00\u4e2a\u4ee3\u8868\u8fd9\u4e2a\u7c7b\u7684java.lang.Class\u5bf9\u8c61\uff0c\u4f5c\u4e3a\u6570\u636e\u8bbf\u95ee\u7684\u5165\u53e3\u3002  ")),(0,o.kt)("h3",{id:"\u9a8c\u8bc1"},"\u9a8c\u8bc1"),(0,o.kt)("p",null,"\u786e\u4fddClass\u6587\u4ef6\u7684\u5b57\u8282\u6d41\u4e2d\u5305\u542b\u7684\u4fe1\u606f\u662f\u5426\u7b26\u5408\u5f53\u524d\u865a\u62df\u673a\u7684\u8981\u6c42\uff0c\u5e76\u4e14\u4e0d\u4f1a\u5371\u5bb3\u865a\u62df\u673a\u81ea\u8eab\u7684\u5b89\u5168"),(0,o.kt)("h3",{id:"\u51c6\u5907"},"\u51c6\u5907"),(0,o.kt)("p",null,"\u4e3a\u7c7b\u53d8\u91cf\u5206\u914d\u5185\u5b58\u5e76\u8bbe\u7f6e\u7c7b\u53d8\u91cf\u7684\u521d\u59cb\u503c\u9636\u6bb5\uff0c\u5373\u5728\u65b9\u6cd5\u533a\u4e2d\u5206\u914d\u8fd9\u4e9b\u53d8\u91cf\u6240\u4f7f\u7528\u7684\u5185\u5b58\u7a7a\u95f4"),(0,o.kt)("h3",{id:"\u89e3\u6790"},"\u89e3\u6790"),(0,o.kt)("p",null,"\u6307\u865a\u62df\u673a\u5c06\u5e38\u91cf\u6c60\u4e2d\u7684\u7b26\u53f7\u5f15\u7528\u66ff\u6362\u4e3a\u76f4\u63a5\u5f15\u7528\u7684\u8fc7\u7a0b"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u7b26\u53f7\u5f15\u7528\u4e0e\u865a\u62df\u673a\u5b9e\u73b0\u7684\u5e03\u5c40\u65e0\u5173\uff0c\u5f15\u7528\u7684\u76ee\u6807\u5e76\u4e0d\u4e00\u5b9a\u8981\u5df2\u7ecf\u52a0\u8f7d\u5230\u5185\u5b58\u4e2d\u3002\u5404\u79cd\u865a\u62df\u673a\u5b9e\u73b0\u7684\u5185\u5b58\u5e03\u5c40\u53ef\u4ee5\u5404\u4e0d\u76f8\u540c\uff0c\u4f46\u662f\u5b83\u4eec\u80fd\u63a5\u53d7\u7684\u7b26\u53f7\u5f15\u7528\u5fc5\u987b\u662f\u4e00\u81f4\u7684\uff0c\u56e0\u4e3a\u7b26\u53f7\u5f15\u7528\u7684\u5b57\u9762\u91cf\u5f62\u5f0f\u660e\u786e\u5b9a\u4e49\u5728Java\u865a\u62df\u673a\u89c4\u8303\u7684Class\u6587\u4ef6\u683c\u5f0f\u4e2d\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76f4\u63a5\u5f15\u7528\u53ef\u4ee5\u662f\u6307\u5411\u76ee\u6807\u7684\u6307\u9488\uff0c\u76f8\u5bf9\u504f\u79fb\u91cf\u6216\u662f\u4e00\u4e2a\u80fd\u95f4\u63a5\u5b9a\u4f4d\u5230\u76ee\u6807\u7684\u53e5\u67c4\u3002\u5982\u679c\u6709\u4e86\u76f4\u63a5\u5f15\u7528\uff0c\u90a3\u5f15\u7528\u7684\u76ee\u6807\u5fc5\u5b9a\u5df2\u7ecf\u5728\u5185\u5b58\u4e2d\u5b58\u5728\u3002")),(0,o.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,o.kt)("p",null,"\u521d\u59cb\u5316\u9636\u6bb5\u662f\u7c7b\u52a0\u8f7d\u6700\u540e\u4e00\u4e2a\u9636\u6bb5\uff0c\u524d\u9762\u7684\u7c7b\u52a0\u8f7d\u9636\u6bb5\u4e4b\u540e\uff0c\u9664\u4e86\u5728\u52a0\u8f7d\u9636\u6bb5\u53ef\u4ee5\u81ea\u5b9a\u4e49\u7c7b\u52a0\u8f7d\u5668\u4ee5\u5916\uff0c\u5176\u5b83\u64cd\u4f5c\u90fd\u7531JVM\u4e3b\u5bfc\u3002\u5230\u4e86\u521d\u59cb\u9636\u6bb5\uff0c\u624d\u5f00\u59cb\u771f\u6b63\u6267\u884c\u7c7b\u4e2d\u5b9a\u4e49\u7684Java\u7a0b\u5e8f\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u6ce8\u610f\u4ee5\u4e0b\u51e0\u79cd\u60c5\u51b5\u4e0d\u4f1a\u6267\u884c\u7c7b\u521d\u59cb\u5316\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u5b50\u7c7b\u5f15\u7528\u7236\u7c7b\u7684\u9759\u6001\u5b57\u6bb5\uff0c\u53ea\u4f1a\u89e6\u53d1\u7236\u7c7b\u7684\u521d\u59cb\u5316\uff0c\u800c\u4e0d\u4f1a\u89e6\u53d1\u5b50\u7c7b\u7684\u521d\u59cb\u5316\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5b9a\u4e49\u5bf9\u8c61\u6570\u7ec4\uff0c\u4e0d\u4f1a\u89e6\u53d1\u8be5\u7c7b\u7684\u521d\u59cb\u5316\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5e38\u91cf\u5728\u7f16\u8bd1\u671f\u95f4\u4f1a\u5b58\u5165\u8c03\u7528\u7c7b\u7684\u5e38\u91cf\u6c60\u4e2d\uff0c\u672c\u8d28\u4e0a\u5e76\u6ca1\u6709\u76f4\u63a5\u5f15\u7528\u5b9a\u4e49\u5e38\u91cf\u7684\u7c7b\uff0c\u4e0d\u4f1a\u89e6\u53d1\u5b9a\u4e49\u5e38\u91cf\u6240\u5728\u7684\u7c7b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7\u7c7b\u540d\u83b7\u53d6Class\u5bf9\u8c61\uff0c\u4e0d\u4f1a\u89e6\u53d1\u7c7b\u7684\u521d\u59cb\u5316\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7Class.forName\u52a0\u8f7d\u6307\u5b9a\u7c7b\u65f6\uff0c\u5982\u679c\u6307\u5b9a\u53c2\u6570initialize\u4e3afalse\u65f6\uff0c\u4e5f\u4e0d\u4f1a\u89e6\u53d1\u7c7b\u521d\u59cb\u5316\uff0c\u5176\u5b9e\u8fd9\u4e2a\u53c2\u6570\u662f\u544a\u8bc9\u865a\u62df\u673a\uff0c\u662f\u5426\u8981\u5bf9\u7c7b\u8fdb\u884c\u521d\u59cb\u5316\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7ClassLoader\u9ed8\u8ba4\u7684loadClass\u65b9\u6cd5\uff0c\u4e5f\u4e0d\u4f1a\u89e6\u53d1\u521d\u59cb\u5316\u52a8\u4f5c\u3002")),(0,o.kt)("h2",{id:"\u7c7b\u52a0\u8f7d\u5668"},"\u7c7b\u52a0\u8f7d\u5668"),(0,o.kt)("p",null,"\u865a\u62df\u673a\u8bbe\u8ba1\u56e2\u961f\u628a\u52a0\u8f7d\u52a8\u4f5c\u653e\u5230JVM\u5916\u90e8\u5b9e\u73b0\uff0c\u4ee5\u4fbf\u8ba9\u5e94\u7528\u7a0b\u5e8f\u51b3\u5b9a\u5982\u4f55\u83b7\u53d6\u6240\u9700\u7684\u7c7b\uff0cJVM\u63d0\u4f9b\u4e863\u79cd\u7c7b\u52a0\u8f7d\u5668\uff1a  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668(Bootstrap ClassLoader)\uff1a\u8d1f\u8d23\u52a0\u8f7d JAVA_HOME\\lib \u76ee\u5f55\u4e2d\u7684\uff0c\u6216\u901a\u8fc7-Xbootclasspath\u53c2\u6570\u6307\u5b9a\u8def\u5f84\u4e2d\u7684\uff0c\u4e14\u88ab\u865a\u62df\u673a\u8ba4\u53ef\uff08\u6309\u6587\u4ef6\u540d\u8bc6\u522b\uff0c\u5982rt.jar\uff09\u7684\u7c7b\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u6269\u5c55\u7c7b\u52a0\u8f7d\u5668(Extension ClassLoader)\uff1a\u8d1f\u8d23\u52a0\u8f7d JAVA_HOME\\lib\\ext \u76ee\u5f55\u4e2d\u7684\uff0c\u6216\u901a\u8fc7java.ext.dirs\u7cfb\u7edf\u53d8\u91cf\u6307\u5b9a\u8def\u5f84\u4e2d\u7684\u7c7b\u5e93\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5e94\u7528\u7a0b\u5e8f\u7c7b\u52a0\u8f7d\u5668(Application ClassLoader)\uff1a\u8d1f\u8d23\u52a0\u8f7d\u7528\u6237\u8def\u5f84\uff08classpath\uff09\u4e0a\u7684\u7c7b\u5e93\u3002\nJVM\u901a\u8fc7\u53cc\u4eb2\u59d4\u6d3e\u6a21\u578b\u8fdb\u884c\u7c7b\u7684\u52a0\u8f7d\uff0c\u5f53\u7136\u6211\u4eec\u4e5f\u53ef\u4ee5\u901a\u8fc7\u7ee7\u627fjava.lang.ClassLoader\u5b9e\u73b0\u81ea\u5b9a\u4e49\u7684\u7c7b\u52a0\u8f7d\u5668\u3002\n",(0,o.kt)("img",{src:n(72685).Z}),(0,o.kt)("br",{parentName:"li"}),"\u5f53\u4e00\u4e2a\u7c7b\u52a0\u8f7d\u5668\u6536\u5230\u7c7b\u52a0\u8f7d\u4efb\u52a1\uff0c\u4f1a\u5148\u4ea4\u7ed9\u5176\u7236\u7c7b\u52a0\u8f7d\u5668\u53bb\u5b8c\u6210\uff0c\u56e0\u6b64\u6700\u7ec8\u52a0\u8f7d\u4efb\u52a1\u90fd\u4f1a\u4f20\u9012\u5230\u9876\u5c42\u7684\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\uff0c\u53ea\u6709\u5f53\u7236\u7c7b\u52a0\u8f7d\u5668\u65e0\u6cd5\u5b8c\u6210\u52a0\u8f7d\u4efb\u52a1\u65f6\uff0c\u624d\u4f1a\u5c1d\u8bd5\u6267\u884c\u52a0\u8f7d\u4efb\u52a1\u3002  ")),(0,o.kt)("h3",{id:"\u91c7\u7528\u53cc\u4eb2\u59d4\u6d3e\u7684\u597d\u5904"},"\u91c7\u7528\u53cc\u4eb2\u59d4\u6d3e\u7684\u597d\u5904"),(0,o.kt)("blockquote",null,(0,o.kt)("ol",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ol"},"\u91c7\u7528\u53cc\u4eb2\u59d4\u6d3e\u7684\u4e00\u4e2a\u597d\u5904\u662f\u6bd4\u5982\u52a0\u8f7d\u4f4d\u4e8ert.jar\u5305\u4e2d\u7684\u7c7bjava.lang.Object\uff0c\u4e0d\u7ba1\u662f\u54ea\u4e2a\u52a0\u8f7d\u5668\u52a0\u8f7d\u8fd9\u4e2a\u7c7b\uff0c\u6700\u7ec8\u90fd\u662f\u59d4\u6258\u7ed9\u9876\u5c42\u7684\u542f\u52a8\u7c7b\u52a0\u8f7d\u5668\u8fdb\u884c\u52a0\u8f7d\uff0c\u8fd9\u6837\u5c31\u4fdd\u8bc1\u4e86\u4f7f\u7528\u4e0d\u540c\u7684\u7c7b\u52a0\u8f7d\u5668\u6700\u7ec8\u5f97\u5230\u7684\u90fd\u662f\u540c\u6837\u4e00\u4e2aObject\u5bf9\u8c61\uff0c\u907f\u514d\u7c7b\u7684\u91cd\u590d\u52a0\u8f7d  "),(0,o.kt)("li",{parentName:"ol"},"\u9632\u6b62\u6838\u5fc3API\u5e93\u88ab\u968f\u610f\u7be1\u6539"))),(0,o.kt)("h2",{id:"jvm-\u5bf9\u8c61\u5206\u914d\u5185\u5b58"},"jvm \u5bf9\u8c61\u5206\u914d\u5185\u5b58"),(0,o.kt)("h3",{id:"\u6307\u9488\u78b0\u649e\u65b9\u6cd5"},"\u6307\u9488\u78b0\u649e\u65b9\u6cd5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u65b9\u6cd5\u662f\u5728java\u5806\u4e2d\uff0c\u5c06\u5df2\u7528\u5185\u5b58\u548c\u672a\u7528\u7684\u5185\u5b58\u5206\u5f00\u6210\u4e24\u90e8\u5206\uff0c\u4e24\u90e8\u5206\u5185\u5b58\u4e4b\u95f4\u653e\u8fd9\u4e00\u4e2a\u6307\u9488\u4f5c\u4e3a\u5206\u754c\u70b9\uff0c\u5f53\u6709\u65b0\u7684\u5b9e\u4f8b\u5bf9\u8c61\u9700\u8981\u5206\u914d\u5185\u5b58\u7a7a\u95f4\u65f6\uff0c\u6307\u9488\u5411\u672a\u7528\u5185\u5b58\u4e00\u4fa7\u79fb\u52a8\u76f8\u5e94\u5927\u5c0f\u7684\u8ddd\u79bb\uff0c\u5c06\u65b0\u7684\u5b9e\u4f8b\u5bf9\u8c61\u5b58\u50a8\u5728\u8be5\u5185\u5b58\u7a7a\u95f4\u4e0a\u3002\u8fd9\u79cd\u65b9\u5f0f\u9700\u8981\u5185\u5b58\u662f\u89c4\u6574\u7684\u3002")),(0,o.kt)("h3",{id:"\u7a7a\u95f2\u5217\u8868\u65b9\u6cd5"},"\u7a7a\u95f2\u5217\u8868\u65b9\u6cd5"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u79cd\u65b9\u6cd5\u5206\u914d\u7a7a\u95f4\u662f\u968f\u673a\uff0c\u6bcf\u6b21\u5206\u914d\u5185\u5b58\u7a7a\u95f4\u90fd\u662f\u4ece\u7a7a\u95f2\u7684\u5185\u5b58\u4e2d\u9009\u53d6\u4e00\u5757\u5206\u914d\u7ed9\u5b9e\u4f8b\u5bf9\u8c61\u3002\u90a3\u4e48\u5c31\u9700\u8981\u4e00\u4e2a\u5217\u8868\u6765\u5b58\u653e\u8fd9\u4e9b\u7a7a\u95f2\u7684\u5185\u5b58\u7a7a\u95f4\u5730\u5740\uff0c\u6bcf\u5f53\u6709\u5b9e\u4f8b\u5bf9\u8c61\u9700\u8981\u7a7a\u95f4\uff0c\u5c31\u4ece\u8fd9\u4e2a\u5217\u8868\u4e2d\u9009\u53d6\u51fa\u4e00\u5757\u5185\u5b58\u5206\u914d\u7ed9\u5b9e\u4f8b\u5bf9\u8c61\u3002\u8fd9\u79cd\u60c5\u51b5\u4e0b\u5185\u5b58\u662f\u4e0d\u89c4\u5219\u7684\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e24\u79cd\u65b9\u6cd5\u7684\u9009\u62e9\u53d6\u51b3\u4e8e\u5185\u5b58\u7684\u7ed3\u6784\u662f\u5426\u89c4\u6574\uff0c\u800c\u5185\u5b58\u7ed3\u6784\u662f\u5426\u89c4\u6574\u5219\u53d6\u51b3\u4e8e\u91c7\u7528\u7684\u5783\u573e\u56de\u6536\u5668\u662f\u5426\u5e26\u6709\u538b\u7f29\u6574\u7406\u529f\u80fd\u3002")),(0,o.kt)("p",null,"\u4f8b\u5982\uff1aSerial\u3001ParNew\u7b49\u5e26\u6709compact\u8fc7\u7a0b\u7684\u6536\u96c6\u5668\uff0c\u5c31\u662f\u5e26\u6709\u538b\u7f29\u6574\u7406\u529f\u80fd\u7684\nCMS\u8fd9\u79cd\u57fa\u4e8eMark\u2014Sweep\u7b97\u6cd5\u7684\u6536\u96c6\u5668\u5c31\u662f\u6ca1\u6709\u538b\u7f29\u6574\u7406\u529f\u80fd\u7684"),(0,o.kt)("h4",{id:"\u5904\u7406\u591a\u7ebf\u7a0b\u5185\u5b58\u8986\u76d6"},"\u5904\u7406\u591a\u7ebf\u7a0b\u5185\u5b58\u8986\u76d6"),(0,o.kt)("p",null,"\xa0\xa0\xa0\xa0\u6709\u4e9b\u65f6\u5019\uff0c\u521b\u5efa\u5bf9\u8c61\u64cd\u4f5c\u5f88\u9891\u7e41\uff0c\u8fd9\u6837\u5c31\u6709\u53ef\u80fd\u5bfc\u81f4\u6307\u9488\u521a\u521a\u5206\u914d\u597d\uff0c\u8fd8\u6ca1\u6765\u5f97\u53ca\u521b\u5efa\u5bf9\u8c61\uff0c\u5c31\u88ab\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u62a2\u5148\uff0c\u5148\u5360\u7528\u4e86\u6307\u9488\uff0c\u8fd9\u65f6\u5019\u5c31\u4f1a\u4ea7\u751f\u95ee\u9898\uff0c\u89e3\u51b3\u8fd9\u79cd\u95ee\u9898\u4e3b\u8981\u6709\u4e24\u79cd\u529e\u6cd5\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4e00\uff1a\u5bf9\u521b\u5efa\u5bf9\u8c61\u52a8\u4f5c\u884c\u4e3a\u8fdb\u884c\u540c\u6b65\u5904\u7406\uff0c\u8fd9\u79cd\u540c\u6b65\u5904\u7406\u5b9e\u8d28\u662fCAS\u914d\u4e0a\u5931\u8d25\u91cd\u8bd5\u7684\u65b9\u5f0f\u5b9e\u73b0\u4fdd\u8bc1\u66f4\u65b0\u64cd\u4f5c\u7684\u539f\u5b50\u6027\u7684\n\u4e8c\uff1a\u628a\u6bcf\u4e00\u4e2a\u521b\u5efa\u5bf9\u8c61\u7684\u52a8\u4f5c\u884c\u4e3a\u6309\u7167\u7ebf\u7a0b\u5212\u5206\u4e3a\u4e0d\u540c\u7684\u7a7a\u95f4\u4e2d\u8fdb\u884c\uff0c\u8fd9\u79cd\u65b9\u5f0f\u5c31\u662f\u5c06\u521b\u5efa\u5bf9\u8c61\u884c\u4e3a\u653e\u5165\u5230\u7ebf\u7a0b\u4e2d\uff0c\u4e3a\u6bcf\u4e00\u4e2a\u7ebf\u7a0b\u5206\u914d\u4e00\u5c0f\u5757\u5185\u5b58\u7a7a\u95f4\uff08TLAB\uff09\uff0c\u6bcf\u4e2a\u7ebf\u7a0b\u8981\u5206\u914d\u5185\u5b58\u5c31\u5728\u81ea\u5df1\u7684TLAB\u4e0a\u8fd0\u884c\u5206\u914d\uff0c\u53ea\u6709\u5f53TLAB\u6ee1\u4e86\uff0c\u9700\u8981\u91cd\u65b0\u5206\u914dTLAB\u65f6\uff0c\u624d\u9700\u8981\u8fdb\u884c\u540c\u6b65\u9501\u5b9a\u3002")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"TLAB\u65b9\u5f0f\u7684\u5f00\u542f\u9700\u8981\u901a\u8fc7-XX:+/-UseTLAB\u53c2\u6570\u8bbe\u5b9a\u3002")),(0,o.kt)("h2",{id:"\u5bf9\u8c61\u7684\u5185\u5b58\u5e03\u5c40"},"\u5bf9\u8c61\u7684\u5185\u5b58\u5e03\u5c40"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728HotSpot\u865a\u62df\u673a\u4e2d\uff0c\u5bf9\u8c61\u5728\u5185\u5b58\u4e2d\u5b58\u50a8\u7684\u5e03\u5c40\u53ef\u4ee5\u5206\u4e3a3\u5757\u533a\u57df\uff1a\u5bf9\u8c61\u5934(Header)\u3001\u5b9e\u4f8b\u6570\u636e(Instance Data)\u548c\u5bf9\u9f50\u586b\u5145(Padding)\u3002")),(0,o.kt)("h3",{id:"\u5bf9\u8c61\u5934"},"\u5bf9\u8c61\u5934"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"HotSpot\u865a\u62df\u673a\u7684\u5bf9\u8c61\u5934\u5305\u62ec\u4e24\u90e8\u5206\u4fe1\u606f\u3002  ")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e00\u90e8\u5206\u7528\u4e8e\u5b58\u50a8\u5bf9\u8c61\u81ea\u8eab\u7684\u8fd0\u884c\u65f6\u6570\u636e\uff0c\u5982\u54c8\u5e0c\u7801\uff08HashCode\uff09\u3001GC\u5206\u4ee3\u5e74\u9f84\u3001\u9501\u72b6\u6001\u6807\u5fd7\u3001\u7ebf\u7a0b\u6301\u6709\u7684\u9501\u3001\u504f\u5411\u7ebf\u7a0bID\u3001\u504f\u5411\u65f6\u95f4\u6233\u7b49\u3002\nHotSpot\u865a\u62df\u673a\u5bf9\u8c61\u5934Mark Word"),(0,o.kt)("li",{parentName:"ol"},"\u53e6\u5916\u4e00\u4e2a\u90e8\u5206\u662f\u7c7b\u578b\u6307\u9488\uff0c\u5373\u5bf9\u8c61\u6307\u5411\u5b83\u7684\u7c7b\u5143\u6570\u636e\u7684\u6307\u9488\uff0c\u865a\u62df\u673a\u901a\u8fc7\u8fd9\u4e2a\u6307\u9488\u6765\u786e\u5b9a\u8fd9\u4e2a\u5bf9\u8c61\u662f\u54ea\u4e2a\u7c7b\u7684\u5b9e\u4f8b\u3002\n\u5982\u679c\u5bf9\u8c61\u662f\u4e00\u4e2aJava\u6570\u7ec4\uff0c\u90a3\u5728\u5bf9\u8c61\u5934\u4e2d\u8fd8\u5fc5\u987b\u6709\u4e00\u5757\u7528\u4e8e\u8bb0\u5f55\u6570\u7ec4\u957f\u5ea6\u7684\u6570\u636e\uff0c\u56e0\u4e3a\u865a\u62df\u673a\u53ef\u4ee5\u901a\u8fc7\u666e\u901aJava\u5bf9\u8c61\u7684\u5143\u6570\u636e\u4fe1\u606f\u786e\u5b9aJava\u5bf9\u8c61\u7684\u5927\u5c0f\uff0c\u4f46\u662f\u4ece\u6570\u7ec4\u7684\u5143\u6570\u636e\u4e2d\u65e0\u6cd5\u786e\u5b9a\u6570\u7ec4\u7684\u5927\u5c0f\u3002\n(\u5e76\u4e0d\u662f\u6240\u6709\u7684\u865a\u62df\u673a\u5b9e\u73b0\u90fd\u5fc5\u987b\u5728\u5bf9\u8c61\u6570\u636e\u4e0a\u4fdd\u7559\u7c7b\u578b\u6307\u9488\uff0c\u6362\u53e5\u8bdd\u8bf4\uff0c\u67e5\u627e\u5bf9\u8c61\u7684\u5143\u6570\u636e\u5e76\u4e0d\u4e00\u5b9a\u8981\u7ecf\u8fc7\u5bf9\u8c61\u672c\u8eab\uff0c\u53ef\u53c2\u8003 \u4e09\u5bf9\u8c61\u7684\u8bbf\u95ee\u5b9a\u4f4d)",(0,o.kt)("br",{parentName:"li"}),"\u8fd9\u91cc\u662f\u56fe\u7247\u63cf\u8ff0")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(18861).Z})),(0,o.kt)("h4",{id:"\u5b9e\u4f8b\u6570\u636e\uff1a"},"\u5b9e\u4f8b\u6570\u636e\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5b9e\u4f8b\u6570\u636e\u90e8\u5206\u662f\u5bf9\u8c61\u771f\u6b63\u5b58\u50a8\u7684\u6709\u6548\u4fe1\u606f\uff0c\u4e5f\u662f\u5728\u7a0b\u5e8f\u4ee3\u7801\u4e2d\u6240\u5b9a\u4e49\u7684\u5404\u79cd\u7c7b\u578b\u7684\u5b57\u6bb5\u5185\u5bb9\u3002\u65e0\u8bba\u662f\u4ece\u7236\u7c7b\n\u4e2d\u7ee7\u627f\u4e0b\u6765\u7684\uff0c\u8fd8\u662f\u5728\u5b50\u7c7b\u4e2d\u5b9a\u4e49\u7684\uff0c\u90fd\u9700\u8981\u8bb0\u5f55\u4e0b\u6765\u3002\nHotSpot\u865a\u62df\u673a\u9ed8\u8ba4\u7684\u5206\u914d\u7b56\u7565\u4e3alongs/doubles\u3001ints\u3001shorts/chars\u3001bytes/booleans\u3001oop\uff0c\u4ece\u5206\u914d\u7b56\u7565\u4e2d\u53ef\u4ee5\u770b\u51fa\uff0c\u76f8\u540c\u5bbd\u5ea6\u7684\u5b57\u6bb5\u603b\u662f\u5206\u914d\u5230\u4e00\u8d77\u3002")),(0,o.kt)("h3",{id:"\u5bf9\u9f50\u586b\u5145\uff1a"},"\u5bf9\u9f50\u586b\u5145\uff1a"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5bf9\u9f50\u586b\u5145\u5e76\u4e0d\u662f\u5fc5\u7136\u5b58\u5728\u7684\uff0c\u4e5f\u6ca1\u6709\u7279\u5b9a\u7684\u542b\u4e49\uff0c\u4ec5\u4ec5\u8d77\u7740\u5360\u4f4d\u7b26\u7684\u4f5c\u7528\u3002\n\u7531\u4e8eHotSpot\u865a\u62df\u673a\u7684\u81ea\u52a8\u5185\u5b58\u7ba1\u7406\u7cfb\u7edf\u8981\u6c42\u5bf9\u8c61\u7684\u8d77\u59cb\u5730\u5740\u5fc5\u987b\u662f8\u5b57\u8282\u7684\u6574\u6570\u500d\uff0c\u4e5f\u5c31\u662f\u5bf9\u8c61\u7684\u5927\u5c0f\u5fc5\u987b\u662f8\u5b57\u8282\u7684\u6574\u6570\u500d\u3002\u800c\u5bf9\u8c61\u5934\u90e8\u5206\u6b63\u597d\u662f8\u5b57\u8282\u7684\u500d\u6570\uff081\u500d\u6216\u80052\u500d\uff09\uff0c\u56e0\u6b64\uff0c\u5f53\u5bf9\u8c61\u5b9e\u4f8b\u6570\u636e\u90e8\u5206\u6ca1\u6709\u5bf9\u9f50\u7684\u65f6\u5019\uff0c\u5c31\u9700\u8981\u901a\u8fc7\u5bf9\u9f50\u586b\u5145\u6765\u8865\u5168\u3002")),(0,o.kt)("h3",{id:"\u5bf9\u8c61\u7684\u8bbf\u95ee\u5b9a\u4f4d"},"\u5bf9\u8c61\u7684\u8bbf\u95ee\u5b9a\u4f4d"),(0,o.kt)("p",null,"\u5efa\u7acb\u5bf9\u8c61\u662f\u4e3a\u4e86\u4f7f\u7528\u5bf9\u8c61\uff0c\u6211\u4eec\u7684Java\u7a0b\u5e8f\u9700\u8981\u901a\u8fc7\u6808\u4e0a\u7684\u5f15\u7528\u6570\u636e\u6765\u64cd\u4f5c\u5806\u4e0a\u7684\u5177\u4f53\u5bf9\u8c61\u3002\n\u5bf9\u8c61\u7684\u8bbf\u95ee\u65b9\u5f0f\u53d6\u51b3\u4e8e\u865a\u62df\u673a\u5b9e\u73b0\uff0c\u76ee\u524d\u4e3b\u6d41\u7684\u8bbf\u95ee\u65b9\u5f0f\u6709\u4f7f\u7528\u53e5\u67c4\u548c\u76f4\u63a5\u6307\u9488\u4e24\u79cd\u3002"),(0,o.kt)("h4",{id:"\u4f7f\u7528\u53e5\u67c4"},"\u4f7f\u7528\u53e5\u67c4"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u53e5\u67c4\u7684\u8bdd\uff0c\u90a3\u4e48Java\u5806\u4e2d\u5c06\u4f1a\u5212\u5206\u51fa\u4e00\u5757\u5185\u5b58\u6765\u4f5c\u4e3a\u53e5\u67c4\u6c60\uff0c\u5f15\u7528\u4e2d\u5b58\u50a8\u7684\u5c31\u662f\u5bf9\u8c61\u7684\u53e5\u67c4\u5730\u5740\uff0c\u800c\u53e5\u67c4\u4e2d\u5305\u542b\u4e86\u5bf9\u8c61\u5b9e\u4f8b\u6570\u636e\u4e0e\u7c7b\u578b\u6570\u636e\u5404\u81ea\u7684\u5177\u4f53\u5730\u5740\u4fe1\u606f\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(58463).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f18\u52bf\uff1a\u5f15\u7528\u4e2d\u5b58\u50a8\u7684\u662f\u7a33\u5b9a\u7684\u53e5\u67c4\u5730\u5740\uff0c\u5728\u5bf9\u8c61\u88ab\u79fb\u52a8(\u5783\u573e\u6536\u96c6\u65f6\u79fb\u52a8\u5bf9\u8c61\u662f\u975e\u5e38\u666e\u904d\u7684\u884c\u4e3a)\u65f6\u53ea\u4f1a\u6539\u53d8\u53e5\u67c4\u4e2d\u7684\u5b9e\u4f8b\u6570\u636e\u6307\u9488\uff0c\u800c\u5f15\u7528\u672c\u8eab\u4e0d\u9700\u8981\u4fee\u6539\u3002")),(0,o.kt)("h4",{id:"\u76f4\u63a5\u6307\u9488"},"\u76f4\u63a5\u6307\u9488"),(0,o.kt)("p",null,"\u5982\u679c\u4f7f\u7528\u76f4\u63a5\u6307\u9488\u8bbf\u95ee\uff0c\u90a3\u4e48Java\u5806\u5bf9\u8c61\u7684\u5e03\u5c40\u4e2d\u5c31\u5fc5\u987b\u8003\u8651\u5982\u4f55\u653e\u7f6e\u8bbf\u95ee\u7c7b\u578b\u6570\u636e\u7684\u76f8\u5173\u4fe1\u606f\uff0c\u800c\u5f15\u7528\u4e2d\u5b58\u50a8\u7684\u76f4\u63a5\u5c31\u662f\u5bf9\u8c61\u5730\u5740\u3002\n",(0,o.kt)("img",{src:n(30731).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4f18\u52bf\uff1a\u901f\u5ea6\u66f4\u5feb\uff0c\u8282\u7701\u4e86\u4e00\u6b21\u6307\u9488\u5b9a\u4f4d\u7684\u65f6\u95f4\u5f00\u9500\u3002\u7531\u4e8e\u5bf9\u8c61\u7684\u8bbf\u95ee\u5728Java\u4e2d\u975e\u5e38\u9891\u7e41\uff0c\u56e0\u6b64\u8fd9\u7c7b\u5f00\u9500\u79ef\u5c11\u6210\u591a\u540e\u4e5f\u662f\u975e\u5e38\u53ef\u89c2\u7684\u6267\u884c\u6210\u672c\u3002\uff08\u4f8b\u5982HotSpot\uff09")),(0,o.kt)("h2",{id:"gc\u5206\u4ee3\u5e74\u9f84"},"GC\u5206\u4ee3\u5e74\u9f84"),(0,o.kt)("h3",{id:"\u5806\u5212\u5206"},"\u5806\u5212\u5206"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"Java \u4e2d\u7684\u5806\u662f JVM \u6240\u7ba1\u7406\u7684\u6700\u5927\u7684\u4e00\u5757\u5185\u5b58\u7a7a\u95f4\uff0c\u4e3b\u8981\u7528\u4e8e\u5b58\u653e\u5404\u79cd\u7c7b\u7684\u5b9e\u4f8b\u5bf9\u8c61\u3002\n\u5728 Java \u4e2d\uff0c\u5806\u88ab\u5212\u5206\u6210\u4e24\u4e2a\u4e0d\u540c\u7684\u533a\u57df\uff1a\u65b0\u751f\u4ee3 ( Young )\u3001\u8001\u5e74\u4ee3 ( Old )\u3002\u65b0\u751f\u4ee3 ( Young ) \u53c8\u88ab\u5212\u5206\u4e3a\u4e09\u4e2a\u533a\u57df\uff1aEden\u3001From Survivor\u3001To Survivor\u3002")),(0,o.kt)("p",null,"\u5806\u5927\u5c0f = \u65b0\u751f\u4ee3 + \u8001\u5e74\u4ee3,\u5806\u7684\u5927\u5c0f\u53ef\u4ee5\u901a\u8fc7\u53c2\u6570 \u2013Xms\u3001-Xmx \u6765\u6307\u5b9a"),(0,o.kt)("p",null,"\u9ed8\u8ba4\u7684\uff0cEdem : from : to = 8 : 1 : 1 ( \u53ef\u4ee5\u901a\u8fc7\u53c2\u6570 \u2013XX:SurvivorRatio \u6765\u8bbe\u5b9a )\uff0c\u5373\uff1a Eden = 8/10 \u7684\u65b0\u751f\u4ee3\u7a7a\u95f4\u5927\u5c0f\uff0cfrom = to = 1/10 \u7684\u65b0\u751f\u4ee3\u7a7a\u95f4\u5927\u5c0f\u3002\nJVM \u6bcf\u6b21\u53ea\u4f1a\u4f7f\u7528 Eden \u548c\u5176\u4e2d\u7684\u4e00\u5757 Survivor \u533a\u57df\u6765\u4e3a\u5bf9\u8c61\u670d\u52a1\uff0c\u6240\u4ee5\u65e0\u8bba\u4ec0\u4e48\u65f6\u5019\uff0c\u603b\u662f\u6709\u4e00\u5757 Survivor \u533a\u57df\u662f\u7a7a\u95f2\u7740\u7684\u3002\n\u56e0\u6b64\uff0c\u65b0\u751f\u4ee3\u5b9e\u9645\u53ef\u7528\u7684\u5185\u5b58\u7a7a\u95f4\u4e3a 9/10 ( \u537390% )\u7684\u65b0\u751f\u4ee3\u7a7a\u95f4"),(0,o.kt)("p",null,"Java \u4e2d\u7684\u5806\u4e5f\u662f GC \u6536\u96c6\u5783\u573e\u7684\u4e3b\u8981\u533a\u57df\u3002GC \u5206\u4e3a\u4e24\u79cd\uff1aMinor GC\u3001Full GC ( \u6216\u79f0\u4e3a Major GC )\u3002"),(0,o.kt)("h3",{id:"\u5bf9\u8c61\u5206\u914d\u89c4\u5219"},"\u5bf9\u8c61\u5206\u914d\u89c4\u5219"),(0,o.kt)("p",null,"\u5bf9\u8c61\u4f18\u5148\u5206\u914d\u5728Eden\u533a\uff0c\u5982\u679cEden\u533a\u6ca1\u6709\u8db3\u591f\u7684\u7a7a\u95f4\u65f6\uff0c\u865a\u62df\u673a\u6267\u884c\u4e00\u6b21Minor GC\u3002  "),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u5927\u5bf9\u8c61\u76f4\u63a5\u8fdb\u5165\u8001\u5e74\u4ee3\uff08\u5927\u5bf9\u8c61\u662f\u6307\u9700\u8981\u5927\u91cf\u8fde\u7eed\u5185\u5b58\u7a7a\u95f4\u7684\u5bf9\u8c61\uff09",(0,o.kt)("br",{parentName:"p"}),"\n","\u8fd9\u6837\u505a\u7684\u76ee\u7684\u662f\u907f\u514d\u5728Eden\u533a\u548c\u4e24\u4e2aSurvivor\u533a\u4e4b\u95f4\u53d1\u751f\u5927\u91cf\u7684\u5185\u5b58\u62f7\u8d1d\uff08\u65b0\u751f\u4ee3\u91c7\u7528\u590d\u5236\u7b97\u6cd5\u6536\u96c6\u5185\u5b58\uff09\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u957f\u671f\u5b58\u6d3b\u7684\u5bf9\u8c61\u8fdb\u5165\u8001\u5e74\u4ee3",(0,o.kt)("br",{parentName:"p"}),"\n","\u865a\u62df\u673a\u4e3a\u6bcf\u4e2a\u5bf9\u8c61\u5b9a\u4e49\u4e86\u4e00\u4e2a\u5e74\u9f84\u8ba1\u6570\u5668\uff0c\u5982\u679c\u5bf9\u8c61\u7ecf\u8fc7\u4e861\u6b21Minor GC\u90a3\u4e48\u5bf9\u8c61\u4f1a\u8fdb\u5165Survivor\u533a\uff0c\u4e4b\u540e\u6bcf\u7ecf\u8fc7\u4e00\u6b21Minor GC\u90a3\u4e48\u5bf9\u8c61\u7684\u5e74\u9f84\u52a01\uff0c\u77e5\u9053\u8fbe\u5230\u9600\u503c\uff08\u9ed8\u8ba415\uff09\u5bf9\u8c61\u8fdb\u5165\u8001\u5e74\u533a\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u52a8\u6001\u5224\u65ad\u5bf9\u8c61\u7684\u5e74\u9f84\n\u5982\u679cSurvivor\u533a\u4e2d\u76f8\u540c\u5e74\u9f84\u7684\u6240\u6709\u5bf9\u8c61\u5927\u5c0f\u7684\u603b\u548c\u5927\u4e8eSurvivor\u7a7a\u95f4\u7684\u4e00\u534a\uff0c\u5e74\u9f84\u5927\u4e8e\u6216\u7b49\u4e8e\u8be5\u5e74\u9f84\u7684\u5bf9\u8c61\u53ef\u4ee5\u76f4\u63a5\u8fdb\u5165\u8001\u5e74\u4ee3\u3002")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},"\u7a7a\u95f4\u5206\u914d\u62c5\u4fdd",(0,o.kt)("br",{parentName:"p"}),"\n","\u6bcf\u6b21\u8fdb\u884cMinor GC\u65f6\uff0cJVM\u4f1a\u8ba1\u7b97Survivor\u533a\u79fb\u81f3\u8001\u5e74\u533a\u7684\u5bf9\u8c61\u7684\u5e73\u5747\u5927\u5c0f\uff0c\u5982\u679c\u8fd9\u4e2a\u503c\u5927\u4e8e\u8001\u5e74\u533a\u7684\u5269\u4f59\u503c\u5927\u5c0f\u5219\u8fdb\u884c\u4e00\u6b21Full GC\uff0c\u5982\u679c\u5c0f\u4e8e\u68c0\u67e5HandlePromotionFailure\u8bbe\u7f6e\uff0c\u5982\u679ctrue\u5219\u53ea\u8fdb\u884cMonitor GC,\u5982\u679cfalse\u5219\u8fdb\u884cFull GC\u3002"))),(0,o.kt)("h3",{id:"gc\u65e5\u5fd7"},"GC\u65e5\u5fd7"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8bbe\u7f6e JVM \u53c2\u6570\u4e3a -XX:+PrintGCDetails\uff0c\u4f7f\u5f97\u63a7\u5236\u53f0\u80fd\u591f\u663e\u793a GC \u76f8\u5173\u7684\u65e5\u5fd7\u4fe1\u606f\uff0c\u6267\u884c\u4e0a\u9762\u4ee3\u7801\uff0c\u4e0b\u9762\u662f\u5176\u4e2d\u4e00\u6b21\u6267\u884c\u7684\u7ed3\u679c  ")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(79313).Z}),"\n",(0,o.kt)("img",{src:n(81358).Z})),(0,o.kt)("h3",{id:"jdk8-\u53d8\u5316"},"JDK8 \u53d8\u5316"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd0\u884c\u65f6\u6570\u636e\u533a\u628a\u65b9\u6cd5\u533a\u79fb\u9664\u4e86\uff0c\u53d8\u6210\u4e86\u5143\u6570\u636e\u533a")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(89374).Z})),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5728jdk1.8\u4e4b\u524d\u7684\u7248\u672c\uff0c\u6211\u4eec\u901a\u5e38\u628a\u5806\u5206\u4e3a\u65b0\u751f\u4ee3\uff0c\u8001\u5e74\u4ee3\u548c\u6c38\u4e45\u4ee3\uff08\u65b9\u6cd5\u533a\uff09\uff08\u6211\u4eec\u901a\u5e38\u8ba4\u4e3a\u65b9\u6cd5\u533a\u4e5f\u662f\u5c5e\u4e8e\u5806\u7684\uff09\uff0c\u65b0\u751f\u4ee3\u53c8\u5305\u542b\u4e86eden\uff0cfrom\u548cto\uff08survivor\uff09\uff0c\u5f53\u5bf9\u8c61\u5b58\u6d3b\u4e86\u8d85\u8fc7\u4e24\u4e2asurvivor\u7684\u65f6\u5019\uff08\u5728To\u91cc\u9762\u901a\u5e38\u7531\u4e2a\u5e74\u9f84\u9608\u503c\u4f5c\u4e3a\u664b\u5347\u5224\u65ad\uff09\u4f1a\u88ab\u8f6c\u79fb\u5230\u8001\u5e74\u4ee3\u4e2d\uff0c\u8fd9\u65f6\u5019\u8fd9\u4e2a\u5bf9\u8c61\u7684\u6570\u636e\u5c31\u4f1a\u5b58\u50a8\u5728\u65b9\u6cd5\u533a\u5185\uff08GC\u5728\u65b9\u6cd5\u533a\u7684\u6536\u76ca\u751a\u5fae\uff09\uff0c\u5f53\u8fd9\u8fb9\u7684\u5185\u5b58\u4e0d\u591f\u65f6\u5c31\u4f1a\u62a5OOMError\uff1aPermGen\uff0c\u8fd9\u65f6\u5019\u5c31\u53ef\u80fd\u4f1a\u53d1\u751f\u5185\u5b58\u6cc4\u9732\u95ee\u9898\u3002\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0cjdk1.8\u5b8c\u5168\u628a\u5b58\u653e\u5143\u6570\u636e\u7684\u6c38\u4e45\u5185\u5b58\u4ece\u5806\u5185\u5b58\u8f6c\u5230\u4e86\u672c\u5730\u5185\u5b58\u3002")))}p.isMDXComponent=!0},79313:function(e,t,n){"use strict";t.Z=n.p+"assets/images/061921087506978-01d6f210b9a13a55cc271cab7d6736b1.png"},81358:function(e,t,n){"use strict";t.Z=n.p+"assets/images/061921131109245-70a6c3cf8f73f5d2437d2edd4e8af19e.png"},18861:function(e,t,n){"use strict";t.Z=n.p+"assets/images/20160307152819352-937f9fa1631cdd8e28dbffbe9d73f372.png"},58463:function(e,t,n){"use strict";t.Z=n.p+"assets/images/20160307152925478-7d2f2de616638863cd500f7b4e44c443.jpeg"},30731:function(e,t,n){"use strict";t.Z=n.p+"assets/images/20160307153017345-7fcf8e3cf10c44d953e0f5f7406b6451.jpeg"},89374:function(e,t){"use strict";t.Z="data:image/png;base64,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"},85266:function(e,t,n){"use strict";t.Z=n.p+"assets/images/2fb054008ca2898e0a17f7d79ce525a1-dbcd675bde13ae61c10cd301878c191f.png"},72685:function(e,t,n){"use strict";t.Z=n.p+"assets/images/d330251551f6de988239494ce2773095-044dc92300732f9c8eb4ee2ca83c811d.png"}}]);