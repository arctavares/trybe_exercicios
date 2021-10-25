const oddsAndEvens = [13, 3, 4, 10, 7, 2];

// Seu código aqui.

console.log(oddsAndEvens); // Array original

const ordena = (array) => array.sort((a, b) => a - b); // Fazer de forma manual depois

console.log(`Os números ${ordena(oddsAndEvens)} se encontram ordenados de forma crescente!`);