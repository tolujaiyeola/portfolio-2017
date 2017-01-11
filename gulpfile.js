var gulp = require ('gulp');
var sass = require('gulp-sass');// Requires the gulp-sass plugin
var browserSync = require('browser-sync').create();


// gulp.task('hello', function(){
//   console.log('gulp working');
// })

// gulp.task('task-name', function () {
//   return gulp.src('source-files') // Get source files with gulp.src
//     .pipe(aGulpPlugin()) // Sends it through a gulp plugin
//     .pipe(gulp.dest('destination')) // Outputs the file in the destination folder
// })

gulp.task('sass', function(){
  return gulp.src('app/assets/scss/**/*.scss') // Gets all files ending with .scss in app/scss and children dirs
    .pipe(sass()) // Converts Sass to CSS with gulp-sass
    .pipe(gulp.dest('app/assets/css'))

    .pipe(browserSync.reload({
     stream: true
   }))
});



// // Gulp watch syntax
// gulp.watch('files-to-watch', ['tasks', 'to', 'run']);
// gulp.watch('app/scss/**/*.scss', ['sass']); // watch single file

// gulp.task('watch', function(){
//   gulp.watch('app/scss/**/*.scss', ['sass']);
//   // Other watchers
// })


gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})




// gulp.task('watch', ['array', 'of', 'tasks', 'to', 'complete','before', 'watch'], function (){
//   // ...
// })


gulp.task('watch', ['browserSync'], function (){
  gulp.watch('app/assets/scss/**/*.scss', ['sass']);
  // Other watchers
  // Reloads the browser whenever HTML or JS files change
  gulp.watch('app/*.html', browserSync.reload);
  gulp.watch('app/assets/css/style.css', browserSync.reload);
  gulp.watch('app/assets/js/**/*.js', browserSync.reload);
})
