var gulp = require('gulp'),
    concat = require('gulp-concat'),
    connect = require('gulp-connect');

gulp.task('connect', function() {
    connect.server({
        root: 'app',
        livereload: true
    })  
});

gulp.task('html', function() {
    gulp.src('./app/*.html')
        .pipe(connect.reload());
});

gulp.task('script', function() {
    gulp.src([
        './app/scripts/commons/intro.js',
        './app/scripts/partials/*.js',
        './app/scripts/app.js',
        './app/scripts/commons/outro.js'
    ])
        .pipe(connect.reload())
        .pipe(concat('all.js'))
        .pipe(gulp.dest('./app/'));
});

gulp.task('watch', function() {
    gulp.watch(['./app/*.html'], ['html']);
    gulp.watch(['./app/scripts/app.js', './app/scripts/**/*.js'], ['script']);
});

gulp.task('default', ['script', 'connect', 'watch']);
