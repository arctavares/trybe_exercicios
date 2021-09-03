function returnFruitAndValue(basket) {
    basket = basket.sort();
    let fruits = [];
    let count = 0;
    for (let i = 0; i < basket.length; i += 1) {
        if (i == 0) {
            fruits.push(basket[i]);
            count += 1;
        } else if (basket[i] == basket[i - 1]) {
            count += 1;
        } else if (basket[i] != basket[i - 1]) {
            fruits.push(count);
            count = 1;
            fruits.push(basket[i]);
        }

        if (i == basket.length - 1) {
            fruits.push(count);
        }
    }

    return fruits;
}

const basket = [
    'Melancia', 'Abacate', 'Melancia', 'Melancia', 'Uva', 'Laranja',
    'Jaca', 'Pera', 'Melancia', 'Uva', 'Laranja', 'Melancia',
    'Banana', 'Uva', 'Pera', 'Abacate', 'Laranja', 'Abacate',
    'Banana', 'Melancia', 'Laranja', 'Laranja', 'Jaca', 'Uva',
    'Banana', 'Uva', 'Laranja', 'Pera', 'Melancia', 'Uva',
    'Jaca', 'Banana', 'Pera', 'Abacate', 'Melancia', 'Melancia',
    'Laranja', 'Pera', 'Banana', 'Jaca', 'Laranja', 'Melancia',
    'Abacate', 'Abacate', 'Pera', 'Melancia', 'Banana', 'Banana',
    'Abacate', 'Uva', 'Laranja', 'Banana', 'Abacate', 'Uva',
    'Uva', 'Abacate', 'Abacate', 'Melancia', 'Uva', 'Jaca',
    'Uva', 'Banana', 'Abacate', 'Banana', 'Uva', 'Banana',
    'Laranja', 'Laranja', 'Jaca', 'Jaca', 'Abacate', 'Jaca',
    'Laranja', 'Melancia', 'Pera', 'Jaca', 'Melancia', 'Uva',
    'Abacate', 'Jaca', 'Jaca', 'Abacate', 'Uva', 'Laranja',
    'Pera', 'Melancia', 'Jaca', 'Pera', 'Laranja', 'Jaca',
    'Pera', 'Melancia', 'Jaca', 'Banana', 'Laranja', 'Jaca',
    'Banana', 'Pera', 'Abacate', 'Uva',
];

fruits = returnFruitAndValue(basket);

let fruitValue = {
    fruit: [],
    value: []
}

for (let i = 0; i < fruits.length; i += 1) {
    if (i % 2 == 0) {
        fruitValue.fruit.push(fruits[i]);
    } else {
        fruitValue.value.push(fruits[i]);
    }
}

for (let i = 0; i < fruitValue.fruit.length; i += 1) {
    console.log(fruitValue.fruit[i], ':', fruitValue.value[i]);
}