function highestNumberIndex(numbers){
    index = 0;
    for(let i = 0; i < numbers.length; i += 1){
        if(numbers[i] >= numbers[index]){
            index = i;
        }
    }

    return index;
};

numbers = [2, 3, 6, 7, 10, 1];

console.log(highestNumberIndex(numbers));


