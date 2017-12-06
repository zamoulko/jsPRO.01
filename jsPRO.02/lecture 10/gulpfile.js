var gulp  = require('gulp'),
    gutil = require('gulp-util');
    minify = require('gulp-minify');
gulp.task('default', function() {
    return gutil.log('Gulp is running!')
});

gulp.task('minify',function () {
    return gulp.src('./js/bundle/*.js')
        .pipe(minify({
            ext:'app.js',
            min:'.js',
            noSource: true,
        }))
        .pipe(gulp.dest('./js'))
});
