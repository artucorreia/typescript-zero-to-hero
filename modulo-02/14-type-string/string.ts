const displayer = (dado: string) => console.log(dado);

// exemplo Single Quotes
let nomeCompleto: string = 'Arthur Correia da Silva';
displayer(nomeCompleto);

// exemplo Double Quotes
let funcao: string = "Desenvolvedor Front-End";
displayer(funcao);

// exemplo Back Ticks
let empresa: string = `Amazon`;
displayer(empresa);

let informacoes: string = `Nome   : ${nomeCompleto} \nEmpresa: ${empresa} \nFunção : ${funcao}`;
displayer(informacoes);