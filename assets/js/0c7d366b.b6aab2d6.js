(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[483],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return g}});var o=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=o.createContext({}),l=function(e){var t=o.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=l(e.components);return o.createElement(c.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),d=l(n),g=a,m=d["".concat(c,".").concat(g)]||d[g]||u[g]||r;return n?o.createElement(m,i(i({ref:t},s),{},{components:n})):o.createElement(m,i({ref:t},s))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p.mdxType="string"==typeof e?e:a,i[1]=p;for(var l=2;l<r;l++)i[l]=n[l];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},29518:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return c},toc:function(){return l},default:function(){return u}});var o=n(22122),a=n(19756),r=(n(67294),n(3905)),i=["components"],p={title:"\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684Bean"},c={unversionedId:"zoology/spring-family/spring/getbean",id:"zoology/spring-family/spring/getbean",isDocsHomePage:!1,title:"\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684Bean",description:"ApplicationContext",source:"@site/docs/zoology/spring-family/spring/getbean.md",sourceDirName:"zoology/spring-family/spring",slug:"/zoology/spring-family/spring/getbean",permalink:"/docs.advanced.way/docs/zoology/spring-family/spring/getbean",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/zoology/spring-family/spring/getbean.md",version:"current",lastUpdatedAt:1622709462,formattedLastUpdatedAt:"6/3/2021",frontMatter:{title:"\u83b7\u53d6\u4e0a\u4e0b\u6587\u7684Bean"},sidebar:"spring",previous:{title:"\u6ce8\u5165Bean\u7684\u65b9\u5f0f",permalink:"/docs.advanced.way/docs/zoology/spring-family/spring/importbean"},next:{title:"\u7b80\u4ecb",permalink:"/docs.advanced.way/docs/zoology/spring-family/springmvc/\u7b80\u4ecb"}},l=[{value:"ApplicationContext",id:"applicationcontext",children:[]},{value:"\u5de5\u5177\u7c7b\u83b7\u53d6 ApplicationContext",id:"\u5de5\u5177\u7c7b\u83b7\u53d6-applicationcontext",children:[]},{value:"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b ApplicationObjectSupport",id:"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b-applicationobjectsupport",children:[]},{value:"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b WebApplicationObjectSupport",id:"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b-webapplicationobjectsupport",children:[]},{value:"\u5b9e\u73b0\u63a5\u53e3 ApplicationContextAware",id:"\u5b9e\u73b0\u63a5\u53e3-applicationcontextaware",children:[]},{value:"ContextLoader",id:"contextloader",children:[]}],s={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,i);return(0,r.kt)("wrapper",(0,o.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"applicationcontext"},"ApplicationContext"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext ac = new FileSystemXmlApplicationContext("applicationContext.xml"); \nac.getBean("beanId");\n\n// \u8fd9\u79cd\u65b9\u5f0f\u9002\u7528\u4e8e\u91c7\u7528Spring\u6846\u67b6\u7684\u72ec\u7acb\u5e94\u7528\u7a0b\u5e8f\uff0c\u9700\u8981\u7a0b\u5e8f\u901a\u8fc7\u914d\u7f6e\u6587\u4ef6\u624b\u5de5\u521d\u59cb\u5316Spring\u7684\u60c5\u51b5\n')),(0,r.kt)("h2",{id:"\u5de5\u5177\u7c7b\u83b7\u53d6-applicationcontext"},"\u5de5\u5177\u7c7b\u83b7\u53d6 ApplicationContext"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},'ApplicationContext ac1 = WebApplicationContextUtils.getRequiredWebApplicationContext(ServletContext sc);\nac1.getBean("beanId"); \n\n// \u8fd9\u79cd\u65b9\u5f0f\u9002\u5408\u4e8e\u91c7\u7528Spring\u6846\u67b6\u7684B/S\u7cfb\u7edf\uff0c\u901a\u8fc7ServletContext\u5bf9\u8c61\u83b7\u53d6ApplicationContext\u5bf9\u8c61\n')),(0,r.kt)("h2",{id:"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b-applicationobjectsupport"},"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b ApplicationObjectSupport"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"WebApplicationContext wac = (WebApplicationContext)servletContext.getAttribute(WebApplicationContext.ROOT_WEB_APPLICATION_CONTEXT_ATTRIBUTE);\n")),(0,r.kt)("h2",{id:"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b-webapplicationobjectsupport"},"\u7ee7\u627f\u81ea\u62bd\u8c61\u7c7b WebApplicationObjectSupport"),(0,r.kt)("h2",{id:"\u5b9e\u73b0\u63a5\u53e3-applicationcontextaware"},"\u5b9e\u73b0\u63a5\u53e3 ApplicationContextAware"),(0,r.kt)("p",null,"\u5e38\u7528\u65b9\u5f0f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"public class XX implements ApplicationContextAware {\n    private ApplicationContext applicationContext;\n\n    @Override\n    public void setApplicationContext(ApplicationContext applicationContext) throws BeansException {\n        this.applicationContext = applicationContext;\n    }\n")),(0,r.kt)("h2",{id:"contextloader"},"ContextLoader"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-java"},"WebApplicationContext wac = ContextLoader.getCurrentWebApplicationContext();\nwac.getBean(beanID);\n\n// \u4e0d\u4f9d\u8d56\u4e8eservlet,\u4e0d\u9700\u8981\u6ce8\u5165\u7684\u65b9\u5f0f\n")))}u.isMDXComponent=!0}}]);