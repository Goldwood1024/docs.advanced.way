(window.webpackJsonp=window.webpackJsonp||[]).push([[180],{481:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return u}));var a=n(3),r=n(7),l=(n(0),n(505)),c={title:"\u5e38\u7528\u547d\u4ee4"},b={unversionedId:"linux/command/\u5e38\u7528\u547d\u4ee4",id:"linux/command/\u5e38\u7528\u547d\u4ee4",isDocsHomePage:!1,title:"\u5e38\u7528\u547d\u4ee4",description:"Linux\u547d\u4ee4",source:"@site/docs/linux/command/\u5e38\u7528\u547d\u4ee4.md",slug:"/linux/command/\u5e38\u7528\u547d\u4ee4",permalink:"/docs.advanced.way/docs/linux/command/\u5e38\u7528\u547d\u4ee4",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/linux/command/\u5e38\u7528\u547d\u4ee4.md",version:"current",lastUpdatedAt:1616396760,formattedLastUpdatedAt:"3/22/2021",sidebar:"linux",previous:{title:"Linux",permalink:"/docs.advanced.way/docs/linux/"},next:{title:"LVM",permalink:"/docs.advanced.way/docs/linux/command/lvm"}},o=[{value:"Linux\u547d\u4ee4",id:"linux\u547d\u4ee4",children:[]},{value:"javap",id:"javap",children:[{value:"\u5e38\u91cf\u6c60",id:"\u5e38\u91cf\u6c60",children:[]},{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]}]},{value:"uptime",id:"uptime",children:[]},{value:"crontab",id:"crontab",children:[{value:"\u547d\u4ee4",id:"\u547d\u4ee4",children:[]},{value:"\u8868\u8fbe\u5f0f\u683c\u5f0f",id:"\u8868\u8fbe\u5f0f\u683c\u5f0f",children:[]},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",children:[]}]},{value:"netstat",id:"netstat",children:[]},{value:"lsof",id:"lsof",children:[]},{value:"\u94fe\u63a5",id:"\u94fe\u63a5",children:[]}],i={toc:o};function u(e){var t=e.components,c=Object(r.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},i,c,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"linux\u547d\u4ee4"},"Linux\u547d\u4ee4"),Object(l.b)("p",null,Object(l.b)("img",{src:n(735).default}),"\n",Object(l.b)("img",{src:n(736).default}),"\n",Object(l.b)("img",{src:n(737).default})),Object(l.b)("h2",{id:"javap"},"javap"),Object(l.b)("p",null,"javap\u662fjdk\u81ea\u5e26\u7684\u53cd\u89e3\u6790\u5de5\u5177\u3002"),Object(l.b)("p",null,"\u5b83\u7684\u4f5c\u7528\u5c31\u662f\u6839\u636eclass\u5b57\u8282\u7801\u6587\u4ef6\uff0c\u53cd\u89e3\u6790\u51fa\u5f53\u524d\u7c7b\u5bf9\u5e94\u7684code\u533a\uff08\u6c47\u7f16\u6307\u4ee4\uff09\u3001\u672c\u5730\u53d8\u91cf\u8868\u3001\u5f02\u5e38\u8868\u548c\u4ee3\u7801\u884c\u504f\u79fb\u91cf\u6620\u5c04\u8868\u3001\u5e38\u91cf\u6c60\u7b49\u7b49\u4fe1\u606f\u3002"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-kotlin"}," -help  --help  -?        \u8f93\u51fa\u6b64\u7528\u6cd5\u6d88\u606f\n -version                 \u7248\u672c\u4fe1\u606f\uff0c\u5176\u5b9e\u662f\u5f53\u524djavap\u6240\u5728jdk\u7684\u7248\u672c\u4fe1\u606f\uff0c\u4e0d\u662fclass\u5728\u54ea\u4e2ajdk\u4e0b\u751f\u6210\u7684\u3002\n -v  -verbose             \u8f93\u51fa\u9644\u52a0\u4fe1\u606f\uff08\u5305\u62ec\u884c\u53f7\u3001\u672c\u5730\u53d8\u91cf\u8868\uff0c\u53cd\u6c47\u7f16\u7b49\u8be6\u7ec6\u4fe1\u606f\uff09\n -l                         \u8f93\u51fa\u884c\u53f7\u548c\u672c\u5730\u53d8\u91cf\u8868\n -public                    \u4ec5\u663e\u793a\u516c\u5171\u7c7b\u548c\u6210\u5458\n -protected               \u663e\u793a\u53d7\u4fdd\u62a4\u7684/\u516c\u5171\u7c7b\u548c\u6210\u5458\n -package                 \u663e\u793a\u7a0b\u5e8f\u5305/\u53d7\u4fdd\u62a4\u7684/\u516c\u5171\u7c7b \u548c\u6210\u5458 (\u9ed8\u8ba4)\n -p  -private             \u663e\u793a\u6240\u6709\u7c7b\u548c\u6210\u5458\n -c                       \u5bf9\u4ee3\u7801\u8fdb\u884c\u53cd\u6c47\u7f16\n -s                       \u8f93\u51fa\u5185\u90e8\u7c7b\u578b\u7b7e\u540d\n -sysinfo                 \u663e\u793a\u6b63\u5728\u5904\u7406\u7684\u7c7b\u7684\u7cfb\u7edf\u4fe1\u606f (\u8def\u5f84, \u5927\u5c0f, \u65e5\u671f, MD5 \u6563\u5217)\n -constants               \u663e\u793a\u9759\u6001\u6700\u7ec8\u5e38\u91cf\n -classpath <path>        \u6307\u5b9a\u67e5\u627e\u7528\u6237\u7c7b\u6587\u4ef6\u7684\u4f4d\u7f6e\n -bootclasspath <path>    \u8986\u76d6\u5f15\u5bfc\u7c7b\u6587\u4ef6\u7684\u4f4d\u7f6e\n")),Object(l.b)("h3",{id:"\u5e38\u91cf\u6c60"},"\u5e38\u91cf\u6c60"),Object(l.b)("p",null,"JVM \u7ef4\u62a4\u4e86\u4e00\u4e2a\u6309\u7c7b\u578b\u533a\u5206\u7684\u5e38\u91cf\u6c60\uff0c\u4e00\u4e2a\u7c7b\u4f3c\u4e8e\u7b26\u53f7\u8868\u7684\u8fd0\u884c\u65f6\u6570\u636e\u7ed3\u6784\u3002\u5c3d\u7ba1\u5b83\u5305\u542b\u66f4\u591a\u6570\u636e\u3002Java \u5b57\u8282\u7801\u9700\u8981\u6570\u636e\u3002\u8fd9\u4e2a\u6570\u636e\u7ecf\u5e38\u56e0\u4e3a\u592a\u5927\u4e0d\u80fd\u76f4\u63a5\u5b58\u50a8\u5728\u5b57\u8282\u7801\u4e2d\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u5b58\u50a8\u5728\u5e38\u91cf\u6c60\u4e2d\uff0c\u5b57\u8282\u7801\u5305\u542b\u8fd9\u4e2a\u5e38\u91cf\u6c60\u7684\u5f15\u7528\u3002"),Object(l.b)("p",null,"\u5e38\u91cf\u6c60\u4e2d\u53ef\u4ee5\u5b58\u50a8\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u6570\u5b57\u578b"),Object(l.b)("li",{parentName:"ul"},"\u5b57\u7b26\u4e32\u578b"),Object(l.b)("li",{parentName:"ul"},"\u7c7b\u5f15\u7528\u578b"),Object(l.b)("li",{parentName:"ul"},"\u57df\u5f15\u7528\u578b"),Object(l.b)("li",{parentName:"ul"},"\u65b9\u6cd5\u5f15\u7528")),Object(l.b)("h3",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),Object(l.b)("p",null,"\u6bcf\u4e00\u4e2a\u65b9\u6cd5\u5305\u542b\u56db\u4e2a\u533a\u57df\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"\u7b7e\u540d\u548c\u8bbf\u95ee\u6807\u7b7e"),Object(l.b)("li",{parentName:"ul"},"\u5b57\u8282\u7801"),Object(l.b)("li",{parentName:"ul"},"LineNumberTable\uff1a\u4e3a\u8c03\u8bd5\u5668\u63d0\u4f9b\u6e90\u7801\u4e2d\u7684\u6bcf\u4e00\u884c\u5bf9\u5e94\u7684\u5b57\u8282\u7801\u4fe1\u606f\u3002"),Object(l.b)("li",{parentName:"ul"},"LocalVariableTable\uff1a\u5217\u51fa\u4e86\u6240\u6709\u6808\u5e27\u4e2d\u7684\u5c40\u90e8\u53d8\u91cf\u3002")),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u64cd\u4f5c\u7801"),Object(l.b)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"aload0"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u64cd\u4f5c\u7801\u662faload\u683c\u5f0f\u64cd\u4f5c\u7801\u4e2d\u7684\u4e00\u4e2a\u3002\u5b83\u4eec\u7528\u6765\u628a\u5bf9\u8c61\u5f15\u7528\u52a0\u8f7d\u5230\u64cd\u4f5c\u7801\u6808\u3002 \u8868\u793a\u6b63\u5728\u88ab\u8bbf\u95ee\u7684\u5c40\u90e8\u53d8\u91cf\u6570\u7ec4\u7684\u4f4d\u7f6e\uff0c\u4f46\u53ea\u80fd\u662f0\u30011\u30012\u30013 \u4e2d\u7684\u4e00\u4e2a\u3002\u8fd8\u6709\u4e00\u4e9b\u5176\u5b83\u7c7b\u4f3c\u7684\u64cd\u4f5c\u7801\u7528\u6765\u8f7d\u5165\u975e\u5bf9\u8c61\u5f15\u7528\u7684\u6570\u636e\uff0c\u5982iload, lload, float \u548c dload\u3002\u5176\u4e2d i \u8868\u793a int\uff0cl \u8868\u793a long\uff0cf \u8868\u793a float\uff0cd \u8868\u793a double\u3002\u5c40\u90e8\u53d8\u91cf\u6570\u7ec4\u4f4d\u7f6e\u5927\u4e8e 3 \u7684\u5c40\u90e8\u53d8\u91cf\u53ef\u4ee5\u7528 iload, lload, float, dload \u548c aload \u8f7d\u5165\u3002\u8fd9\u4e9b\u64cd\u4f5c\u7801\u90fd\u53ea\u9700\u8981\u4e00\u4e2a\u64cd\u4f5c\u6570\uff0c\u5373\u6570\u7ec4\u4e2d\u7684\u4f4d\u7f6e")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"ldc"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u64cd\u4f5c\u7801\u7528\u6765\u5c06\u5e38\u91cf\u4ece\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u538b\u6808\u5230\u64cd\u4f5c\u6570\u6808")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"getstatic"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u64cd\u4f5c\u7801\u7528\u6765\u628a\u4e00\u4e2a\u9759\u6001\u53d8\u91cf\u4ece\u8fd0\u884c\u65f6\u5e38\u91cf\u6c60\u7684\u9759\u6001\u53d8\u91cf\u5217\u8868\u4e2d\u538b\u6808\u5230\u64cd\u4f5c\u6570\u6808")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"return"),Object(l.b)("td",{parentName:"tr",align:null},"\u8fd9\u4e2a\u64cd\u4f5c\u7801\u5c5e\u4e8eireturn\u3001lreturn\u3001freturn\u3001dreturn\u3001areturn \u548c return \u64cd\u4f5c\u7801\u7ec4\u3002\u6bcf\u4e2a\u64cd\u4f5c\u7801\u8fd4\u56de\u4e00\u79cd\u7c7b\u578b\u7684\u8fd4\u56de\u503c\uff0c\u5176\u4e2d i \u8868\u793a int\uff0cl \u8868\u793a long\uff0cf \u8868\u793a float\uff0cd \u8868\u793a double\uff0ca \u8868\u793a \u5bf9\u8c61\u5f15\u7528\u3002\u6ca1\u6709\u524d\u7f00\u7c7b\u578b\u5b57\u6bcd\u7684 return \u8868\u793a\u8fd4\u56de void")))),Object(l.b)("table",null,Object(l.b)("thead",{parentName:"table"},Object(l.b)("tr",{parentName:"thead"},Object(l.b)("th",{parentName:"tr",align:null},"\u51fd\u6570\u8c03\u7528\u64cd\u4f5c\u7801"),Object(l.b)("th",{parentName:"tr",align:null},"\u4f5c\u7528"))),Object(l.b)("tbody",{parentName:"table"},Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"invokestatic"),Object(l.b)("td",{parentName:"tr",align:null},"\u8c03\u7528\u7c7b\u65b9\u6cd5\uff08\u9759\u6001\u7ed1\u5b9a\uff0c\u901f\u5ea6\u5feb\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"invokevirtual"),Object(l.b)("td",{parentName:"tr",align:null},"\u6307\u4ee4\u8c03\u7528\u4e00\u4e2a\u5bf9\u8c61\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff08\u52a8\u6001\u7ed1\u5b9a\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"invokespecial"),Object(l.b)("td",{parentName:"tr",align:null},"\u6307\u4ee4\u8c03\u7528\u5b9e\u4f8b\u521d\u59cb\u5316\u65b9\u6cd5\u3001\u79c1\u6709\u65b9\u6cd5\u3001\u7236\u7c7b\u65b9\u6cd5\u3002\uff08\u9759\u6001\u7ed1\u5b9a\uff0c\u901f\u5ea6\u5feb\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"invokeinterface"),Object(l.b)("td",{parentName:"tr",align:null},"\u8c03\u7528\u5f15\u7528\u7c7b\u578b\u4e3ainterface\u7684\u5b9e\u4f8b\u65b9\u6cd5\uff08\u52a8\u6001\u7ed1\u5b9a\uff09")),Object(l.b)("tr",{parentName:"tbody"},Object(l.b)("td",{parentName:"tr",align:null},"invokedynamic"),Object(l.b)("td",{parentName:"tr",align:null},"JDK 7\u5f15\u5165\u7684\uff0c\u4e3b\u8981\u662f\u4e3a\u4e86\u652f\u6301\u52a8\u6001\u8bed\u8a00\u7684\u65b9\u6cd5\u8c03\u7528")))),Object(l.b)("h2",{id:"uptime"},"uptime"),Object(l.b)("p",null,"\u67e5\u770b\u673a\u5668\u7684\u8d1f\u8f7d\u60c5\u51b5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# uptime\n 22:24:34 up  2:14,  2 users,  load average: 0.00, 0.01, 0.05\n")),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"\u201c22:24:34\u201c\u8868\u793a\u5f53\u524d\u65f6\u95f4\n\u201cup 2:14\u201c \u8868\u793a\u7cfb\u7edf\u5df2\u7ecf\u8fde\u7eed\u8fd0\u884c2\u5c0f\u65f614\u5206\n\u201cload average: 0.00, 0.01, 0.05\u201c \u4e2d\u663e\u793a\u7684\u5206\u522b\u662f\u7cfb\u7edf\u8fc7\u53bb1\u5206\u949f\u30015\u5206\u949f\u548c15\u5206\u949f\u7684\u5e73\u5747\u8d1f\u8f7d")),Object(l.b)("h2",{id:"crontab"},"crontab"),Object(l.b)("p",null,"Linux crontab \u662f\u7528\u6765\u5b9a\u671f\u6267\u884c\u7a0b\u5e8f\u7684\u547d\u4ee4"),Object(l.b)("h3",{id:"\u547d\u4ee4"},"\u547d\u4ee4"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"crontab \u2013e : \u4fee\u6539 crontab \u6587\u4ef6\uff0c\u5982\u679c\u6587\u4ef6\u4e0d\u5b58\u5728\u4f1a\u81ea\u52a8\u521b\u5efa\u3002 \ncrontab \u2013l : \u663e\u793a crontab \u6587\u4ef6\u3002 \ncrontab -r : \u5220\u9664 crontab \u6587\u4ef6\u3002\ncrontab -ir : \u5220\u9664 crontab \u6587\u4ef6\u524d\u63d0\u9192\u7528\u6237\n")),Object(l.b)("h3",{id:"\u8868\u8fbe\u5f0f\u683c\u5f0f"},"\u8868\u8fbe\u5f0f\u683c\u5f0f"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"minute hour day-of-month month-of-year day-of-week commands\n\n*    *    *    *    *\n-    -    -    -    -\n|    |    |    |    |\n|    |    |    |    +----- \u661f\u671f\u4e2d\u661f\u671f\u51e0 (0 - 7) (\u661f\u671f\u5929 \u4e3a0)\n|    |    |    +---------- \u6708\u4efd (1 - 12) \n|    |    +--------------- \u4e00\u4e2a\u6708\u4e2d\u7684\u7b2c\u51e0\u5929 (1 - 31)\n|    +-------------------- \u5c0f\u65f6 (0 - 23)\n+------------------------- \u5206\u949f (0 - 59)\n")),Object(l.b)("p",null,"\u8bf4\u660e"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'\u5408\u6cd5\u503c\u4e3a\uff1a00-59 00-23 01-31 01-12 0-6 (0 is sunday) \n\u9664\u4e86\u6570\u5b57\u8fd8\u6709\u51e0\u4e2a\u7279\u6b8a\u7684\u7b26\u53f7\uff1a"*"\u3001"/"\u548c"-"\u3001","\n*\u4ee3\u8868\u6240\u6709\u7684\u53d6\u503c\u8303\u56f4\u5185\u7684\u6570\u5b57\n"/"\u4ee3\u8868\u6bcf\u7684\u610f\u601d,"/5"\u8868\u793a\u6bcf5\u4e2a\u5355\u4f4d\n"-"\u4ee3\u8868\u4ece\u67d0\u4e2a\u6570\u5b57\u5230\u67d0\u4e2a\u6570\u5b57\n","\u5206\u5f00\u51e0\u4e2a\u79bb\u6563\u7684\u6570\u5b57\n')),Object(l.b)("p",null,"\u6ce8\uff1acommands \u6ce8\u610f\u4ee5\u4e0b\u51e0\u70b9"),Object(l.b)("p",null,"\u8981\u662f\u5b58\u5728\u6587\u4ef6\uff0c\u8981\u5199\u7edd\u5bf9\u8def\u5f84\n\u5373\u4f7f\u662f\u6253\u5370\u4e5f\u4e0d\u4f1a\u663e\u793a\u5728\u663e\u793a\u5c4f\uff0c\u5728\u540e\u53f0\u8fd0\u884c\uff0c\u6700\u597d\u91cd\u5b9a\u5411\u65e5\u5fd7"),Object(l.b)("h3",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"crontab permission denied")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"chgmod +x #\u7ed9\u811a\u672c\u52a0\u6743\u9650\n")),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"Ubuntu\u5f00\u542f\u65e5\u5fd7")),Object(l.b)("p",null,"ubuntu\u9ed8\u8ba4\u6ca1\u6709\u5f00\u542fcron\u65e5\u5fd7\u8bb0\u5f55"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"# \u4fee\u6539rsyslog\nsudo vim /etc/rsyslog.d/50-default.conf \ncron.* /var/log/cron.log #\u5c06cron\u524d\u9762\u7684\u6ce8\u91ca\u7b26\u53bb\u6389 \n\n# \u91cd\u542frsyslog \nsudo service rsyslog restart \n# \u67e5\u770bcrontab\u65e5\u5fd7 \nless /var/log/cron.log\n")),Object(l.b)("h2",{id:"netstat"},"netstat"),Object(l.b)("p",null,"\u7aef\u53e3\u53f7\u68c0\u67e5"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"sudo netstat -tlpn\n")),Object(l.b)("h2",{id:"lsof"},"lsof"),Object(l.b)("p",null,"\u662f\u4e00\u4e2a\u5217\u51fa\u5f53\u524d\u7cfb\u7edf\u6253\u5f00\u6587\u4ef6\u7684\u5de5\u5177"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-shell"},"lsof -n|awk '{print $2}'|sort|uniq -c|sort -nr|more\n")),Object(l.b)("h2",{id:"\u94fe\u63a5"},"\u94fe\u63a5"),Object(l.b)("p",null,Object(l.b)("a",{parentName:"p",href:"https://www.runoob.com/linux/linux-command-manual.html"},"Linux \u547d\u4ee4\u5927\u5168")))}u.isMDXComponent=!0},505:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),u=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},s=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,c=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),d=u(n),s=a,m=d["".concat(c,".").concat(s)]||d[s]||p[s]||l;return n?r.a.createElement(m,b(b({ref:t},i),{},{components:n})):r.a.createElement(m,b({ref:t},i))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,c=new Array(l);c[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<l;i++)c[i]=n[i];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},735:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/jiankong-d0cfbfbad156e1bf895ca07547a59f24.jpg"},736:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ceshi-6ded84e1e3aaaa4d120e17d8815de777.jpg"},737:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/youhua-ad01960c4845869cc1082bc693498cb3.jpg"}}]);