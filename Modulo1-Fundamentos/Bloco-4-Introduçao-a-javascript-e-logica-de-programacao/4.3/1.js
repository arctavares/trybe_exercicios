let n = 10;
let caracter = '* ';
let quadrado = []

for(let i = 1; i <= n; i += 1){
    quadrado.push(caracter.repeat(n));   // repete caracter i vezes
}

for(let i = 0; i < n; i += 1){
    console.log(quadrado[i]);
}

