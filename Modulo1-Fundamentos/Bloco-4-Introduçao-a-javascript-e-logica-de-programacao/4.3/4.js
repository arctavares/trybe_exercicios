let n = 20;
let caracter = '*';
let espaco = ' ';
let piramide = []

for(let i = 1; i <= n; i += 1){
    piramide.push(espaco.repeat((n - i)/2) + caracter.repeat(i));
}

for(let i = 0; i < n; i += 2){
    console.log(piramide[i]);
}