## 条件编译
```shell
#define            定义一个预处理宏
#undef            取消宏的定义

#if                   编译预处理中的条件命令，相当于C语法中的if语句
#ifdef              判断某个宏是否被定义，若已定义，执行随后的语句
#ifndef            与#ifdef相反，判断某个宏是否未被定义
#elif                若#if, #ifdef, #ifndef或前面的#elif条件不满足，则执行#elif之后的语句，相当于C语法中的else-if
#else              与#if, #ifdef, #ifndef对应, 若这些条件不满足，则执行#else之后的语句，相当于C语法中的else
#endif             #if, #ifdef, #ifndef这些条件命令的结束标志.
defined         　与#if, #elif配合使用，判断某个宏是否被定义
```

Linux 内核会给每个进程维护一个文件描述符表
fd 为 0、1、2 分别表示标准输入、标准输出和错误输出，每次新打开的 fd，必须使用当前进程中最小可用的文件描述符

定时器都会采用最小堆或者时间轮等有序数据结构进行存储

zmalloc是redis自己实现的内存分配，是对linux中malloc，free，relloc这3个函数的一个封装