(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8974],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return p}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=s(r),p=a,f=m["".concat(c,".").concat(p)]||m[p]||d[p]||o;return r?n.createElement(f,l(l({ref:t},u),{},{components:r})):n.createElement(f,l({ref:t},u))}));function p(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},70810:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var n=r(22122),a=r(19756),o=(r(67294),r(3905)),l=["components"],i={title:"JMS API",slug:"/mq/"},c={unversionedId:"zoology/middleware/mq/jms/jms",id:"zoology/middleware/mq/jms/jms",isDocsHomePage:!1,title:"JMS API",description:"\u7b80\u4ecb",source:"@site/docs/zoology/middleware/mq/jms/jms.md",sourceDirName:"zoology/middleware/mq/jms",slug:"/mq/",permalink:"/docs.advanced.way/docs/mq/",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/zoology/middleware/mq/jms/jms.md",version:"current",lastUpdatedAt:1622709462,formattedLastUpdatedAt:"6/3/2021",frontMatter:{title:"JMS API",slug:"/mq/"},sidebar:"distributed",previous:{title:"\u4ecb\u7ecd",permalink:"/docs.advanced.way/docs/zoology/middleware/tranctional/seata/\u4ecb\u7ecd"},next:{title:"\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b",permalink:"/docs.advanced.way/docs/zoology/middleware/mq/jms/\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b"}},s=[{value:"\u7b80\u4ecb",id:"\u7b80\u4ecb",children:[]},{value:"\u67b6\u6784",id:"\u67b6\u6784",children:[{value:"\u5bf9\u8c61\u6a21\u578b",id:"\u5bf9\u8c61\u6a21\u578b",children:[]},{value:"\u6d88\u606f\u7c7b\u578b",id:"\u6d88\u606f\u7c7b\u578b",children:[]},{value:"\u6838\u5fc3 API",id:"\u6838\u5fc3-api",children:[]},{value:"message \u7ed3\u6784",id:"message-\u7ed3\u6784",children:[]},{value:"\u6d88\u606f\u53ef\u9760\u6027\u673a\u5236",id:"\u6d88\u606f\u53ef\u9760\u6027\u673a\u5236",children:[]}]}],u={toc:s};function d(e){var t=e.components,i=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,n.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"\u7b80\u4ecb"},"\u7b80\u4ecb"),(0,o.kt)("p",null,"JMS\uff08Java Messaging Service\uff09\u662fJava\u5e73\u53f0\u4e0a\u6709\u5173\u9762\u5411\u6d88\u606f\u4e2d\u95f4\u4ef6(MOM)\u7684\u6280\u672f\u89c4\u8303\uff0c\u5b83\u4fbf\u4e8e\u6d88\u606f\u7cfb\u7edf\u4e2d\u7684Java\u5e94\u7528\u7a0b\u5e8f\u8fdb\u884c\u6d88\u606f\u4ea4\u6362,\u5e76\u4e14\u901a\u8fc7\u63d0\u4f9b\u6807\u51c6\u7684\u4ea7\u751f\u3001\u53d1\u9001\u3001\u63a5\u6536\u6d88\u606f\u7684\u63a5\u53e3\u7b80\u5316\u4f01\u4e1a\u5e94\u7528\u7684\u5f00\u53d1"),(0,o.kt)("h2",{id:"\u67b6\u6784"},"\u67b6\u6784"),(0,o.kt)("h3",{id:"\u5bf9\u8c61\u6a21\u578b"},"\u5bf9\u8c61\u6a21\u578b"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(88821).Z})),(0,o.kt)("h3",{id:"\u6d88\u606f\u7c7b\u578b"},"\u6d88\u606f\u7c7b\u578b"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u70b9\u5bf9\u70b9\uff08Point-to-Point\uff09")),(0,o.kt)("p",null,"\u5728\u70b9\u5bf9\u70b9\u7684\u6d88\u606f\u7cfb\u7edf\u4e2d\uff0c\u6d88\u606f\u5206\u53d1\u7ed9\u4e00\u4e2a\u5355\u72ec\u7684\u4f7f\u7528\u8005\u3002\u70b9\u5bf9\u70b9\u6d88\u606f\u5f80\u5f80\u4e0e\u961f\u5217\uff08Queue\uff09\u76f8\u5173\u8054\u3002"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u53d1\u5e03/\u8ba2\u9605\uff08Publish/Subscribe\uff09")),(0,o.kt)("p",null,"\u53d1\u5e03/\u8ba2\u9605\u6d88\u606f\u7cfb\u7edf\u652f\u6301\u4e00\u4e2a\u4e8b\u4ef6\u9a71\u52a8\u6a21\u578b\uff0c\u6d88\u606f\u751f\u4ea7\u8005\u548c\u6d88\u8d39\u8005\u90fd\u53c2\u4e0e\u6d88\u606f\u7684\u4f20\u9012\u3002\u751f\u4ea7\u8005\u53d1\u5e03\u4e8b\u4ef6\uff0c\u800c\u4f7f\u7528\u8005\u8ba2\u9605\u611f\u5174\u8da3\u7684\u4e8b\u4ef6\uff0c\u5e76\u4f7f\u7528\u4e8b\u4ef6\u3002"),(0,o.kt)("h3",{id:"\u6838\u5fc3-api"},"\u6838\u5fc3 API"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(7102).Z})),(0,o.kt)("h3",{id:"message-\u7ed3\u6784"},"message \u7ed3\u6784"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6d88\u606f\u5934")),(0,o.kt)("p",null,"\u8bbe\u7f6e\u6d88\u606f\u7684\u901a\u7528\u5c5e\u6027,\u7c7b\u4f3chttp\u6d88\u606f\u5934,\u53ef\u4ee5\u8bbe\u7f6e\u6d88\u606f\u7684\u8fc7\u671f\u65f6\u95f4,\u662f\u5426\u6301\u4e45\u5316,\u6295\u9012\u7684\u76ee\u7684\u5730(\u961f\u5217\u540d/topic\u540d),\u6700\u4e3b\u8981\u7684\u8bbe\u7f6e\u6d88\u606f\u7684\u552f\u4e00\u6807\u8bc6messageId\u6765\u6807\u8bc6\u6d88\u606f\u7684\u552f\u4e00\u6027(JMS\u4f1a\u6a21\u8ba4\u751f\u6210, \u4e5f\u53ef\u4ee5\u4f7f\u7528\u81ea\u5b9a\u4e49\u7684id\u683c\u5f0f\u6765\u751f\u6210\u552f\u4e00\u6807\u8bc6)"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u6d88\u606f\u4f53")),(0,o.kt)("p",null,"\u6d88\u606f\u5b9e\u9645\u5b58\u653e\u6570\u636e\u7684\u5730\u65b9,\u6709\u591a\u79cd\u7c7b\u578b\u7684\u6d88\u606f,text/map/bytes/Stream/Object\u7b49.\u53d1\u9001\u548c\u63a5\u6536\u9700\u8981\u4f7f\u7528\u540c\u4e00\u7c7b\u578b"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"\u6d88\u606f\u5c5e\u6027")),(0,o.kt)("p",null,"\u5982\u679c\u9700\u8981\u9664\u6d88\u606f\u5934\u5916\u7684\u503c,\u53ef\u4ee5\u4f7f\u7528\u6d88\u606f\u5c5e\u6027(\u6d88\u606f\u5934\u7684\u5c5e\u6027\u662f\u56fa\u5b9a\u7684,\u7c7b\u4f3c\u4e8e\u81ea\u5b9a\u4e49\u5b57\u6bb5),\u53ef\u4ee5\u8bc6\u522b/\u53bb\u91cd/\u91cd\u70b9\u6807\u6ce8\u76f8\u540c\u6d88\u606f\u5934\u548c\u6d88\u606f\u4f53\u7684\u6d88\u606f"),(0,o.kt)("h3",{id:"\u6d88\u606f\u53ef\u9760\u6027\u673a\u5236"},"\u6d88\u606f\u53ef\u9760\u6027\u673a\u5236"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6301\u4e45\u5316")),(0,o.kt)("p",null,"\u5f53\u670d\u52a1\u5668\u5b95\u673a\u65f6,\u6570\u636e\u4e0d\u4e22\u5931,\u4f1a\u4fdd\u5b58\u5728\u670d\u52a1\u5668\u672c\u5730"),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u4e8b\u52a1(transaction)")),(0,o.kt)("p",null,"ACID \u751f\u4ea7\u8005/\u6d88\u8d39\u8005\u4e3a\u4e86\u4fdd\u8bc1\u591a\u6761\u6d88\u606f\u53d1\u9001\u4fdd\u8bc1\u540c\u6b65\u63d0\u4ea4\u548c\u540c\u6b65\u6d88\u8d39,\u53ef\u4ee5\u5f00\u542f\u4e8b\u52a1\u529f\u80fd,\u9700\u8981\u63d0\u4ea4\u4e8b\u52a1"),(0,o.kt)("ol",{start:3},(0,o.kt)("li",{parentName:"ol"},"ACK\u786e\u8ba4\u673a\u5236")),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u81ea\u52a8ACK \u6d88\u8d39\u8005\u81ea\u52a8ack "),(0,o.kt)("li",{parentName:"ul"},"\u624b\u52a8ACK \u9700\u8981\u81ea\u5df1\u624b\u52a8\u63d0\u4ea4ACK\u4fe1\u606f "),(0,o.kt)("li",{parentName:"ul"},"\u8fd0\u884c\u91cd\u590d\u7b7e\u6536 \u7528\u4e8e\u53ef\u4ee5\u591a\u6d88\u8d39\u8005\u7b7e\u6536\u7684\u6d88\u606f")))}d.isMDXComponent=!0},88821:function(e,t,r){"use strict";t.Z=r.p+"assets/images/adaf2edda3cc7cd92cd7d9313901213fb90e9164-72e25995dfda7a9f1047da2d1c2e5e10.gif"},7102:function(e,t,r){"use strict";t.Z=r.p+"assets/images/v2-9476d5828b90519f30f1f65d282e738e_1440w-51dbe5af0f38d411a4a7121803051021.jpg"}}]);