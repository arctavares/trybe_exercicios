function randomNumber() {
  return Math.floor(Math.random() * 5) + 1;
}

function sorteio(number, func){
  return (number === func()) ? 'Parabéns você ganhou' : 'Tente novamente';
}

console.log(sorteio(randomNumber(), randomNumber));

