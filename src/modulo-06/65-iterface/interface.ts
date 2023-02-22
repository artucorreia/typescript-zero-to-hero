// interface simples
interface IPessoa {
    nome: string;
    sobrenome: string;
}

const carlos: IPessoa = {
    nome: 'Arthur',
    sobrenome: 'Correia'
}

function exibirNome(pessoa: IPessoa): string { return `${pessoa.nome} ${pessoa.sobrenome}` };

console.log(exibirNome(carlos));
console.log(exibirNome({nome: 'Arthur', sobrenome: 'Correia'}))

// interface com propriedade opcionais
interface IPessoa2 {
    nome: string;
    sobrenome?: string;
    idade?: number;
    alturaM: number;
    pesoKg: number;
}

const arthur: IPessoa2 = {
    nome: 'Arthur',
    idade: 18,
    alturaM: 1.70,
    pesoKg: 67
}

function calcularImc(pessoa: IPessoa2): number { return pessoa.pesoKg/(pessoa.alturaM**2) };

// interface com propriedades readonly e opcionais
interface Carro {
    readonly modelo: string;
    ano: number;
    valor?: number;
}

const carro1: Carro = {
    modelo: 'Gol',
    ano: 2015
}

// carro1.modelo = 'Fusca 2.0' // error
console.log(carro1);

// interface com implements Class
interface IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    comer(tipoComida: string): void;
}

class Gato implements IAnimal {
    nome: string;
    idade: number;
    estaVivo: boolean;
    
    constructor(nome: string, idade: number, estaVivo: boolean) {
        this.nome = nome;
        this.idade = idade;
        this.estaVivo = estaVivo;
    }

    comer(tipoComida: string) {
        return `${this.nome} está comendo ${tipoComida}`;
    }
}

const gato1 = new Gato('Mingau', 6, true);
console.log(gato1);
console.log(gato1.comer('peixe'));

// interfaces x alias type 
interface Pessoa_03 {
    nome: string;
    idade: number;
    cpf: number;
}

type Pessoa_04 = {
    nome: string;
    idade: number;
    cpf: number;
}