// unkown
let varUnknown: unknown;
varUnknown = true; // sem erro
varUnknown = 123; // sem erro
varUnknown = ''; // sem erro
varUnknown = []; // sem erro
varUnknown = [1, '2']; // sem erro

// atribuir uma varivel do tipo unknown
// a variáveis de outros tipos
let exemplo: unknown;
exemplo = true;
// let exemplo2: boolean = exemplo; // erro

// unknown x any
let exemploAny: any;
let exemploUnknow: unknown;

// console.log(exemploAny.toFixed(2)); // sem erro
// console.log(exemploAny.toFixed('eewew')); // sem erro

// console.log(exemploUnknow.toFixed(2)); // erro
if (typeof exemploUnknow === 'number') {
    console.log(exemploUnknow.toFixed(2)); // sem erro
};
