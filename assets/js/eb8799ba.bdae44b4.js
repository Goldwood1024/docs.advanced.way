(window.webpackJsonp=window.webpackJsonp||[]).push([[178],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return b})),t.d(n,"toc",(function(){return i})),t.d(n,"default",(function(){return u}));var l=t(3),r=t(7),a=(t(0),t(269)),c={title:"Dockerfile"},b={unversionedId:"cloud/docker/base/Dockerfile",id:"cloud/docker/base/Dockerfile",isDocsHomePage:!1,title:"Dockerfile",description:"Dockerfile \u662f\u4e00\u4e2a\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684\u6587\u672c\u6587\u4ef6\uff0c\u6587\u672c\u5185\u5bb9\u5305\u542b\u4e86\u4e00\u6761\u6761\u6784\u5efa\u955c\u50cf\u6240\u9700\u7684\u6307\u4ee4\u548c\u8bf4\u660e\u3002",source:"@site/docs/cloud/docker/base/Dockerfile.md",slug:"/cloud/docker/base/Dockerfile",permalink:"/docs.advanced.way/docs/cloud/docker/base/Dockerfile",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/cloud/docker/base/Dockerfile.md",version:"current",lastUpdatedAt:1616131278,formattedLastUpdatedAt:"3/19/2021",sidebar:"docker",previous:{title:"\u955c\u50cf",permalink:"/docs.advanced.way/docs/cloud/docker/base/\u955c\u50cf/"},next:{title:"Docker Compose",permalink:"/docs.advanced.way/docs/cloud/docker/base/Compose"}},i=[{value:"\u5173\u952e\u5b57",id:"\u5173\u952e\u5b57",children:[{value:"FROM",id:"from",children:[]},{value:"USER",id:"user",children:[]},{value:"MAINTAINER",id:"maintainer",children:[]},{value:"LABEL",id:"label",children:[]},{value:"ENV",id:"env",children:[]},{value:"RUN",id:"run",children:[]},{value:"ADD",id:"add",children:[]},{value:"COPY",id:"copy",children:[]},{value:"CMD",id:"cmd",children:[]},{value:"VOLUME",id:"volume",children:[]},{value:"WORKDIR \u76f8\u5f53\u4e8ecd",id:"workdir-\u76f8\u5f53\u4e8ecd",children:[]},{value:"EXPOSE",id:"expose",children:[]},{value:"ENTRYPOINT",id:"entrypoint",children:[]},{value:"ARG",id:"arg",children:[]}]},{value:"Dockerfile",id:"dockerfile",children:[]},{value:"\u6784\u5efa\u547d\u4ee4",id:"\u6784\u5efa\u547d\u4ee4",children:[]}],o={toc:i};function u(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(a.b)("wrapper",Object(l.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Dockerfile \u662f\u4e00\u4e2a\u7528\u6765\u6784\u5efa\u955c\u50cf\u7684\u6587\u672c\u6587\u4ef6\uff0c\u6587\u672c\u5185\u5bb9\u5305\u542b\u4e86\u4e00\u6761\u6761\u6784\u5efa\u955c\u50cf\u6240\u9700\u7684\u6307\u4ee4\u548c\u8bf4\u660e\u3002"),Object(a.b)("h2",{id:"\u5173\u952e\u5b57"},"\u5173\u952e\u5b57"),Object(a.b)("h3",{id:"from"},"FROM"),Object(a.b)("p",null,"\u6307\u5b9a\u57fa\u7840\u955c\u50cf\uff0c\u5fc5\u987b\u4e3a\u7b2c\u4e00\u4e2a\u547d\u4ee4"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"FROM <image>\nFROM <image>:<tag>\nFROM <image>@<digest>\n")),Object(a.b)("h3",{id:"user"},"USER"),Object(a.b)("p",null,"\u6307\u5b9a\u8fd0\u884c\u5bb9\u5668\u65f6\u7684\u7528\u6237\u540d\u6216 UID\uff0c\u540e\u7eed\u7684 RUN \u4e5f\u4f1a\u4f7f\u7528\u6307\u5b9a\u7528\u6237\u3002\n\u4f7f\u7528USER\u6307\u5b9a\u7528\u6237\u65f6\uff0c\u53ef\u4ee5\u4f7f\u7528\u7528\u6237\u540d\u3001UID\u6216GID\uff0c\u6216\u662f\u4e24\u8005\u7684\u7ec4\u5408\u3002\u5f53\u670d\u52a1\u4e0d\u9700\u8981\u7ba1\u7406\u5458\u6743\u9650\u65f6\uff0c\u53ef\u4ee5\u901a\u8fc7\u8be5\u547d\u4ee4\u6307\u5b9a\u8fd0\u884c\u7528\u6237\u3002\n\u5e76\u4e14\u53ef\u4ee5\u5728\u4e4b\u524d\u521b\u5efa\u6240\u9700\u8981\u7684\u7528\u6237"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"USER user\nUSER user:group\nUSER uid\nUSER uid:gid\nUSER user:gid\nUSER uid:group\n")),Object(a.b)("h3",{id:"maintainer"},"MAINTAINER"),Object(a.b)("p",null,"\u7ef4\u62a4\u8005\u4fe1\u606f"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre"},"MAINTAINER <name>\n")),Object(a.b)("h3",{id:"label"},"LABEL"),Object(a.b)("p",null,"\u7528\u4e8e\u4e3a\u955c\u50cf\u6dfb\u52a0\u5143\u6570\u636e"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'LABEL <key>=<value> <key>=<value> <key>=<value> ...\n\n# \u4f8b\nLABEL version="1.0" description="\u8fd9\u662f\u4e00\u4e2aWeb\u670d\u52a1\u5668" by="IT\u7b14\u5f55"\n')),Object(a.b)("h3",{id:"env"},"ENV"),Object(a.b)("p",null,"\u8bbe\u7f6e\u73af\u5883\u53d8\u91cf"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'ENV <key> <value>  #<key>\u4e4b\u540e\u7684\u6240\u6709\u5185\u5bb9\u5747\u4f1a\u88ab\u89c6\u4e3a\u5176<value>\u7684\u7ec4\u6210\u90e8\u5206\uff0c\u56e0\u6b64\uff0c\u4e00\u6b21\u53ea\u80fd\u8bbe\u7f6e\u4e00\u4e2a\u53d8\u91cf\nENV <key>=<value> ...  #\u53ef\u4ee5\u8bbe\u7f6e\u591a\u4e2a\u53d8\u91cf\uff0c\u6bcf\u4e2a\u53d8\u91cf\u4e3a\u4e00\u4e2a"<key>=<value>"\u7684\u952e\u503c\u5bf9\uff0c\u5982\u679c<key>\u4e2d\u5305\u542b\u7a7a\u683c\uff0c\u53ef\u4ee5\u4f7f\u7528\\\u6765\u8fdb\u884c\u8f6c\u4e49\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7""\u6765\u8fdb\u884c\u6807\u793a\uff1b\u53e6\u5916\uff0c\u53cd\u659c\u7ebf\u4e5f\u53ef\u4ee5\u7528\u4e8e\u7eed\u884c\n')),Object(a.b)("h3",{id:"run"},"RUN"),Object(a.b)("p",null,"\u6784\u5efa\u955c\u50cf\u65f6\u6267\u884c\u7684\u547d\u4ee4"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"RUN <command>\n")),Object(a.b)("h3",{id:"add"},"ADD"),Object(a.b)("p",null,"\u5c06\u672c\u5730\u6587\u4ef6\u6dfb\u52a0\u5230\u5bb9\u5668\u4e2d\uff0ctar\u7c7b\u578b\u6587\u4ef6\u4f1a\u81ea\u52a8\u89e3\u538b(\u7f51\u7edc\u538b\u7f29\u8d44\u6e90\u4e0d\u4f1a\u88ab\u89e3\u538b)\uff0c\u53ef\u4ee5\u8bbf\u95ee\u7f51\u7edc\u8d44\u6e90\uff0c\u7c7b\u4f3cwget"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'ADD <src>... <dest>\nADD ["<src>",... "<dest>"]\n')),Object(a.b)("h3",{id:"copy"},"COPY"),Object(a.b)("p",null,"\u529f\u80fd\u7c7b\u4f3cADD\uff0c\u4f46\u662f\u662f\u4e0d\u4f1a\u81ea\u52a8\u89e3\u538b\u6587\u4ef6\uff0c\u4e5f\u4e0d\u80fd\u8bbf\u95ee\u7f51\u7edc\u8d44\u6e90"),Object(a.b)("h3",{id:"cmd"},"CMD"),Object(a.b)("p",null,"\u6784\u5efa\u5bb9\u5668\u540e\u8c03\u7528\uff0c\u4e5f\u5c31\u662f\u5728\u5bb9\u5668\u542f\u52a8\u65f6\u624d\u8fdb\u884c\u8c03\u7528"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"CMD command param1 param2\n")),Object(a.b)("h3",{id:"volume"},"VOLUME"),Object(a.b)("p",null,"\u7528\u4e8e\u6307\u5b9a\u6301\u4e45\u5316\u76ee\u5f55"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'VOLUME ["/path/to/dir"]\n')),Object(a.b)("h3",{id:"workdir-\u76f8\u5f53\u4e8ecd"},"WORKDIR \u76f8\u5f53\u4e8ecd"),Object(a.b)("p",null,"\u5de5\u4f5c\u76ee\u5f55"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"WORKDIR /path/to/workdir\n")),Object(a.b)("h3",{id:"expose"},"EXPOSE"),Object(a.b)("p",null,"\u6307\u5b9a\u4e8e\u5916\u754c\u4ea4\u4e92\u7684\u7aef\u53e3"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"EXPOSE <port> [<port>...]\n")),Object(a.b)("h3",{id:"entrypoint"},"ENTRYPOINT"),Object(a.b)("p",null,"\u914d\u7f6e\u5bb9\u5668\uff0c\u4f7f\u5176\u53ef\u6267\u884c\u5316"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"}," ENTRYPOINT command param1 param2\n")),Object(a.b)("h3",{id:"arg"},"ARG"),Object(a.b)("p",null,"\u7528\u4e8e\u6307\u5b9a\u4f20\u9012\u7ed9\u6784\u5efa\u8fd0\u884c\u65f6\u7684\u53d8\u91cf"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"ARG <name>[=<default value>]\n")),Object(a.b)("h2",{id:"dockerfile"},"Dockerfile"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},'# Base images \u57fa\u7840\u955c\u50cf\nFROM centos\n\n#MAINTAINER \u7ef4\u62a4\u8005\u4fe1\u606f\nMAINTAINER user\n\n#ENV \u8bbe\u7f6e\u73af\u5883\u53d8\u91cf\nENV PATH /usr/local/nginx/sbin:$PATH\n\n#ADD  \u6587\u4ef6\u653e\u5728\u5f53\u524d\u76ee\u5f55\u4e0b\uff0c\u62f7\u8fc7\u53bb\u4f1a\u81ea\u52a8\u89e3\u538b\nADD nginx-1.8.0.tar.gz /usr/local/  \nADD epel-release-latest-7.noarch.rpm /usr/local/  \n\n#RUN \u6267\u884c\u4ee5\u4e0b\u547d\u4ee4 \nRUN rpm -ivh /usr/local/epel-release-latest-7.noarch.rpm\nRUN yum install -y wget lftp gcc gcc-c++ make openssl-devel pcre-devel pcre && yum clean all\nRUN useradd -s /sbin/nologin -M www\n\n#WORKDIR \u76f8\u5f53\u4e8ecd\nWORKDIR /usr/local/nginx-1.8.0 \n\nRUN ./configure --prefix=/usr/local/nginx --user=www --group=www --with-http_ssl_module --with-pcre && make && make install\n\nRUN echo "daemon off;" >> /etc/nginx.conf\n\n#EXPOSE \u6620\u5c04\u7aef\u53e3\nEXPOSE 80\n\n#CMD \u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\nCMD ["nginx"]\n')),Object(a.b)("h2",{id:"\u6784\u5efa\u547d\u4ee4"},"\u6784\u5efa\u547d\u4ee4"),Object(a.b)("pre",null,Object(a.b)("code",{parentName:"pre",className:"language-shell"},"docker build [OPTIONS] PATH | URL | -\n\n# \u4f8b\ndocker build -t \u540d\u79f0:\u7248\u672c\u53f7 .\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"--build-arg=[] :\u8bbe\u7f6e\u955c\u50cf\u521b\u5efa\u65f6\u7684\u53d8\u91cf\uff1b"),Object(a.b)("li",{parentName:"ul"},"--cpu-shares :\u8bbe\u7f6e cpu \u4f7f\u7528\u6743\u91cd\uff1b"),Object(a.b)("li",{parentName:"ul"},"--cpu-period :\u9650\u5236 CPU CFS\u5468\u671f\uff1b"),Object(a.b)("li",{parentName:"ul"},"--cpu-quota :\u9650\u5236 CPU CFS\u914d\u989d\uff1b"),Object(a.b)("li",{parentName:"ul"},"--cpuset-cpus :\u6307\u5b9a\u4f7f\u7528\u7684CPU id\uff1b"),Object(a.b)("li",{parentName:"ul"},"--cpuset-mems :\u6307\u5b9a\u4f7f\u7528\u7684\u5185\u5b58 id\uff1b"),Object(a.b)("li",{parentName:"ul"},"--disable-content-trust :\u5ffd\u7565\u6821\u9a8c\uff0c\u9ed8\u8ba4\u5f00\u542f\uff1b"),Object(a.b)("li",{parentName:"ul"},"-f :\u6307\u5b9a\u8981\u4f7f\u7528\u7684Dockerfile\u8def\u5f84\uff1b"),Object(a.b)("li",{parentName:"ul"},"--force-rm :\u8bbe\u7f6e\u955c\u50cf\u8fc7\u7a0b\u4e2d\u5220\u9664\u4e2d\u95f4\u5bb9\u5668\uff1b"),Object(a.b)("li",{parentName:"ul"},"--isolation :\u4f7f\u7528\u5bb9\u5668\u9694\u79bb\u6280\u672f\uff1b"),Object(a.b)("li",{parentName:"ul"},"--label=[] :\u8bbe\u7f6e\u955c\u50cf\u4f7f\u7528\u7684\u5143\u6570\u636e\uff1b"),Object(a.b)("li",{parentName:"ul"},"-m :\u8bbe\u7f6e\u5185\u5b58\u6700\u5927\u503c\uff1b"),Object(a.b)("li",{parentName:"ul"},'--memory-swap :\u8bbe\u7f6eSwap\u7684\u6700\u5927\u503c\u4e3a\u5185\u5b58+swap\uff0c"-1"\u8868\u793a\u4e0d\u9650swap\uff1b'),Object(a.b)("li",{parentName:"ul"},"--no-cache :\u521b\u5efa\u955c\u50cf\u7684\u8fc7\u7a0b\u4e0d\u4f7f\u7528\u7f13\u5b58\uff1b"),Object(a.b)("li",{parentName:"ul"},"--pull :\u5c1d\u8bd5\u53bb\u66f4\u65b0\u955c\u50cf\u7684\u65b0\u7248\u672c\uff1b"),Object(a.b)("li",{parentName:"ul"},"--quiet, -q :\u5b89\u9759\u6a21\u5f0f\uff0c\u6210\u529f\u540e\u53ea\u8f93\u51fa\u955c\u50cf ID\uff1b"),Object(a.b)("li",{parentName:"ul"},"--rm :\u8bbe\u7f6e\u955c\u50cf\u6210\u529f\u540e\u5220\u9664\u4e2d\u95f4\u5bb9\u5668\uff1b"),Object(a.b)("li",{parentName:"ul"},"--shm-size :\u8bbe\u7f6e/dev/shm\u7684\u5927\u5c0f\uff0c\u9ed8\u8ba4\u503c\u662f64M\uff1b"),Object(a.b)("li",{parentName:"ul"},"--ulimit :Ulimit\u914d\u7f6e\u3002"),Object(a.b)("li",{parentName:"ul"},"--tag, -t: \u955c\u50cf\u7684\u540d\u5b57\u53ca\u6807\u7b7e\uff0c\u901a\u5e38 name:tag \u6216\u8005 name \u683c\u5f0f\uff1b\u53ef\u4ee5\u5728\u4e00\u6b21\u6784\u5efa\u4e2d\u4e3a\u4e00\u4e2a\u955c\u50cf\u8bbe\u7f6e\u591a\u4e2a\u6807\u7b7e\u3002"),Object(a.b)("li",{parentName:"ul"},"--network: \u9ed8\u8ba4 default\u3002\u5728\u6784\u5efa\u671f\u95f4\u8bbe\u7f6eRUN\u6307\u4ee4\u7684\u7f51\u7edc\u6a21\u5f0f")))}u.isMDXComponent=!0},269:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return O}));var l=t(0),r=t.n(l);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,r=function(e,n){if(null==e)return{};var t,l,r={},a=Object.keys(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)t=a[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=r.a.createContext({}),u=function(e){var n=r.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):b(b({},n),e)),t},p=function(e){var n=u(e.components);return r.a.createElement(o.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},s=r.a.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=u(t),s=l,O=p["".concat(c,".").concat(s)]||p[s]||d[s]||a;return t?r.a.createElement(O,b(b({ref:n},o),{},{components:t})):r.a.createElement(O,b({ref:n},o))}));function O(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,c=new Array(a);c[0]=s;var b={};for(var i in n)hasOwnProperty.call(n,i)&&(b[i]=n[i]);b.originalType=e,b.mdxType="string"==typeof e?e:l,c[1]=b;for(var o=2;o<a;o++)c[o]=t[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);