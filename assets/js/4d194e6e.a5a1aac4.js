(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{365:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return o})),t.d(n,"metadata",(function(){return i})),t.d(n,"toc",(function(){return l})),t.d(n,"default",(function(){return p}));var a=t(3),r=t(7),c=(t(0),t(505)),o={},i={unversionedId:"framework/spring/spring/\u4e8b\u52a1\u7ba1\u7406",id:"framework/spring/spring/\u4e8b\u52a1\u7ba1\u7406",isDocsHomePage:!1,title:"\u4e8b\u52a1\u7ba1\u7406",description:"\u4e8b\u52a1\u7ba1\u7406",source:"@site/docs/framework/spring/spring/\u4e8b\u52a1\u7ba1\u7406.md",slug:"/framework/spring/spring/\u4e8b\u52a1\u7ba1\u7406",permalink:"/docs.advanced.way/docs/framework/spring/spring/\u4e8b\u52a1\u7ba1\u7406",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/framework/spring/spring/\u4e8b\u52a1\u7ba1\u7406.md",version:"current",lastUpdatedAt:1616396760,formattedLastUpdatedAt:"3/22/2021",sidebar:"spring",previous:{title:"Spring",permalink:"/docs.advanced.way/docs/framework/spring/spring/core"},next:{title:"BeanFactory",permalink:"/docs.advanced.way/docs/framework/spring/spring/BeanFactory"}},l=[{value:"\u4e8b\u52a1\u7ba1\u7406",id:"\u4e8b\u52a1\u7ba1\u7406",children:[{value:"\u4e8b\u52a1\u7c7b\u578b",id:"\u4e8b\u52a1\u7c7b\u578b",children:[]},{value:"\u4e8b\u52a1\u5c5e\u6027",id:"\u4e8b\u52a1\u5c5e\u6027",children:[]}]}],b={toc:l};function p(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,t,{components:n,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"\u4e8b\u52a1\u7ba1\u7406"},"\u4e8b\u52a1\u7ba1\u7406"),Object(c.b)("p",null,"\u4e8b\u52a1\u5fc5\u987b\u670d\u4eceACID\u539f\u5219\u3002"),Object(c.b)("p",null,"ACID\u662f\u539f\u5b50\u6027\uff08atomicity\uff09\u3001\u4e00\u81f4\u6027\uff08consistency\uff09\u3001\u9694\u79bb\u6027 \uff08isolation\uff09\u548c\u6301\u4e45\u6027\uff08durability\uff09\u7684\u7f29\u5199\u3002"),Object(c.b)("p",null,"\u4e8b\u52a1\u7684\u539f\u5b50\u6027\uff1a\u8868\u793a\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u7684\u4efb\u4f55\u5931\u8d25\u90fd\u5c06\u5bfc\u81f4\u4e8b\u52a1\u6240\u505a\u7684\u4efb\u4f55\u4fee\u6539\u5931\u6548\u3002\n\u4e8b\u52a1\u7684\u4e00\u81f4\u6027\uff1a\u8868\u793a\u5f53\u4e8b\u52a1\u6267\u884c\u5931\u8d25\u65f6\uff0c\u6240\u6709\u88ab\u8be5\u4e8b\u52a1\u5f71\u54cd\u7684\u6570\u636e\u90fd\u5e94\u8be5\u6062\u590d\u5230\u4e8b\u52a1\u6267\u884c\u524d\u7684\u72b6\u6001\u3002\n\u4e8b\u52a1\u7684\u9694\u79bb\u6027\uff1a\u8868\u793a\u5728\u4e8b\u52a1\u6267\u884c\u8fc7\u7a0b\u4e2d\u5bf9\u6570\u636e\u7684\u4fee\u6539\uff0c\u5728\u4e8b\u52a1\u63d0\u4ea4\u4e4b\u524d\u5bf9\u5176\u4ed6\u4e8b\u52a1\u4e0d\u53ef\u89c1\u3002\n\u4e8b\u52a1\u7684\u6301\u4e45\u6027\uff1a\u8868\u793a\u5df2\u63d0\u4ea4\u7684\u6570\u636e\u5728\u4e8b\u52a1\u6267\u884c\u5931\u8d25\u65f6\uff0c\u6570\u636e\u7684\u72b6\u6001\u90fd\u5e94\u8be5\u6b63\u786e\u3002"),Object(c.b)("p",null,"\u901a\u4fd7\u7684\u7406\u89e3\uff0c\u4e8b\u52a1\u662f\u4e00\u7ec4\u539f\u5b50\u64cd\u4f5c\u5355\u5143\uff0c\u4ece\u6570\u636e\u5e93\u89d2\u5ea6\u8bf4\uff0c\u5c31\u662f\u4e00\u7ec4SQL\u6307\u4ee4\uff0c\u8981\u4e48\u5168\u90e8\u6267\u884c\u6210\u529f\uff0c\u82e5\u56e0\u4e3a\u67d0\u4e2a\u539f\u56e0\u5176\u4e2d\u4e00\u6761\u6307\u4ee4\u6267\u884c\u6709\u9519\u8bef\uff0c\u5219\u64a4\u9500\u5148\u524d\u6267\u884c\u8fc7\u7684\u6240\u6709\u6307\u4ee4\u3002"),Object(c.b)("p",null,"\u66f4\u7b80\u7b54\u7684\u8bf4\u5c31\u662f\uff1a",Object(c.b)("inlineCode",{parentName:"p"},"\u8981\u4e48\u5168\u90e8\u6267\u884c\u6210\u529f\uff0c\u8981\u4e48\u64a4\u9500\u4e0d\u6267\u884c")," ",Object(c.b)("inlineCode",{parentName:"p"},"\u63a7\u5236\u6570\u636e\u7684\u5b89\u5168\u8bbf\u95ee")),Object(c.b)("h3",{id:"\u4e8b\u52a1\u7c7b\u578b"},"\u4e8b\u52a1\u7c7b\u578b"),Object(c.b)("p",null,"JDBC\u4e8b\u52a1\uff0cJTA\uff08Java Transaction API\uff09\uff0c\u5bb9\u5668\u4e8b\u52a1"),Object(c.b)("h4",{id:"spring\u5bb9\u5668\u4e8b\u52a1"},"Spring\u5bb9\u5668\u4e8b\u52a1"),Object(c.b)("p",null,"spring\u672c\u8eab\u4e0d\u7ba1\u7406\u4e8b\u52a1\uff0c\u800c\u662f\u63d0\u4f9b\u4e8b\u52a1\u7ba1\u7406\u5668\u5c06\u4e8b\u52a1\u59d4\u6258\u7ed9hibernate\u6216jta\u6301\u4e45\u5316\u6846\u67b6\u6765\u5b9e\u73b0\u4e8b\u52a1"),Object(c.b)("p",null,"Spring\u4e8b\u52a1\u7ba1\u7406\u5668\u7684\u63a5\u53e3\u662forg.springframework.transaction.PlatformTransactionManager  "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public interface PlatformTransactionManager{ \xa0\n     \xa0 // \u7531TransactionDefinition\u5f97\u5230TransactionStatus\u5bf9\u8c61\n       TransactionStatus getTransaction(TransactionDefinition definition) throws TransactionException;\n\xa0\xa0\xa0\xa0   // \u63d0\u4ea4\n       void commit(TransactionStatus status) throws TransactionException; \xa0\n       // \u56de\u6eda\n       void rollback(TransactionStatus status) throws TransactionException; \xa0\n}\n")),Object(c.b)("h3",{id:"\u4e8b\u52a1\u5c5e\u6027"},"\u4e8b\u52a1\u5c5e\u6027"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"getTransaction(TransactionDefinition definition)\n"),"\n\u4f20\u64ad\u884c\u4e3a\u3001\u9694\u79bb\u89c4\u5219\u3001\u56de\u6eda\u89c4\u5219\u3001\u4e8b\u52a1\u8d85\u65f6\u3001\u662f\u5426\u53ea\u8bfb"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"public interface TransactionDefinition {\n\xa0\xa0\xa0\xa0int getPropagationBehavior(); // \u8fd4\u56de\u4e8b\u52a1\u7684\u4f20\u64ad\u884c\u4e3a\n\xa0\xa0\xa0\xa0int getIsolationLevel(); // \u8fd4\u56de\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u4e8b\u52a1\u7ba1\u7406\u5668\u6839\u636e\u5b83\u6765\u63a7\u5236\u53e6\u5916\u4e00\u4e2a\u4e8b\u52a1\u53ef\u4ee5\u770b\u5230\u672c\u4e8b\u52a1\u5185\u7684\u54ea\u4e9b\u6570\u636e\n\xa0\xa0\xa0\xa0int getTimeout(); \xa0// \u8fd4\u56de\u4e8b\u52a1\u5fc5\u987b\u5728\u591a\u5c11\u79d2\u5185\u5b8c\u6210\n    boolean isReadOnly(); // \u4e8b\u52a1\u662f\u5426\u53ea\u8bfb\uff0c\u4e8b\u52a1\u7ba1\u7406\u5668\u80fd\u591f\u6839\u636e\u8fd9\u4e2a\u8fd4\u56de\u503c\u8fdb\u884c\u4f18\u5316\uff0c\u786e\u4fdd\u4e8b\u52a1\u662f\u53ea\u8bfb\u7684\n}\n\n\n")),Object(c.b)("h4",{id:"7\u79cd\u4f20\u64ad\u884c\u4e3a\uff1a"},"7\u79cd\u4f20\u64ad\u884c\u4e3a\uff1a"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u4e8b\u52a1\u4f20\u64ad\u884c\u4e3a\uff08propagation behavior\uff09\u6307\u7684\u5c31\u662f\u5f53\u4e00\u4e2a\u4e8b\u52a1\u65b9\u6cd5\u88ab\u53e6\u4e00\u4e2a\u4e8b\u52a1\u65b9\u6cd5\u8c03\u7528\u65f6\uff0c\u8fd9\u4e2a\u4e8b\u52a1\u65b9\u6cd5\u5e94\u8be5\u5982\u4f55\u8fdb\u884c\u3002")),Object(c.b)("p",null,"PROPAGATION_REQUIRED\uff1a\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5c31\u65b0\u5efa\u4e00\u4e2a\u4e8b\u52a1\uff0c\u5982\u679c\u5df2\u7ecf\u5b58\u5728\u4e00\u4e2a\u4e8b\u52a1\u4e2d\uff0c\u52a0\u5165\u5230\u8fd9\u4e2a\u4e8b\u52a1\u4e2d\u3002\u8fd9\u662f\u6700\u5e38\u89c1\u7684\u9009\u62e9\u3002"),Object(c.b)("p",null,"PROPAGATION_SUPPORTS\uff1a\u652f\u6301\u5f53\u524d\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5c31\u4ee5\u975e\u4e8b\u52a1\u65b9\u5f0f\u6267\u884c\u3002"),Object(c.b)("p",null,"PROPAGATION_MANDATORY\uff1a\u652f\u6301\u5f53\u524d\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u6ca1\u6709\u4e8b\u52a1\uff0c\u5c31\u629b\u51fa\u5f02\u5e38\u3002"),Object(c.b)("p",null,"PROPAGATION_REQUIRES_NEW\uff1a\u65b0\u5efa\u4e8b\u52a1\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\uff0c\u628a\u5f53\u524d\u4e8b\u52a1\u6302\u8d77\u3002"),Object(c.b)("p",null,"PROPAGATION_NOT_SUPPORTED\uff1a\u4ee5\u975e\u4e8b\u52a1\u65b9\u5f0f\u6267\u884c\u64cd\u4f5c\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\uff0c\u5c31\u628a\u5f53\u524d\u4e8b\u52a1\u6302\u8d77\u3002"),Object(c.b)("p",null,"PROPAGATION_NEVER\uff1a\u4ee5\u975e\u4e8b\u52a1\u65b9\u5f0f\u6267\u884c\uff0c\u5982\u679c\u5f53\u524d\u5b58\u5728\u4e8b\u52a1\uff0c\u5219\u629b\u51fa\u5f02\u5e38\u3002\xa0"),Object(c.b)("p",null,"\u867d\u7136\u67097\u79cd\uff0c\u4f46\u662f\u5e38\u7528\u7684\u5c31\u7b2c\u4e00\u79cdPROPAGATION_REQUIRED\u548c\u7b2c\u56db\u79cdPROPAGATION_REQUIRES_NEW"),Object(c.b)("h4",{id:"\u4e94\u4e2a\u9694\u79bb\u7ea7\u522b\uff1a"},"\u4e94\u4e2a\u9694\u79bb\u7ea7\u522b\uff1a"),Object(c.b)("p",null,"ISOLATION_DEFAULT\uff1a\u8fd9\u662f\u4e00\u4e2aPlatfromTransactionManager\u9ed8\u8ba4\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u4f7f\u7528\u6570\u636e\u5e93\u9ed8\u8ba4\u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b."),Object(c.b)("p",null,"\u53e6\u5916\u56db\u4e2a\u4e0eJDBC\u7684\u9694\u79bb\u7ea7\u522b\u76f8\u5bf9\u5e94\uff1b  "),Object(c.b)("p",null,"ISOLATION_READ_UNCOMMITTED\uff1a\u8fd9\u662f\u4e8b\u52a1\u6700\u4f4e\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u5b83\u5145\u8bb8\u522b\u5916\u4e00\u4e2a\u4e8b\u52a1\u53ef\u4ee5\u770b\u5230\u8fd9\u4e2a\u4e8b\u52a1\u672a\u63d0\u4ea4\u7684\u6570\u636e\u3002\n\u8fd9\u79cd\u9694\u79bb\u7ea7\u522b\u4f1a\u4ea7\u751f\u810f\u8bfb\uff0c\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u50cf\u8bfb\u3002"),Object(c.b)("p",null,"ISOLATION_READ_COMMITTED\uff1a\u4fdd\u8bc1\u4e00\u4e2a\u4e8b\u52a1\u4fee\u6539\u7684\u6570\u636e\u63d0\u4ea4\u540e\u624d\u80fd\u88ab\u53e6\u5916\u4e00\u4e2a\u4e8b\u52a1\u8bfb\u53d6\u3002\u53e6\u5916\u4e00\u4e2a\u4e8b\u52a1\u4e0d\u80fd\u8bfb\u53d6\u8be5\u4e8b\u52a1\u672a\u63d0\u4ea4\u7684\u6570\u636e\u3002\n\u8fd9\u79cd\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u53ef\u4ee5\u907f\u514d\u810f\u8bfb\u51fa\u73b0\uff0c\u4f46\u662f\u53ef\u80fd\u4f1a\u51fa\u73b0\u4e0d\u53ef\u91cd\u590d\u8bfb\u548c\u5e7b\u50cf\u8bfb\u3002"),Object(c.b)("p",null,"ISOLATION_REPEATABLE_READ\uff1a\u8fd9\u79cd\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u53ef\u4ee5\u9632\u6b62\u810f\u8bfb\uff0c\u4e0d\u53ef\u91cd\u590d\u8bfb\u3002\u4f46\u662f\u53ef\u80fd\u51fa\u73b0\u5e7b\u50cf\u8bfb\u3002\n\u5b83\u9664\u4e86\u4fdd\u8bc1\u4e00\u4e2a\u4e8b\u52a1\u4e0d\u80fd\u8bfb\u53d6\u53e6\u4e00\u4e2a\u4e8b\u52a1\u672a\u63d0\u4ea4\u7684\u6570\u636e\u5916\uff0c\u8fd8\u4fdd\u8bc1\u4e86\u907f\u514d\u4e0b\u9762\u7684\u60c5\u51b5\u4ea7\u751f(\u4e0d\u53ef\u91cd\u590d\u8bfb)\u3002"),Object(c.b)("p",null,"ISOLATION_SERIALIZABLE\uff1a\u8fd9\u662f\u82b1\u8d39\u6700\u9ad8\u4ee3\u4ef7\u4f46\u662f\u6700\u53ef\u9760\u7684\u4e8b\u52a1\u9694\u79bb\u7ea7\u522b\u3002\u4e8b\u52a1\u88ab\u5904\u7406\u4e3a\u987a\u5e8f\u6267\u884c\u3002\u9664\u4e86\u9632\u6b62\u810f\u8bfb\uff0c\u4e0d\u53ef\u91cd\u590d\u8bfb\u5916\uff0c\u8fd8\u907f\u514d\u4e86\u5e7b\u50cf\u8bfb"),Object(c.b)("h4",{id:"\u4e8b\u52a1\u914d\u7f6e\u65b9\u5f0f"},"\u4e8b\u52a1\u914d\u7f6e\u65b9\u5f0f"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u6ce8\u89e3   ")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"@Transactional\u53ea\u80fd\u88ab\u5e94\u7528\u5230public\u65b9\u6cd5\u4e0a",Object(c.b)("br",{parentName:"p"}),"\n","\u9ed8\u8ba4\u60c5\u51b5\u4e0b,\u4e00\u4e2a\u6709\u4e8b\u52a1\u65b9\u6cd5, \u9047\u5230RuntimeException \u65f6\u4f1a\u56de\u6eda . \u9047\u5230 \u53d7\u68c0\u67e5\u7684\u5f02\u5e38 \u662f\u4e0d\u4f1a\u56de\u6eda \u7684. \u8981\u60f3\u6240\u6709\u5f02\u5e38\u90fd\u56de\u6eda,\u8981\u52a0\u4e0a @Transactional( rollbackFor={Exception.class,\u5176\u5b83\u5f02\u5e38})  ")),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre",className:"language-java"},"@Transactional(\n    readOnly = false, //\u8bfb\u5199\u4e8b\u52a1\n    timeout = -1 , \xa0\xa0\xa0\xa0//\u4e8b\u52a1\u7684\u8d85\u65f6\u65f6\u95f4\uff0c-1\u4e3a\u65e0\u9650\u5236\n    noRollbackFor = ArithmeticException.class, //\u9047\u5230\u6307\u5b9a\u7684\u5f02\u5e38\u4e0d\u56de\u6eda\n    isolation = Isolation.DEFAULT, //\u4e8b\u52a1\u7684\u9694\u79bb\u7ea7\u522b\uff0c\u6b64\u5904\u4f7f\u7528\u540e\u7aef\u6570\u636e\u5e93\u7684\u9ed8\u8ba4\u9694\u79bb\u7ea7\u522b\n    propagation = Propagation.REQUIRED //\u4e8b\u52a1\u7684\u4f20\u64ad\u884c\u4e3a\n)\n\n")),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"xml\u914d\u7f6e")),Object(c.b)("h4",{id:"\u5f02\u5e38\u56de\u6eda"},"\u5f02\u5e38\u56de\u6eda"),Object(c.b)("h6",{id:"\u5f02\u5e38\u5206\u7c7b"},"\u5f02\u5e38\u5206\u7c7b"),Object(c.b)("p",null,"1.\u8fd0\u884c\u65f6\u5f02\u5e38 \u548c \u975e\u8fd0\u884c\u65f6\u5f02\u5e38",Object(c.b)("br",{parentName:"p"}),"\n","2.\u53ef\u67e5\u7684\u5f02\u5e38\uff08checked exceptions\uff09\u548c \u4e0d\u53ef\u67e5\u7684\u5f02\u5e38\uff08unchecked exceptions\uff09"),Object(c.b)("h6",{id:"transactional\u56de\u6eda"},"@Transactional\u56de\u6eda"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Error\u4e00\u5b9a\u4f1a\u56de\u6eda\u3002  "),Object(c.b)("li",{parentName:"ol"},"\u5f02\u5e38\u4e2d\uff1a\u8fd0\u884c\u65f6\u5f02\u5e38(unchecked exceptions)\u4e00\u5b9a\u4f1a\u56de\u6eda\u3002\u800c\u975e\u8fd0\u884c\u65f6\u5f02\u5e38(checked exceptions)\uff0c\u5982IOExceptions\u548cSQLExceptions\u4e0d\u4f1a\u56de\u6eda\u3002")),Object(c.b)("p",null,"\u8ba9checked\u4f8b\u5916\u4e5f\u56de\u6eda\uff1a\u5728\u6574\u4e2a\u65b9\u6cd5\u524d\u52a0\u4e0a @Transactional(rollbackFor=Exception.class)\n\u8ba9unchecked\u4f8b\u5916\u4e0d\u56de\u6eda\uff1a @Transactional(noRollbackFor=RunTimeException.class)"),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a \u5982\u679c\u5f02\u5e38\u88abtry-catch\u4e86\uff0c\u4e8b\u52a1\u5c31\u4e0d\u56de\u6eda\u4e86\uff0c\u5fc5\u987b\u629b\u5411\u88ab@Transactional\u6ce8\u89e3\u7684\u5c42\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"checked\uff1a \u4e00\u822c\u662f\u6307\u7a0b\u5e8f\u4e0d\u80fd\u76f4\u63a5\u63a7\u5236\u7684\u5916\u754c\u60c5\u51b5\uff0c\u662f\u6307\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u5c31\u9700\u8981\u68c0\u67e5\u7684\u4e00\u7c7bexception\uff0c\u7528\u6237\u7a0b\u5e8f\u4e2d\u5fc5\u987b\u91c7\u7528try catch\u673a\u5236\u5904\u7406\u6216\u8005\u901a\u8fc7throws\u4ea4\u7531\u8c03\u7528\u8005\u6765\u5904\u7406\u3002\u8fd9\u7c7b\u5f02\u5e38\uff0c\u4e3b\u8981\u6307\u9664\u4e86Error\u4ee5\u53caRuntimeException\u53ca\u5176\u5b50\u7c7b\u4e4b\u5916\u7684\u5f02\u5e38\u3002")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"unchecked\uff1a\u662f\u6307\u90a3\u4e9b\u4e0d\u9700\u8981\u5728\u7f16\u8bd1\u7684\u65f6\u5019\u5c31\u8981\u5904\u7406\u7684\u4e00\u7c7b\u5f02\u5e38\u3002\u5728java\u4f53\u7cfb\u91cc\uff0c\u6240\u6709\u7684Error\u4ee5\u53caRuntimeException\u53ca\u5176\u5b50\u7c7b\u90fd\u662funchecked\u5f02\u5e38\u3002\u518d\u5f62\u8c61\u76f4\u767d\u7684\u7406\u89e3\u4e3a\u4e0d\u9700\u8981try catch\u7b49\u673a\u5236\u5904\u7406\u7684\u5f02\u5e38\uff0c\u53ef\u4ee5\u8ba4\u4e3a\u662funchecked\u7684\u5f02\u5e38\u3002")),Object(c.b)("h4",{id:"\u4e8b\u52a1\u8d85\u65f6"},"\u4e8b\u52a1\u8d85\u65f6"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"@Transactional(timeout\xa0=\xa060)"),"  "),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},Object(c.b)("inlineCode",{parentName:"p"},"int TIMEOUT_DEFAULT = -1")," \u9ed8\u8ba4\u8d85\u65f6\u65f6\u95f4\u4e0d\u9650\u5236")),Object(c.b)("p",null,"\u5982\u679c\u7528\u8fd9\u4e2a\u6ce8\u89e3\u63cf\u8ff0\u4e00\u4e2a\u65b9\u6cd5\u7684\u8bdd\uff0c\u7ebf\u7a0b\u5df2\u7ecf\u8dd1\u5230\u65b9\u6cd5\u91cc\u9762\uff0c\u5982\u679c\u5df2\u7ecf\u8fc7\u53bb60\u79d2\u4e86\u8fd8\u6ca1\u8dd1\u5b8c\u8fd9\u4e2a\u65b9\u6cd5\u5e76\u4e14\u7ebf\u7a0b\u5728\u8fd9\u4e2a\u65b9\u6cd5\u4e2d\u7684\u540e\u9762\u8fd8\u6709\u6d89\u53ca\u5230\u5bf9\u6570\u636e\u5e93\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c\u65f6\u4f1a\u62a5\u4e8b\u52a1\u8d85\u65f6\u9519\u8bef\uff08\u4f1a\u56de\u6eda\uff09  "),Object(c.b)("p",null,"\u5982\u679c\u5df2\u7ecf\u8fc7\u53bb60\u79d2\u4e86\u8fd8\u6ca1\u8dd1\u5b8c\u4f46\u662f\u540e\u9762\u5df2\u7ecf\u6ca1\u6709\u6d89\u53ca\u5230\u5bf9\u6570\u636e\u5e93\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c\uff0c\u90a3\u4e48\u8fd9\u65f6\u4e0d\u4f1a\u62a5\u4e8b\u52a1\u8d85\u65f6\u9519\u8bef\uff08\u4e0d\u4f1a\u56de\u6eda\uff09"),Object(c.b)("h4",{id:"\u53ea\u8bfb\u4e8b\u52a1"},"\u53ea\u8bfb\u4e8b\u52a1"),Object(c.b)("p",null,"\u4ece\u8fd9\u4e00\u70b9\u8bbe\u7f6e\u7684\u65f6\u95f4\u70b9\u5f00\u59cb\uff08\u65f6\u95f4\u70b9a\uff09\u5230\u8fd9\u4e2a\u4e8b\u52a1\u7ed3\u675f\u7684\u8fc7\u7a0b\u4e2d\uff0c\u5176\u4ed6\u4e8b\u52a1\u6240\u63d0\u4ea4\u7684\u6570\u636e\uff0c\u8be5\u4e8b\u52a1\u5c06\u770b\u4e0d\u89c1\uff01\uff08\u67e5\u8be2\u4e2d\u4e0d\u4f1a\u51fa\u73b0\u522b\u4eba\u5728\u65f6\u95f4\u70b9a\u4e4b\u540e\u63d0\u4ea4\u7684\u6570\u636e\uff09"),Object(c.b)("h6",{id:"\u5e94\u7528\u573a\u5408\uff1a"},"\u5e94\u7528\u573a\u5408\uff1a"),Object(c.b)("p",null,"\u5982\u679c\u4f60\u4e00\u6b21\u6267\u884c\u5355\u6761\u67e5\u8be2\u8bed\u53e5\uff0c\u5219\u6ca1\u6709\u5fc5\u8981\u542f\u7528\u4e8b\u52a1\u652f\u6301\uff0c\u6570\u636e\u5e93\u9ed8\u8ba4\u652f\u6301SQL\u6267\u884c\u671f\u95f4\u7684\u8bfb\u4e00\u81f4\u6027\uff1b   "),Object(c.b)("p",null,"\u5982\u679c\u4f60\u4e00\u6b21\u6267\u884c\u591a\u6761\u67e5\u8be2\u8bed\u53e5\uff0c\u4f8b\u5982\u7edf\u8ba1\u67e5\u8be2\uff0c\u62a5\u8868\u67e5\u8be2\uff0c\u5728\u8fd9\u79cd\u573a\u666f\u4e0b\uff0c\u591a\u6761\u67e5\u8be2SQL\u5fc5\u987b\u4fdd\u8bc1\u6574\u4f53\u7684\u8bfb\u4e00\u81f4\u6027\uff0c\u5426\u5219\uff0c\u5728\u524d\u6761SQL\u67e5\u8be2\u4e4b\u540e\uff0c\u540e\u6761SQL\u67e5\u8be2\u4e4b\u524d\uff0c\u6570\u636e\u88ab\u5176\u4ed6\u7528\u6237\u6539\u53d8\uff0c\u5219\u8be5\u6b21\u6574\u4f53\u7684\u7edf\u8ba1\u67e5\u8be2\u5c06\u4f1a\u51fa\u73b0\u8bfb\u6570\u636e\u4e0d\u4e00\u81f4\u7684\u72b6\u6001\uff0c\u6b64\u65f6\uff0c\u5e94\u8be5\u542f\u7528\u4e8b\u52a1\u652f\u6301\u3002  "),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u3010\u6ce8\u610f\u662f\u4e00\u6b21\u6267\u884c\u591a\u6b21\u67e5\u8be2\u6765\u7edf\u8ba1\u67d0\u4e9b\u4fe1\u606f\uff0c\u8fd9\u65f6\u4e3a\u4e86\u4fdd\u8bc1\u6570\u636e\u6574\u4f53\u7684\u4e00\u81f4\u6027\uff0c\u8981\u7528\u53ea\u8bfb\u4e8b\u52a1\u3011")),Object(c.b)("h6",{id:"\u600e\u6837\u8bbe\u7f6e\uff1a"},"\u600e\u6837\u8bbe\u7f6e\uff1a"),Object(c.b)("p",null,"\u5bf9\u4e8e\u53ea\u8bfb\u67e5\u8be2\uff0c\u53ef\u4ee5\u6307\u5b9a\u4e8b\u52a1\u7c7b\u578b\u4e3areadonly\uff0c\u5373\u53ea\u8bfb\u4e8b\u52a1\u3002\n\u7531\u4e8e\u53ea\u8bfb\u4e8b\u52a1\u4e0d\u5b58\u5728\u6570\u636e\u7684\u4fee\u6539\uff0c\u56e0\u6b64\u6570\u636e\u5e93\u5c06\u4f1a\u4e3a\u53ea\u8bfb\u4e8b\u52a1\u63d0\u4f9b\u4e00\u4e9b\u4f18\u5316\u624b\u6bb5\uff0c\u4f8b\u5982Oracle\u5bf9\u4e8e\u53ea\u8bfb\u4e8b\u52a1\uff0c\u4e0d\u542f\u52a8\u56de\u6eda\u6bb5\uff0c\u4e0d\u8bb0\u5f55\u56de\u6edalog\u3002  "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\u5728JDBC\u4e2d\uff0c\u6307\u5b9a\u53ea\u8bfb\u4e8b\u52a1\u7684\u529e\u6cd5\u4e3a\uff1a ",Object(c.b)("inlineCode",{parentName:"li"},"connection.setReadOnly(true)"),";  "),Object(c.b)("li",{parentName:"ol"},"\u5728Hibernate\u4e2d\uff0c\u6307\u5b9a\u53ea\u8bfb\u4e8b\u52a1\u7684\u529e\u6cd5\u4e3a\uff1a ",Object(c.b)("inlineCode",{parentName:"li"},"session.setFlushMode(FlushMode.NEVER)"),";\n\u6b64\u65f6\uff0cHibernate\u4e5f\u4f1a\u4e3a\u53ea\u8bfb\u4e8b\u52a1\u63d0\u4f9bSession\u65b9\u9762\u7684\u4e00\u4e9b\u4f18\u5316\u624b\u6bb5  "),Object(c.b)("li",{parentName:"ol"},"\u5728Spring\u7684Hibernate\u5c01\u88c5\u4e2d\uff0c\u6307\u5b9a\u53ea\u8bfb\u4e8b\u52a1\u7684\u529e\u6cd5\u4e3a\uff1a bean\u914d\u7f6e\u6587\u4ef6\u4e2d\uff0cprop\u5c5e\u6027\u589e\u52a0\u201creadOnly\u201d \u6216\u8005\u7528\u6ce8\u89e3\u65b9\u5f0f",Object(c.b)("inlineCode",{parentName:"li"},"@Transactional(readOnly=true)"),"\n\u3010 if the transaction is marked as read-only, Spring will set the Hibernate Session\u2019s flush mode to FLUSH_NEVER,\nand will set the JDBC transaction to read-only\u3011\u4e5f\u5c31\u662f\u8bf4\u5728Spring\u4e2d\u8bbe\u7f6e\u53ea\u8bfb\u4e8b\u52a1\u662f\u5229\u7528\u4e0a\u9762\u4e24\u79cd\u65b9\u5f0f")),Object(c.b)("blockquote",null,Object(c.b)("p",{parentName:"blockquote"},"\u5728\u5c06\u4e8b\u52a1\u8bbe\u7f6e\u6210\u53ea\u8bfb\u540e\uff0c\u76f8\u5f53\u4e8e\u5c06\u6570\u636e\u5e93\u8bbe\u7f6e\u6210\u53ea\u8bfb\u6570\u636e\u5e93\uff0c\u6b64\u65f6\u82e5\u8981\u8fdb\u884c\u5199\u7684\u64cd\u4f5c\uff0c\u4f1a\u51fa\u73b0\u9519\u8bef")))}p.isMDXComponent=!0},505:function(e,n,t){"use strict";t.d(n,"a",(function(){return s})),t.d(n,"b",(function(){return d}));var a=t(0),r=t.n(a);function c(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){c(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)t=c[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var b=r.a.createContext({}),p=function(e){var n=r.a.useContext(b),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},s=function(e){var n=p(e.components);return r.a.createElement(b.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},O=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),s=p(t),O=a,d=s["".concat(o,".").concat(O)]||s[O]||u[O]||c;return t?r.a.createElement(d,i(i({ref:n},b),{},{components:t})):r.a.createElement(d,i({ref:n},b))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var c=t.length,o=new Array(c);o[0]=O;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=t[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,t)}O.displayName="MDXCreateElement"}}]);