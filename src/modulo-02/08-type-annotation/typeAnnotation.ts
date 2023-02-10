// variáveis
let nome: string = 'Arthur Correia';
console.log(nome);

// array
let animais: string[] = ['Gato', 'Cachorro', 'Girafa', 'Zebra'];
console.log(animais);

// objetos
let carro: {
    nome: string;
    ano: number;
    preco: number
};
carro = { nome: 'Toyota Yaris Sedan XS', ano: 2019, preco: 80000};
console.log(carro);

// functions
function multiplicarNumeros(n1: number, n2: number) {
    return n1 * n2;
};
console.log(multiplicarNumeros(9, 3));