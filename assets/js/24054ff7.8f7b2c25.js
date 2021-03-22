(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{331:function(e,n,a){"use strict";a.r(n),a.d(n,"frontMatter",(function(){return c})),a.d(n,"metadata",(function(){return i})),a.d(n,"toc",(function(){return l})),a.d(n,"default",(function(){return b}));var t=a(3),r=a(7),o=(a(0),a(505)),c={title:"BeanFactory"},i={unversionedId:"framework/spring/spring/BeanFactory",id:"framework/spring/spring/BeanFactory",isDocsHomePage:!1,title:"BeanFactory",description:"BeanFactory",source:"@site/docs/framework/spring/spring/BeanFactory.md",slug:"/framework/spring/spring/BeanFactory",permalink:"/docs.advanced.way/docs/framework/spring/spring/BeanFactory",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/framework/spring/spring/BeanFactory.md",version:"current",lastUpdatedAt:1616396760,formattedLastUpdatedAt:"3/22/2021",sidebar:"spring",previous:{title:"\u4e8b\u52a1\u7ba1\u7406",permalink:"/docs.advanced.way/docs/framework/spring/spring/\u4e8b\u52a1\u7ba1\u7406"},next:{title:"BeanDefinition",permalink:"/docs.advanced.way/docs/framework/spring/spring/BeanDefinition"}},l=[{value:"BeanFactory",id:"beanfactory",children:[{value:"\u7ed3\u6784\u56fe",id:"\u7ed3\u6784\u56fe",children:[]},{value:"\u6e90\u7801",id:"\u6e90\u7801",children:[]}]},{value:"DefaultListableBeanFactory",id:"defaultlistablebeanfactory-1",children:[]}],s={toc:l};function b(e){var n=e.components,c=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(t.a)({},s,c,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"beanfactory"},"BeanFactory"),Object(o.b)("p",null,"BeanFactory\u8d1f\u8d23\u914d\u7f6e\u3001\u521b\u5efa\u3001\u7ba1\u7406Bean\u3002\u5b83\u6709\u4e00\u4e2a\u5b50\u63a5\u53e3ApplicationContext\uff0c\u4e5f\u88ab\u79f0\u4e3aSpring\u4e0a\u4e0b\u6587\uff0c\u5bb9\u5668\u540c\u65f6\u8fd8\u7ba1\u7406\u7740Bean\u548cBean\u4e4b\u95f4\u7684\u4f9d\u8d56\u5173\u7cfb"),Object(o.b)("h3",{id:"\u7ed3\u6784\u56fe"},"\u7ed3\u6784\u56fe"),Object(o.b)("p",null,Object(o.b)("img",{src:a(617).default})),Object(o.b)("h4",{id:"beanfactory\u7684\u4e09\u4e2a\u5b50\u63a5\u53e3\uff1a"},"BeanFactory\u7684\u4e09\u4e2a\u5b50\u63a5\u53e3\uff1a"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"HierarchicalBeanFactory\uff1a\u63d0\u4f9b\u7236\u5bb9\u5668\u7684\u8bbf\u95ee\u529f\u80fd"),Object(o.b)("li",{parentName:"ul"},"ListableBeanFactory\uff1a\u63d0\u4f9b\u4e86\u6279\u91cf\u83b7\u53d6Bean\u7684\u65b9\u6cd5"),Object(o.b)("li",{parentName:"ul"},"AutowireCapableBeanFactory\uff1a\u5728BeanFactory\u57fa\u7840\u4e0a\u5b9e\u73b0\u5bf9\u5df2\u5b58\u5728\u5b9e\u4f8b\u7684\u7ba1\u7406")),Object(o.b)("h4",{id:"configurablebeanfactory"},"ConfigurableBeanFactory"),Object(o.b)("p",null,"\u4e3b\u8981\u5355\u4f8bbean\u7684\u6ce8\u518c\uff0c\u751f\u6210\u5b9e\u4f8b\uff0c\u4ee5\u53ca\u7edf\u8ba1\u5355\u4f8bbean"),Object(o.b)("h4",{id:"configurablelistablebeanfactory"},"ConfigurableListableBeanFactory"),Object(o.b)("p",null,"\u7ee7\u627f\u4e86\u4e0a\u8ff0\u7684\u6240\u6709\u63a5\u53e3\uff0c\u589e\u52a0\u4e86\u5176\u4ed6\u529f\u80fd\uff1a\u6bd4\u5982\u7c7b\u52a0\u8f7d\u5668,\u7c7b\u578b\u8f6c\u5316,\u5c5e\u6027\u7f16\u8f91\u5668,BeanPostProcessor,\u4f5c\u7528\u57df,bean\u5b9a\u4e49,\u5904\u7406bean\u4f9d\u8d56\u5173\u7cfb, bean\u5982\u4f55\u9500\u6bc1"),Object(o.b)("h4",{id:"defaultlistablebeanfactory"},"DefaultListableBeanFactory"),Object(o.b)("p",null,"\u5b9e\u73b0\u4e86 ConfigurableListableBeanFactory\uff0c\u5b9e\u73b0\u4e0a\u8ff0BeanFactory\u6240\u6709\u529f\u80fd\u3002\u5b83\u8fd8\u53ef\u4ee5\u6ce8\u518cBeanDefinition"),Object(o.b)("h3",{id:"\u6e90\u7801"},"\u6e90\u7801"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'public interface BeanFactory {\n    String FACTORY_BEAN_PREFIX = "&";\n    // \u83b7\u53d6 Bean\n    Object getBean(String name) throws BeansException;\n    <T> T getBean(String name, Class<T> requiredType) throws BeansException;\n    Object getBean(String name, Object... args) throws BeansException;\n    <T> T getBean(Class<T> requiredType) throws BeansException;\n    <T> T getBean(Class<T> requiredType, Object... args) throws BeansException;\n    <T> ObjectProvider<T> getBeanProvider(Class<T> requiredType);\n    <T> ObjectProvider<T> getBeanProvider(ResolvableType requiredType);\n    // \u662f\u5426\u542b\u6709bean\n    boolean containsBean(String name);\n    // \u662f\u5426\u5355\u5229\n    boolean isSingleton(String name) throws NoSuchBeanDefinitionException;\n    // \u662f\u5426\u539f\u578b\n    boolean isPrototype(String name) throws NoSuchBeanDefinitionException;\n    boolean isTypeMatch(String name, ResolvableType typeToMatch) throws NoSuchBeanDefinitionException;\n    boolean isTypeMatch(String name, Class<?> typeToMatch) throws NoSuchBeanDefinitionException;\n    // \u83b7\u53d6 bean\u7684\u7c7b\u578b\n    Class<?> getType(String name) throws NoSuchBeanDefinitionException;\n    Class<?> getType(String name, boolean allowFactoryBeanInit) throws NoSuchBeanDefinitionException;\n    // bean \u522b\u540d\n    String[] getAliases(String name);\n}\n')),Object(o.b)("h2",{id:"defaultlistablebeanfactory-1"},"DefaultListableBeanFactory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public class DefaultListableBeanFactory extends AbstractAutowireCapableBeanFactory\n        implements ConfigurableListableBeanFactory, BeanDefinitionRegistry, Serializable {\n\n    public DefaultListableBeanFactory() {\n        // AbstractAutowireCapableBeanFactory()\n        super();\n    }\n}\n")),Object(o.b)("h4",{id:"abstractautowirecapablebeanfactory"},"AbstractAutowireCapableBeanFactory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractAutowireCapableBeanFactory extends AbstractBeanFactory\n        implements AutowireCapableBeanFactory {\n\n    public AbstractAutowireCapableBeanFactory() {\n        // AbstractBeanFactory()\n        super();\n        // \u9700\u8981\u88ab\u5ffd\u89c6\u7684Bean\n        ignoreDependencyInterface(BeanNameAware.class);\n        ignoreDependencyInterface(BeanFactoryAware.class);\n        ignoreDependencyInterface(BeanClassLoaderAware.class);\n    }\n}\n")),Object(o.b)("h4",{id:"abstractbeanfactory"},"AbstractBeanFactory"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"public abstract class AbstractBeanFactory extends FactoryBeanRegistrySupport implements ConfigurableBeanFactory {\n    public AbstractBeanFactory() {\n    }\n}\n")))}b.isMDXComponent=!0},505:function(e,n,a){"use strict";a.d(n,"a",(function(){return p})),a.d(n,"b",(function(){return d}));var t=a(0),r=a.n(t);function o(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function c(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function i(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?c(Object(a),!0).forEach((function(n){o(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function l(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},o=Object.keys(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)a=o[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=r.a.createContext({}),b=function(e){var n=r.a.useContext(s),a=n;return e&&(a="function"==typeof e?e(n):i(i({},n),e)),a},p=function(e){var n=b(e.components);return r.a.createElement(s.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},y=r.a.forwardRef((function(e,n){var a=e.components,t=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),y=t,d=p["".concat(c,".").concat(y)]||p[y]||u[y]||o;return a?r.a.createElement(d,i(i({ref:n},s),{},{components:a})):r.a.createElement(d,i({ref:n},s))}));function d(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var o=a.length,c=new Array(o);c[0]=y;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:t,c[1]=i;for(var s=2;s<o;s++)c[s]=a[s];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}y.displayName="MDXCreateElement"},617:function(e,n,a){"use strict";a.r(n),n.default=a.p+"assets/images/12234310-6bf928fc2231465a-f68009df8900abcb1768a6fd0c6d9d7e.png"}}]);