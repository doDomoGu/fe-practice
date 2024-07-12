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
    gulp.src(glob[, options]) // 并非原本的文件流，而是虚拟文件对象流 => 减少对于实体文件I/O的次数

    // 1. globs 文件匹配模式
    使用数组的方式来匹配多种文件
    gulp.src(['*.js','./js/*.js'])

    // 2. options 处理文件的配置项
    options.buffer - boolean bufferstream
    options.read - boolean => 设置文件内容是否需要读取返回
    options.base - 文件基础路径
  ```

2. .pipe() - 把文件通过pipe的方式导入到gulp插件中
```js
gulp.src('zhaowa/js/*.js')
// minify()  使用压缩工具
  .pipe(minify())
  // .pipe(...)  其他的中途加工  串行 输入是上一次的结果
  .pipe(gulp.dest('build')) // 导入到产物
```

3. gulp.dest() - 处理后的流内容写入到文件中
```js
  gulp.dest(path[, options])
  // 1. path - 写入文件的路径 
  // 2. options可选参数
    //  options.mode - string 0777 所在目录的权限
```

4. gulp.watch() - 监视文件的变化，用以触发相应的任务流
```js
  gulp.watch(glob,[...options], tasks)
  // glob - 监视文件的匹配
  // tasks - 文件变化后要执行的任务

  // 创建任务

  glup.task('minify', function(){
    // 任务内容
  })

  glup.task('uglify', function(){
    // 任务内容
  })

  // < 4.0 
  gulp.watch('./page/**/*.js', ['uglify', 'minify'])

  // >= 4.0
  gulp.watch('./page/**/*.js',
    gulp.parallel([
      'uglify',
      'minify'
    ])
  )
```