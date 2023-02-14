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

// read only
class Funcionario {
    readonly dataNascimento: Date;

    constructor (dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

const funcionario: Funcionario = new Funcionario(new Date(2004, 7, 4));
// funcionario.dataNascimento = new Date(2005, 9, 23); // error
console.log(funcionario.dataNascimento);

// read only ex2
class Funcionario_2 {
    constructor(readonly dataNascimento: Date) {
        this.dataNascimento = dataNascimento;
    }
}

const funcionario2: Funcionario_2 = new Funcionario_2(new Date(2004, 7, 4));
console.log(funcionario2);

// read only Interface
interface IFuncionario {
    codigoFuncionario: number;
    nomeFuncionario: string;
};

const ifuncionario: Readonly<IFuncionario> = {
    codigoFuncionario: 112233,
    nomeFuncionario: 'Arthur'
};

console.log(ifuncionario.codigoFuncionario);
console.log(ifuncionario.nomeFuncionario);
// ifuncionario.codigoFuncionario = 113344; // erro
// ifuncionario.nomeFuncionario = 'Arthur Correia'; // erro