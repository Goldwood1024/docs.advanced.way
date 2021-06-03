---
slug: mysql-state
title: mysql 进程常见的 State
tags: [mysql, sql, state, 进程]
---

**通过show processlist查看MySQL的进程状态，在State列上面的状态有如下这些：**

**Analyzing**
线程对MyISAM 表的统计信息做分析(例如, ANALYZE TABLE )。

**checking permissions**
线程检查服务器是否具有所需的权限来执行该语句。

**Checking table**
线程正在执行表检查操作。

**cleaning up**
线程处理一个命令，并正准备释放内存和重置某些状态变量。

**closing tables**
线程改变表中的数据刷新到磁盘和关闭使用的表。

**converting HEAP to MyISAM**
线程从转换内部临时表MEMORY内存表到磁盘MyISAM表。

**copy to tmp table**
线程正在处理一个ALTER TABLE语句。

**Copying to group table**
如果语句有不同的ORDER BY和GROUP BY标准，按组排序并复制到一个临时表。

**Copying to tmp table**
服务器复制到内存中的临时表。

**Copying to tmp table on disk**
服务器复制到一个临时表在磁盘上。 

**Creating index**
线程正在处理ALTER TABLE ... ENABLE KEYS。

**Creating sort index**
线程正在处理一个SELECT，使用内部临时表解决。

**creating table**
线程创建一个表， 这包括建立临时表。

**Creating tmp table**
线程创建一个临时表在内存或磁盘上。 如果表是在内存中创建，但后来被转换成一个磁盘上的表，在该操作状态为Copying to tmp table on disk。

**deleting from main table**
服务器正在执行多表删除的第一部分。 它只能从第一个表中删除，并保存列和删除从其他表(参考)偏移。

**deleting from reference tables**
服务器正在执行多表删除的第二部分，从其他表中删除匹配的行。

**discard_or_import_tablespace**
线程正在处理一个ALTER TABLE ... DISCARD TABLESPACE或ALTER TABLE ... IMPORT TABLESPACE语句。

**end**
这发生在最后的清理工作，有ALTER TABLE , CREATE VIEW , DELETE , INSERT , SELECT或UPDATE语句。

**executing**
线程已开始执行语句。

**Execution of init_command**
线程正在执行中的init_command系统变量。

**freeing items**
线程已执行的命令。 释放一些在这种状态下完成的项目，涉及的查询缓存。 这种状态通常后跟cleaning up 。

**Flushing tables**
线程正在执行FLUSH TABLES ，等待所有线程关闭其表。

**FULLTEXT initialization**
该服务器是准备执行一个自然语言的全文检索。

**init**
在发生之前的初始化ALTER TABLE , DELETE , INSERT , SELECT或UPDATE语句。 服务器在这种状态下采取的行动包括冲洗二进制日志中InnoDB日志,和一些查询缓存清理操作。

**Killed**
有人发送一个KILL线程的语句,它应该中止在下一次检查杀死标志。

**Locked**
查询被锁定由另一个查询。

**logging slow query**
线程正在写慢查询日志的语句。

**NULL**
这种状态是用于SHOW PROCESSLIST状态。

**login**
连接线程的初始状态，直到客户端已成功通过身份验证。

**Opening tables , Opening table**
线程试图打开一个表。 这应该是非常快的过程中，除非有阻止打开。

**optimizing**
服务器执行查询的初始优化。

**preparing**
这种状态出现在查询优化过程中。

**Purging old relay logs**
线程是消除不必要的中继日志文件。

**query end**
这种状态发生后处理查询，但在此freeing items的项目状态。

**Reading from net**
服务器读网络数据包。

**Removing duplicates**
查询使用SELECT DISTINCT在这样一种方式。 MySQL需要一个额外的的阶段，将结果发送到客户端之前删除所有重复行。

**removing tmp table**
线程移除临时表。 如果没有创建临时表，这种状态是不使用。

**rename**
线程重命名表。

**rename result table**
线程正在处理一个ALTER TABLE语句，创建新表并重新命名它来取代原来的表。

**Reopen tables**
线程有一个表锁，并试图重新打开它。

**Repair by sorting**
使用排序修复索引。

**Repair done**
修复完成。

**Repair with keycache**
修复使用键缓存。用于myisam表，出现该状态应加大myisam_max_sort_file_size。

**Rolling back**
回滚事务。

**Saving state**
保存状态。

**Searching rows for update**
线程做第一阶段前更新他们找到所有匹配的行。

**Sending data**
线程处理一个SELECT语句，将数据发送到客户端。 因为在这个状态发生的操作往往执行大量的磁盘访问(读取)，查询的生命周期最长的运行状态。

**setup**
线程开始一个ALTER TABLE操作。

**Sorting for group**
线程做一个分组。

**Sorting for order**
线程做ORDER BY排序。

**Sorting index**
线程排序索引，更高效的访问MyISAM表的优化操作。

**Sorting result**
对于SELECT语句，这是Creating sort index类似,但不用临时表。

**statistics**
服务器计算统计数据，以制定一个查询执行计划。 如果一个线程处于这种状态很长一段时间，可能是磁盘在执行其他工作。

**System lock**
该线程正在等待内部或外部的系统锁表。 可以与外部系统--skip-external-locking锁定选项。

**Table lock**
线程要求内部表锁。

**Updating**
线程正在寻找要更新的行。

**updating main table**
服务器正在执行多表更新的第一部分，它只更新第一个表。

**updating reference tables**
服务器正在执行多表更新的第二部分。

**User lock**
线程请求或要求与锁等待GET_LOCK()调用。

**Waiting for release of readlock**
线程正在等待另一个线程的锁被释放。

**Waiting for tables , Waiting for table**
线程得到一个表的基本结构发生了变化的通知，它需要重新打开表，以获取新的结构。 必须等到所有其他线程已经关闭表。
如果另一个线程已FLUSH TABLES或表执行下面的语句：FLUSH TABLES tbl_name、ALTER TABLE、RENAME TABLE、REPAIR TABLE、ANALYZE TABLE、OPTIMIZE TABLE。

**Waiting on cond**
在该线程正在等待一个条件。

**Waiting to get readlock**
线程已发出一个FLUSH TABLES WITH READ LOCK语句获得全局读锁，并正在等待获取锁。

**Writing to net、waiting for net**
服务器写一个数据包活等待网络，要是大量出现请迅速检查数据库到前端的网络连接状态和流量。