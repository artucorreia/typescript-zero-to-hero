// object padrão
const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Correia',
    age: 18
};

console.log(pessoa);

// object como parâmetro
function onbording1(funcionario: {nome: string}): string {
    return `Bem-Vindo ${funcionario.nome}`;
}

console.log(onbording1({nome: 'Arthur'})); 

// object nomeado
interface Pessoa2 {
    nome: string;
    funcao: string;
}

function onbording2(pessoa: Pessoa2): string {
    return `Bem-vindo ${pessoa.nome}, sua função aqui na empresa é de ${pessoa.funcao}`;
}

console.log(onbording2({nome: 'Arthur', funcao: 'Front-end Developer'}));

// object com type alias
type Pessoa3 = {
    nome: string;
    funcao: string;
    linguagem: string;
}

function onbording3(pessoa: Pessoa3): string {
    return `Bem-vindo ${pessoa.nome}, sua função aqui na empresa é de ${pessoa.funcao}, usando: ${pessoa.linguagem}`;
}

console.log(onbording3({nome: 'Arthur', funcao: 'Front-end Developer', linguagem: 'JavaScript/TypeScript'}));

// usando optional no object
interface Pessoa4 {
    nome: string;
    funcao: string;
    linguagem: string;
    email ?: string;
}

function onbording4(pessoa: Pessoa4): string {
    if (pessoa.email) {
        return `Bem-vindo ${pessoa.nome}, sua função aqui na empresa é de ${pessoa.funcao}, usando ${pessoa.linguagem}, mais informações serão enviadas para o ${pessoa.email}.`;
    } else {
        return `Bem-vindo ${pessoa.nome}, sua função aqui na empresa é de ${pessoa.funcao}, usando ${pessoa.linguagem}.`;
    }
}

console.log(onbording4({nome: 'Arthur', funcao: 'Front-end Developer', linguagem: 'JavaScript/TypeScript'}));

// interface com herança
interface Mae {
    nome: string;
}

interface Pai {
    sobrenome: string;
}

interface Filha extends Mae, Pai {
    idade: number
}

const filha: Filha = {
    nome: 'Maria',
    sobrenome: 'Luíza',
    idade: 20
}

// interseções
interface Cachorro {
    raca: string;
}

interface Gato {
    raca: string;
}

type Animal = Cachorro & Gato;

// generic objects
type Usuario = {
    nome: string;
    email: string;
}

type Admin = {
    nome: string;
    email: string;
    admin: true;
}

const usuario: Usuario = {
    nome: 'Arthur',
    email: 'arthur@gmail.com'
}

const admin: Admin = {
    nome: 'Fernando',
    email: 'fernando@gmail.com',
    admin: true
}

function acessarSistema<T>(usuario: T): T {
    return usuario;
}

console.log(acessarSistema<Admin>(admin));
console.log(acessarSistema<Usuario>(usuario));