const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));

function styles() { //estamos fazendo uma seçao para resgatar os estilos aplicados no scss 
    return gulp.src('./src/styles/*.scss')  //acessando a pasta src q tem o arq styles e usamos * para que seja resgatado tudo q tenha scss 
        .pipe(sass({ outputStyle:'compressed' }))//os aqruivos q sair de scss vai ser comprimido aqui
        .pipe(gulp.dest('./dist/css'));//e aqui é a pasta de destino que vai os arquivos comprimidos acima 
}

exports.default = styles
//npm run buid para testar e criar a pasta dist
exports.watch = function() {//apos o comanado de cima venho pra ca
    gulp.watch('./src/styles/*main.scss',gulp.parallel(styles))//estamos colocando pra observar quando tiver mudança nos arquivos scss
}
// npm run build watch


















//function testeGulp(cb) {
//    console.log("Ola mundo");
//    cb();
//}

//exports.default = testeGulp;