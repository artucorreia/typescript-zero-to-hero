// interface com extends
interface Animal_02 {
    nome: string;
    idade: number;
}

interface Cachorro_02 extends Animal_02 {
    raca: string
}

const dog: Cachorro_02 = {
    nome: 'Dogão',
    idade: 32,
    raca: 'Dalmata'
}

// extensão de múltiplas interfaces
interface Pessoa_05 {
    nome: string;
    idade: number;
}

interface Animal_03 {
    raca: string;
    dieta: string;
}

interface Hibrido extends Pessoa_05, Animal_03 { }

const newHibrido: Hibrido = {
    nome: 'Gus',
    idade: 10,
    raca: 'Cervo',
    dieta: 'Vegetariano'
}

// utility type Omit
interface Funcionario_02 {
    id: number;
    nome: string;
    salario: number;
}

interface Desenvolvedor extends Omit<Funcionario_02, 'id' | 'salario'> {
    id: string;
    salario: string;
    linguagemProgramacao: string;
}

const dev: Desenvolvedor = {
    id: 'dev-01203',
    nome: 'Arthur',
    salario: '5k',
    linguagemProgramacao: 'JavaScript/TypeScript'
}