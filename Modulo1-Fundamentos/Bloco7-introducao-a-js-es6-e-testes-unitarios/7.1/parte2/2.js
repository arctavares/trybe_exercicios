const longestWord = (string) => {
  let cut = string.split(' '), maior = '';
  for (let i = 0; i < cut.length; i += 1) {
    cut[i].length >= maior.length && (maior = cut[i]);
  }
  console.log(maior);
}

longestWord("Antônio foi no banheiro e não sabemos o que aconteceu")
