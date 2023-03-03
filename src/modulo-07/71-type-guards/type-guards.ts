// typeof
type alfanumberico = string | number;

function exibirTipo(a: alfanumberico, b: alfanumberico): number | string{
    if (typeof a === 'number' && typeof b === 'number') return a + b;
    if (typeof a === 'string' && typeof b === 'string') return a.concat(b);
    throw new Error('Argumentos inválidos. Ambos argumentos devem ser de tipos iguais');
}

console.log(exibirTipo('arthur', '212')); // output: arthur212
console.log(exibirTipo(10, 20)); // output: 30
// console.log(exibirTipo('10', 10)); // error

// intanceof
class Carro_02 {
    nome: string;
    marca: string;
    
    constructor(nome: string, marca: string) {
        this.nome = nome;
        this.marca = marca;
    }
}

class Moto {
    nome: string;
    ano: number;

    constructor(nome: string, ano: number) {
        this.nome = nome;
        this.ano = ano;
    }
}

function detalhesVeiculos(veiculo: Carro_02 | Moto): string {
    if (veiculo instanceof Carro_02) {
        return `O nome do carro é ${veiculo.nome} e a marca é ${veiculo.marca}`;
    } else {
        return `O nome da moto é ${veiculo.nome} e a marca é ${veiculo.ano}`;
    }
}

const carrinho = new Carro_02('sandero', 'renault');
const motinha = new Moto('scooter', 2023);

console.log(detalhesVeiculos(carrinho)); 
// output: O nome do carro é sandero e a marca é renault
console.log(detalhesVeiculos(motinha)); 
// output: O nome da moto é scooter e a marca é 2023

// in
interface Animal_06 {
    grupo: string;
}

class Passaro implements Animal_06 {
    grupo: string;
    corPena: string;

    constructor(grupo: string, corPena: string) {
        this.corPena = corPena;
        this.grupo = grupo;
    }
}

class Peixe implements Animal_06 {
    grupo: string;
    corPeixe: string;

    constructor(grupo: string, corPeixe: string) {
        this.corPeixe = corPeixe;
        this.grupo = grupo;
    }
}

function moverAnimal(animal: Peixe | Passaro): string {
    if ('corPena' in animal) {
        return `O ${animal.grupo} está voando`;
    } else {
        return `O ${animal.grupo} está nadando`;
    }
}

console.log(moverAnimal(new Passaro('canario', 'amarelo'))); 
// output: o canario está voando
console.log(moverAnimal(new Peixe('bagre', 'verde'))); 
// output: o bagre esta nadando