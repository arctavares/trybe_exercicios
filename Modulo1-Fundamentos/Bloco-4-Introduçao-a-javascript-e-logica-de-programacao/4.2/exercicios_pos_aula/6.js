let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
impares = 0;


for(i = 0; i < numbers.length; i++){
    if(numbers[i]%2 != 0){
        impares++;
    }
}

if(impares == 0){
    console.log('Nenhum valor impar encontrado');
}else{
    console.log(impares);
}

