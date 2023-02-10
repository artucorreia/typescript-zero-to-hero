"use strict";
var Idioma;
(function (Idioma) {
    Idioma["Portugues"] = "PT-BR";
    Idioma["Espanhol"] = "ES";
    Idioma[Idioma["Infiltrado"] = 10] = "Infiltrado";
    Idioma["Ingles"] = "EN";
    Idioma["Frances"] = "FR";
})(Idioma || (Idioma = {}));
;
console.log(Idioma['Portugues']);
console.log(Idioma.Portugues);
console.log(Idioma[10]);
console.log(Idioma['Infiltrado']);
console.log(Idioma);
