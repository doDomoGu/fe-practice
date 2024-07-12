# 单元测试

## 主要流程 
* 粒度: 函数级别
* 组成: 预期 + 结果 => 是否命中
  
## 覆盖率  
  覆盖逻辑分支的比率
```js
  function top10(number, sum){
    if(number < 10) {
      return sum += number
    }

    return sum
  }
```

## 单元拆分的定义
逻辑层面的拆分
* 逻辑闭环的最小模块
* 最小实现的视图模块

## 环境准备
```js
  // 1. 安装依赖
  npm i -D jest
  npm i -D @types/jest babel-jest @vue/test-utils@next @testing-library/jest-dom ts-jest vue-jest 
  npm i -D @babel/preset-env

  // 2. 配置babel
  配置babel的presets, 使其能够支持较新的es语法

  // 3. 配置jest
  // 入口 匹配各种类型的文件
  

  // 4. 编写测试用例

```