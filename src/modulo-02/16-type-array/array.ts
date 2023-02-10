// Uso de colchetes
let frutas1: string[] = ['laranja', 'maçã', 'limão', 'melancia'];
console.log(frutas1[0]);

// Array Object
let frutas2: Array<string> = ['laranja', 'maçã', 'limão', 'melancia'];
console.log(frutas2[0]);

// métodos
let idiomas: Array<string> = ['portugues', 'ingles', 'frances']
idiomas.push('mandarim');
idiomas.unshift('grego');
console.log(idiomas);

// spread
let numeros: Array<number> = [0, 1, 2, 3, 4, 5];
let umAteDez: Array<number> = [...numeros, 6, 7, 8, 9, 10];
console.log(umAteDez);