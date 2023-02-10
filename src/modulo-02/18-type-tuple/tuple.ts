// tuple
let estudante: [string, string, number];
estudante = ['Arthur', 'Sistemas de Informação', 2];

// acessando o valor da tuple
console.log(estudante[1]); // output: Sistemas de Informação

// tuple com label
let estudante2: [nome: string, curso: string, periodoAtual: number];
estudante2 = ['Arthur', 'Sistemas de Informação', 2];

// tuple com spread
let listaFrutas: [string, ...string[]] = ['babana', 'abacaxi', 'melão', 'melancia', 'kiwi'];
console.log(...listaFrutas); // output: babana abacaxi melão melancia kiwi

// tuple heterogênea
let listaFrutas2: [number, boolean, ...string[]] = [5, true, ...listaFrutas];
console.log(listaFrutas2); // output: [ 5, true, 'babana', 'abacaxi', 'melão', 'melancia', 'kiwi' ]

// funções com tuplas
const exibirInformacoes = (nomes: string[], idades: number[]) => console.log(nomes, idades);
exibirInformacoes(['Arthur', 'Laís'], [18, 18]);
// output: ['Arthur', 'Laís'] [18, 18]