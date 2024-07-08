# 脚手架

* 快速自动化搭建启动项目的工具
  1. 调用工具 - vue create ${name}
  2. 传参 - vue create zhaowaProject webpack -f
  3. 轮询 - 对话获取更多信息
  4. 模版读取 - 远端/本地 拉取
  5. 加工
   
##  第一步: 处理依赖
```js
  npm i commander
  npm i inquirer

  npm i chalk
  
  npm i axios
  npm i download-git-repo

  npm i path
  npm i fs-extra
  npm i ora
```

## 第二步: 处理工程入口
```js
// vue create zhaowaProject
// 1. 初始化npm
  npm init

// 2. 新建主命令，引入到配置项
// bin / package.json

// 3. 关联主命令与配置项
  npm link

// 4. 执行主命令即可关联逻辑内容
```