(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2207],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},s=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(l,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,c=new Array(o);c[0]=s;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a.mdxType="string"==typeof e?e:i,c[1]=a;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},46853:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return l},toc:function(){return u},default:function(){return d}});var r=n(22122),i=n(19756),o=(n(67294),n(3905)),c=["components"],a={title:"Linux \u9762\u8bd5\u9898"},l={unversionedId:"practice/memo/job/linux",id:"practice/memo/job/linux",isDocsHomePage:!1,title:"Linux \u9762\u8bd5\u9898",description:"Linux",source:"@site/docs/practice/memo/job/linux.md",sourceDirName:"practice/memo/job",slug:"/practice/memo/job/linux",permalink:"/docs.advanced.way/docs/practice/memo/job/linux",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/practice/memo/job/linux.md",version:"current",lastUpdatedAt:1625551523,formattedLastUpdatedAt:"7/6/2021",frontMatter:{title:"Linux \u9762\u8bd5\u9898"},sidebar:"practice",previous:{title:"Spring \u9762\u8bd5\u9898",permalink:"/docs.advanced.way/docs/practice/memo/job/spring"},next:{title:"\u7f51\u7edc\u534f\u8bae",permalink:"/docs.advanced.way/docs/practice/memo/job/\u7f51\u7edc\u534f\u8bae"}},u=[{value:"Linux",id:"linux",children:[{value:"ulimit",id:"ulimit",children:[]},{value:"linux\u7cfb\u7edf\u67e5\u770b\u7aef\u53e3\u9650\u503c\u8303\u56f4",id:"linux\u7cfb\u7edf\u67e5\u770b\u7aef\u53e3\u9650\u503c\u8303\u56f4",children:[]},{value:"\u67e5\u770b\u7aef\u53e3\u5360\u7528",id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528",children:[]},{value:"\u6253\u5370\u6587\u4ef6\u884c\u6570",id:"\u6253\u5370\u6587\u4ef6\u884c\u6570",children:[]}]}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"linux"},"Linux"),(0,o.kt)("h3",{id:"ulimit"},"ulimit"),(0,o.kt)("p",null,"/etc/security/limits.conf"),(0,o.kt)("p",null,"ulimit \u662f\u4e00\u4e2a\u8ba1\u7b97\u673a\u547d\u4ee4\uff0c\u7528\u4e8eshell\u542f\u52a8\u8fdb\u7a0b\u65f6\u9650\u5236\u6240\u5360\u7528\u7684\u8d44\u6e90\uff0c\u53ef\u7528\u4e8e\u4fee\u6539\u7cfb\u7edf\u8d44\u6e90\u9650\u5236"),(0,o.kt)("p",null,"ulimit -n\u53ef\u4ee5\u67e5\u770b\u4e00\u4e2a\u8fdb\u7a0b\u6700\u591a\u53ef\u4ee5\u6253\u5f00\u591a\u5c11\u6587\u4ef6\u63cf\u8ff0\u7b26\u6570"),(0,o.kt)("h3",{id:"linux\u7cfb\u7edf\u67e5\u770b\u7aef\u53e3\u9650\u503c\u8303\u56f4"},"linux\u7cfb\u7edf\u67e5\u770b\u7aef\u53e3\u9650\u503c\u8303\u56f4"),(0,o.kt)("p",null,"cat /proc/sys/net/ipv4/ip_local_port_range"),(0,o.kt)("h3",{id:"\u67e5\u770b\u7aef\u53e3\u5360\u7528"},"\u67e5\u770b\u7aef\u53e3\u5360\u7528"),(0,o.kt)("p",null,"netstat"),(0,o.kt)("h3",{id:"\u6253\u5370\u6587\u4ef6\u884c\u6570"},"\u6253\u5370\u6587\u4ef6\u884c\u6570"),(0,o.kt)("p",null,"head \u548c tail \u901a\u8fc7\u7ba1\u9053\u7ec4\u5408"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-shell"},"head -30 a.txt | tail -11\n")))}d.isMDXComponent=!0}}]);