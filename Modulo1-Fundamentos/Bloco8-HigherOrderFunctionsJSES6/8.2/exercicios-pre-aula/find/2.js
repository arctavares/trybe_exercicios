const names = ['João', 'Irene', 'Fernando', 'Maria'];

const findNameWithFiveLetters = (array) => {
  return array.find(name => name.length === 5);
}

console.log(findNameWithFiveLetters(names));