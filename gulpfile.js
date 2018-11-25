//VARIABLES DE PLUGINS
var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    cssvars = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    cssImport = require('postcss-import')
  ;
// DEFAULT TASK
gulp.task('default', function() {
  console.log('esta es la DEFAULT TASK DE GULP que corre con GULP solo');
});
// HTML TASK
gulp.task('html', function() {
  console.log('task llamada HTML');
});
//estilos TASK
gulp.task('estilos', function() {
  return gulp.src('./app/assets/styles/styles.css')
          // FILTERS DE POSTCSS esperando un ARRAY
          .pipe(postcss([cssImport, cssvars, nested, autoprefixer]))
          // ultimo PIPE cond DEST crea la carpeta y el file
          .pipe(gulp.dest('./app/temp/styles'));
});
// mira TASK que utiliza VARIOS WATCH(DONDE, QUE  (OTRA TAREA)X3)
gulp.task('mira', function() {
  watch('./app/index.html', function(){
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('estilos');
  });

});