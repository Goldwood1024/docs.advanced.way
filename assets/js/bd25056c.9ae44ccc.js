(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7522],{3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return u},kt:function(){return m}});var l=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,l)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,l,r=function(e,t){if(null==e)return{};var a,l,r={},n=Object.keys(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(l=0;l<n.length;l++)a=n[l],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=l.createContext({}),c=function(e){var t=l.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},u=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),p=c(a),m=r,k=p["".concat(s,".").concat(m)]||p[m]||d[m]||n;return a?l.createElement(k,i(i({ref:t},u),{},{components:a})):l.createElement(k,i({ref:t},u))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,i=new Array(n);i[0]=p;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:r,i[1]=o;for(var c=2;c<n;c++)i[c]=a[c];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}p.displayName="MDXCreateElement"},15160:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return o},metadata:function(){return s},toc:function(){return c},default:function(){return d}});var l=a(22122),r=a(19756),n=(a(67294),a(3905)),i=["components"],o={slug:"Distributed-consensus-algorithm",title:"\u5206\u5e03\u5f0f\u5171\u8bc6\u7b97\u6cd5",tags:["\u5206\u5e03\u5f0f\u5171\u8bc6\u7b97\u6cd5","Distributed","consensus","algorithm","CAP","Paxos","Raft"]},s={permalink:"/docs.advanced.way/blog/Distributed-consensus-algorithm",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/tree/master/blog/2021-06-03-Distributed-consensus-algorithm.md",source:"@site/blog/2021-06-03-Distributed-consensus-algorithm.md",title:"\u5206\u5e03\u5f0f\u5171\u8bc6\u7b97\u6cd5",description:"\u4e00\u81f4\u6027",date:"2021-06-03T00:00:00.000Z",formattedDate:"June 3, 2021",tags:[{label:"\u5206\u5e03\u5f0f\u5171\u8bc6\u7b97\u6cd5",permalink:"/docs.advanced.way/blog/tags/\u5206\u5e03\u5f0f\u5171\u8bc6\u7b97\u6cd5"},{label:"Distributed",permalink:"/docs.advanced.way/blog/tags/distributed"},{label:"consensus",permalink:"/docs.advanced.way/blog/tags/consensus"},{label:"algorithm",permalink:"/docs.advanced.way/blog/tags/algorithm"},{label:"CAP",permalink:"/docs.advanced.way/blog/tags/cap"},{label:"Paxos",permalink:"/docs.advanced.way/blog/tags/paxos"},{label:"Raft",permalink:"/docs.advanced.way/blog/tags/raft"}],readingTime:1.145,truncated:!1,prevItem:{title:"\u786c\u76d8\u68c0\u6d4b",permalink:"/docs.advanced.way/blog/smartmontools"},nextItem:{title:"\u7f13\u5b58\u6a21\u578b",permalink:"/docs.advanced.way/blog/cache-pattern"}},c=[{value:"\u4e00\u81f4\u6027",id:"\u4e00\u81f4\u6027",children:[{value:"CAP theorem\uff08CAP \u7406\u8bba\uff09",id:"cap-theorem\uff08cap-\u7406\u8bba\uff09",children:[]},{value:"Base \u7406\u8bba",id:"base-\u7406\u8bba",children:[]},{value:"\u4e00\u81f4\u6027\u6a21\u578b",id:"\u4e00\u81f4\u6027\u6a21\u578b",children:[]}]},{value:"Raft \u7b97\u6cd5",id:"raft-\u7b97\u6cd5",children:[{value:"Leader\u9009\u4e3e",id:"leader\u9009\u4e3e",children:[]},{value:"\u65e5\u5fd7\u540c\u6b65",id:"\u65e5\u5fd7\u540c\u6b65",children:[]},{value:"\u5b89\u5168\u6027",id:"\u5b89\u5168\u6027",children:[]},{value:"\u65e5\u5fd7\u538b\u7f29",id:"\u65e5\u5fd7\u538b\u7f29",children:[]},{value:"\u6210\u5458\u53d8\u66f4",id:"\u6210\u5458\u53d8\u66f4",children:[]},{value:"Raft\u7b97\u6cd5\u603b\u7ed3",id:"raft\u7b97\u6cd5\u603b\u7ed3",children:[]}]},{value:"Paxos \u7b97\u6cd5",id:"paxos-\u7b97\u6cd5",children:[]},{value:"ZAB \u7b97\u6cd5",id:"zab-\u7b97\u6cd5",children:[]},{value:"\u76f8\u5173\u6587\u6863",id:"\u76f8\u5173\u6587\u6863",children:[]}],u={toc:c};function d(e){var t=e.components,o=(0,r.Z)(e,i);return(0,n.kt)("wrapper",(0,l.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h2",{id:"\u4e00\u81f4\u6027"},"\u4e00\u81f4\u6027"),(0,n.kt)("h3",{id:"cap-theorem\uff08cap-\u7406\u8bba\uff09"},"CAP theorem\uff08CAP \u7406\u8bba\uff09"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(59486).Z})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u81f4\u6027\uff08Consistency\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6027\uff08Availability\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u5206\u533a\u5bb9\u9519\u6027\uff08Partition tolerance\uff09")),(0,n.kt)("p",null,"\u4ee5\u4e0a\u4e09\u4e2a\u7279\u6027\uff0c\u540c\u4e00\u65f6\u523b\u4e0d\u80fd\u540c\u65f6\u6ee1\u8db3"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"\u5728\u5206\u5e03\u5f0f\u7cfb\u7edf\u7684\u8bbe\u8ba1\u4e2d\uff0c\u6ca1\u6709\u4e00\u79cd\u8bbe\u8ba1\u53ef\u4ee5\u540c\u65f6\u6ee1\u8db3\u4e00\u81f4\u6027\uff0c\u53ef\u7528\u6027\uff0c\u5206\u533a\u5bb9\u9519\u6027 3\u4e2a\u7279\u6027")),(0,n.kt)("h3",{id:"base-\u7406\u8bba"},"Base \u7406\u8bba"),(0,n.kt)("p",null,"BASE(Basically Available, Soft State, Eventual Consistency  \u57fa\u672c\u53ef\u7528\u3001\u8f6f\u72b6\u6001\u3001\u6700\u7ec8\u4e00\u81f4\u6027) \u5bf9CAP AP\u7406\u8bba\u7684\u5ef6\u4f38"),(0,n.kt)("p",null,"\u6838\u5fc3\u601d\u60f3\n\u5373\u4f7f\u65e0\u6cd5\u505a\u5230\u5f3a\u4e00\u81f4\u6027\uff08Strong consistency\uff09\uff0c\u4f46\u6bcf\u4e2a\u5e94\u7528\u90fd\u53ef\u4ee5\u6839\u636e\u81ea\u8eab\u7684\u4e1a\u52a1\u7279\u70b9\uff0c\u91c7\u7528\u9002\u5f53\u7684\u65b9\u5f0f\u6765\u4f7f\u7cfb\u7edf\u8fbe\u5230\u6700\u7ec8\u4e00\u81f4\u6027\uff08Eventual consistency\uff09"),(0,n.kt)("h3",{id:"\u4e00\u81f4\u6027\u6a21\u578b"},"\u4e00\u81f4\u6027\u6a21\u578b"),(0,n.kt)("h4",{id:"\u5f31\u4e00\u81f4\u6027\u6a21\u578b"},"\u5f31\u4e00\u81f4\u6027\u6a21\u578b"),(0,n.kt)("p",null,"\u8fd9\u79cd\u4e00\u81f4\u6027\u7ea7\u522b\u7ea6\u675f\u4e86\u7cfb\u7edf\u5728\u5199\u5165\u6210\u529f\u540e\uff0c\u4e0d\u627f\u8bfa\u7acb\u5373\u53ef\u4ee5\u8bfb\u5230\u5199\u5165\u7684\u503c\uff0c\u4e5f\u4e0d\u627f\u8bfa\u591a\u4e45\u4e4b\u540e\u6570\u636e\u80fd\u591f\u8fbe\u5230\u4e00\u81f4\uff0c\u4f46\u4f1a\u5c3d\u53ef\u80fd\u5730\u4fdd\u8bc1\u5230\u67d0\u4e2a\u65f6\u95f4\u7ea7\u522b\uff08\u6bd4\u5982\u79d2\u7ea7\u522b\uff09\u540e\uff0c\u6570\u636e\u80fd\u591f\u8fbe\u5230\u4e00\u81f4\u72b6\u6001"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DNS\uff08Domain Name System\uff09"),(0,n.kt)("li",{parentName:"ul"},"Gossip(Cassandra\u7684\u901a\u4fe1\u534f\u8bae)")),(0,n.kt)("h4",{id:"\u5f3a\u4e00\u81f4\u6027\u6a21\u578b"},"\u5f3a\u4e00\u81f4\u6027\u6a21\u578b"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u540c\u6b65"),(0,n.kt)("li",{parentName:"ul"},"Paxos"),(0,n.kt)("li",{parentName:"ul"},"Ratf(multi-paxos)"),(0,n.kt)("li",{parentName:"ul"},"ZAB(multi-paxos)")),(0,n.kt)("h4",{id:"\u6700\u7ec8\u4e00\u81f4\u6027\u6a21\u578b"},"\u6700\u7ec8\u4e00\u81f4\u6027\u6a21\u578b"),(0,n.kt)("p",null,"\u6700\u7ec8\u4e00\u81f4\u6027\u662f\u5f31\u4e00\u81f4\u6027\u7684\u4e00\u4e2a\u7279\u4f8b\uff0c\u7cfb\u7edf\u4f1a\u4fdd\u8bc1\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\uff0c\u80fd\u591f\u8fbe\u5230\u4e00\u4e2a\u6570\u636e\u4e00\u81f4\u7684\u72b6\u6001"),(0,n.kt)("h2",{id:"raft-\u7b97\u6cd5"},"Raft \u7b97\u6cd5"),(0,n.kt)("blockquote",null,(0,n.kt)("p",{parentName:"blockquote"},"Raft ","[r\u0251:ft]"," \u5b9e\u73b0\u4e86\u548cPaxos\u76f8\u540c\u7684\u529f\u80fd\uff0c\u5b83\u5c06\u4e00\u81f4\u6027\u5206\u89e3\u4e3a\u591a\u4e2a\u5b50\u95ee\u9898"),(0,n.kt)("ul",{parentName:"blockquote"},(0,n.kt)("li",{parentName:"ul"},"Leader\u9009\u4e3e\uff08Leader election\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u540c\u6b65\uff08Log replication\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168\u6027\uff08Safety\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u65e5\u5fd7\u538b\u7f29\uff08Log compaction\uff09"),(0,n.kt)("li",{parentName:"ul"},"\u6210\u5458\u53d8\u66f4\uff08Membership change\uff09"))),(0,n.kt)("p",null,"Raft\u8981\u6c42\u7cfb\u7edf\u5728\u4efb\u610f\u65f6\u523b\u6700\u591a\u53ea\u6709\u4e00\u4e2aLeader\uff0c\u6b63\u5e38\u5de5\u4f5c\u671f\u95f4\u53ea\u6709Leader\u548cFollowers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Leader \u63a5\u53d7\u5ba2\u6237\u7aef\u8bf7\u6c42\uff0c\u5e76\u5411Follower \u540c\u6b65\u8bf7\u6c42\u65e5\u5fd7\uff0c\u5f53\u65e5\u5fd7\u540c\u6b65\u5230\u5927\u591a\u6570\u8282\u70b9\u4e0a\u540e\u544a\u8bc9Follower\u63d0\u4ea4\u65e5\u5fd7"),(0,n.kt)("li",{parentName:"ul"},"Follower \u63a5\u53d7\u5e76\u6301\u4e45\u5316Leader\u540c\u6b65\u7684\u65e5\u5fd7\uff0c\u5728Leader\u544a\u4e4b\u65e5\u5fd7\u53ef\u4ee5\u63d0\u4ea4\u4e4b\u540e\uff0c\u63d0\u4ea4\u65e5\u5fd7"),(0,n.kt)("li",{parentName:"ul"},"Candidate \u5019\u9009\u4eba Leader\u9009\u4e3e\u8fc7\u7a0b\u4e2d\u7684\u4e34\u65f6\u89d2\u8272")),(0,n.kt)("p",null,"\u72b6\u6001\u5207\u6362\u56fe:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(34593).Z})),(0,n.kt)("p",null,"Leader\u5728\u5b95\u673a\u4e4b\u524d\u4f1a\u4e00\u76f4\u4fdd\u6301Leader\u7684\u72b6\u6001"),(0,n.kt)("p",null,"\u4efb\u671f: "),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(12730).Z}),"\nRaft\u7b97\u6cd5\u5c06\u65f6\u95f4\u5206\u4e3a\u4e00\u4e2a\u4e2a\u7684\u4efb\u671f\uff08term\uff09\uff0c\u6bcf\u4e00\u4e2aterm\u7684\u5f00\u59cb\u90fd\u662fLeader\u9009\u4e3e\u3002\u5728\u6210\u529f\u9009\u4e3eLeader\u4e4b\u540e\uff0cLeader\u4f1a\u5728\u6574\u4e2aterm\u5185\u7ba1\u7406\u6574\u4e2a\u96c6\u7fa4\u3002\u5982\u679cLeader\u9009\u4e3e\u5931\u8d25\uff0c\u8be5term\u5c31\u4f1a\u56e0\u4e3a\u6ca1\u6709Leader\u800c\u7ed3\u675f"),(0,n.kt)("h3",{id:"leader\u9009\u4e3e"},"Leader\u9009\u4e3e"),(0,n.kt)("p",null,"\u4f7f\u7528\u5fc3\u8df3\uff08heartbeat\uff09\u89e6\u53d1Leader\u9009\u4e3e\uff0c\u9009\u4e3e\u51faLeader\u540e\uff0cLeader\u901a\u8fc7\u5b9a\u671f\u5411\u6240\u6709Followers\u53d1\u9001\u5fc3\u8df3\u4fe1\u606f\u7ef4\u6301\u5176\u7edf\u6cbb"),(0,n.kt)("p",null,"\u9009\u4e3e\u8fc7\u7a0b:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u5f53\u670d\u52a1\u5668\u542f\u52a8\u65f6\uff0c\u521d\u59cb\u5316\u4e3aFollower"),(0,n.kt)("li",{parentName:"ol"},"Leader\u5411\u6240\u6709Followers\u5468\u671f\u6027\u53d1\u9001heartbeat "),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679cFollower\u5728\u9009\u4e3e\u8d85\u65f6\u65f6\u95f4\u5185\u6ca1\u6709\u6536\u5230Leader\u7684heartbeat\uff0c\u5c31\u4f1a\u7b49\u5f85\u4e00\u6bb5\u968f\u673a\u7684\u65f6\u95f4\u540e\u53d1\u8d77\u4e00\u6b21Leader\u9009\u4e3e"),(0,n.kt)("li",{parentName:"ol"},"Follower\u5c06\u5176\u5f53\u524dterm\u52a0\u4e00\u7136\u540e\u8f6c\u6362\u4e3aCandidate"),(0,n.kt)("li",{parentName:"ol"},"\u9996\u5148\u7ed9\u81ea\u5df1\u6295\u7968\u5e76\u4e14\u7ed9\u96c6\u7fa4\u4e2d\u7684\u5176\u4ed6\u670d\u52a1\u5668\u53d1\u9001 RequestVote RPC")),(0,n.kt)("p",null,"\u9009\u4e3e\u7ed3\u679c\u4f1a\u51fa\u73b0\u7684\u60c5\u51b5:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"\u8d62\u5f97\u4e86\u591a\u6570\u7684\u9009\u7968\uff0c\u6210\u529f\u9009\u4e3e\u4e3aLeader"),(0,n.kt)("li",{parentName:"ol"},"\u6536\u5230\u4e86Leader\u7684\u6d88\u606f\uff0c\u8868\u793a\u6709\u5176\u5b83\u670d\u52a1\u5668\u5df2\u7ecf\u62a2\u5148\u5f53\u9009\u4e86Leader"),(0,n.kt)("li",{parentName:"ol"},"\u6ca1\u6709\u670d\u52a1\u5668\u8d62\u5f97\u591a\u6570\u7684\u9009\u7968\uff0cLeader\u9009\u4e3e\u5931\u8d25\uff0c\u7b49\u5f85\u9009\u4e3e\u65f6\u95f4\u8d85\u65f6\u540e\u53d1\u8d77\u4e0b\u4e00\u6b21\u9009\u4e3e")),(0,n.kt)("h3",{id:"\u65e5\u5fd7\u540c\u6b65"},"\u65e5\u5fd7\u540c\u6b65"),(0,n.kt)("p",null,"Leader\u628a\u8bf7\u6c42\u4f5c\u4e3a\u65e5\u5fd7\u6761\u76ee\uff08Log entries\uff09\u52a0\u5165\u5230\u5b83\u7684\u65e5\u5fd7\u4e2d\uff0c\u7136\u540e\u5e76\u884c\u7684\u5411\u5176\u4ed6\u670d\u52a1\u5668\u53d1\u8d77 AppendEntries RPC \u590d\u5236\u65e5\u5fd7\u6761\u76ee\u3002\n\u5f53\u8fd9\u6761\u65e5\u5fd7\u88ab\u590d\u5236\u5230\u5927\u591a\u6570\u670d\u52a1\u5668\u4e0a\uff0cLeader\u5c06\u8fd9\u6761\u65e5\u5fd7\u5e94\u7528\u5230\u5b83\u7684\u72b6\u6001\u673a\u5e76\u5411\u5ba2\u6237\u7aef\u8fd4\u56de\u6267\u884c\u7ed3\u679c"),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(1659).Z})),(0,n.kt)("p",null,"\u65e5\u5fd7\u7531\u6709\u5e8f\u7f16\u53f7\uff08log index\uff09\u7684\u65e5\u5fd7\u6761\u76ee\u7ec4\u6210\u3002\u6bcf\u4e2a\u65e5\u5fd7\u6761\u76ee\u5305\u542b\u5b83\u88ab\u521b\u5efa\u65f6\u7684\u4efb\u671f\u53f7\uff08term\uff09\uff0c\u548c\u7528\u4e8e\u72b6\u6001\u673a\u6267\u884c\u7684\u547d\u4ee4\u3002\u5982\u679c\u4e00\u4e2a\u65e5\u5fd7\u6761\u76ee\u88ab\u590d\u5236\u5230\u5927\u591a\u6570\u670d\u52a1\u5668\u4e0a\uff0c\u5c31\u88ab\u8ba4\u4e3a\u53ef\u4ee5\u63d0\u4ea4\uff08commit\uff09"),(0,n.kt)("p",null,"Raft\u65e5\u5fd7\u540c\u6b65\u4fdd\u8bc1\u5982\u4e0b\u4e24\u70b9\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u540c\u65e5\u5fd7\u4e2d\u7684\u4e24\u4e2a\u6761\u76ee\u6709\u7740\u76f8\u540c\u7684\u7d22\u5f15\u548c\u4efb\u671f\u53f7\uff0c\u5219\u5b83\u4eec\u6240\u5b58\u50a8\u7684\u547d\u4ee4\u662f\u76f8\u540c\u7684\u3002"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u4e0d\u540c\u65e5\u5fd7\u4e2d\u7684\u4e24\u4e2a\u6761\u76ee\u6709\u7740\u76f8\u540c\u7684\u7d22\u5f15\u548c\u4efb\u671f\u53f7\uff0c\u5219\u5b83\u4eec\u4e4b\u524d\u7684\u6240\u6709\u6761\u76ee\u90fd\u662f\u5b8c\u5168\u4e00\u6837\u7684\u3002")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Leader\u548cFollowers\u4e0a\u65e5\u5fd7\u4e0d\u4e00\u81f4",src:a(93632).Z})),(0,n.kt)("p",null,"\u4e0a\u56fe\u9610\u8ff0\u4e86\u4e00\u4e9bFollowers\u53ef\u80fd\u548c\u65b0\u7684Leader\u65e5\u5fd7\u4e0d\u540c\u7684\u60c5\u51b5\u3002\u4e00\u4e2aFollower\u53ef\u80fd\u4f1a\u4e22\u5931\u6389Leader\u4e0a\u7684\u4e00\u4e9b\u6761\u76ee\uff0c\u4e5f\u6709\u53ef\u80fd\u5305\u542b\u4e00\u4e9bLeader\u6ca1\u6709\u7684\u6761\u76ee\uff0c\u4e5f\u6709\u53ef\u80fd\u4e24\u8005\u90fd\u4f1a\u53d1\u751f\u3002\u4e22\u5931\u7684\u6216\u8005\u591a\u51fa\u6765\u7684\u6761\u76ee\u53ef\u80fd\u4f1a\u6301\u7eed\u591a\u4e2a\u4efb\u671f\u3002"),(0,n.kt)("p",null,"Leader\u901a\u8fc7\u5f3a\u5236Followers\u590d\u5236\u5b83\u7684\u65e5\u5fd7\u6765\u5904\u7406\u65e5\u5fd7\u7684\u4e0d\u4e00\u81f4\uff0cFollowers\u4e0a\u7684\u4e0d\u4e00\u81f4\u7684\u65e5\u5fd7\u4f1a\u88abLeader\u7684\u65e5\u5fd7\u8986\u76d6\u3002"),(0,n.kt)("p",null,"Leader\u4e3a\u4e86\u4f7fFollowers\u7684\u65e5\u5fd7\u540c\u81ea\u5df1\u7684\u4e00\u81f4\uff0cLeader\u9700\u8981\u627e\u5230Followers\u540c\u5b83\u7684\u65e5\u5fd7\u4e00\u81f4\u7684\u5730\u65b9\uff0c\u7136\u540e\u8986\u76d6Followers\u5728\u8be5\u4f4d\u7f6e\u4e4b\u540e\u7684\u6761\u76ee\u3002"),(0,n.kt)("p",null,"Leader\u4f1a\u4ece\u540e\u5f80\u524d\u8bd5\uff0c\u6bcf\u6b21AppendEntries\u5931\u8d25\u540e\u5c1d\u8bd5\u524d\u4e00\u4e2a\u65e5\u5fd7\u6761\u76ee\uff0c\u76f4\u5230\u6210\u529f\u627e\u5230\u6bcf\u4e2aFollower\u7684\u65e5\u5fd7\u4e00\u81f4\u4f4d\u70b9\uff0c\u7136\u540e\u5411\u540e\u9010\u6761\u8986\u76d6Followers\u5728\u8be5\u4f4d\u7f6e\u4e4b\u540e\u7684\u6761\u76ee"),(0,n.kt)("h3",{id:"\u5b89\u5168\u6027"},"\u5b89\u5168\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u62e5\u6709\u6700\u65b0\u7684\u5df2\u63d0\u4ea4\u7684log entry\u7684Follower\u624d\u6709\u8d44\u683c\u6210\u4e3aLeader",(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u8fd9\u4e2a\u4fdd\u8bc1\u662f\u5728RequestVote RPC\u4e2d\u505a\u7684\uff0cCandidate\u5728\u53d1\u9001RequestVote RPC\u65f6\uff0c\u8981\u5e26\u4e0a\u81ea\u5df1\u7684\u6700\u540e\u4e00\u6761\u65e5\u5fd7\u7684term\u548clog index\uff0c\u5176\u4ed6\u8282\u70b9\u6536\u5230\u6d88\u606f\u65f6\uff0c\u5982\u679c\u53d1\u73b0\u81ea\u5df1\u7684\u65e5\u5fd7\u6bd4\u8bf7\u6c42\u4e2d\u643a\u5e26\u7684\u66f4\u65b0\uff0c\u5219\u62d2\u7edd\u6295\u7968\u3002\u65e5\u5fd7\u6bd4\u8f83\u7684\u539f\u5219\u662f\uff0c\u5982\u679c\u672c\u5730\u7684\u6700\u540e\u4e00\u6761log entry\u7684term\u66f4\u5927\uff0c\u5219term\u5927\u7684\u66f4\u65b0\uff0c\u5982\u679cterm\u4e00\u6837\u5927\uff0c\u5219log index\u66f4\u5927\u7684\u66f4\u65b0"))),(0,n.kt)("li",{parentName:"ul"},"Leader\u53ea\u80fd\u63a8\u8fdbcommit index\u6765\u63d0\u4ea4\u5f53\u524dterm\u7684\u5df2\u7ecf\u590d\u5236\u5230\u5927\u591a\u6570\u670d\u52a1\u5668\u4e0a\u7684\u65e5\u5fd7\uff0c\u65e7term\u65e5\u5fd7\u7684\u63d0\u4ea4\u8981\u7b49\u5230\u63d0\u4ea4\u5f53\u524dterm\u7684\u65e5\u5fd7\u6765\u95f4\u63a5\u63d0\u4ea4\uff08log index \u5c0f\u4e8e commit index\u7684\u65e5\u5fd7\u88ab\u95f4\u63a5\u63d0\u4ea4\uff09")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5df2\u63d0\u4ea4\u7684\u65e5\u5fd7\u88ab\u8986\u76d6",src:a(30232).Z})),(0,n.kt)("h3",{id:"\u65e5\u5fd7\u538b\u7f29"},"\u65e5\u5fd7\u538b\u7f29"),(0,n.kt)("p",null,"\u5728\u5b9e\u9645\u7684\u7cfb\u7edf\u4e2d\uff0c\u4e0d\u80fd\u8ba9\u65e5\u5fd7\u65e0\u9650\u589e\u957f\uff0c\u5426\u5219\u7cfb\u7edf\u91cd\u542f\u65f6\u9700\u8981\u82b1\u5f88\u957f\u7684\u65f6\u95f4\u8fdb\u884c\u56de\u653e\uff0c\u4ece\u800c\u5f71\u54cd\u53ef\u7528\u6027\u3002\nRaft\u91c7\u7528\u5bf9\u6574\u4e2a\u7cfb\u7edf\u8fdb\u884csnapshot\u6765\u89e3\u51b3\uff0csnapshot\u4e4b\u524d\u7684\u65e5\u5fd7\u90fd\u53ef\u4ee5\u4e22\u5f03"),(0,n.kt)("p",null,"\u6bcf\u4e2a\u526f\u672c\u72ec\u7acb\u7684\u5bf9\u81ea\u5df1\u7684\u7cfb\u7edf\u72b6\u6001\u8fdb\u884csnapshot\uff0c\u5e76\u4e14\u53ea\u80fd\u5bf9\u5df2\u7ecf\u63d0\u4ea4\u7684\u65e5\u5fd7\u8bb0\u5f55\u8fdb\u884csnapshot"),(0,n.kt)("p",null,"\u65e5\u5fd7\u5185\u5bb9:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u65e5\u5fd7\u5143\u6570\u636e"),(0,n.kt)("blockquote",{parentName:"li"},(0,n.kt)("p",{parentName:"blockquote"},"\u6700\u540e\u4e00\u6761\u5df2\u63d0\u4ea4\u7684 log entry\u7684 log index\u548cterm\u3002\n\u8fd9\u4e24\u4e2a\u503c\u5728snapshot\u4e4b\u540e\u7684\u7b2c\u4e00\u6761log entry\u7684AppendEntries RPC\u7684\u5b8c\u6574\u6027\u68c0\u67e5\u7684\u65f6\u5019\u4f1a\u88ab\u7528\u4e0a\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u7cfb\u7edf\u5f53\u524d\u72b6\u6001"))),(0,n.kt)("p",null,"\u5f53\u65b0\u52a0\u8fdb\u4e00\u53f0\u673a\u5668\u65f6\uff0c\u4e5f\u4f1a\u53d1\u9001snapshot\u7ed9\u5b83\u3002\u53d1\u9001snapshot\u4f7f\u7528InstalledSnapshot RPC"),(0,n.kt)("h3",{id:"\u6210\u5458\u53d8\u66f4"},"\u6210\u5458\u53d8\u66f4"),(0,n.kt)("p",null,"\u6210\u5458\u53d8\u66f4\u662f\u5728\u96c6\u7fa4\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u526f\u672c\u53d1\u751f\u53d8\u5316\uff0c\u5982\u589e\u52a0/\u51cf\u5c11\u526f\u672c\u6570\u3001\u8282\u70b9\u66ff\u6362\u7b49"),(0,n.kt)("h3",{id:"raft\u7b97\u6cd5\u603b\u7ed3"},"Raft\u7b97\u6cd5\u603b\u7ed3"),(0,n.kt)("h4",{id:"\u5404\u8282\u70b9\u7ef4\u62a4\u7684\u72b6\u6001"},"\u5404\u8282\u70b9\u7ef4\u62a4\u7684\u72b6\u6001"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5404\u8282\u70b9\u7ef4\u62a4\u7684\u72b6\u6001",src:a(76066).Z})),(0,n.kt)("h4",{id:"leader\u9009\u4e3e-1"},"Leader\u9009\u4e3e"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Leader\u9009\u4e3e",src:a(40501).Z})),(0,n.kt)("h4",{id:"\u65e5\u5fd7\u540c\u6b65-1"},"\u65e5\u5fd7\u540c\u6b65"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Leader\u9009\u4e3e",src:a(30753).Z})),(0,n.kt)("h4",{id:"raft\u72b6\u6001\u673a"},"Raft\u72b6\u6001\u673a"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Raft\u72b6\u6001\u673a",src:a(61877).Z})),(0,n.kt)("h4",{id:"\u5b89\u88c5snapshot"},"\u5b89\u88c5snapshot"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"\u5b89\u88c5snapshot",src:a(40294).Z})),(0,n.kt)("h2",{id:"paxos-\u7b97\u6cd5"},"Paxos \u7b97\u6cd5"),(0,n.kt)("h2",{id:"zab-\u7b97\u6cd5"},"ZAB \u7b97\u6cd5"),(0,n.kt)("h2",{id:"\u76f8\u5173\u6587\u6863"},"\u76f8\u5173\u6587\u6863"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://raft.github.io"},"The Raft Consensus Algorithm \u5b9e\u73b0\u5e93")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"http://thesecretlivesofdata.com/raft/"},"raft \u52a8\u753b\u6f14\u793a")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://raft.github.io/raft.pdf"},"raft \u8bba\u6587")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/maemual/raft-zh_cn"},"raft \u8bba\u6587\u4e2d\u6587\u7ffb\u8bd1")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://zhuanlan.zhihu.com/p/32052223"},"raft \u76f8\u5173\u6587\u7ae0"))))}d.isMDXComponent=!0},59486:function(e,t,a){"use strict";t.Z=a.p+"assets/images/285763-20190621144256061-464757033-bc0f46c124fe87f882a10ef63cf3d40c.png"},40501:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-05b80ce9095004381b5846c6179f932e_1440w-eb126ecb52d8ba2641aa52650033fa40.jpg"},30232:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-12a5ebab63781f9ec49e14e331775537_1440w-c7c6f7f7e77c1d8bfd5f0c6b8b6ef94e.jpg"},61877:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-4abb923772ec1be269843c977b5af3c8_1440w-58fd608ac9e6cfa30863dd1638e3afc7.jpg"},40294:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-793f4024bfcb648d9aab2a3dfe6b80de_1440w-ecdf769da625e23b2555c66a63dfceb6.jpg"},34593:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-7f64a2df8f8817932ed047d35878bca9_1440w-c46ff4b9ba8ea058277aed7e4902ce6e.jpg"},30753:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-8713b773762e9644c38defa5086afacd_1440w-44fefc2c7616001766a0ea932ae92452.jpg"},76066:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-9b53bd65fa9e11eeefd5331833d41c78_1440w-9f83203837ed63e89ef6dbac94eeabe3.jpg"},93632:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-d36c587901391cae50788061f568d24f_1440w-976eaf86abdf5f43ecf9adc4cf86993b.jpg"},12730:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-d3cc1cb525ac72dc59ed34148cb3199c_1440w-bca2045247a54d4fbc42dcb7d0019664.png"},1659:function(e,t,a){"use strict";t.Z=a.p+"assets/images/v2-ee29a89e4eb63468e142bb6103dbe4de_1440w-9f8017c8f21b06b193f72b034817ccf5.jpg"}}]);