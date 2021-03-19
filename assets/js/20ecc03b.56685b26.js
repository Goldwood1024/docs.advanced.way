(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{269:function(e,l,t){"use strict";t.d(l,"a",(function(){return O})),t.d(l,"b",(function(){return s}));var a=t(0),n=t.n(a);function r(e,l,t){return l in e?Object.defineProperty(e,l,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[l]=t,e}function c(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);l&&(a=a.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,a)}return t}function b(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?c(Object(t),!0).forEach((function(l){r(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}function u(e,l){if(null==e)return{};var t,a,n=function(e,l){if(null==e)return{};var t,a,n={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||(n[t]=e[t]);return n}(e,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],l.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var i=n.a.createContext({}),o=function(e){var l=n.a.useContext(i),t=l;return e&&(t="function"==typeof e?e(l):b(b({},l),e)),t},O=function(e){var l=o(e.components);return n.a.createElement(i.Provider,{value:l},e.children)},p={inlineCode:"code",wrapper:function(e){var l=e.children;return n.a.createElement(n.a.Fragment,{},l)}},d=n.a.forwardRef((function(e,l){var t=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,i=u(e,["components","mdxType","originalType","parentName"]),O=o(t),d=a,s=O["".concat(c,".").concat(d)]||O[d]||p[d]||r;return t?n.a.createElement(s,b(b({ref:l},i),{},{components:t})):n.a.createElement(s,b({ref:l},i))}));function s(e,l){var t=arguments,a=l&&l.mdxType;if("string"==typeof e||a){var r=t.length,c=new Array(r);c[0]=d;var b={};for(var u in l)hasOwnProperty.call(l,u)&&(b[u]=l[u]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var i=2;i<r;i++)c[i]=t[i];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},95:function(e,l,t){"use strict";t.r(l),t.d(l,"frontMatter",(function(){return c})),t.d(l,"metadata",(function(){return b})),t.d(l,"toc",(function(){return u})),t.d(l,"default",(function(){return o}));var a=t(3),n=t(7),r=(t(0),t(269)),c={title:"\u955c\u50cf",slug:"/cloud/docker/base/\u955c\u50cf/"},b={unversionedId:"cloud/docker/base/\u955c\u50cf",id:"cloud/docker/base/\u955c\u50cf",isDocsHomePage:!1,title:"\u955c\u50cf",description:"\u57fa\u672c\u547d\u4ee4",source:"@site/docs/cloud/docker/base/\u955c\u50cf.md",slug:"/cloud/docker/base/\u955c\u50cf/",permalink:"/docs.advanced.way/docs/cloud/docker/base/\u955c\u50cf/",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/cloud/docker/base/\u955c\u50cf.md",version:"current",lastUpdatedAt:1616131278,formattedLastUpdatedAt:"3/19/2021",sidebar:"docker",next:{title:"Dockerfile",permalink:"/docs.advanced.way/docs/cloud/docker/base/Dockerfile"}},u=[{value:"\u57fa\u672c\u547d\u4ee4",id:"\u57fa\u672c\u547d\u4ee4",children:[{value:"run",id:"run",children:[]},{value:"create",id:"create",children:[]},{value:"start/stop/restart",id:"startstoprestart",children:[]},{value:"rm",id:"rm",children:[]},{value:"exec",id:"exec",children:[]},{value:"ps",id:"ps",children:[]},{value:"inspect",id:"inspect",children:[]},{value:"logs",id:"logs",children:[]},{value:"top",id:"top",children:[]},{value:"port",id:"port",children:[]},{value:"diff",id:"diff",children:[]},{value:"login/logout",id:"loginlogout",children:[]},{value:"images",id:"images",children:[]},{value:"pull",id:"pull",children:[]},{value:"push",id:"push",children:[]},{value:"search",id:"search",children:[]},{value:"rmi",id:"rmi",children:[]},{value:"save",id:"save",children:[]},{value:"load",id:"load",children:[]},{value:"cp",id:"cp",children:[]},{value:"\u663e\u793a\u4fe1\u606f",id:"\u663e\u793a\u4fe1\u606f",children:[]}]},{value:"\u5e38\u7528\u955c\u50cf",id:"\u5e38\u7528\u955c\u50cf",children:[{value:"mysql",id:"mysql",children:[]},{value:"redis",id:"redis",children:[]}]},{value:"\u53c2\u8003",id:"\u53c2\u8003",children:[]}],i={toc:u};function o(e){var l=e.components,t=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,t,{components:l,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"\u57fa\u672c\u547d\u4ee4"},"\u57fa\u672c\u547d\u4ee4"),Object(r.b)("h3",{id:"run"},"run"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker run [OPTIONS] IMAGE [COMMAND] [ARG...]\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-a stdin: \u6307\u5b9a\u6807\u51c6\u8f93\u5165\u8f93\u51fa\u5185\u5bb9\u7c7b\u578b\uff0c\u53ef\u9009 STDIN/STDOUT/STDERR \u4e09\u9879\uff1b"),Object(r.b)("li",{parentName:"ul"},"-d: \u540e\u53f0\u8fd0\u884c\u5bb9\u5668\uff0c\u5e76\u8fd4\u56de\u5bb9\u5668ID\uff1b"),Object(r.b)("li",{parentName:"ul"},"-i: \u4ee5\u4ea4\u4e92\u6a21\u5f0f\u8fd0\u884c\u5bb9\u5668\uff0c\u901a\u5e38\u4e0e -t \u540c\u65f6\u4f7f\u7528\uff1b"),Object(r.b)("li",{parentName:"ul"},"-P: \u968f\u673a\u7aef\u53e3\u6620\u5c04\uff0c\u5bb9\u5668\u5185\u90e8\u7aef\u53e3\u968f\u673a\u6620\u5c04\u5230\u4e3b\u673a\u7684\u7aef\u53e3"),Object(r.b)("li",{parentName:"ul"},"-p: \u6307\u5b9a\u7aef\u53e3\u6620\u5c04\uff0c\u683c\u5f0f\u4e3a\uff1a\u4e3b\u673a(\u5bbf\u4e3b)\u7aef\u53e3:\u5bb9\u5668\u7aef\u53e3"),Object(r.b)("li",{parentName:"ul"},"-t: \u4e3a\u5bb9\u5668\u91cd\u65b0\u5206\u914d\u4e00\u4e2a\u4f2a\u8f93\u5165\u7ec8\u7aef\uff0c\u901a\u5e38\u4e0e -i \u540c\u65f6\u4f7f\u7528\uff1b"),Object(r.b)("li",{parentName:"ul"},'--name="nginx-lb": \u4e3a\u5bb9\u5668\u6307\u5b9a\u4e00\u4e2a\u540d\u79f0\uff1b'),Object(r.b)("li",{parentName:"ul"},"--dns 8.8.8.8: \u6307\u5b9a\u5bb9\u5668\u4f7f\u7528\u7684DNS\u670d\u52a1\u5668\uff0c\u9ed8\u8ba4\u548c\u5bbf\u4e3b\u4e00\u81f4\uff1b"),Object(r.b)("li",{parentName:"ul"},"--dns-search example.com: \u6307\u5b9a\u5bb9\u5668DNS\u641c\u7d22\u57df\u540d\uff0c\u9ed8\u8ba4\u548c\u5bbf\u4e3b\u4e00\u81f4\uff1b"),Object(r.b)("li",{parentName:"ul"},'-h "mars": \u6307\u5b9a\u5bb9\u5668\u7684hostname\uff1b'),Object(r.b)("li",{parentName:"ul"},'-e username="ritchie": \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\uff1b'),Object(r.b)("li",{parentName:"ul"},"--env-file=[]: \u4ece\u6307\u5b9a\u6587\u4ef6\u8bfb\u5165\u73af\u5883\u53d8\u91cf\uff1b"),Object(r.b)("li",{parentName:"ul"},'--cpuset="0-2" or --cpuset="0,1,2": \u7ed1\u5b9a\u5bb9\u5668\u5230\u6307\u5b9aCPU\u8fd0\u884c\uff1b'),Object(r.b)("li",{parentName:"ul"},"-m :\u8bbe\u7f6e\u5bb9\u5668\u4f7f\u7528\u5185\u5b58\u6700\u5927\u503c\uff1b"),Object(r.b)("li",{parentName:"ul"},'--net="bridge": \u6307\u5b9a\u5bb9\u5668\u7684\u7f51\u7edc\u8fde\u63a5\u7c7b\u578b\uff0c\u652f\u6301 bridge/host/none/container: \u56db\u79cd\u7c7b\u578b\uff1b'),Object(r.b)("li",{parentName:"ul"},"--link=[]: \u6dfb\u52a0\u94fe\u63a5\u5230\u53e6\u4e00\u4e2a\u5bb9\u5668\uff1b"),Object(r.b)("li",{parentName:"ul"},"--expose=[]: \u5f00\u653e\u4e00\u4e2a\u7aef\u53e3\u6216\u4e00\u7ec4\u7aef\u53e3\uff1b"),Object(r.b)("li",{parentName:"ul"},"--volume , -v: \u7ed1\u5b9a\u4e00\u4e2a\u5377")),Object(r.b)("h3",{id:"create"},"create"),Object(r.b)("p",null,"\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u5bb9\u5668\u4f46\u4e0d\u542f\u52a8\u5b83"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker create [OPTIONS] IMAGE [COMMAND] [ARG...]\n")),Object(r.b)("h3",{id:"startstoprestart"},"start/stop/restart"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker start [OPTIONS] CONTAINER [CONTAINER...]\ndocker stop [OPTIONS] CONTAINER [CONTAINER...]\ndocker restart [OPTIONS] CONTAINER [CONTAINER...]\n")),Object(r.b)("h3",{id:"rm"},"rm"),Object(r.b)("p",null,"\u5220\u9664\u4e00\u4e2a\u6216\u591a\u4e2a\u5bb9\u5668"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker rm [OPTIONS] CONTAINER [CONTAINER...]\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-f :\u901a\u8fc7 SIGKILL \u4fe1\u53f7\u5f3a\u5236\u5220\u9664\u4e00\u4e2a\u8fd0\u884c\u4e2d\u7684\u5bb9\u5668\u3002"),Object(r.b)("li",{parentName:"ul"},"-l :\u79fb\u9664\u5bb9\u5668\u95f4\u7684\u7f51\u7edc\u8fde\u63a5\uff0c\u800c\u975e\u5bb9\u5668\u672c\u8eab\u3002"),Object(r.b)("li",{parentName:"ul"},"-v :\u5220\u9664\u4e0e\u5bb9\u5668\u5173\u8054\u7684\u5377")),Object(r.b)("h3",{id:"exec"},"exec"),Object(r.b)("p",null,"\u5728\u8fd0\u884c\u7684\u5bb9\u5668\u4e2d\u6267\u884c\u547d\u4ee4"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker exec [OPTIONS] CONTAINER COMMAND [ARG...]\n\n# \u4f8b\ndocker exec -i -t mynginx /bin/bash\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-d :\u5206\u79bb\u6a21\u5f0f: \u5728\u540e\u53f0\u8fd0\u884c"),Object(r.b)("li",{parentName:"ul"},"-i :\u5373\u4f7f\u6ca1\u6709\u9644\u52a0\u4e5f\u4fdd\u6301STDIN \u6253\u5f00"),Object(r.b)("li",{parentName:"ul"},"-t :\u5206\u914d\u4e00\u4e2a\u4f2a\u7ec8\u7aef")),Object(r.b)("h3",{id:"ps"},"ps"),Object(r.b)("p",null,"\u5217\u51fa\u5bb9\u5668"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker ps [OPTIONS]\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-a :\u663e\u793a\u6240\u6709\u7684\u5bb9\u5668\uff0c\u5305\u62ec\u672a\u8fd0\u884c\u7684\u3002"),Object(r.b)("li",{parentName:"ul"},"-f :\u6839\u636e\u6761\u4ef6\u8fc7\u6ee4\u663e\u793a\u7684\u5185\u5bb9\u3002"),Object(r.b)("li",{parentName:"ul"},"--format :\u6307\u5b9a\u8fd4\u56de\u503c\u7684\u6a21\u677f\u6587\u4ef6\u3002"),Object(r.b)("li",{parentName:"ul"},"-l :\u663e\u793a\u6700\u8fd1\u521b\u5efa\u7684\u5bb9\u5668\u3002"),Object(r.b)("li",{parentName:"ul"},"-n :\u5217\u51fa\u6700\u8fd1\u521b\u5efa\u7684n\u4e2a\u5bb9\u5668\u3002"),Object(r.b)("li",{parentName:"ul"},"--no-trunc :\u4e0d\u622a\u65ad\u8f93\u51fa\u3002"),Object(r.b)("li",{parentName:"ul"},"-q :\u9759\u9ed8\u6a21\u5f0f\uff0c\u53ea\u663e\u793a\u5bb9\u5668\u7f16\u53f7\u3002"),Object(r.b)("li",{parentName:"ul"},"-s :\u663e\u793a\u603b\u7684\u6587\u4ef6\u5927\u5c0f/].")),Object(r.b)("h3",{id:"inspect"},"inspect"),Object(r.b)("p",null,"\u83b7\u53d6\u5bb9\u5668/\u955c\u50cf\u7684\u5143\u6570\u636e"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker inspect [OPTIONS] NAME|ID [NAME|ID...]\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-f :\u6307\u5b9a\u8fd4\u56de\u503c\u7684\u6a21\u677f\u6587\u4ef6\u3002"),Object(r.b)("li",{parentName:"ul"},"-s :\u663e\u793a\u603b\u7684\u6587\u4ef6\u5927\u5c0f\u3002"),Object(r.b)("li",{parentName:"ul"},"--type :\u4e3a\u6307\u5b9a\u7c7b\u578b\u8fd4\u56deJSON")),Object(r.b)("h3",{id:"logs"},"logs"),Object(r.b)("p",null,"\u83b7\u53d6\u5bb9\u5668\u7684\u65e5\u5fd7"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker logs [OPTIONS] CONTAINER\n\n# \u76f8\u5f53\u4e8e tail -f 10 file\ndocker logs -f --tail 10 CONTAINER\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-f : \u8ddf\u8e2a\u65e5\u5fd7\u8f93\u51fa"),Object(r.b)("li",{parentName:"ul"},"--since :\u663e\u793a\u67d0\u4e2a\u5f00\u59cb\u65f6\u95f4\u7684\u6240\u6709\u65e5\u5fd7"),Object(r.b)("li",{parentName:"ul"},"-t : \u663e\u793a\u65f6\u95f4\u6233"),Object(r.b)("li",{parentName:"ul"},"--tail :\u4ec5\u5217\u51fa\u6700\u65b0N\u6761\u5bb9\u5668\u65e5\u5fd7")),Object(r.b)("h3",{id:"top"},"top"),Object(r.b)("p",null,"\u67e5\u770b\u5bb9\u5668\u4e2d\u8fd0\u884c\u7684\u8fdb\u7a0b\u4fe1\u606f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker top [OPTIONS] CONTAINER [ps OPTIONS]\n")),Object(r.b)("h3",{id:"port"},"port"),Object(r.b)("p",null,"\u5217\u51fa\u6307\u5b9a\u7684\u5bb9\u5668\u7684\u7aef\u53e3\u6620\u5c04\uff0c\u6216\u8005\u67e5\u627e\u5c06PRIVATE_PORT NAT\u5230\u9762\u5411\u516c\u4f17\u7684\u7aef\u53e3"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker port [OPTIONS] CONTAINER [PRIVATE_PORT[/PROTO]]\n\n")),Object(r.b)("h3",{id:"diff"},"diff"),Object(r.b)("p",null,"\u68c0\u67e5\u5bb9\u5668\u91cc\u6587\u4ef6\u7ed3\u6784\u7684\u66f4\u6539"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker diff [OPTIONS] CONTAINER\n")),Object(r.b)("h3",{id:"loginlogout"},"login/logout"),Object(r.b)("p",null,"\u767b\u9646/\u767b\u51fa\u4e00\u4e2aDocker\u955c\u50cf\u4ed3\u5e93\uff0c\u5982\u679c\u672a\u6307\u5b9a\u955c\u50cf\u4ed3\u5e93\u5730\u5740\uff0c\u9ed8\u8ba4\u4e3a\u5b98\u65b9\u4ed3\u5e93 Docker Hub"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker login [OPTIONS] [SERVER]\ndocker logout [OPTIONS] [SERVER]\n\n# \u4f8b\ndocker login -u \u7528\u6237\u540d -p \u5bc6\u7801\n")),Object(r.b)("h3",{id:"images"},"images"),Object(r.b)("p",null,"\u5217\u51fa\u672c\u5730\u955c\u50cf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker images [OPTIONS] [REPOSITORY[:TAG]]\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-a :\u5217\u51fa\u672c\u5730\u6240\u6709\u7684\u955c\u50cf\uff08\u542b\u4e2d\u95f4\u6620\u50cf\u5c42\uff0c\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0c\u8fc7\u6ee4\u6389\u4e2d\u95f4\u6620\u50cf\u5c42\uff09\uff1b"),Object(r.b)("li",{parentName:"ul"},"--digests :\u663e\u793a\u955c\u50cf\u7684\u6458\u8981\u4fe1\u606f\uff1b"),Object(r.b)("li",{parentName:"ul"},"-f :\u663e\u793a\u6ee1\u8db3\u6761\u4ef6\u7684\u955c\u50cf\uff1b"),Object(r.b)("li",{parentName:"ul"},"--format :\u6307\u5b9a\u8fd4\u56de\u503c\u7684\u6a21\u677f\u6587\u4ef6\uff1b"),Object(r.b)("li",{parentName:"ul"},"--no-trunc :\u663e\u793a\u5b8c\u6574\u7684\u955c\u50cf\u4fe1\u606f\uff1b"),Object(r.b)("li",{parentName:"ul"},"-q :\u53ea\u663e\u793a\u955c\u50cfID")),Object(r.b)("h3",{id:"pull"},"pull"),Object(r.b)("p",null,"\u4ece\u955c\u50cf\u4ed3\u5e93\u4e2d\u62c9\u53d6\u6216\u8005\u66f4\u65b0\u6307\u5b9a\u955c\u50cf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker pull [OPTIONS] NAME[:TAG|@DIGEST]\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-a :\u62c9\u53d6\u6240\u6709 tagged \u955c\u50cf"),Object(r.b)("li",{parentName:"ul"},"--disable-content-trust :\u5ffd\u7565\u955c\u50cf\u7684\u6821\u9a8c,\u9ed8\u8ba4\u5f00\u542f")),Object(r.b)("h3",{id:"push"},"push"),Object(r.b)("p",null,"\u5c06\u672c\u5730\u7684\u955c\u50cf\u4e0a\u4f20\u5230\u955c\u50cf\u4ed3\u5e93,\u8981\u5148\u767b\u9646\u5230\u955c\u50cf\u4ed3\u5e93"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker push [OPTIONS] NAME[:TAG]\n")),Object(r.b)("h3",{id:"search"},"search"),Object(r.b)("p",null,"\u4eceDocker Hub\u67e5\u627e\u955c\u50cf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker search [OPTIONS] TERM\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"--automated :\u53ea\u5217\u51fa automated build\u7c7b\u578b\u7684\u955c\u50cf\uff1b"),Object(r.b)("li",{parentName:"ul"},"--no-trunc :\u663e\u793a\u5b8c\u6574\u7684\u955c\u50cf\u63cf\u8ff0\uff1b"),Object(r.b)("li",{parentName:"ul"},"-s :\u5217\u51fa\u6536\u85cf\u6570\u4e0d\u5c0f\u4e8e\u6307\u5b9a\u503c\u7684\u955c\u50cf")),Object(r.b)("h3",{id:"rmi"},"rmi"),Object(r.b)("p",null,"\u5220\u9664\u672c\u5730\u4e00\u4e2a\u6216\u591a\u5c11\u955c\u50cf"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker rmi [OPTIONS] IMAGE [IMAGE...]\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-f :\u5f3a\u5236\u5220\u9664\uff1b"),Object(r.b)("li",{parentName:"ul"},"--no-prune :\u4e0d\u79fb\u9664\u8be5\u955c\u50cf\u7684\u8fc7\u7a0b\u955c\u50cf\uff0c\u9ed8\u8ba4\u79fb\u9664")),Object(r.b)("h3",{id:"save"},"save"),Object(r.b)("p",null,"\u5c06\u6307\u5b9a\u955c\u50cf\u4fdd\u5b58\u6210 tar \u5f52\u6863\u6587\u4ef6"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker save [OPTIONS] IMAGE [IMAGE...]\n\n# \u4fdd\u5b58\u955c\u50cf\ndocker save -o filename.tar.gz images:tag\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-o :\u8f93\u51fa\u5230\u7684\u6587\u4ef6")),Object(r.b)("h3",{id:"load"},"load"),Object(r.b)("p",null,"\u5bfc\u5165\u4f7f\u7528 docker save \u547d\u4ee4\u5bfc\u51fa\u7684\u955c\u50cf\u3002"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker load [OPTIONS]\n\n## \u52a0\u8f7d\u955c\u50cf\u6587\u4ef6\ndocker load < filename.tar.gz\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"--input , -i : \u6307\u5b9a\u5bfc\u5165\u7684\u6587\u4ef6\uff0c\u4ee3\u66ff STDIN\u3002"),Object(r.b)("li",{parentName:"ul"},"--quiet , -q : \u7cbe\u7b80\u8f93\u51fa\u4fe1\u606f")),Object(r.b)("h3",{id:"cp"},"cp"),Object(r.b)("p",null,"\u7528\u4e8e\u5bb9\u5668\u4e0e\u4e3b\u673a\u4e4b\u95f4\u7684\u6570\u636e\u62f7\u8d1d"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# \u5bb9\u5668:\u76ee\u5f55/\u6587\u4ef6 --\x3e \u672c\u5730:\u76ee\u5f55/\u6587\u4ef6\ndocker cp [OPTIONS] CONTAINER:SRC_PATH DEST_PATH|-\n\n# \u672c\u5730:\u76ee\u5f55/\u6587\u4ef6 --\x3e \u5bb9\u5668:\u76ee\u5f55/\u6587\u4ef6\ndocker cp [OPTIONS] SRC_PATH|- CONTAINER:DEST_PATH\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"-L :\u4fdd\u6301\u6e90\u76ee\u6807\u4e2d\u7684\u94fe\u63a5")),Object(r.b)("h3",{id:"\u663e\u793a\u4fe1\u606f"},"\u663e\u793a\u4fe1\u606f"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# \u67e5\u770bdocker\u7cfb\u7edf\u4fe1\u606f\ndocker info [OPTIONS]\n\n# \u663e\u793a Docker \u7248\u672c\u4fe1\u606f\ndocker version [OPTIONS]\n")),Object(r.b)("h2",{id:"\u5e38\u7528\u955c\u50cf"},"\u5e38\u7528\u955c\u50cf"),Object(r.b)("h3",{id:"mysql"},"mysql"),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"docker run -p 3306:3306 --name mysql  \\\n-v /usr/local/docker/mysql57logs:/logs \\\n-v /usr/local/docker/mysql57/data:/var/lib/mysql \\\n-e MYSQL_ROOT_PASSWORD=Root123. -d mysql:8.0\n")),Object(r.b)("h3",{id:"redis"},"redis"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://redis.io"},"\u5b98\u7f51\u5730\u5740")),Object(r.b)("pre",null,Object(r.b)("code",{parentName:"pre",className:"language-shell"},"# \u6ce8\u91caIp\u7ed1\u5b9a\nvim /etc/redis/redis.conf\n\ndocker run -p 6379:6379 --name redis \\\n-v /usr/local/docker/redis/data:/data \\\n-v /usr/local/docker/redis/redis.conf:/etc/redis/redis.conf \\\n-d redis:5 redis-server /etc/redis/redis.conf --appendonly yes\n")),Object(r.b)("h2",{id:"\u53c2\u8003"},"\u53c2\u8003"),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://www.runoob.com/linux/linux-comm-crontab.html"},"Linux crontab \u547d\u4ee4")))}o.isMDXComponent=!0}}]);