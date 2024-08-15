---
sidebar_position: 1
---

# 文档上传

让我们看下这个玩意怎么搞

## 1.安装docusaurus

```
npm init docusaurusshell
```

## 2.运行网站

命令1：`cd my-website`

命令2：`npm run start`或`yarn run start`

退出快捷键：`ctrl`+`c`

## 3.生成静态文件

命令1：`npm run build`或`yarn run build`

## 4.测试

命令1：`npm run serve或yarn run serve`

## 5.源码上传到仓库

```
git init
git add ./
git commit -m "first commit"
git branch -M master
git remote add origin git@github.com:xxx/xxx.github.io.git
git push -u origin master
```

## 6.上传到分支gh-pages

GIT_USER=ITbanzhuan yarn deploy

