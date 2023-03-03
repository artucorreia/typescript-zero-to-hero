// intersection
interface Animal_05 {
    raca: string;
    dieta: string;
}

interface Pessoa_05 {
    nome: string;
    idade: number
}

const hibrido1: Animal_05 & Pessoa_05 = {
    nome: 'Gus',
    idade: 12,
    raca: 'cervo',
    dieta: 'carnivoro'
}

type Hibrido_02 = Animal_05 & Pessoa_05;

const hibrido2: Hibrido_02 = {
    nome: 'Gus',
    idade: 12,
    raca: 'cervo',
    dieta: 'carnivoro'
}

console.log(hibrido1);
console.log(hibrido2);