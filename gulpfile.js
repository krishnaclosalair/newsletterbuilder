const
    gulp = require('gulp'),
    pug = require('gulp-pug');

gulp.task('pug', (buildHTML) => {
    gulp.src('./src/*.pug')
        .pipe(pug({
            pretty: true
        }))
        .pipe(gulp.dest('./dist'));
    console.log('Updating HTML...');
    buildHTML();
});

gulp.task('watch', (watch) => {
    gulp.watch('./src/*.pug', gulp.series('pug'));
    watch();
});

gulp.task('default', gulp.series('pug', 'watch'));
