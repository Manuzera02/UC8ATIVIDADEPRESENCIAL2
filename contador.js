let readlineSync = require('readline-sync');
var valor;

valor = readlineSync.question("digite valor correspondente a quantidade de alunos na sala:");
for (var i = 0; i <= valor; i++){
    if(i ==0){
        console.log("o numero é zero");
    }else if(i%2 == 0){
        console.log("o numero "+i+" é par");
    }else{
        console.log("o numero "+i+" é impar")
    }
}