---
slug: Hash-Flooding
title: 哈希洪水攻击
tags: [hash, 哈希洪水攻击]
---

## 哈希洪水攻击

hash表的构造是通过一个哈希函数计算出存放的位置，也就是hash值，查找是O(1)（如果几乎不发生碰撞的话）

如果有n个key通过hash计算出来的值都相同，那么就会退化成链表，这样查找1个数的时候复杂度就是O(n)。
哈希碰撞攻击在知道hash算法的前提下恶意构造n个相同hash值的key，让他去做哈希碰撞，这样hash表的查找效率就被拖慢到了O(n^2)，只要提交的key的数据规模n在上万级别，那么服务器就瘫痪了

防护手段: 限制参数个数、禁止不明用户提交数据”

从JDK 8开始，HashMap、LinkedHashMap和ConcurrentHashMap三个类引入了一套新的策略来处理哈希碰撞。
当一个位置存储的元素个数小于8个时，仍然使用链表存储。
当一个位置存储的元素个数大于等于8个时，改为使用平衡树来存储

[Breaking Murmur: Hash-flooding DoS Reloaded](http://emboss.github.io/blog/2012/12/14/breaking-murmur-hash-flooding-dos-reloaded/)