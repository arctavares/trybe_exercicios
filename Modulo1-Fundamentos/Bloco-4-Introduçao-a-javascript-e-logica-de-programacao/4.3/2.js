let n = 10;
let caracter = '*';
let trianguloRetangulo = []

for(let i = 1; i <= n; i += 1){
    trianguloRetangulo.push(caracter.repeat(i));   // repete caracter i vezes
}

for(let i = 0; i < n; i += 1){
    console.log(trianguloRetangulo[i]);
}