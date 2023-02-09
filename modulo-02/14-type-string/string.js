"use strict";
const displayer = (dado) => console.log(dado);
// exemplo Single Quotes
let nomeCompleto = 'Arthur Correia da Silva';
displayer(nomeCompleto);
// exemplo Double Quotes
let funcao = "Desenvolvedor Front-End";
displayer(funcao);
// exemplo Back Ticks
let empresa = `Amazon`;
displayer(empresa);
let informacoes = `Nome   : ${nomeCompleto} \nEmpresa: ${empresa} \nFunção : ${funcao}`;
displayer(informacoes);
