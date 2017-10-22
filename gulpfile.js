var gulp = require('gulp');
var	sass = require('gulp-sass');
var	browserSync = require('browser-sync');
var pug = require('gulp-pug');
var clean = require("gulp-clean");
//var bootstrap = require("jade-bootstap")

gulp.task('sass', function (){
    gulp.src('./sass/*.sass')
        .pipe(sass({outputStyle:'compressed'}))
        .pipe(gulp.dest('./www/css'));
});

gulp.task('pug' , function(){
    // Index
    gulp.src('./pug/index/index.pug')
        .pipe(pug({
            pretty: false
        }))
        .pipe(gulp.dest('./www/'));
    // Resume
    gulp.src('./pug/resume/resume.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./www/'));
    //Blog
    gulp.src('./pug/blog/blog.pug ')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('./www/'));
    //Github
    gulp.src('./pug/github/github.pug ')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('./www/'));
    //Facebook
    gulp.src('./pug/facebook/facebook.pug ')
        .pipe(pug({
            pretty:true
        }))
        .pipe(gulp.dest('./www/'));
});



gulp.task('brower-sync', function(){
    browserSync.init(['./www/css/*.css', './www/js/*.js', './www/*.html'],{ server:{baseDir:'./www'}});
});

gulp.task('clean', function () {
    gulp.src('./www/',{read:false})
        .pipe(clean());
});

gulp.task('copy', function () {
    gulp.src('./css/*.css')
        .pipe(gulp.dest('./www/css/'));
    //console.log("Copy CSS")
    gulp.src('./js/*.js')
        .pipe(gulp.dest('./www/js/'));
    //console.log("Copy JavaScript")
    gulp.src('./photo/*')
        .pipe(gulp.dest('./www/photo'));
    gulp.src('./flaticon/*')
        .pipe(gulp.dest('./www/flaticon'));
    gulp.src('./fonts/*')
        .pipe(gulp.dest('./www/fonts'));
    gulp.src('./svg/*')
        .pipe(gulp.dest('./www/svg'));
    gulp.src('./favicon.ico')
        .pipe(gulp.dest('./www/'));
    gulp.src('./robots.txt')
        .pipe(gulp.dest("./www/"))
});


gulp.task('watch', function(){
    gulp.watch(['sass/*.sass', 'sass/*/*.sass'],['sass']);
    gulp.watch('./pug/*/*/*.pug',['pug']);
    gulp.watch('./pug/*/*.pug',['pug']);
});



gulp.task('default',['make', 'brower-sync', 'watch']);

gulp.task('make', ['pug', 'sass', 'copy']);

