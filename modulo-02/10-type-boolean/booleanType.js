"use strict";
// exemplo 1
let tarefaCompleta = true;
let tarefaIncompleta = false;
console.log(tarefaCompleta);
console.log(tarefaIncompleta);
// exemplo 2
const exibirResultado = (maiorDeIdade) => maiorDeIdade ? console.log('Apto a dirigir.') : console.log('Inapto a dirigir');
const verificarIdade = (age) => age >= 18 ? true : false;
exibirResultado(verificarIdade(30));
