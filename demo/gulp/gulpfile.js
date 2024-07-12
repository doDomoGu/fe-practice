// 初始化
var gulp = require('gulp')
gulp.task('default', function () {
  console.log(' hello dodomogu gulp, default task')
})

// 1. step1 - 添加文件用例
gulp.src('./js/json5.js').pipe(gulp.dest('dist1'))

// 2. step2 - 通配符用例
gulp.src('./js/*.js').pipe(gulp.dest('dist2'))

// 3. step3 - 生成用例任务
gulp.task('minZW', function () {
  console.log('正在执行 minZW')
})

gulp.task('uglify', function () {
  console.log('正在执行 uglify')
})

// 3.a 复合型任务
gulp.task('js', function () {
  console.log('正在执行 js')
})
gulp.task('es', function () {
  console.log('正在执行 es')
})
gulp.task('css', function () {
  console.log('正在执行 css')
})

gulp.task('dodomogu', gulp.parallel(['es', 'js', 'css']))

// 4. step4 - 监视文件变化，执行任务
gulp.watch('./js/*.js', gulp.parallel(['minZW', 'uglify']))
// .pipe(gulp.dest('dist3'))
