//VARIABLES DE PLUGINS
var gulp = require('gulp'),
    watch = require('gulp-watch')

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
  console.log('task estilos para esoS STILOS');
});
// mira TASK que utiliza VARIOS WATCH(DONDE, QUE HACE (OTRA TAREA)X3)
gulp.task('mira', function() {
  watch('./app/index.html', function(){
    gulp.start('html');
  });
  watch('./app/assets/styles/**/*.css', function(){
    gulp.start('estilos');
  });

});