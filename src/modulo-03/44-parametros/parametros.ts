// optional parameter
function onbording(nome: string, email?: string): void {
    console.log(`Bem-vindo ${nome}`);
    if (email) console.log(`enviamos um email para ${email}`);
};

onbording('Arthur Correia'); // output: Bem-vindo Arthur Correia

function displayFullName(person: {firstName: string, middleName?: string, lastName: string}): string {
    if (person.middleName) {
        return `${person.firstName} ${person.middleName} ${person.lastName}`;
    } {
        return `${person.firstName} ${person.lastName}`;
    }
};

console.log(
    displayFullName(
        {
            firstName: 'Arthur', 
            lastName: 'da Silva', 
            middleName: 'Correia'
        }
    )
); // output: Arthur Correia Silva


// default parameter
function multiplicar(num1: number = 1, num2: number = 1): number {
    return num1 * num2
};

console.log(multiplicar(5));