(window.webpackJsonp=window.webpackJsonp||[]).push([[183],{484:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"toc",(function(){return p})),n.d(t,"default",(function(){return l}));var r=n(3),a=n(7),o=(n(0),n(505)),i={title:"\u6269\u5c55"},c={unversionedId:"framework/mybatis/mybatis/\u6269\u5c55",id:"framework/mybatis/mybatis/\u6269\u5c55",isDocsHomePage:!1,title:"\u6269\u5c55",description:"\u65e5\u5fd7",source:"@site/docs/framework/mybatis/mybatis/\u6269\u5c55.md",slug:"/framework/mybatis/mybatis/\u6269\u5c55",permalink:"/docs.advanced.way/docs/framework/mybatis/mybatis/\u6269\u5c55",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/framework/mybatis/mybatis/\u6269\u5c55.md",version:"current",lastUpdatedAt:1616396760,formattedLastUpdatedAt:"3/22/2021",sidebar:"Mybatis",previous:{title:"\u63d2\u4ef6",permalink:"/docs.advanced.way/docs/framework/mybatis/mybatis/\u63d2\u4ef6"},next:{title:"\u4ee3\u7801\u751f\u6210\u5668",permalink:"/docs.advanced.way/docs/framework/mybatis/mybatis/\u4ee3\u7801\u751f\u6210\u5668"}},p=[{value:"\u65e5\u5fd7",id:"\u65e5\u5fd7",children:[]},{value:"\u6574\u5408 SpringBoot",id:"\u6574\u5408-springboot",children:[{value:"mybatis-spring-boot",id:"mybatis-spring-boot",children:[]}]}],s={toc:p};function l(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"\u65e5\u5fd7"},"\u65e5\u5fd7"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},"// spring boot\n// `logging.level.` \u4e3a\u524d\u7f00\nlogging.level.xx.mapper=debug\n")),Object(o.b)("p",null,"\u6848\u4f8b: "),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-shell"},"... DEBUG 92784 --- [           main] ...OrderMapper.update     : ==>  Preparing: UPDATE tb_order SET order_no = ?,amount = ? WHERE id =? \n... DEBUG 92784 --- [           main] ...OrderMapper.update     : ==>  Parameters: N001(String), 8888(Integer), 1(Integer)\n... DEBUG 92784 --- [           main] ...OrderMapper.update     : <==  Updates: 1\n")),Object(o.b)("h2",{id:"\u6574\u5408-springboot"},"\u6574\u5408 SpringBoot"),Object(o.b)("h3",{id:"mybatis-spring-boot"},"mybatis-spring-boot"),Object(o.b)("p",null,"\u5f15\u5165\u4f9d\u8d56:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-xml"},"<dependencies>\n    <dependency>\n        <groupId>org.mybatis.spring.boot</groupId>\n        <artifactId>mybatis-spring-boot-starter</artifactId>\n        <version>2.1.3</version>\n    </dependency>\n</dependencies>\n")),Object(o.b)("p",null,"\u542f\u52a8\u7c7b\u6dfb\u52a0 ",Object(o.b)("inlineCode",{parentName:"p"},"MapperScan")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-java"},'@SpringBootApplication\n@MapperScan("*.*") //\u626b\u63cf\u6307\u5b9a\u5305\u4e0b\u63a5\u53e3\npublic class SpringBootMybatisApplication {\n    public static void main(String[] args) {\n        SpringApplication.run(SpringBootMybatisApplication.class, args);\n    }\n}\n')))}l.isMDXComponent=!0},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),l=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},b=function(e){var t=l(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),b=l(n),u=r,m=b["".concat(i,".").concat(u)]||b[u]||d[u]||o;return n?a.a.createElement(m,c(c({ref:t},s),{},{components:n})):a.a.createElement(m,c({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:r,i[1]=c;for(var s=2;s<o;s++)i[s]=n[s];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);