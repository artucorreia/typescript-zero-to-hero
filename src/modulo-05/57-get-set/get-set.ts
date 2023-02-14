// get
class Quadrado {
    private _largura: number;
    private _altura: number;

    constructor(largura: number, altura: number) {
        this._largura = largura;
        this._altura = altura;
    }

    get areaQuadrado() {
        return this._altura * this._largura;
    }
}

const quadrado: Quadrado = new Quadrado(5, 5);
console.log(quadrado.areaQuadrado); // 25

console.log(new Quadrado(8, 8).areaQuadrado); // 64

// get e set
class Estudante2 {
    private _nome : string;
    private _curso: string;

    constructor(nome: string, curso: string) {
        this._nome  = nome;
        this._curso = curso
    }

    public get curso(): string {
        return this._curso
    }

    public set curso(setCurso: string) {
        if(setCurso === 'S.I') {
            this._curso = 'Sistemas de Informação';
        } else {
            this._curso = setCurso;
        }
    }
}

const primeiroEstudante: Estudante2 = new Estudante2('Arthur', 'Ciências da Computação');
console.log(primeiroEstudante.curso);
primeiroEstudante.curso = 'S.I';
console.log(primeiroEstudante.curso);