var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
// Gulp tasks begins here
// Sass compiler
gulp.task('sass', function() {
  return gulp.src('app/scss/**/*.scss')
  .pipe(sass())
  .pipe(gulp.dest('app/css'))
  .pipe(browserSync.reload({
    stream: true
  }))
});

//Sync - Spin a server for ma
gulp.task('broswer-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
// Gulp watch
gulp.task('watch', ['browserSync', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});



//Sync - Spin a server for ma
gulp.task('broswer-sync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
});
