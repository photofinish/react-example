var gulp = require('gulp'),
    connect = require('gulp-connect'),
    browserify = require('gulp-browserify'),    // 合并模块到一个文件
    concat = require('gulp-concat')     // 开启一个服务器
    port = process.env.port || 5000;

gulp.task('browserify', function() {
    gulp.src('./app/js/main.js')
    .pipe(browserify({
        transform: 'reactify',
    }))
    .pipe(gulp.dest('./dist/js'))
});

// leve reload
gulp.task('connect', function(){
    connect.server({
        // root: './',
        port: port,
        livereload: true,
    })
});

// reload js
gulp.task('js', function(){
    gulp.src('./dist/**/*.js')
    .pipe( connect.reload())
})

gulp.task('html', function(){
    gulp.src('./app/**/*.html')
    .pipe(connect.reload())
});

gulp.task('watch', function(){
    gulp.watch('./dist/**/*.js', ['js']);
    gulp.watch('./app/**/*.html', ['html']);
    gulp.watch('./app/js/**/*.js', ['browserify']);
});

gulp.task('default', ['browserify']);
gulp.task('serve', ['browserify', 'connect', 'watch']);