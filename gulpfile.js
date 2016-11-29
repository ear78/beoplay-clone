var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function(){
    return gulp.src('./public/css/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/build/css'));
});

//WATCH TASK
gulp.task('watch', function(){
    gulp.watch('./public/css/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
