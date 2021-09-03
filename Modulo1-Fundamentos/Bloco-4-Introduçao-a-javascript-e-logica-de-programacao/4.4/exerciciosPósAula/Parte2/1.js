function checkForPalindrome(word) {
    word = word.split('');
    let reverse = word.slice();
    reverse.reverse();

    word = word.join('');
    reverse = reverse.join('');

    if(word == reverse){
        return true;
    }else{
        return false;
    }

};

word = 'arara';
console.log(checkForPalindrome(word));