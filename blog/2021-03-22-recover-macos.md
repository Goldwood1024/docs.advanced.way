---
slug: recover-macoos
title: macOS 恢复
tags: [macos, brew, 恢复]
---

## 恢复macOS系统

### 准备镜像文件

下载最新本或旧版MacOS镜像制作恢复盘

[最新版macOS Big Sur](https://support.apple.com/zh-cn/HT201475)，
[旧版 macOS Catalina、macOS Mojave](https://support.apple.com/zh-cn/HT211683)

### 烧写U盘

先擦除U盘(容量8GB以上)，重要`数据先备份`，烧写镜像钱需要卸载U盘

> `MyVolume` 为U盘卷名

```shell
sudo diskutil list
sudo diskutil eraseDisk ExFAT U /dev/disk
sudo diskutil unmountDisk /dev/disk
sudo /Applications/Install\ macOS\ Big\ Sur.app/Contents/Resources/createinstallmedia --volume /Volumes/MyVolume
```

Apple 官方指导

https://support.apple.com/zh-cn/HT201372

## zsh

```shell
sh -c "$(curl -fsSL https://raw.github.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"
git clone https://github.com/zsh-users/zsh-autosuggestions $ZSH_CUSTOM/plugins/zsh-autosuggestions
git clone https://github.com/zsh-users/zsh-syntax-highlighting.git $ZSH_CUSTOM/plugins/zsh-syntax-highlighting
```

## brew

[https://brew.sh](https://brew.sh)

|名称|说明|
|---|---|
|brew|	Homebrew 源代码仓库|
|homebrew-core|	Homebrew 核心软件仓库|
|homebrew-bottles|	Homebrew 预编译二进制软件包|
|homebrew-cask|	提供 macOS 应用和大型二进制文件|

### 脚本安装

因国内访问brew仓库较慢，这里使用清华的源作为安装仓库。

> 请求 `raw.githubusercontent.com` 地址时会出现无法连接，`https://www.ipaddress.com` 解析ip地址加入 `/etc/hosts` 文件

```shell
## 依赖工具
xcode-select --install

## 环境变量 zsh/bash
export HOMEBREW_BREW_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/brew"
export HOMEBREW_CORE_GIT_REMOTE="https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-core"
export HOMEBREW_BOTTLE_DOMAIN="https://mirrors.tuna.tsinghua.edu.cn/homebrew-bottles"

## 安装脚本
/bin/zsh[bash] -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install.sh)"

## cask
git clone https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask.git $(brew --repo homebrew/cask)
git clone https://mirrors.tuna.tsinghua.edu.cn/git/homebrew/homebrew-cask-versions.git $(brew --repo homebrew/cask-versions)

## 卸载
/bin/zsh[bash] -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/uninstall.sh)"

## 恢复原版镜像--可以不恢复
git -C "$(brew --repo)" remote set-url origin https://github.com/Homebrew/brew.git
git -C "$(brew --repo homebrew/core)" remote set-url origin https://github.com/Homebrew/homebrew-core.git
git -C "$(brew --repo homebrew/cask)" remote set-url origin https://github.com/Homebrew/homebrew-cask.git
```

### 软件推荐

```shell
brew install git node wget hotp redis mysql 

brew install --cask sogouinput google-chrome jetbrains-toolbox \
visual-studio-code teambition paper the-unarchiver \
typora iterm2 alfred sourcetree postman appcleaner \
dash xmind-zen pdf-expert motrix 

## jdk
brew install --cask homebrew/cask-versions/adoptopenjdk8
```

## sdkman

```shell
curl -s "https://get.sdkman.io" | bash
sdk install maven
```