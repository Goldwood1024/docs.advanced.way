---
slug: smartmontools
title: 硬盘检测
tags: [smartmontools, 硬盘检测]
---

## 命令行工具

```shell
## 按照命令
brew install smartmontools
## 检测
smartctl -a disk0
```

输出:
```
smartctl 7.2 2020-12-30 r5155 [Darwin 19.6.0 x86_64] (local build)
Copyright (C) 2002-20, Bruce Allen, Christian Franke, www.smartmontools.org

=== START OF INFORMATION SECTION ===
Model Number:                       APPLE SSD AP0256M
Serial Number:                      C020356005GM3F71E
Firmware Version:                   1161.100
PCI Vendor/Subsystem ID:            0x106b
IEEE OUI Identifier:                0x000000
Controller ID:                      0
NVMe Version:                       <1.2
Number of Namespaces:               1
Local Time is:                      Fri Jun  4 09:45:14 2021 CST
Firmware Updates (0x02):            1 Slot
Optional Admin Commands (0x0004):   Frmw_DL
Optional NVM Commands (0x0004):     DS_Mngmt
Maximum Data Transfer Size:         256 Pages

Supported Power States
St Op     Max   Active     Idle   RL RT WL WT  Ent_Lat  Ex_Lat
 0 +     0.00W       -        -    0  0  0  0        0       0

=== START OF SMART DATA SECTION ===
SMART overall-health self-assessment test result: PASSED

SMART/Health Information (NVMe Log 0x02)
Critical Warning:                   0x00
Temperature:                        28 Celsius
Available Spare:                    100%
Available Spare Threshold:          99%
Percentage Used:                    0%
Data Units Read:                    5,194,214 [2.65 TB]
Data Units Written:                 4,450,364 [2.27 TB]
Host Read Commands:                 100,918,524
Host Write Commands:                55,002,127
Controller Busy Time:               0
Power Cycles:                       148
Power On Hours:                     45
Unsafe Shutdowns:                   66
Media and Data Integrity Errors:    0
Error Information Log Entries:      0

Read 1 entries from Error Information Log failed: GetLogPage failed: system=0x38, sub=0x0, code=745
```



## DriveDX

```shell
brew install --cask drivedX
```

