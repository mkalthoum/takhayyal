var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
 var deploy = require('gulp-gh-pages');
// Gulp tasks begins here
// Sass compiler
gulp.task('sass', function() {
    return gulp.src("app/scss/main.scss")
        .pipe(sass())
        .pipe(gulp.dest("app/css"))
        .pipe(browserSync.stream());
});

// Gulp watch
gulp.task('watch', ['serve', 'sass'], function(){
  gulp.watch('app/scss/**/*.scss', ['sass']);
});



//Sync - Spin a server for ma
gulp.task('serve', ['sass'], function() {

    browserSync.init({
        server: "app"
    });

    gulp.watch("app/scss/**/*.scss", ['sass']);
    gulp.watch("app/*.html").on('change', browserSync.reload);
});

gulp.task('default', ['serve']);

gulp.task('deploy', function () {
   return gulp.src("./app/**/*")
     .pipe(deploy({
       remoteUrl: "https://github.com/mkalthoum/takhayyal.git",
       branch: "master"
     }))
 });
