function verifyEndWord(word, ending){
    word = word.split('');
    ending = ending.split('');
    let size = ending.length;
    let count = 0;
    let j = 0;

    for(let i = word.length - size; i < word.length; i += 1){
        
        if(word[i] == ending[j]){
            count += 1;
        }

        j += 1;
    }

    if(count == size){
        return true;
    }else{
        return false;
    }
};

let word = 'trybe';
let ending = 'be';

console.log(verifyEndWord(word, ending));
