// object padrão
const pessoa = {
    nome: 'Arthur',
    sobrenome: 'Correia',
    age: 18
};

console.log(pessoa);

// object como parâmetro
function onbording(funcionario: {nome: string}): string {
    return `Bem-Vindo ${funcionario.nome}`;
}

console.log(onbording({nome: 'Arthur'})); 

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