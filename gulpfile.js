var gulp = require('gulp'),
    gls = require('gulp-live-server');
gulp.task('serve', function () {
    var server = gls.static('public', 9000);
    server.start();
});
gulp.task('default', function () {
});