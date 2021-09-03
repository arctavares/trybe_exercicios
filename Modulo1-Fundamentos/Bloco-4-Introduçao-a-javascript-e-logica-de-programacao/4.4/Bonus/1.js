function replaceRomanToDecimal(romanNumber){    // Transforma os itens do array em decimais

    romanNumber = romanNumber.split('');

    for(let i in romanNumber){
        switch(romanNumber[i]){
            case 'I':
                romanNumber[i] = 1;
                break;
            case 'V':
                romanNumber[i] = 5;
                break;
            case 'X':
                romanNumber[i] = 10;
                break;
            case 'L':
                romanNumber[i] = 50;
                break;
            case 'C':
                romanNumber[i] = 100;
                break;
            case 'D':
                romanNumber[i] = 500;
                break;
            case 'M':
                romanNumber[i] = 1000;
                break;
        }
    }

    return romanNumber;

};

function transformRomanToDecimal(romanNumber){
    let decimalNumberArray = replaceRomanToDecimal(romanNumber);

    let total = 0;

    for(let i = 0; i < decimalNumberArray.length; i += 1){
      if(i == decimalNumberArray.length-1){
        total += decimalNumberArray[i]
      }else{
        if(decimalNumberArray[i] > decimalNumberArray[i+1]){
          total += decimalNumberArray[i];
        }else if(decimalNumberArray[i] == decimalNumberArray[i+1]){
          total += decimalNumberArray[i];
        }else if(decimalNumberArray[i] < decimalNumberArray[i+1]){
          total += Math.abs(decimalNumberArray[i] - decimalNumberArray[i+1]);
          i += 1;
        }
      }
  }

    return total;
}   


romanNumber = 'CCCVIII'; // 308
console.log(transformRomanToDecimal(romanNumber));
