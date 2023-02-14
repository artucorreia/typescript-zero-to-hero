// class
class Pessoa {
    nome: string;
    sobrenome: string;
    ultimoNome?: string;

    constructor(nome: string, sobrenome: string, ultimoNome?: string) {
        this.nome = nome;
        this.sobrenome = sobrenome;
        this.ultimoNome = ultimoNome;
    }

    nomeCompleto() {
        if (this.ultimoNome) {
            return `${this.nome} ${this.sobrenome} ${this.ultimoNome}`;
        } {
            return `${this.nome} ${this.sobrenome}`;
        }
    }
}

const pessoaTest1 = new Pessoa('Arthur', 'Correia');
const pessoaTest2 = new Pessoa('Arthur', 'Correia', 'Silva');

console.log(pessoaTest1.nomeCompleto());
console.log(pessoaTest2.nomeCompleto());