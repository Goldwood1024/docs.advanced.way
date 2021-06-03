module.exports = {
  java: {
    基础: [
      'java/README',
      'java/base/object',
      'java/base/数据类型',
      'java/base/关键字',
      'java/base/String',
      'java/base/io',
      'java/base/nio',
      'java/base/Reference',
      'java/base/代理',
      'java/base/函数式接口',
      'java/base/反射',
      'java/base/base64',
      'java/base/jdk',
    ],
    集合: [
      'java/collection/Collection',
      'java/collection/List',
      'java/collection/Map',
    ],
    高并发: [
      'java/hc/高并发',
      'java/hc/多线程',
      'java/hc/并发编程的艺术',
      'java/hc/内存模型',
      'java/hc/原子类',
      'java/hc/并发容器',
      'java/hc/并发工具类',
      'java/hc/线程池',
      'java/hc/锁'
    ],
    JVM: [
      'java/jvm/对象创建过程',
      'java/jvm/对象回收机制',
      'java/jvm/jvm参数',
      'java/jvm/jvm内存模型',
      'java/jvm/内存优化',
      'java/jvm/垃圾收集器',
    ]
  },
  spring: {
    Spring: [
      'zoology/spring-family/README',
      'zoology/spring-family/spring/IOC',
      'zoology/spring-family/spring/AOP',
      'zoology/spring-family/spring/core',
      'zoology/spring-family/spring/事务管理',
      'zoology/spring-family/spring/BeanFactory',
      'zoology/spring-family/spring/BeanDefinition',
      'zoology/spring-family/spring/spring启动流程',
      'zoology/spring-family/spring/问题',
      'zoology/spring-family/spring/importbean',
      'zoology/spring-family/spring/getbean'
    ],
    SpringMVC: [
      'zoology/spring-family/springmvc/简介',
      'zoology/spring-family/springmvc/核心组件',
      'zoology/spring-family/springmvc/Servlet',
      'zoology/spring-family/springmvc/Session',
      'zoology/spring-family/springmvc/DispatcherServlet',
      'zoology/spring-family/springmvc/RequestMapping',
    ],
    SpringJMS: [],
    SpringBoot: [
      'zoology/spring-family/springboot/简介',
      'zoology/spring-family/springboot/起步依赖',
      'zoology/spring-family/springboot/自动配置',
      'zoology/spring-family/springboot/系统指标监控',
      'zoology/spring-family/springboot/spi',
      'zoology/spring-family/springboot/springboot启动',
      'zoology/spring-family/springboot/常用注解',
      'zoology/spring-family/springboot/基本特性',
    ],
    SpringCloud: [
      'zoology/spring-family/springcloud/feign'
    ],
  },
  framework: {
    Mybatis: [
      'zoology/framework/mybatis/README',
      'zoology/framework/mybatis/mybatis/配置',
      'zoology/framework/mybatis/mybatis/核心组件',
      'zoology/framework/mybatis/mybatis/映射器',
      'zoology/framework/mybatis/mybatis/动态 SQL',
      'zoology/framework/mybatis/mybatis/Cache',
      'zoology/framework/mybatis/mybatis/插件',
      'zoology/framework/mybatis/mybatis/扩展',
      'zoology/framework/mybatis/mybatis/代码生成器',
    ],
    MybatisPlus: [
      'zoology/framework/mybatis/mybatisplus/README',
    ],
    'Auth2.0': [
      'zoology/framework/auth/auth'
    ],
    'Shiro': []
  },
  chinese: {
    语文: [
      'practice/memo/chinese/lan/idiom',
      'practice/memo/chinese/noun/economics'
    ]
  },
  practice: {
    软件安装: [
      'practice/memo/tool/sublime',
      'practice/memo/tool/idea',
    ],
    使用教程: [
      'practice/memo/course/maven',
      'practice/memo/course/git',
      'practice/memo/course/docker',
    ],
    法律常识: [],
    云课堂: [
      'practice/memo/classnotes/notes/dingding'
    ],
    大中国: [
      'practice/memo/chinese/lan/idiom',
      'practice/memo/chinese/noun/economics'
    ],
    '面试题': [
      'practice/memo/job/java',
      'practice/memo/job/jvm',
      'practice/memo/job/mybatis',
      'practice/memo/job/mysql',
      'practice/memo/job/redis',
      'practice/memo/job/rabbitmq',
      'practice/memo/job/spring',
      'practice/memo/job/linux',
      'practice/memo/job/网络协议',
      'practice/memo/job/分布式',
      'practice/memo/job/算法',
      'practice/memo/job/服务器',
      'practice/memo/job/面经',
    ]
  },
  patterns: {
    设计模式: [
      'practice/patterns/README',
      'practice/patterns/other/设计模式原则',
    ],
    创建型模式: [
      'practice/patterns/build/单利模式',
      'practice/patterns/build/工厂模式',
      'practice/patterns/build/建造者模式',
      'practice/patterns/build/原型模式',
    ],
    结构型模式: [
      'practice/patterns/structured/亨元模式',
      'practice/patterns/structured/代理模式',
      'practice/patterns/structured/外观模式',
      'practice/patterns/structured/桥接模式',
      'practice/patterns/structured/组合模式',
      'practice/patterns/structured/装饰模式',
      'practice/patterns/structured/适配器模式',
    ],
    行为型模式: [
      'practice/patterns/behavior/中介者模式',
      'practice/patterns/behavior/命令模式',
      'practice/patterns/behavior/备忘录模式',
      'practice/patterns/behavior/模板方法模式',
      'practice/patterns/behavior/状态模式',
      'practice/patterns/behavior/策略模式',
      'practice/patterns/behavior/职责链模式',
      'practice/patterns/behavior/观察者模式',
      'practice/patterns/behavior/解释器模式',
      'practice/patterns/behavior/访问者模式',
      'practice/patterns/behavior/迭代器模式',
    ],
  },
  algorithm: {
    算法: [
      'practice/algorithm/algorithm/README',
    ],
    数据结构: [
      'practice/algorithm/structure/tree/树',
      'practice/algorithm/structure/queue/队列',
    ],
    leetcode: [
      'practice/algorithm/leetcode/README',
    ]
  },
  os: {
    网络协议: [
      'zoology/os/network/tcpip',
      'zoology/os/network/http',
    ],
    操作系统原理: [],
    Linux: [
      'zoology/os/linux/README',
      'zoology/os/linux/command/常用命令',
      'zoology/os/linux/command/lvm',
      'zoology/os/linux/command/soft',
    ],
    Shell编程: [
      'zoology/os/linux/shell/Shell',
    ],
    内核: [
      'zoology/os/linux/kernel/README',
    ]
  },
  distributed: {
    组件: [
      'zoology/middleware/distributed/readme',
      'zoology/middleware/distributed/consul'
    ],
    Dubbo: [],
    事务: [
      'zoology/middleware/tranctional/简介',
      'zoology/middleware/tranctional/spring事务',
      'zoology/middleware/tranctional/mysql事务',
      'zoology/middleware/tranctional/redis事务',
    ],
    分布式事务: [
      'zoology/middleware/tranctional/seata/介绍'
    ],
    JMS: [
      'zoology/middleware/mq/jms/jms',
      'zoology/middleware/mq/jms/事件驱动模型'
    ],
    ActiveMQ: [
      'zoology/middleware/mq/active/架构'
    ],
    Redis的队列: [],
    Kafka: [],
    RabbitMQ: [],
  },
  db: {
    SQL: [
      'zoology/db/sql/README',
    ],
    Mysql: [
      'zoology/db/mysql/mysql',
      'zoology/db/mysql/数据类型',
      'zoology/db/mysql/数据库索引',
      'zoology/db/mysql/InnoDB',
      'zoology/db/mysql/复制',
      'zoology/db/mysql/性能优化',
    ],
    缓存: [
      'zoology/db/cache/README',
      'zoology/db/cache/cache/cache-strategies',
    ],
    Redis: [
      'zoology/db/cache/redis/概述',
      'zoology/db/cache/redis/数据类型',
      'zoology/db/cache/redis/数据结构',
      'zoology/db/cache/redis/持久化',
      'zoology/db/cache/redis/复制',
      'zoology/db/cache/redis/集群',
      'zoology/db/cache/redis/Sentinel',
      'zoology/db/cache/redis/常见问题',
    ],
  },
  docker: {
    基础篇: [
      'zoology/cloud/docker/base/镜像',
      'zoology/cloud/docker/base/Dockerfile',
      'zoology/cloud/docker/base/Compose',
      'zoology/cloud/docker/base/YAML',
    ],
    实战篇: [],
    K8S: [
      'zoology/cloud/k8s/README',
    ],
    服务网格: []
  },
};
