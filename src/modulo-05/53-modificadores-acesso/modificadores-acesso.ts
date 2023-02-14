class  Estudante {
    public nomeEstudante: string;
    private codigoEstudante: number;
    protected idade: number;
    
    constructor(codigoEstudante: number, nomeEstudante: string, idade: number) {
        this.codigoEstudante = codigoEstudante;
        this.nomeEstudante = nomeEstudante;
        this.idade = idade;
    }
}

class Jovem extends Estudante {
    private passaTempo: string;
    
    constructor(codigoEstudante: number, nomeEstudante: string, idade: number, passaTempo: string) {
        super(codigoEstudante, nomeEstudante, idade);
        this.passaTempo = passaTempo;
    }

    info(): [string, number] {
        return [this.nomeEstudante, this.idade]
    }

    infoCodigoEstudante() {
        // return [this.codigoEstudante]; // error
    }
}

const aluno = new Estudante(12345, 'Arthur', 18)
console.log(aluno.nomeEstudante); // Arthur
// console.log(aluno.codigoEstudante); // error
// console.log(aluno.idade); // error
const jovem = new Jovem(22345, 'Arthur', 18, 'codar');
