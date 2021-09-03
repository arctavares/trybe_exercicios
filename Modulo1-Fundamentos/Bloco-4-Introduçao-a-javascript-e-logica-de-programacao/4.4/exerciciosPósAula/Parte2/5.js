function mostRepeatedNumber(numbers) {
    let max = 0;
    let maxNumber = 0;
    let count = 0;
    let number = 0;

    for (let i in numbers) {
        for (let j in numbers) {
            if (numbers[i] == numbers[j]) {
                count += 1;
                number = numbers[i];
            }
        }
        if (count >= max) {
            max = count;
            maxNumber = number;
        }
        count = 0;
    }

    return maxNumber;
};

numbers = [2, 3, 2, 5, 8, 2, 3];

console.log(mostRepeatedNumber(numbers));

