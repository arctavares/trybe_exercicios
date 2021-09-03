let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

for(i = 0; i < numbers.length; i++){
    for(let ii = 0; ii < numbers.length; ii++){
        if(numbers[ii] < numbers[ii+1]){
            let aux = numbers[ii+1];
            numbers[ii+1] = numbers[ii];
            numbers[ii] = aux;
        }
    }
}

console.log(numbers)