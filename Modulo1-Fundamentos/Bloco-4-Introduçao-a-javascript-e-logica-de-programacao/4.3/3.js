let n = 10;
let caracter = '*';
let espaco = ' ';
let trianguloRetangulo = []

for(let i = 1; i <= n; i += 1){
    trianguloRetangulo.push(espaco.repeat(n - i) + caracter.repeat(i));
}

for(let i = 0; i < n; i += 1){
    console.log(trianguloRetangulo[i]);
}