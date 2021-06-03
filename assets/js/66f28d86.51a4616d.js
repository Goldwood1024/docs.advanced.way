(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3031],{3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return g},kt:function(){return u}});var r=e(67294);function a(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function p(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?p(Object(e),!0).forEach((function(n){a(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):p(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function o(t,n){if(null==t)return{};var e,r,a=function(t,n){if(null==t)return{};var e,r,a={},p=Object.keys(t);for(r=0;r<p.length;r++)e=p[r],n.indexOf(e)>=0||(a[e]=t[e]);return a}(t,n);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(t);for(r=0;r<p.length;r++)e=p[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(a[e]=t[e])}return a}var s=r.createContext({}),i=function(t){var n=r.useContext(s),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},g=function(t){var n=i(t.components);return r.createElement(s.Provider,{value:n},t.children)},k={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(t,n){var e=t.components,a=t.mdxType,p=t.originalType,s=t.parentName,g=o(t,["components","mdxType","originalType","parentName"]),m=i(e),u=a,c=m["".concat(s,".").concat(u)]||m[u]||k[u]||p;return e?r.createElement(c,l(l({ref:n},g),{},{components:e})):r.createElement(c,l({ref:n},g))}));function u(t,n){var e=arguments,a=n&&n.mdxType;if("string"==typeof t||a){var p=e.length,l=new Array(p);l[0]=m;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var i=2;i<p;i++)l[i]=e[i];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}m.displayName="MDXCreateElement"},84697:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return i},default:function(){return k}});var r=e(22122),a=e(19756),p=(e(67294),e(3905)),l=["components"],o={slug:"mysql-state",title:"mysql \u8fdb\u7a0b\u5e38\u89c1\u7684 State",tags:["mysql","sql","state","\u8fdb\u7a0b"]},s={permalink:"/docs.advanced.way/blog/mysql-state",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/blog/2021-05-25-mysql-state.md",source:"@site/blog/2021-05-25-mysql-state.md",title:"mysql \u8fdb\u7a0b\u5e38\u89c1\u7684 State",description:"\u901a\u8fc7show processlist\u67e5\u770bMySQL\u7684\u8fdb\u7a0b\u72b6\u6001\uff0c\u5728State\u5217\u4e0a\u9762\u7684\u72b6\u6001\u6709\u5982\u4e0b\u8fd9\u4e9b\uff1a",date:"2021-05-25T00:00:00.000Z",formattedDate:"May 25, 2021",tags:[{label:"mysql",permalink:"/docs.advanced.way/blog/tags/mysql"},{label:"sql",permalink:"/docs.advanced.way/blog/tags/sql"},{label:"state",permalink:"/docs.advanced.way/blog/tags/state"},{label:"\u8fdb\u7a0b",permalink:"/docs.advanced.way/blog/tags/\u8fdb\u7a0b"}],readingTime:1.54,truncated:!1,prevItem:{title:"\u552f\u4e00ID\u751f\u6210\u89c4\u5219",permalink:"/docs.advanced.way/blog/unique-id"},nextItem:{title:"mysql \u5e38\u7528\u7247\u6bb5",permalink:"/docs.advanced.way/blog/mysql"}},i=[],g={toc:i};function k(t){var n=t.components,e=(0,a.Z)(t,l);return(0,p.kt)("wrapper",(0,r.Z)({},g,e,{components:n,mdxType:"MDXLayout"}),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"\u901a\u8fc7show processlist\u67e5\u770bMySQL\u7684\u8fdb\u7a0b\u72b6\u6001\uff0c\u5728State\u5217\u4e0a\u9762\u7684\u72b6\u6001\u6709\u5982\u4e0b\u8fd9\u4e9b\uff1a")),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Analyzing"),"\n\u7ebf\u7a0b\u5bf9MyISAM \u8868\u7684\u7edf\u8ba1\u4fe1\u606f\u505a\u5206\u6790(\u4f8b\u5982, ANALYZE TABLE )\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"checking permissions"),"\n\u7ebf\u7a0b\u68c0\u67e5\u670d\u52a1\u5668\u662f\u5426\u5177\u6709\u6240\u9700\u7684\u6743\u9650\u6765\u6267\u884c\u8be5\u8bed\u53e5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Checking table"),"\n\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u8868\u68c0\u67e5\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"cleaning up"),"\n\u7ebf\u7a0b\u5904\u7406\u4e00\u4e2a\u547d\u4ee4\uff0c\u5e76\u6b63\u51c6\u5907\u91ca\u653e\u5185\u5b58\u548c\u91cd\u7f6e\u67d0\u4e9b\u72b6\u6001\u53d8\u91cf\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"closing tables"),"\n\u7ebf\u7a0b\u6539\u53d8\u8868\u4e2d\u7684\u6570\u636e\u5237\u65b0\u5230\u78c1\u76d8\u548c\u5173\u95ed\u4f7f\u7528\u7684\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"converting HEAP to MyISAM"),"\n\u7ebf\u7a0b\u4ece\u8f6c\u6362\u5185\u90e8\u4e34\u65f6\u8868MEMORY\u5185\u5b58\u8868\u5230\u78c1\u76d8MyISAM\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"copy to tmp table"),"\n\u7ebf\u7a0b\u6b63\u5728\u5904\u7406\u4e00\u4e2aALTER TABLE\u8bed\u53e5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Copying to group table"),"\n\u5982\u679c\u8bed\u53e5\u6709\u4e0d\u540c\u7684ORDER BY\u548cGROUP BY\u6807\u51c6\uff0c\u6309\u7ec4\u6392\u5e8f\u5e76\u590d\u5236\u5230\u4e00\u4e2a\u4e34\u65f6\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Copying to tmp table"),"\n\u670d\u52a1\u5668\u590d\u5236\u5230\u5185\u5b58\u4e2d\u7684\u4e34\u65f6\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Copying to tmp table on disk"),"\n\u670d\u52a1\u5668\u590d\u5236\u5230\u4e00\u4e2a\u4e34\u65f6\u8868\u5728\u78c1\u76d8\u4e0a\u3002 "),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Creating index"),"\n\u7ebf\u7a0b\u6b63\u5728\u5904\u7406ALTER TABLE ... ENABLE KEYS\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Creating sort index"),"\n\u7ebf\u7a0b\u6b63\u5728\u5904\u7406\u4e00\u4e2aSELECT\uff0c\u4f7f\u7528\u5185\u90e8\u4e34\u65f6\u8868\u89e3\u51b3\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"creating table"),"\n\u7ebf\u7a0b\u521b\u5efa\u4e00\u4e2a\u8868\uff0c \u8fd9\u5305\u62ec\u5efa\u7acb\u4e34\u65f6\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Creating tmp table"),"\n\u7ebf\u7a0b\u521b\u5efa\u4e00\u4e2a\u4e34\u65f6\u8868\u5728\u5185\u5b58\u6216\u78c1\u76d8\u4e0a\u3002 \u5982\u679c\u8868\u662f\u5728\u5185\u5b58\u4e2d\u521b\u5efa\uff0c\u4f46\u540e\u6765\u88ab\u8f6c\u6362\u6210\u4e00\u4e2a\u78c1\u76d8\u4e0a\u7684\u8868\uff0c\u5728\u8be5\u64cd\u4f5c\u72b6\u6001\u4e3aCopying to tmp table on disk\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"deleting from main table"),"\n\u670d\u52a1\u5668\u6b63\u5728\u6267\u884c\u591a\u8868\u5220\u9664\u7684\u7b2c\u4e00\u90e8\u5206\u3002 \u5b83\u53ea\u80fd\u4ece\u7b2c\u4e00\u4e2a\u8868\u4e2d\u5220\u9664\uff0c\u5e76\u4fdd\u5b58\u5217\u548c\u5220\u9664\u4ece\u5176\u4ed6\u8868(\u53c2\u8003)\u504f\u79fb\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"deleting from reference tables"),"\n\u670d\u52a1\u5668\u6b63\u5728\u6267\u884c\u591a\u8868\u5220\u9664\u7684\u7b2c\u4e8c\u90e8\u5206\uff0c\u4ece\u5176\u4ed6\u8868\u4e2d\u5220\u9664\u5339\u914d\u7684\u884c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"discard_or_import_tablespace"),"\n\u7ebf\u7a0b\u6b63\u5728\u5904\u7406\u4e00\u4e2aALTER TABLE ... DISCARD TABLESPACE\u6216ALTER TABLE ... IMPORT TABLESPACE\u8bed\u53e5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"end"),"\n\u8fd9\u53d1\u751f\u5728\u6700\u540e\u7684\u6e05\u7406\u5de5\u4f5c\uff0c\u6709ALTER TABLE , CREATE VIEW , DELETE , INSERT , SELECT\u6216UPDATE\u8bed\u53e5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"executing"),"\n\u7ebf\u7a0b\u5df2\u5f00\u59cb\u6267\u884c\u8bed\u53e5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Execution of init_command"),"\n\u7ebf\u7a0b\u6b63\u5728\u6267\u884c\u4e2d\u7684init_command\u7cfb\u7edf\u53d8\u91cf\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"freeing items"),"\n\u7ebf\u7a0b\u5df2\u6267\u884c\u7684\u547d\u4ee4\u3002 \u91ca\u653e\u4e00\u4e9b\u5728\u8fd9\u79cd\u72b6\u6001\u4e0b\u5b8c\u6210\u7684\u9879\u76ee\uff0c\u6d89\u53ca\u7684\u67e5\u8be2\u7f13\u5b58\u3002 \u8fd9\u79cd\u72b6\u6001\u901a\u5e38\u540e\u8ddfcleaning up \u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Flushing tables"),"\n\u7ebf\u7a0b\u6b63\u5728\u6267\u884cFLUSH TABLES \uff0c\u7b49\u5f85\u6240\u6709\u7ebf\u7a0b\u5173\u95ed\u5176\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"FULLTEXT initialization"),"\n\u8be5\u670d\u52a1\u5668\u662f\u51c6\u5907\u6267\u884c\u4e00\u4e2a\u81ea\u7136\u8bed\u8a00\u7684\u5168\u6587\u68c0\u7d22\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"init"),"\n\u5728\u53d1\u751f\u4e4b\u524d\u7684\u521d\u59cb\u5316ALTER TABLE , DELETE , INSERT , SELECT\u6216UPDATE\u8bed\u53e5\u3002 \u670d\u52a1\u5668\u5728\u8fd9\u79cd\u72b6\u6001\u4e0b\u91c7\u53d6\u7684\u884c\u52a8\u5305\u62ec\u51b2\u6d17\u4e8c\u8fdb\u5236\u65e5\u5fd7\u4e2dInnoDB\u65e5\u5fd7,\u548c\u4e00\u4e9b\u67e5\u8be2\u7f13\u5b58\u6e05\u7406\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Killed"),"\n\u6709\u4eba\u53d1\u9001\u4e00\u4e2aKILL\u7ebf\u7a0b\u7684\u8bed\u53e5,\u5b83\u5e94\u8be5\u4e2d\u6b62\u5728\u4e0b\u4e00\u6b21\u68c0\u67e5\u6740\u6b7b\u6807\u5fd7\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Locked"),"\n\u67e5\u8be2\u88ab\u9501\u5b9a\u7531\u53e6\u4e00\u4e2a\u67e5\u8be2\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"logging slow query"),"\n\u7ebf\u7a0b\u6b63\u5728\u5199\u6162\u67e5\u8be2\u65e5\u5fd7\u7684\u8bed\u53e5\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"NULL"),"\n\u8fd9\u79cd\u72b6\u6001\u662f\u7528\u4e8eSHOW PROCESSLIST\u72b6\u6001\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"login"),"\n\u8fde\u63a5\u7ebf\u7a0b\u7684\u521d\u59cb\u72b6\u6001\uff0c\u76f4\u5230\u5ba2\u6237\u7aef\u5df2\u6210\u529f\u901a\u8fc7\u8eab\u4efd\u9a8c\u8bc1\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Opening tables , Opening table"),"\n\u7ebf\u7a0b\u8bd5\u56fe\u6253\u5f00\u4e00\u4e2a\u8868\u3002 \u8fd9\u5e94\u8be5\u662f\u975e\u5e38\u5feb\u7684\u8fc7\u7a0b\u4e2d\uff0c\u9664\u975e\u6709\u963b\u6b62\u6253\u5f00\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"optimizing"),"\n\u670d\u52a1\u5668\u6267\u884c\u67e5\u8be2\u7684\u521d\u59cb\u4f18\u5316\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"preparing"),"\n\u8fd9\u79cd\u72b6\u6001\u51fa\u73b0\u5728\u67e5\u8be2\u4f18\u5316\u8fc7\u7a0b\u4e2d\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Purging old relay logs"),"\n\u7ebf\u7a0b\u662f\u6d88\u9664\u4e0d\u5fc5\u8981\u7684\u4e2d\u7ee7\u65e5\u5fd7\u6587\u4ef6\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"query end"),"\n\u8fd9\u79cd\u72b6\u6001\u53d1\u751f\u540e\u5904\u7406\u67e5\u8be2\uff0c\u4f46\u5728\u6b64freeing items\u7684\u9879\u76ee\u72b6\u6001\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Reading from net"),"\n\u670d\u52a1\u5668\u8bfb\u7f51\u7edc\u6570\u636e\u5305\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Removing duplicates"),"\n\u67e5\u8be2\u4f7f\u7528SELECT DISTINCT\u5728\u8fd9\u6837\u4e00\u79cd\u65b9\u5f0f\u3002 MySQL\u9700\u8981\u4e00\u4e2a\u989d\u5916\u7684\u7684\u9636\u6bb5\uff0c\u5c06\u7ed3\u679c\u53d1\u9001\u5230\u5ba2\u6237\u7aef\u4e4b\u524d\u5220\u9664\u6240\u6709\u91cd\u590d\u884c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"removing tmp table"),"\n\u7ebf\u7a0b\u79fb\u9664\u4e34\u65f6\u8868\u3002 \u5982\u679c\u6ca1\u6709\u521b\u5efa\u4e34\u65f6\u8868\uff0c\u8fd9\u79cd\u72b6\u6001\u662f\u4e0d\u4f7f\u7528\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"rename"),"\n\u7ebf\u7a0b\u91cd\u547d\u540d\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"rename result table"),"\n\u7ebf\u7a0b\u6b63\u5728\u5904\u7406\u4e00\u4e2aALTER TABLE\u8bed\u53e5\uff0c\u521b\u5efa\u65b0\u8868\u5e76\u91cd\u65b0\u547d\u540d\u5b83\u6765\u53d6\u4ee3\u539f\u6765\u7684\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Reopen tables"),"\n\u7ebf\u7a0b\u6709\u4e00\u4e2a\u8868\u9501\uff0c\u5e76\u8bd5\u56fe\u91cd\u65b0\u6253\u5f00\u5b83\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Repair by sorting"),"\n\u4f7f\u7528\u6392\u5e8f\u4fee\u590d\u7d22\u5f15\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Repair done"),"\n\u4fee\u590d\u5b8c\u6210\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Repair with keycache"),"\n\u4fee\u590d\u4f7f\u7528\u952e\u7f13\u5b58\u3002\u7528\u4e8emyisam\u8868\uff0c\u51fa\u73b0\u8be5\u72b6\u6001\u5e94\u52a0\u5927myisam_max_sort_file_size\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Rolling back"),"\n\u56de\u6eda\u4e8b\u52a1\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Saving state"),"\n\u4fdd\u5b58\u72b6\u6001\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Searching rows for update"),"\n\u7ebf\u7a0b\u505a\u7b2c\u4e00\u9636\u6bb5\u524d\u66f4\u65b0\u4ed6\u4eec\u627e\u5230\u6240\u6709\u5339\u914d\u7684\u884c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Sending data"),"\n\u7ebf\u7a0b\u5904\u7406\u4e00\u4e2aSELECT\u8bed\u53e5\uff0c\u5c06\u6570\u636e\u53d1\u9001\u5230\u5ba2\u6237\u7aef\u3002 \u56e0\u4e3a\u5728\u8fd9\u4e2a\u72b6\u6001\u53d1\u751f\u7684\u64cd\u4f5c\u5f80\u5f80\u6267\u884c\u5927\u91cf\u7684\u78c1\u76d8\u8bbf\u95ee(\u8bfb\u53d6)\uff0c\u67e5\u8be2\u7684\u751f\u547d\u5468\u671f\u6700\u957f\u7684\u8fd0\u884c\u72b6\u6001\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"setup"),"\n\u7ebf\u7a0b\u5f00\u59cb\u4e00\u4e2aALTER TABLE\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Sorting for group"),"\n\u7ebf\u7a0b\u505a\u4e00\u4e2a\u5206\u7ec4\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Sorting for order"),"\n\u7ebf\u7a0b\u505aORDER BY\u6392\u5e8f\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Sorting index"),"\n\u7ebf\u7a0b\u6392\u5e8f\u7d22\u5f15\uff0c\u66f4\u9ad8\u6548\u7684\u8bbf\u95eeMyISAM\u8868\u7684\u4f18\u5316\u64cd\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Sorting result"),"\n\u5bf9\u4e8eSELECT\u8bed\u53e5\uff0c\u8fd9\u662fCreating sort index\u7c7b\u4f3c,\u4f46\u4e0d\u7528\u4e34\u65f6\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"statistics"),"\n\u670d\u52a1\u5668\u8ba1\u7b97\u7edf\u8ba1\u6570\u636e\uff0c\u4ee5\u5236\u5b9a\u4e00\u4e2a\u67e5\u8be2\u6267\u884c\u8ba1\u5212\u3002 \u5982\u679c\u4e00\u4e2a\u7ebf\u7a0b\u5904\u4e8e\u8fd9\u79cd\u72b6\u6001\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\uff0c\u53ef\u80fd\u662f\u78c1\u76d8\u5728\u6267\u884c\u5176\u4ed6\u5de5\u4f5c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"System lock"),"\n\u8be5\u7ebf\u7a0b\u6b63\u5728\u7b49\u5f85\u5185\u90e8\u6216\u5916\u90e8\u7684\u7cfb\u7edf\u9501\u8868\u3002 \u53ef\u4ee5\u4e0e\u5916\u90e8\u7cfb\u7edf--skip-external-locking\u9501\u5b9a\u9009\u9879\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Table lock"),"\n\u7ebf\u7a0b\u8981\u6c42\u5185\u90e8\u8868\u9501\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Updating"),"\n\u7ebf\u7a0b\u6b63\u5728\u5bfb\u627e\u8981\u66f4\u65b0\u7684\u884c\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"updating main table"),"\n\u670d\u52a1\u5668\u6b63\u5728\u6267\u884c\u591a\u8868\u66f4\u65b0\u7684\u7b2c\u4e00\u90e8\u5206\uff0c\u5b83\u53ea\u66f4\u65b0\u7b2c\u4e00\u4e2a\u8868\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"updating reference tables"),"\n\u670d\u52a1\u5668\u6b63\u5728\u6267\u884c\u591a\u8868\u66f4\u65b0\u7684\u7b2c\u4e8c\u90e8\u5206\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"User lock"),"\n\u7ebf\u7a0b\u8bf7\u6c42\u6216\u8981\u6c42\u4e0e\u9501\u7b49\u5f85GET_LOCK()\u8c03\u7528\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Waiting for release of readlock"),"\n\u7ebf\u7a0b\u6b63\u5728\u7b49\u5f85\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u7684\u9501\u88ab\u91ca\u653e\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Waiting for tables , Waiting for table"),"\n\u7ebf\u7a0b\u5f97\u5230\u4e00\u4e2a\u8868\u7684\u57fa\u672c\u7ed3\u6784\u53d1\u751f\u4e86\u53d8\u5316\u7684\u901a\u77e5\uff0c\u5b83\u9700\u8981\u91cd\u65b0\u6253\u5f00\u8868\uff0c\u4ee5\u83b7\u53d6\u65b0\u7684\u7ed3\u6784\u3002 \u5fc5\u987b\u7b49\u5230\u6240\u6709\u5176\u4ed6\u7ebf\u7a0b\u5df2\u7ecf\u5173\u95ed\u8868\u3002\n\u5982\u679c\u53e6\u4e00\u4e2a\u7ebf\u7a0b\u5df2FLUSH TABLES\u6216\u8868\u6267\u884c\u4e0b\u9762\u7684\u8bed\u53e5\uff1aFLUSH TABLES tbl_name\u3001ALTER TABLE\u3001RENAME TABLE\u3001REPAIR TABLE\u3001ANALYZE TABLE\u3001OPTIMIZE TABLE\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Waiting on cond"),"\n\u5728\u8be5\u7ebf\u7a0b\u6b63\u5728\u7b49\u5f85\u4e00\u4e2a\u6761\u4ef6\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Waiting to get readlock"),"\n\u7ebf\u7a0b\u5df2\u53d1\u51fa\u4e00\u4e2aFLUSH TABLES WITH READ LOCK\u8bed\u53e5\u83b7\u5f97\u5168\u5c40\u8bfb\u9501\uff0c\u5e76\u6b63\u5728\u7b49\u5f85\u83b7\u53d6\u9501\u3002"),(0,p.kt)("p",null,(0,p.kt)("strong",{parentName:"p"},"Writing to net\u3001waiting for net"),"\n\u670d\u52a1\u5668\u5199\u4e00\u4e2a\u6570\u636e\u5305\u6d3b\u7b49\u5f85\u7f51\u7edc\uff0c\u8981\u662f\u5927\u91cf\u51fa\u73b0\u8bf7\u8fc5\u901f\u68c0\u67e5\u6570\u636e\u5e93\u5230\u524d\u7aef\u7684\u7f51\u7edc\u8fde\u63a5\u72b6\u6001\u548c\u6d41\u91cf\u3002"))}k.isMDXComponent=!0}}]);