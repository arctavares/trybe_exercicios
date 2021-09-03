function searchEven(vector){
    let pares = [];
    for(let i = 0; i < vector.length; i += 1){
        for(let j = 0; j < vector[i].length; j += 1){
            if(vector[i][j] % 2 == 0){
                pares.push(vector[i][j]);
            }
        }
    }

    return pares;
}

let vector = [[1, 2], [3,4,5,6], [7,8,9,10]];

console.log(searchEven(vector));