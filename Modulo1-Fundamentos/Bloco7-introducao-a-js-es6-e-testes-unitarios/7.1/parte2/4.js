const troca = (string) => {
  let array = string.split('');
  for(let i = 0; i < array.length; i += 1){
    array[i] === 'x' && (array[i] = 'bebeto');
  }
  console.log(array.join(''));

  
}

troca('Tryber x aqui!');

//FALTOU FUNCAO 2