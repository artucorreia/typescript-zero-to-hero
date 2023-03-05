// type casting: as
const nome2: unknown = 'josé';
// console.log(nome2.toUpperCase()); // error, nome2 is of type unknown
console.log((nome2 as string).toUpperCase()); // output: JOSÉ

// type casting: <>
const carro2: unknown = 'sandero';
// console.log(carro2.length); // error, carro2 is of type unknown
console.log((<string>carro2).length); // output: 7