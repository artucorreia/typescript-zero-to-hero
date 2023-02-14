// named function
function somarNumeros(num1: number, num2: number): number {
    return num1 + num2;
}

const resultado = somarNumeros(2, 2);
console.log(resultado);

// função expressão
const saudar = function (mensagem: string): string {
    return mensagem;
}

console.log(saudar('Olá, Arthur'));

// arrow function
const saudar2 = (mensagem: string): string => mensagem;
console.log(saudar2('Olá, bom dia'));

// function constructor
const saudar3 = new Function('mensagem', 'return mensagem');
console.log(saudar3('Olá, boa tarde'));