// function
function exibirMensagem(mensagem: string): void {
    console.log(mensagem);
};

exibirMensagem('Olá, Arthur');

// arrow function
const exibirMensagem2 = (mensagem: string): void => console.log(mensagem);
exibirMensagem2('Olá, Arthur Correia');

// void em variaveis 
let variavelVoid: void;
// variavelVoid = 1; // erro
// variavelVoid = null; // erro se tiver stricNullCheck habilitado
// variavelVoid = ''; // erro
variavelVoid = undefined; // sem erro