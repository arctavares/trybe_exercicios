function sumAllNumbers(number){
    let sum = 0;
    for(let i = 1; i <= number; i += 1){
        sum += i;
    }
    return sum;
};

n = 5;
console.log(sumAllNumbers(n));