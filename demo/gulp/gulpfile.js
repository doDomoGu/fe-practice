// 初始化
var gulp = require('gulp')
gulp.task('default', function () {
  console.log(' hello dodomogu gulp, default task')
})

// 1. step1 添加文件用例
gulp.src('./json5.js').pipe(gulp.dest('dist'))
