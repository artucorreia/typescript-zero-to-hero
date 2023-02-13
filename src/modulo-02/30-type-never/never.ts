// never
function error(msg: string): never {
    throw new Error(msg);
}

console.log(error('Error Mensagem 01'));

// ex 02
function error2(msg: string): never {
    throw new Error(msg);
}

console.log(error2('Error Mensagem 02'));