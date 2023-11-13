//importando as dependencias
const gulp = require('gulp');
const sass = require ('gulp-sass')(require('sass'));

// recupera os arquivos
function styles() {
    return gulp.src('./src/styles/*.scss')
        .pipe(sass({ outputStyle: 'compressed' })) //comprime os arquivos scss
        .pipe(gulp.dest('./dist/css')) //destino dos arquivos comprimidos
}

exports.default = styles;

// watcher 
exports.watch = function() {
    gulp.watch('./src/styles/*.scss', gulp.parallel(styles)) //parallel executa as funções paralelamente
}
