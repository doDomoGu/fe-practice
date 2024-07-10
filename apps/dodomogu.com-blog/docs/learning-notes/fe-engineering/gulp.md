## 工程化 gulp

## 流式工程化

### 准备
1. 安装
```
   npm install -g gulp
```

2. 主入口
  glupfile.js - 主文件脚本入口

### 工作方式 - 三步走

```js
  var gulp = require('gulp')

  // 1. 获取流的api
  gulp.src('xxx.js')
  // 2. 通过管道api
  .pipe(
    // 3. 生成流的api
    gulp.dest('dist/xxx.js')
  )
```

1. gulp.src() - 读取文件
   * 面试: 获取想要处理的文件流 vs Webpack(node:fs)
  ```js
    gulp.src(glob[, options]) // 并非原本的文件流，而是虚拟文件对象流 

    // 1. globs 文件匹配模式
    使用数组的方式来匹配多种文件
    gulp.src(['*.js','./js/*.js'])

    // 2. options 处理文件的配置项

  ```
