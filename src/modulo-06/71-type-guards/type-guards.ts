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
console.log(detalhesVeiculos(motinha));

// in
// console.log(ano in Moto);