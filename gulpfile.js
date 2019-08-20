var gulp = require('gulp');

/* ##### PUG ##### */

var pug = require('gulp-pug');
var puginput = './src/*.pug';
var pugoutput = './dist';

gulp.task('pug', (done) => {
    // Find all .pug files from ./src/
    gulp.src(puginput)
        // Prettifies the html
        .pipe(pug({
            pretty: true
        }))
        // Write resulting HTML in ./dist/
        .pipe(gulp.dest(pugoutput));
  done();
});

/* ##### ##### */

gulp.task('watch', (done) => {
    gulp.watch(puginput, gulp.series('pug'));
});

gulp.task('default', gulp.series('pug', 'watch'));
