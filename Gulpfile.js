 var gulp = require('gulp');
 var contentIncluder = require('gulp-content-includer');
 var rename = require('gulp-rename');
 var imagemin = require('gulp-imagemin');
 var concat = require('gulp-concat');
 var uglify = require('gulp-uglify');
 var minifyCSS = require('gulp-minify-css');

 //html解析
 gulp.task('html_concat', function() {

     gulp.src(["./dev/index/index.html", "./dev/history/history.html", "./dev/companyevent/companyevent.html", "./dev/companynews/companynews.html", "./dev/cloudPlatform/cloudPlatform.html", "./dev/security/security.html", "./dev/ecs/ecs.html","./dev/service/service.html","./dev/company/company.html","./dev/companyCultureValues/companyCultureValues.html"])
         .pipe(contentIncluder({
             includerReg: /<!\-\-include\s+"([^"]+)"\-\->/g
         }))
         .pipe(gulp.dest('./html'));
 });

 gulp.task('script', function() {
     return gulp.src('dev/src/js/*') //文件来源
         .pipe(concat('all.js')) //合并后的文件
         .pipe(gulp.dest('./js')) //输出文件
         .pipe(uglify()) //文件压缩
         .pipe(rename('all.min.js')) //文件重命名
         .pipe(gulp.dest('./js')) //压缩后文件输出
 });

 gulp.task('minifyCSS', function() {
     return gulp.src('dev/src/css/*') //文件来源
         .pipe(concat('all.css')) //合并后的文件
         .pipe(gulp.dest('./css')) //输出文件
         .pipe(minifyCSS()) //文件压缩
         .pipe(rename('all.min.css')) //文件重命名
         .pipe(gulp.dest('./css')) //压缩后文件输出
 });

 //图片压缩
 gulp.task('imagemin', function() {
     return gulp.src('dev/src/img/*')
         .pipe(imagemin())
         .pipe(gulp.dest('./img'));
 });

 //build
 gulp.task('build', ['html_concat','minifyCSS']);

 //设置默认
 gulp.task('default', ['html_concat']);

 //设置监听
 gulp.task('watch', function() {
     gulp.watch(['./dev/**/*.html', 'dev/src/**/*'], ['build']);
 });
