var gulp = require('gulp');

/* ##### PUG ##### */

var pug = require('gulp-pug');
var puginput = './src/*.pug';
var pugoutput = './dist';

gulp.task('pug', function() {
    // Find all .pug files from ./src/
    gulp.src(puginput)
        // Prettifies the html
        .pipe(pug({
            pretty: true
        }))
        // Write resulting HTML in ./dist/
        .pipe(gulp.dest(pugoutput));
});

/* ##### ##### */

gulp.task('watch', function() {
    gulp.watch(puginput, ['pug']);
});

gulp.task('default', ['pug', 'watch']);