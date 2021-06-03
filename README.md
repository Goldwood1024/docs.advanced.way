## 📚 文档库 

该文档库基于 `Docusaurus` 构建而成，文档内容在 `docs` 文件夹内，格式为 `Markdown`

`GitHub Pages` 静态站点 [https://Goldwood1024.github.io/docs.advanced.way](https://Goldwood1024.github.io/docs.advanced.way/)  

博客内容在 `blog` 文件夹内

### 🔨 开发/部署

```shell
yarn start
# 开发服务器地址为 http://localhost:3000
```

### Github Action

使用 `Github Action` 构建静态网站

配置文件: `.github/workflows/gh-deploy.yml`

```shell
git checkout website
git merge master
git push
```

### 资源

* https://www.docusaurus.cn