### vue项目的目录结构了解：
```
src 是项目的核心文件
src 文件夹下的目录：

public 静态文件资源，比如index，html，css，js等代码
assets文件夹 存放静态资源，例如：图片，字体，静态文件等.

router 配置项目的路由文件
App.vue文件 App.vue是整个项目的根组件，所有的页面都是在此基础上进行切换的。

main.js 主要作用是初始化vue实例，导入需要的插件等。// 入口文件
mian.js 主要是引入vue框架，根组件及路由设置，并定义vue实例。

项目主要在src文件夹下进行开发，所以，有些文件名字不是必须的，你可以根据自己的
需要进行调整，创建及删除文件及文件夹、
App.vue和main.js这两个文件是必须的、

node_modules 是npm install 安装的依赖代码库
```