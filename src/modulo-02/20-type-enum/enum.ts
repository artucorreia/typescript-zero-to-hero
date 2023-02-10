enum Idioma {
    Portugues = 'PT-BR',
    Espanhol = 'ES',
    Infiltrado = 10,
    Ingles = 'EN',
    Frances = 'FR'
};

console.log(Idioma['Portugues']) // output: PT-BR
console.log(Idioma.Portugues); // output: PT-BR
console.log(Idioma[10]) // output: Infiltrado
console.log(Idioma['Infiltrado']) // output: 10
console.log(Idioma); // output:
/* {
  '10': 'Infiltrado',
  Portugues: 'PT-BR',
  Espanhol: 'ES',
  Infiltrado: 10,
  Ingles: 'EN',
  Frances: 'FR'
} */