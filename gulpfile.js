const gulp = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const imagemin = require('gulp-imagemin');
const uglify = require('gulp-uglify') //minificano o arquivo JS ( npm install --save-dev gulp-uglify  ) instalar o pacote ,fiz so no FINAL do projeto dps de acabae TUDO ,posso fazer isso tudo junto com os outros n é obigatorio faz no final mas sigo o passo a passo de fazer na sequencia as coisas aqui
//obs lembra que o main.js pode estar fora de src caso esteja faz uma pasta scripts dentro de src e coloca o arquivo main.js dentro da pasta script e muda tbm la o index deixa como ta la 

function scripts() {
    return gulp.src('./src/scripts/*.js')//pegando todos os arquivos JS
        .pipe(uglify())
        .pipe(gulp.dest('./dist/js'))
}


function styles() { //estamos fazendo uma seçao para resgatar os estilos aplicados no scss 
    return gulp.src('./src/styles/*.scss')  //acessando a pasta src q tem o arq styles e usamos * para que seja resgatado tudo q tenha scss 
        .pipe(sass({ outputStyle:'compressed' }))//os aqruivos q sair de scss vai ser comprimido aqui
        .pipe(gulp.dest('./dist/css'));//e aqui é a pasta de destino que vai os arquivos comprimidos acima 
}

function images() {//MINIFICANDO FOTOS (faço depois de ter feito o gulp,sass e wacth)
    return gulp.src('./src/images/**/*',{ encoding: false })  //esta acesseando a pasta images e tbm as outras pastas q existem dentro de images
        .pipe(imagemin())//esse { encoding: false }) coloquei pq a versao do gulp n esta minificando as imagens todas e com esse comando da certo
        .pipe(gulp.dest('./dist/images'));
}

exports.default = gulp.parallel(styles,images,scripts);//antes de expotar as images estava assim pois so exsitia syles -> exports.default = styles
//npm run buid para testar e criar a pasta dist de css e imges
//npm run build pra scripts rodar cria a pasta dist de js e minifica o js



exports.watch = function() {//apos o comanado de cima venho pra ca
    gulp.watch('./src/styles/*main.scss',gulp.parallel(styles))//estamos colocando pra observar quando tiver mudança nos arquivos scss
    gulp.watch('./src/scripts/*.js,',gulp.parallel(scripts))
}
// npm run build watch


















//function testeGulp(cb) {
//    console.log("Ola mundo");
//    cb();
//}

//exports.default = testeGulp;