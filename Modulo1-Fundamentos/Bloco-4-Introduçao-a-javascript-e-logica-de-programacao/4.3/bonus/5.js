let n = 21;
let caracter = '*';
let espaco = ' ';
let piramide = new Array(n);

for(i = 0; i < n; i += 1){
    piramide[i] = new Array(n);
}

for(let i = 0; i < n; i += 1){
    for(let j = 0; j <= n; j += 1){
        piramide[i][j] = '*';
    }
}

for(let i = ((n-1)/2); i < n; i += 1){
    for(let j = 0; j < n; j += 1){
        if(i == j || i+j == n-1 || i == n-1){
            process.stdout.write(piramide[i][j]);
        }else{
            process.stdout.write(' ');
        }
    }
    console.log('');
}

