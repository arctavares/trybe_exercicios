let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

let numbers_multiplicado = [];

for(i=0;i<numbers.length;i++){
    let proximo_valor;
    if(i+1 > numbers.length-1){
        proximo_valor = 2;
    }else{
        proximo_valor = numbers[i+1];
    }
    numbers_multiplicado.push(numbers[i] * proximo_valor);
}

console.log(numbers_multiplicado);