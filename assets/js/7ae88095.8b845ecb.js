(window.webpackJsonp=window.webpackJsonp||[]).push([[93],{164:function(e,t,b){"use strict";b.r(t),b.d(t,"frontMatter",(function(){return n})),b.d(t,"metadata",(function(){return l})),b.d(t,"toc",(function(){return c})),b.d(t,"default",(function(){return o}));var a=b(3),i=b(7),r=(b(0),b(270)),n={title:"RabbitMQ \u9762\u8bd5\u9898"},l={unversionedId:"job/rabbitmq",id:"job/rabbitmq",isDocsHomePage:!1,title:"RabbitMQ \u9762\u8bd5\u9898",description:"RabbitMQ",source:"@site/docs/job/rabbitmq.md",slug:"/job/rabbitmq",permalink:"/docs.advanced.way/docs/job/rabbitmq",editUrl:"https://github.com/Goldwood1024/docs.advanced.way/docs/docs/job/rabbitmq.md",version:"current",lastUpdatedAt:1616148576,formattedLastUpdatedAt:"3/19/2021",sidebar:"job",previous:{title:"Redis \u9762\u8bd5\u9898",permalink:"/docs.advanced.way/docs/job/redis"},next:{title:"Spring \u9762\u8bd5\u9898",permalink:"/docs.advanced.way/docs/job/spring"}},c=[{value:"RabbitMQ",id:"rabbitmq",children:[{value:"RabbitMQ \u7684\u4f7f\u7528\u573a\u666f\u6709\u54ea\u4e9b\uff1f",id:"rabbitmq-\u7684\u4f7f\u7528\u573a\u666f\u6709\u54ea\u4e9b\uff1f",children:[]},{value:"RabbitMQ \u6709\u54ea\u4e9b\u91cd\u8981\u7684\u89d2\u8272\uff1f",id:"rabbitmq-\u6709\u54ea\u4e9b\u91cd\u8981\u7684\u89d2\u8272\uff1f",children:[]},{value:"RabbitMQ \u6709\u54ea\u4e9b\u91cd\u8981\u7684\u7ec4\u4ef6\uff1f",id:"rabbitmq-\u6709\u54ea\u4e9b\u91cd\u8981\u7684\u7ec4\u4ef6\uff1f",children:[]},{value:"RabbitMQ \u4e2d vhost \u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f",id:"rabbitmq-\u4e2d-vhost-\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f",children:[]},{value:"RabbitMQ \u7684\u6d88\u606f\u662f\u600e\u4e48\u53d1\u9001\u7684\uff1f",id:"rabbitmq-\u7684\u6d88\u606f\u662f\u600e\u4e48\u53d1\u9001\u7684\uff1f",children:[]},{value:"RabbitMQ \u600e\u4e48\u4fdd\u8bc1\u6d88\u606f\u7684\u7a33\u5b9a\u6027\uff1f",id:"rabbitmq-\u600e\u4e48\u4fdd\u8bc1\u6d88\u606f\u7684\u7a33\u5b9a\u6027\uff1f",children:[]},{value:"RabbitMQ \u600e\u4e48\u907f\u514d\u6d88\u606f\u4e22\u5931\uff1f",id:"rabbitmq-\u600e\u4e48\u907f\u514d\u6d88\u606f\u4e22\u5931\uff1f",children:[]},{value:"\u8981\u4fdd\u8bc1\u6d88\u606f\u6301\u4e45\u5316\u6210\u529f\u7684\u6761\u4ef6\u6709\u54ea\u4e9b\uff1f",id:"\u8981\u4fdd\u8bc1\u6d88\u606f\u6301\u4e45\u5316\u6210\u529f\u7684\u6761\u4ef6\u6709\u54ea\u4e9b\uff1f",children:[]},{value:"RabbitMQ \u6301\u4e45\u5316\u6709\u4ec0\u4e48\u7f3a\u70b9\uff1f",id:"rabbitmq-\u6301\u4e45\u5316\u6709\u4ec0\u4e48\u7f3a\u70b9\uff1f",children:[]},{value:"RabbitMQ \u6709\u51e0\u79cd\u5e7f\u64ad\u7c7b\u578b\uff1f",id:"rabbitmq-\u6709\u51e0\u79cd\u5e7f\u64ad\u7c7b\u578b\uff1f",children:[]},{value:"RabbitMQ \u600e\u4e48\u5b9e\u73b0\u5ef6\u8fdf\u6d88\u606f\u961f\u5217\uff1f",id:"rabbitmq-\u600e\u4e48\u5b9e\u73b0\u5ef6\u8fdf\u6d88\u606f\u961f\u5217\uff1f",children:[]},{value:"RabbitMQ \u96c6\u7fa4\u6709\u4ec0\u4e48\u7528\uff1f",id:"rabbitmq-\u96c6\u7fa4\u6709\u4ec0\u4e48\u7528\uff1f",children:[]},{value:"RabbitMQ \u8282\u70b9\u7684\u7c7b\u578b\u6709\u54ea\u4e9b\uff1f",id:"rabbitmq-\u8282\u70b9\u7684\u7c7b\u578b\u6709\u54ea\u4e9b\uff1f",children:[]},{value:"RabbitMQ \u96c6\u7fa4\u642d\u5efa\u9700\u8981\u6ce8\u610f\u54ea\u4e9b\u95ee\u9898\uff1f",id:"rabbitmq-\u96c6\u7fa4\u642d\u5efa\u9700\u8981\u6ce8\u610f\u54ea\u4e9b\u95ee\u9898\uff1f",children:[]},{value:"RabbitMQ \u6bcf\u4e2a\u8282\u70b9\u662f\u5176\u4ed6\u8282\u70b9\u7684\u5b8c\u6574\u62f7\u8d1d\u5417\uff1f\u4e3a\u4ec0\u4e48\uff1f",id:"rabbitmq-\u6bcf\u4e2a\u8282\u70b9\u662f\u5176\u4ed6\u8282\u70b9\u7684\u5b8c\u6574\u62f7\u8d1d\u5417\uff1f\u4e3a\u4ec0\u4e48\uff1f",children:[]},{value:"RabbitMQ \u96c6\u7fa4\u4e2d\u552f\u4e00\u4e00\u4e2a\u78c1\u76d8\u8282\u70b9\u5d29\u6e83\u4e86\u4f1a\u53d1\u751f\u4ec0\u4e48\u60c5\u51b5\uff1f",id:"rabbitmq-\u96c6\u7fa4\u4e2d\u552f\u4e00\u4e00\u4e2a\u78c1\u76d8\u8282\u70b9\u5d29\u6e83\u4e86\u4f1a\u53d1\u751f\u4ec0\u4e48\u60c5\u51b5\uff1f",children:[]},{value:"RabbitMQ \u5bf9\u96c6\u7fa4\u8282\u70b9\u505c\u6b62\u987a\u5e8f\u6709\u8981\u6c42\u5417\uff1f",id:"rabbitmq-\u5bf9\u96c6\u7fa4\u8282\u70b9\u505c\u6b62\u987a\u5e8f\u6709\u8981\u6c42\u5417\uff1f",children:[]}]}],u={toc:c};function o(e){var t=e.components,b=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},u,b,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"rabbitmq"},"RabbitMQ"),Object(r.b)("h3",{id:"rabbitmq-\u7684\u4f7f\u7528\u573a\u666f\u6709\u54ea\u4e9b\uff1f"},"RabbitMQ \u7684\u4f7f\u7528\u573a\u666f\u6709\u54ea\u4e9b\uff1f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u62a2\u8d2d\u6d3b\u52a8\uff0c\u524a\u5cf0\u586b\u8c37\uff0c\u9632\u6b62\u7cfb\u7edf\u5d29\u584c\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5ef6\u8fdf\u4fe1\u606f\u5904\u7406\uff0c\u6bd4\u5982 10 \u5206\u949f\u4e4b\u540e\u7ed9\u4e0b\u5355\u672a\u4ed8\u6b3e\u7684\u7528\u6237\u53d1\u9001\u90ae\u4ef6\u63d0\u9192\u3002"),Object(r.b)("li",{parentName:"ul"},"\u89e3\u8026\u7cfb\u7edf\uff0c\u5bf9\u4e8e\u65b0\u589e\u7684\u529f\u80fd\u53ef\u4ee5\u5355\u72ec\u5199\u6a21\u5757\u6269\u5c55\uff0c\u6bd4\u5982\u7528\u6237\u786e\u8ba4\u8bc4\u4ef7\u4e4b\u540e\uff0c\u65b0\u589e\u4e86\u7ed9\u7528\u6237\u8fd4\u79ef\u5206\u7684\u529f\u80fd\uff0c\u8fd9\u4e2a\u65f6\u5019\u4e0d\u7528\u5728\u4e1a\u52a1\u4ee3\u7801\u91cc\u6dfb\u52a0\u65b0\u589e\u79ef\u5206\u7684\u529f\u80fd\uff0c\u53ea\u9700\u8981\u628a\u65b0\u589e\u79ef\u5206\u7684\u63a5\u53e3\u8ba2\u9605\u786e\u8ba4\u8bc4\u4ef7\u7684\u6d88\u606f\u961f\u5217\u5373\u53ef\uff0c\u540e\u9762\u518d\u6dfb\u52a0\u4efb\u4f55\u529f\u80fd\u53ea\u9700\u8981\u8ba2\u9605\u5bf9\u5e94\u7684\u6d88\u606f\u961f\u5217\u5373\u53ef\u3002")),Object(r.b)("h3",{id:"rabbitmq-\u6709\u54ea\u4e9b\u91cd\u8981\u7684\u89d2\u8272\uff1f"},"RabbitMQ \u6709\u54ea\u4e9b\u91cd\u8981\u7684\u89d2\u8272\uff1f"),Object(r.b)("p",null,"RabbitMQ \u4e2d\u91cd\u8981\u7684\u89d2\u8272\u6709\uff1a\u751f\u4ea7\u8005\u3001\u6d88\u8d39\u8005\u548c\u4ee3\u7406\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u751f\u4ea7\u8005\uff1a\u6d88\u606f\u7684\u521b\u5efa\u8005\uff0c\u8d1f\u8d23\u521b\u5efa\u548c\u63a8\u9001\u6570\u636e\u5230\u6d88\u606f\u670d\u52a1\u5668\uff1b"),Object(r.b)("li",{parentName:"ul"},"\u6d88\u8d39\u8005\uff1a\u6d88\u606f\u7684\u63a5\u6536\u65b9\uff0c\u7528\u4e8e\u5904\u7406\u6570\u636e\u548c\u786e\u8ba4\u6d88\u606f\uff1b"),Object(r.b)("li",{parentName:"ul"},"\u4ee3\u7406\uff1a\u5c31\u662f RabbitMQ \u672c\u8eab\uff0c\u7528\u4e8e\u626e\u6f14\u201c\u5feb\u9012\u201d\u7684\u89d2\u8272\uff0c\u672c\u8eab\u4e0d\u751f\u4ea7\u6d88\u606f\uff0c\u53ea\u662f\u626e\u6f14\u201c\u5feb\u9012\u201d\u7684\u89d2\u8272\u3002")),Object(r.b)("h3",{id:"rabbitmq-\u6709\u54ea\u4e9b\u91cd\u8981\u7684\u7ec4\u4ef6\uff1f"},"RabbitMQ \u6709\u54ea\u4e9b\u91cd\u8981\u7684\u7ec4\u4ef6\uff1f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"ConnectionFactory\uff08\u8fde\u63a5\u7ba1\u7406\u5668\uff09\uff1a\u5e94\u7528\u7a0b\u5e8f\u4e0eRabbit\u4e4b\u95f4\u5efa\u7acb\u8fde\u63a5\u7684\u7ba1\u7406\u5668\uff0c\u7a0b\u5e8f\u4ee3\u7801\u4e2d\u4f7f\u7528\u3002"),Object(r.b)("li",{parentName:"ul"},"Channel\uff08\u4fe1\u9053\uff09\uff1a\u6d88\u606f\u63a8\u9001\u4f7f\u7528\u7684\u901a\u9053\u3002"),Object(r.b)("li",{parentName:"ul"},"Exchange\uff08\u4ea4\u6362\u5668\uff09\uff1a\u7528\u4e8e\u63a5\u53d7\u3001\u5206\u914d\u6d88\u606f\u3002"),Object(r.b)("li",{parentName:"ul"},"Queue\uff08\u961f\u5217\uff09\uff1a\u7528\u4e8e\u5b58\u50a8\u751f\u4ea7\u8005\u7684\u6d88\u606f\u3002"),Object(r.b)("li",{parentName:"ul"},"RoutingKey\uff08\u8def\u7531\u952e\uff09\uff1a\u7528\u4e8e\u628a\u751f\u6210\u8005\u7684\u6570\u636e\u5206\u914d\u5230\u4ea4\u6362\u5668\u4e0a\u3002"),Object(r.b)("li",{parentName:"ul"},"BindingKey\uff08\u7ed1\u5b9a\u952e\uff09\uff1a\u7528\u4e8e\u628a\u4ea4\u6362\u5668\u7684\u6d88\u606f\u7ed1\u5b9a\u5230\u961f\u5217\u4e0a\u3002")),Object(r.b)("h3",{id:"rabbitmq-\u4e2d-vhost-\u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f"},"RabbitMQ \u4e2d vhost \u7684\u4f5c\u7528\u662f\u4ec0\u4e48\uff1f"),Object(r.b)("p",null,"vhost\uff1a\u6bcf\u4e2a RabbitMQ \u90fd\u80fd\u521b\u5efa\u5f88\u591a vhost\uff0c\u6211\u4eec\u79f0\u4e4b\u4e3a\u865a\u62df\u4e3b\u673a\uff0c\u6bcf\u4e2a\u865a\u62df\u4e3b\u673a\u5176\u5b9e\u90fd\u662f mini \u7248\u7684RabbitMQ\uff0c\u5b83\u62e5\u6709\u81ea\u5df1\u7684\u961f\u5217\uff0c\u4ea4\u6362\u5668\u548c\u7ed1\u5b9a\uff0c\u62e5\u6709\u81ea\u5df1\u7684\u6743\u9650\u673a\u5236\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u7684\u6d88\u606f\u662f\u600e\u4e48\u53d1\u9001\u7684\uff1f"},"RabbitMQ \u7684\u6d88\u606f\u662f\u600e\u4e48\u53d1\u9001\u7684\uff1f"),Object(r.b)("p",null,"\u9996\u5148\u5ba2\u6237\u7aef\u5fc5\u987b\u8fde\u63a5\u5230 RabbitMQ \u670d\u52a1\u5668\u624d\u80fd\u53d1\u5e03\u548c\u6d88\u8d39\u6d88\u606f\uff0c\u5ba2\u6237\u7aef\u548c rabbit server \u4e4b\u95f4\u4f1a\u521b\u5efa\u4e00\u4e2a tcp \u8fde\u63a5\uff0c\u4e00\u65e6 tcp \u6253\u5f00\u5e76\u901a\u8fc7\u4e86\u8ba4\u8bc1\uff08\u8ba4\u8bc1\u5c31\u662f\u4f60\u53d1\u9001\u7ed9 rabbit \u670d\u52a1\u5668\u7684\u7528\u6237\u540d\u548c\u5bc6\u7801\uff09\uff0c\u4f60\u7684\u5ba2\u6237\u7aef\u548c RabbitMQ \u5c31\u521b\u5efa\u4e86\u4e00\u6761 amqp \u4fe1\u9053\uff08channel\uff09\uff0c\u4fe1\u9053\u662f\u521b\u5efa\u5728\u201c\u771f\u5b9e\u201d tcp \u4e0a\u7684\u865a\u62df\u8fde\u63a5\uff0camqp \u547d\u4ee4\u90fd\u662f\u901a\u8fc7\u4fe1\u9053\u53d1\u9001\u51fa\u53bb\u7684\uff0c\u6bcf\u4e2a\u4fe1\u9053\u90fd\u4f1a\u6709\u4e00\u4e2a\u552f\u4e00\u7684 id\uff0c\u4e0d\u8bba\u662f\u53d1\u5e03\u6d88\u606f\uff0c\u8ba2\u9605\u961f\u5217\u90fd\u662f\u901a\u8fc7\u8fd9\u4e2a\u4fe1\u9053\u5b8c\u6210\u7684\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u600e\u4e48\u4fdd\u8bc1\u6d88\u606f\u7684\u7a33\u5b9a\u6027\uff1f"},"RabbitMQ \u600e\u4e48\u4fdd\u8bc1\u6d88\u606f\u7684\u7a33\u5b9a\u6027\uff1f"),Object(r.b)("p",null,"\u63d0\u4f9b\u4e86\u4e8b\u52a1\u7684\u529f\u80fd\u3002\n\u901a\u8fc7\u5c06 channel \u8bbe\u7f6e\u4e3a confirm\uff08\u786e\u8ba4\uff09\u6a21\u5f0f\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u600e\u4e48\u907f\u514d\u6d88\u606f\u4e22\u5931\uff1f"},"RabbitMQ \u600e\u4e48\u907f\u514d\u6d88\u606f\u4e22\u5931\uff1f"),Object(r.b)("p",null,"\u628a\u6d88\u606f\u6301\u4e45\u5316\u78c1\u76d8\uff0c\u4fdd\u8bc1\u670d\u52a1\u5668\u91cd\u542f\u6d88\u606f\u4e0d\u4e22\u5931\u3002\n\u6bcf\u4e2a\u96c6\u7fa4\u4e2d\u81f3\u5c11\u6709\u4e00\u4e2a\u7269\u7406\u78c1\u76d8\uff0c\u4fdd\u8bc1\u6d88\u606f\u843d\u5165\u78c1\u76d8\u3002"),Object(r.b)("h3",{id:"\u8981\u4fdd\u8bc1\u6d88\u606f\u6301\u4e45\u5316\u6210\u529f\u7684\u6761\u4ef6\u6709\u54ea\u4e9b\uff1f"},"\u8981\u4fdd\u8bc1\u6d88\u606f\u6301\u4e45\u5316\u6210\u529f\u7684\u6761\u4ef6\u6709\u54ea\u4e9b\uff1f"),Object(r.b)("p",null,"\u58f0\u660e\u961f\u5217\u5fc5\u987b\u8bbe\u7f6e\u6301\u4e45\u5316 durable \u8bbe\u7f6e\u4e3a true.\n\u6d88\u606f\u63a8\u9001\u6295\u9012\u6a21\u5f0f\u5fc5\u987b\u8bbe\u7f6e\u6301\u4e45\u5316\uff0cdeliveryMode \u8bbe\u7f6e\u4e3a 2\uff08\u6301\u4e45\uff09\u3002\n\u6d88\u606f\u5df2\u7ecf\u5230\u8fbe\u6301\u4e45\u5316\u4ea4\u6362\u5668\u3002\n\u6d88\u606f\u5df2\u7ecf\u5230\u8fbe\u6301\u4e45\u5316\u961f\u5217\u3002\n\u4ee5\u4e0a\u56db\u4e2a\u6761\u4ef6\u90fd\u6ee1\u8db3\u624d\u80fd\u4fdd\u8bc1\u6d88\u606f\u6301\u4e45\u5316\u6210\u529f\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u6301\u4e45\u5316\u6709\u4ec0\u4e48\u7f3a\u70b9\uff1f"},"RabbitMQ \u6301\u4e45\u5316\u6709\u4ec0\u4e48\u7f3a\u70b9\uff1f"),Object(r.b)("p",null,"\u6301\u4e45\u5316\u7684\u7f3a\u5730\u5c31\u662f\u964d\u4f4e\u4e86\u670d\u52a1\u5668\u7684\u541e\u5410\u91cf\uff0c\u56e0\u4e3a\u4f7f\u7528\u7684\u662f\u78c1\u76d8\u800c\u975e\u5185\u5b58\u5b58\u50a8\uff0c\u4ece\u800c\u964d\u4f4e\u4e86\u541e\u5410\u91cf\u3002\u53ef\u5c3d\u91cf\u4f7f\u7528 ssd \u786c\u76d8\u6765\u7f13\u89e3\u541e\u5410\u91cf\u7684\u95ee\u9898\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u6709\u51e0\u79cd\u5e7f\u64ad\u7c7b\u578b\uff1f"},"RabbitMQ \u6709\u51e0\u79cd\u5e7f\u64ad\u7c7b\u578b\uff1f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"direct\uff08\u9ed8\u8ba4\u65b9\u5f0f\uff09\uff1a\u6700\u57fa\u7840\u6700\u7b80\u5355\u7684\u6a21\u5f0f\uff0c\u53d1\u9001\u65b9\u628a\u6d88\u606f\u53d1\u9001\u7ed9\u8ba2\u9605\u65b9\uff0c\u5982\u679c\u6709\u591a\u4e2a\u8ba2\u9605\u8005\uff0c\u9ed8\u8ba4\u91c7\u53d6\u8f6e\u8be2\u7684\u65b9\u5f0f\u8fdb\u884c\u6d88\u606f\u53d1\u9001\u3002"),Object(r.b)("li",{parentName:"ul"},"headers\uff1a\u4e0e direct \u7c7b\u4f3c\uff0c\u53ea\u662f\u6027\u80fd\u5f88\u5dee\uff0c\u6b64\u7c7b\u578b\u51e0\u4e4e\u7528\u4e0d\u5230\u3002"),Object(r.b)("li",{parentName:"ul"},"fanout\uff1a\u5206\u53d1\u6a21\u5f0f\uff0c\u628a\u6d88\u8d39\u5206\u53d1\u7ed9\u6240\u6709\u8ba2\u9605\u8005\u3002"),Object(r.b)("li",{parentName:"ul"},"topic\uff1a\u5339\u914d\u8ba2\u9605\u6a21\u5f0f\uff0c\u4f7f\u7528\u6b63\u5219\u5339\u914d\u5230\u6d88\u606f\u961f\u5217\uff0c\u80fd\u5339\u914d\u5230\u7684\u90fd\u80fd\u63a5\u6536\u5230\u3002")),Object(r.b)("h3",{id:"rabbitmq-\u600e\u4e48\u5b9e\u73b0\u5ef6\u8fdf\u6d88\u606f\u961f\u5217\uff1f"},"RabbitMQ \u600e\u4e48\u5b9e\u73b0\u5ef6\u8fdf\u6d88\u606f\u961f\u5217\uff1f"),Object(r.b)("p",null,"\u5ef6\u8fdf\u961f\u5217\u7684\u5b9e\u73b0\u6709\u4e24\u79cd\u65b9\u5f0f\uff1a"),Object(r.b)("p",null,"\u901a\u8fc7\u6d88\u606f\u8fc7\u671f\u540e\u8fdb\u5165\u6b7b\u4fe1\u4ea4\u6362\u5668\uff0c\u518d\u7531\u4ea4\u6362\u5668\u8f6c\u53d1\u5230\u5ef6\u8fdf\u6d88\u8d39\u961f\u5217\uff0c\u5b9e\u73b0\u5ef6\u8fdf\u529f\u80fd\uff1b\n\u4f7f\u7528 RabbitMQ-delayed-message-exchange \u63d2\u4ef6\u5b9e\u73b0\u5ef6\u8fdf\u529f\u80fd\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u96c6\u7fa4\u6709\u4ec0\u4e48\u7528\uff1f"},"RabbitMQ \u96c6\u7fa4\u6709\u4ec0\u4e48\u7528\uff1f"),Object(r.b)("p",null,"\u96c6\u7fa4\u4e3b\u8981\u6709\u4ee5\u4e0b\u4e24\u4e2a\u7528\u9014\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u9ad8\u53ef\u7528\uff1a\u67d0\u4e2a\u670d\u52a1\u5668\u51fa\u73b0\u95ee\u9898\uff0c\u6574\u4e2a RabbitMQ \u8fd8\u53ef\u4ee5\u7ee7\u7eed\u4f7f\u7528\uff1b"),Object(r.b)("li",{parentName:"ul"},"\u9ad8\u5bb9\u91cf\uff1a\u96c6\u7fa4\u53ef\u4ee5\u627f\u8f7d\u66f4\u591a\u7684\u6d88\u606f\u91cf\u3002")),Object(r.b)("h3",{id:"rabbitmq-\u8282\u70b9\u7684\u7c7b\u578b\u6709\u54ea\u4e9b\uff1f"},"RabbitMQ \u8282\u70b9\u7684\u7c7b\u578b\u6709\u54ea\u4e9b\uff1f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u78c1\u76d8\u8282\u70b9\uff1a\u6d88\u606f\u4f1a\u5b58\u50a8\u5230\u78c1\u76d8\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5185\u5b58\u8282\u70b9\uff1a\u6d88\u606f\u90fd\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u91cd\u542f\u670d\u52a1\u5668\u6d88\u606f\u4e22\u5931\uff0c\u6027\u80fd\u9ad8\u4e8e\u78c1\u76d8\u7c7b\u578b\u3002")),Object(r.b)("h3",{id:"rabbitmq-\u96c6\u7fa4\u642d\u5efa\u9700\u8981\u6ce8\u610f\u54ea\u4e9b\u95ee\u9898\uff1f"},"RabbitMQ \u96c6\u7fa4\u642d\u5efa\u9700\u8981\u6ce8\u610f\u54ea\u4e9b\u95ee\u9898\uff1f"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"\u5404\u8282\u70b9\u4e4b\u95f4\u4f7f\u7528\u201c--link\u201d\u8fde\u63a5\uff0c\u6b64\u5c5e\u6027\u4e0d\u80fd\u5ffd\u7565\u3002"),Object(r.b)("li",{parentName:"ul"},"\u5404\u8282\u70b9\u4f7f\u7528\u7684 erlang cookie \u503c\u5fc5\u987b\u76f8\u540c\uff0c\u6b64\u503c\u76f8\u5f53\u4e8e\u201c\u79d8\u94a5\u201d\u7684\u529f\u80fd\uff0c\u7528\u4e8e\u5404\u8282\u70b9\u7684\u8ba4\u8bc1\u3002"),Object(r.b)("li",{parentName:"ul"},"\u6574\u4e2a\u96c6\u7fa4\u4e2d\u5fc5\u987b\u5305\u542b\u4e00\u4e2a\u78c1\u76d8\u8282\u70b9\u3002")),Object(r.b)("h3",{id:"rabbitmq-\u6bcf\u4e2a\u8282\u70b9\u662f\u5176\u4ed6\u8282\u70b9\u7684\u5b8c\u6574\u62f7\u8d1d\u5417\uff1f\u4e3a\u4ec0\u4e48\uff1f"},"RabbitMQ \u6bcf\u4e2a\u8282\u70b9\u662f\u5176\u4ed6\u8282\u70b9\u7684\u5b8c\u6574\u62f7\u8d1d\u5417\uff1f\u4e3a\u4ec0\u4e48\uff1f"),Object(r.b)("p",null,"\u4e0d\u662f\uff0c\u539f\u56e0\u6709\u4ee5\u4e0b\u4e24\u4e2a\uff1a"),Object(r.b)("p",null,"\u5b58\u50a8\u7a7a\u95f4\u7684\u8003\u8651\uff1a\u5982\u679c\u6bcf\u4e2a\u8282\u70b9\u90fd\u62e5\u6709\u6240\u6709\u961f\u5217\u7684\u5b8c\u5168\u62f7\u8d1d\uff0c\u8fd9\u6837\u65b0\u589e\u8282\u70b9\u4e0d\u4f46\u6ca1\u6709\u65b0\u589e\u5b58\u50a8\u7a7a\u95f4\uff0c\u53cd\u800c\u589e\u52a0\u4e86\u66f4\u591a\u7684\u5197\u4f59\u6570\u636e\uff1b\n\u6027\u80fd\u7684\u8003\u8651\uff1a\u5982\u679c\u6bcf\u6761\u6d88\u606f\u90fd\u9700\u8981\u5b8c\u6574\u62f7\u8d1d\u5230\u6bcf\u4e00\u4e2a\u96c6\u7fa4\u8282\u70b9\uff0c\u90a3\u65b0\u589e\u8282\u70b9\u5e76\u6ca1\u6709\u63d0\u5347\u5904\u7406\u6d88\u606f\u7684\u80fd\u529b\uff0c\u6700\u591a\u662f\u4fdd\u6301\u548c\u5355\u8282\u70b9\u76f8\u540c\u7684\u6027\u80fd\u751a\u81f3\u662f\u66f4\u7cdf\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u96c6\u7fa4\u4e2d\u552f\u4e00\u4e00\u4e2a\u78c1\u76d8\u8282\u70b9\u5d29\u6e83\u4e86\u4f1a\u53d1\u751f\u4ec0\u4e48\u60c5\u51b5\uff1f"},"RabbitMQ \u96c6\u7fa4\u4e2d\u552f\u4e00\u4e00\u4e2a\u78c1\u76d8\u8282\u70b9\u5d29\u6e83\u4e86\u4f1a\u53d1\u751f\u4ec0\u4e48\u60c5\u51b5\uff1f"),Object(r.b)("p",null,"\u5982\u679c\u552f\u4e00\u78c1\u76d8\u7684\u78c1\u76d8\u8282\u70b9\u5d29\u6e83\u4e86\uff0c\u4e0d\u80fd\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),Object(r.b)("p",null,"\u4e0d\u80fd\u521b\u5efa\u961f\u5217\n\u4e0d\u80fd\u521b\u5efa\u4ea4\u6362\u5668\n\u4e0d\u80fd\u521b\u5efa\u7ed1\u5b9a\n\u4e0d\u80fd\u6dfb\u52a0\u7528\u6237\n\u4e0d\u80fd\u66f4\u6539\u6743\u9650\n\u4e0d\u80fd\u6dfb\u52a0\u548c\u5220\u9664\u96c6\u7fa4\u8282\u70b9\n\u552f\u4e00\u78c1\u76d8\u8282\u70b9\u5d29\u6e83\u4e86\uff0c\u96c6\u7fa4\u662f\u53ef\u4ee5\u4fdd\u6301\u8fd0\u884c\u7684\uff0c\u4f46\u4f60\u4e0d\u80fd\u66f4\u6539\u4efb\u4f55\u4e1c\u897f\u3002"),Object(r.b)("h3",{id:"rabbitmq-\u5bf9\u96c6\u7fa4\u8282\u70b9\u505c\u6b62\u987a\u5e8f\u6709\u8981\u6c42\u5417\uff1f"},"RabbitMQ \u5bf9\u96c6\u7fa4\u8282\u70b9\u505c\u6b62\u987a\u5e8f\u6709\u8981\u6c42\u5417\uff1f"),Object(r.b)("p",null,"RabbitMQ \u5bf9\u96c6\u7fa4\u7684\u505c\u6b62\u7684\u987a\u5e8f\u662f\u6709\u8981\u6c42\u7684\uff0c\u5e94\u8be5\u5148\u5173\u95ed\u5185\u5b58\u8282\u70b9\uff0c\u6700\u540e\u518d\u5173\u95ed\u78c1\u76d8\u8282\u70b9\u3002\u5982\u679c\u987a\u5e8f\u6070\u597d\u76f8\u53cd\u7684\u8bdd\uff0c\u53ef\u80fd\u4f1a\u9020\u6210\u6d88\u606f\u7684\u4e22\u5931\u3002"))}o.isMDXComponent=!0},270:function(e,t,b){"use strict";b.d(t,"a",(function(){return d})),b.d(t,"b",(function(){return O}));var a=b(0),i=b.n(a);function r(e,t,b){return t in e?Object.defineProperty(e,t,{value:b,enumerable:!0,configurable:!0,writable:!0}):e[t]=b,e}function n(e,t){var b=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),b.push.apply(b,a)}return b}function l(e){for(var t=1;t<arguments.length;t++){var b=null!=arguments[t]?arguments[t]:{};t%2?n(Object(b),!0).forEach((function(t){r(e,t,b[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(b)):n(Object(b)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(b,t))}))}return e}function c(e,t){if(null==e)return{};var b,a,i=function(e,t){if(null==e)return{};var b,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)b=r[a],t.indexOf(b)>=0||(i[b]=e[b]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)b=r[a],t.indexOf(b)>=0||Object.prototype.propertyIsEnumerable.call(e,b)&&(i[b]=e[b])}return i}var u=i.a.createContext({}),o=function(e){var t=i.a.useContext(u),b=t;return e&&(b="function"==typeof e?e(t):l(l({},t),e)),b},d=function(e){var t=o(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var b=e.components,a=e.mdxType,r=e.originalType,n=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=o(b),m=a,O=d["".concat(n,".").concat(m)]||d[m]||p[m]||r;return b?i.a.createElement(O,l(l({ref:t},u),{},{components:b})):i.a.createElement(O,l({ref:t},u))}));function O(e,t){var b=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=b.length,n=new Array(r);n[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,n[1]=l;for(var u=2;u<r;u++)n[u]=b[u];return i.a.createElement.apply(null,n)}return i.a.createElement.apply(null,b)}m.displayName="MDXCreateElement"}}]);