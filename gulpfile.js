const gulp = require('gulp');
const svgstore = require('gulp-svgstore');
const svgmin = require('gulp-svgmin');
const path = require('path');

 
gulp.task('svgstore', function () {
    return gulp
        .src('src/assets/logos/*.svg')
        .pipe(svgmin(function (file) {
            const prefix = path.basename(file.relative, path.extname(file.relative));
            return {
                plugins: [{
                    cleanupIDs: {
                        prefix: prefix + '-',
                        minify: true
                    }
                }]
            }
        }))
        .pipe(svgstore())
        .pipe(gulp.dest('src/assets'));
});
