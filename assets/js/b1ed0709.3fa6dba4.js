(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[2109],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),m=c(n),d=r,S=m["".concat(s,".").concat(d)]||m[d]||p[d]||o;return n?a.createElement(S,l(l({ref:t},u),{},{components:n})):a.createElement(S,l({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16305:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return c},default:function(){return p}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l=["components"],i={title:"\u6838\u5fc3\u7ec4\u4ef6"},s={unversionedId:"zoology/framework/mybatis/mybatis/\u6838\u5fc3\u7ec4\u4ef6",id:"zoology/framework/mybatis/mybatis/\u6838\u5fc3\u7ec4\u4ef6",isDocsHomePage:!1,title:"\u6838\u5fc3\u7ec4\u4ef6",description:"SqlSessionFactoryBuilder",source:"@site/docs/zoology/framework/mybatis/mybatis/\u6838\u5fc3\u7ec4\u4ef6.md",sourceDirName:"zoology/framework/mybatis/mybatis",slug:"/zoology/framework/mybatis/mybatis/\u6838\u5fc3\u7ec4\u4ef6",permalink:"/docs.advanced.way/docs/zoology/framework/mybatis/mybatis/\u6838\u5fc3\u7ec4\u4ef6",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/docs/zoology/framework/mybatis/mybatis/\u6838\u5fc3\u7ec4\u4ef6.md",version:"current",lastUpdatedAt:1622709462,formattedLastUpdatedAt:"6/3/2021",frontMatter:{title:"\u6838\u5fc3\u7ec4\u4ef6"},sidebar:"framework",previous:{title:"\u914d\u7f6e Configuration",permalink:"/docs.advanced.way/docs/zoology/framework/mybatis/mybatis/\u914d\u7f6e"},next:{title:"\u6620\u5c04\u5668",permalink:"/docs.advanced.way/docs/zoology/framework/mybatis/mybatis/\u6620\u5c04\u5668"}},c=[{value:"SqlSessionFactoryBuilder",id:"sqlsessionfactorybuilder",children:[]},{value:"SqlSessionFactory",id:"sqlsessionfactory",children:[{value:"DefaultSqlSessionFactory",id:"defaultsqlsessionfactory",children:[]}]},{value:"SqlSession",id:"sqlsession",children:[{value:"\u6267\u884c\u6d41\u7a0b",id:"\u6267\u884c\u6d41\u7a0b",children:[]},{value:"Executor \u6267\u884c\u5668",id:"executor-\u6267\u884c\u5668",children:[]},{value:"StatementHandler",id:"statementhandler",children:[]},{value:"ParameterHandler",id:"parameterhandler",children:[]},{value:"ResultSetHandler",id:"resultsethandler",children:[]}]},{value:"SQL Mapper",id:"sql-mapper",children:[{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],u={toc:c};function p(e){var t=e.components,i=(0,r.Z)(e,l);return(0,o.kt)("wrapper",(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"sqlsessionfactorybuilder"},"SqlSessionFactoryBuilder"),(0,o.kt)("p",null,"\u6839\u636e\u914d\u7f6e\u4fe1\u606f\u6216\u4ee3\u7801\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"SqlSessionFactory")),(0,o.kt)("h2",{id:"sqlsessionfactory"},"SqlSessionFactory"),(0,o.kt)("p",null,"\u4f7f\u7528\u5de5\u5382\u751f\u6210 ",(0,o.kt)("inlineCode",{parentName:"p"},"SqlSession"),". ",(0,o.kt)("inlineCode",{parentName:"p"},"SqlSessionFactory")," \u53ea\u662f\u4e00\u4e2a\u63a5\u53e3"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface SqlSessionFactory {\n\n  SqlSession openSession();\n\n  SqlSession openSession(boolean autoCommit);\n\n  SqlSession openSession(Connection connection);\n\n  SqlSession openSession(TransactionIsolationLevel level);\n\n  SqlSession openSession(ExecutorType execType);\n\n  SqlSession openSession(ExecutorType execType, boolean autoCommit);\n\n  SqlSession openSession(ExecutorType execType, TransactionIsolationLevel level);\n\n  SqlSession openSession(ExecutorType execType, Connection connection);\n\n  Configuration getConfiguration();\n\n}\n")),(0,o.kt)("h3",{id:"defaultsqlsessionfactory"},"DefaultSqlSessionFactory"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"DefaultSqlSessionFactory")," \u662f ",(0,o.kt)("inlineCode",{parentName:"p"},"SqlSessionFactory")," \u9ed8\u8ba4\u7684\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},'public class DefaultSqlSessionFactory implements SqlSessionFactory {\n\n    // \u914d\u7f6e\u73af\u5883\n    private final Configuration configuration;\n\n    public DefaultSqlSessionFactory(Configuration configuration) {\n        this.configuration = configuration;\n    }\n\n    @Override\n  public SqlSession openSession() {\n    return openSessionFromDataSource(configuration.getDefaultExecutorType(), null, false);\n  }\n\n  private SqlSession openSessionFromDataSource(ExecutorType execType, TransactionIsolationLevel level, boolean autoCommit) {\n    Transaction tx = null;\n    try {\n        // \u83b7\u5f97\u73af\u5883\u53d8\u91cf\n      final Environment environment = configuration.getEnvironment();\n      // \u4e8b\u52a1\u5de5\u5382\n      final TransactionFactory transactionFactory = getTransactionFactoryFromEnvironment(environment);\n      // \u521b\u5efa\u4e8b\u52a1\n      tx = transactionFactory.newTransaction(environment.getDataSource(), level, autoCommit);\n      // \u6267\u884c\u5668\n      final Executor executor = configuration.newExecutor(tx, execType);\n      // \u521b\u5efa SqlSession\n      return new DefaultSqlSession(configuration, executor, autoCommit);\n    } catch (Exception e) {\n        // \u5f02\u5e38\u5173\u95ed\u4e8b\u52a1\n      closeTransaction(tx); // may have fetched a connection so lets call close()\n      throw ExceptionFactory.wrapException("Error opening session.  Cause: " + e, e);\n    } finally {\n      ErrorContext.instance().reset();\n    }\n  }\n}\n')),(0,o.kt)("h2",{id:"sqlsession"},"SqlSession"),(0,o.kt)("p",null,"\u56db\u5927\u7ec4\u4ef6:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Execute \u8c03\u5ea6\u6267\u884c StatementHandler\u3001ParmmeterHandler\u3001ResultHandler\u6267\u884c\u76f8\u5e94\u7684SQL\u8bed\u53e5\uff1b"),(0,o.kt)("li",{parentName:"ul"},"StatementHandler \u4f7f\u7528\u6570\u636e\u5e93\u4e2dStatement\uff08PrepareStatement\uff09\u6267\u884c\u64cd\u4f5c\uff0c\u5373\u5e95\u5c42\u662f\u5c01\u88c5\u597d\u4e86\u7684prepareStatement\uff1b"),(0,o.kt)("li",{parentName:"ul"},"ParammeterHandler \u5904\u7406SQL\u53c2\u6570\uff1b"),(0,o.kt)("li",{parentName:"ul"},"ResultHandler \u7ed3\u679c\u96c6ResultSet\u5c01\u88c5\u5904\u7406\u8fd4\u56de")),(0,o.kt)("h3",{id:"\u6267\u884c\u6d41\u7a0b"},"\u6267\u884c\u6d41\u7a0b"),(0,o.kt)("p",null,"SqlSession\u7684\u8fd0\u884c\u4e3b\u8981\u662f\u4f9d\u9760 Executor\u6267\u884c\u5668\u8c03\u7528\uff08\u8c03\u5ea6\uff09StatementHandler\u3001parameterHanlder\u3001ResultSetHandler\uff0cExecutor\u9996\u5148\u901a\u8fc7\u521b\u5efaStamentHandler\u6267\u884c\u9884\u7f16\u8bd1\u5e76\u8bbe\u7f6e\u53c2\u6570\u8fd0\u884c"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(55517).Z})),(0,o.kt)("h3",{id:"executor-\u6267\u884c\u5668"},"Executor \u6267\u884c\u5668"),(0,o.kt)("p",null,"\u771f\u6b63\u6267\u884cJava\u4e0e\u6570\u636e\u5e93\u7684\u4ea4\u4e92"),(0,o.kt)("h4",{id:"\u6267\u884c\u5668\u7c7b\u578b"},"\u6267\u884c\u5668\u7c7b\u578b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public enum ExecutorType {\n  SIMPLE, // \u666e\u901a\n  REUSE, // \u4f1a\u91cd\u7528\u9884\u5904\u7406\u5668\n  BATCH // \u91cd\u7528\u8bed\u53e5\u5e76\u6267\u884c\u6279\u91cf\u66f4\u65b0\n}\n")),(0,o.kt)("h4",{id:"executor"},"Executor"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface Executor {\n\n  ResultHandler NO_RESULT_HANDLER = null;\n\n    // \u66f4\u65b0\n  int update(MappedStatement ms, Object parameter) throws SQLException;\n\n    // \u67e5\u8be2\n  <E> List<E> query(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler, CacheKey cacheKey, BoundSql boundSql) throws SQLException;\n\n    // \u67e5\u8be2\n  <E> List<E> query(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler) throws SQLException;\n\n  <E> Cursor<E> queryCursor(MappedStatement ms, Object parameter, RowBounds rowBounds) throws SQLException;\n\n  List<BatchResult> flushStatements() throws SQLException;\n\n    // \u63d0\u4ea4\u4e8b\u52a1\n  void commit(boolean required) throws SQLException;\n    // \u56de\u6eda\u4e8b\u52a1\n  void rollback(boolean required) throws SQLException;\n\n    // \u521b\u5efa\u7f13\u5b58key\n  CacheKey createCacheKey(MappedStatement ms, Object parameterObject, RowBounds rowBounds, BoundSql boundSql);\n\n  boolean isCached(MappedStatement ms, CacheKey key);\n\n  void clearLocalCache();\n\n  void deferLoad(MappedStatement ms, MetaObject resultObject, String property, CacheKey key, Class<?> targetType);\n\n  Transaction getTransaction();\n\n  void close(boolean forceRollback);\n\n  boolean isClosed();\n\n  void setExecutorWrapper(Executor executor);\n}\n")),(0,o.kt)("h4",{id:"\u5982\u4f55\u521b\u5efa"},"\u5982\u4f55\u521b\u5efa"),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(54102).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u9009\u62e9\u76f8\u5e94\u7684\u6267\u884c\u5668\u751f\u6210")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"// DefaultSqlSessionFactory.java\n// execType = configuration.getDefaultExecutorType() \u4f7f\u7528 SIMPLE\nfinal Executor executor = configuration.newExecutor(tx, execType);\n\n// Configuration.java\npublic Executor newExecutor(Transaction transaction, ExecutorType executorType) {\n    // \u5224\u65ad\u6267\u884c\u5668\u7c7b\u578b\n    executorType = executorType == null ? defaultExecutorType : executorType;\n    executorType = executorType == null ? ExecutorType.SIMPLE : executorType;\n    Executor executor;\n    if (ExecutorType.BATCH == executorType) {\n      executor = new BatchExecutor(this, transaction);\n    } else if (ExecutorType.REUSE == executorType) {\n      executor = new ReuseExecutor(this, transaction);\n    } else {\n    // \u9ed8\u8ba4\n      executor = new SimpleExecutor(this, transaction);\n    }\n    // \u5f00\u542f\u7f13\u5b58\n    if (cacheEnabled) {\n      executor = new CachingExecutor(executor);\n    }\n    // \u63d2\u4ef6\n    executor = (Executor) interceptorChain.pluginAll(executor);\n    return executor;\n}\n")),(0,o.kt)("ol",{start:2},(0,o.kt)("li",{parentName:"ol"},"\u5728\u6267\u884c\u5668\u4e2dStatementHandler\u662f\u6839\u636eConfiguration\u6784\u5efa\u7684"),(0,o.kt)("li",{parentName:"ol"},"Executor\u4f1a\u6267\u884cStatementHandler\u7684prepare()\u65b9\u6cd5\u8fdb\u884c\u9884\u7f16\u8bd1----\x3e\u586b\u5165connection\u5bf9\u8c61\u7b49\u53c2\u6570----\x3e\u518d\u8c03\u7528parameterize()\u65b9\u6cd5\u8bbe\u7f6e\u53c2\u6570----\x3e\u5b8c\u6210\u9884\u7f16\u8bd1")),(0,o.kt)("h3",{id:"statementhandler"},"StatementHandler"),(0,o.kt)("p",null,"\u4e13\u95e8\u5904\u7406\u6570\u636e\u5e93\u4f1a\u8bdd,\u8fdb\u884c\u9884\u7f16\u8bd1\u5e76\u4e14\u8c03\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"ParameterHandler")," \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"setParameters()"),"\u65b9\u6cd5\u8bbe\u7f6e\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface StatementHandler {\n\n  Statement prepare(Connection connection, Integer transactionTimeout)\n      throws SQLException;\n\n  void parameterize(Statement statement)\n      throws SQLException;\n\n  void batch(Statement statement)\n      throws SQLException;\n\n  int update(Statement statement)\n      throws SQLException;\n\n  <E> List<E> query(Statement statement, ResultHandler resultHandler)\n      throws SQLException;\n\n  <E> Cursor<E> queryCursor(Statement statement)\n      throws SQLException;\n\n  BoundSql getBoundSql();\n\n  ParameterHandler getParameterHandler();\n\n}\n\n")),(0,o.kt)("p",null,"\u5904\u7406\u8fc7\u7a0b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"@Override\npublic <E> List<E> doQuery(MappedStatement ms, Object parameter, RowBounds rowBounds, ResultHandler resultHandler, BoundSql boundSql) throws SQLException {\n    Statement stmt = null;\n    try {\n      Configuration configuration = ms.getConfiguration();\n      StatementHandler handler = configuration.newStatementHandler(wrapper, ms, parameter, rowBounds, resultHandler, boundSql);\n      stmt = prepareStatement(handler, ms.getStatementLog());\n      return handler.query(stmt, resultHandler);\n    } finally {\n      closeStatement(stmt);\n    }\n  }\n\n// configuration\npublic StatementHandler newStatementHandler(Executor executor, MappedStatement mappedStatement, Object parameterObject, RowBounds rowBounds, ResultHandler resultHandler, BoundSql boundSql) {\n    // \u9009\u62e9\u5bf9\u5e94\u7684\u6570\u636e\u5e93\u4f1a\u8bdd\u5904\u7406\u5668 SimpleStatementHandler\u3001PrepareStatementHandler\u3001CallableStatementHandler\n    StatementHandler statementHandler = new RoutingStatementHandler(executor, mappedStatement, parameterObject, rowBounds, resultHandler, boundSql);\n    statementHandler = (StatementHandler) interceptorChain.pluginAll(statementHandler);\n    return statementHandler;\n}\n")),(0,o.kt)("h3",{id:"parameterhandler"},"ParameterHandler"),(0,o.kt)("p",null,"\u5bf9\u9884\u7f16\u8bd1\u4e2d\u53c2\u6570\u8fdb\u884c\u8bbe\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface ParameterHandler {\n  // \u83b7\u53d6\u53c2\u6570\n  Object getParameterObject();\n\n  // \u8bbe\u7f6e\u53c2\u6570\n  void setParameters(PreparedStatement ps) throws SQLException;\n}\n\n// \u9ed8\u8ba4\u7684\u8bbe\u7f6e\u5668\npublic class DefaultParameterHandler implements ParameterHandler {\n}\n")),(0,o.kt)("h3",{id:"resultsethandler"},"ResultSetHandler"),(0,o.kt)("p",null,"\u7ec4\u88c5\u7ed3\u679c\u8fd4\u56de\u7ed3\u679c\u96c6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-java"},"public interface ResultSetHandler {\n\n  <E> List<E> handleResultSets(Statement stmt) throws SQLException;\n\n  <E> Cursor<E> handleCursorResultSets(Statement stmt) throws SQLException;\n\n  void handleOutputParameters(CallableStatement cs) throws SQLException;\n}\n")),(0,o.kt)("h2",{id:"sql-mapper"},"SQL Mapper"),(0,o.kt)("p",null,"\u4f5c\u7528:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u53c2\u6570\u7c7b\u578b"),(0,o.kt)("li",{parentName:"ul"},"\u63cf\u8ff0\u7f13\u5b58"),(0,o.kt)("li",{parentName:"ul"},"\u63cf\u8ff0SQL\u8bed\u53e5"),(0,o.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u67e5\u8be2\u7ed3\u679c\u548cPOJO\u7684\u6620\u5c04\u5173\u7cfb")),(0,o.kt)("p",null,(0,o.kt)("img",{src:n(10482).Z})),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u57fa\u4e8ejava\u6ce8\u89e3\u751f\u6210"),(0,o.kt)("li",{parentName:"ol"},"xml\u6587\u4ef6\u5b9a\u4e49")),(0,o.kt)("h3",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"cache \u2013 \u8be5\u547d\u540d\u7a7a\u95f4\u7684\u7f13\u5b58\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"cache-ref \u2013 \u5f15\u7528\u5176\u5b83\u547d\u540d\u7a7a\u95f4\u7684\u7f13\u5b58\u914d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ul"},"resultMap \u2013 \u63cf\u8ff0\u5982\u4f55\u4ece\u6570\u636e\u5e93\u7ed3\u679c\u96c6\u4e2d\u52a0\u8f7d\u5bf9\u8c61\uff0c\u662f\u6700\u590d\u6742\u4e5f\u662f\u6700\u5f3a\u5927\u7684\u5143\u7d20\u3002"),(0,o.kt)("li",{parentName:"ul"},"sql \u2013 \u53ef\u88ab\u5176\u5b83\u8bed\u53e5\u5f15\u7528\u7684\u53ef\u91cd\u7528\u8bed\u53e5\u5757\u3002"),(0,o.kt)("li",{parentName:"ul"},"insert \u2013 \u6620\u5c04\u63d2\u5165\u8bed\u53e5\u3002"),(0,o.kt)("li",{parentName:"ul"},"update \u2013 \u6620\u5c04\u66f4\u65b0\u8bed\u53e5\u3002"),(0,o.kt)("li",{parentName:"ul"},"delete \u2013 \u6620\u5c04\u5220\u9664\u8bed\u53e5\u3002"),(0,o.kt)("li",{parentName:"ul"},"select \u2013 \u6620\u5c04\u67e5\u8be2\u8bed\u53e5\u3002")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs.advanced.way/docs/zoology/framework/mybatis/mybatis/%E6%98%A0%E5%B0%84%E5%99%A8"},"\u6620\u5c04\u5668")),(0,o.kt)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://mybatis.org/mybatis-3/zh/index.html"},"mybatis \u5b98\u65b9\u6587\u6863")))}p.isMDXComponent=!0},54102:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1352849-20180809235948087-1669183890-ff24334460f9c4139adc3797ce4f3d7a.png"},55517:function(e,t,n){"use strict";t.Z=n.p+"assets/images/1352849-20180810145614661-1822194301-75abe1db5752d818338294283b2e3f62.png"},10482:function(e,t,n){"use strict";t.Z=n.p+"assets/images/29336-20190708200228653-164755269-3d10d6457ed9004f099b3355d6a4b5f3.png"}}]);