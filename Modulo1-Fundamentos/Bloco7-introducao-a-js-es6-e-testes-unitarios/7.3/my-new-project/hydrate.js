function match(string) {
  let numbers = ['1', '2', '3', '4', '5', '6', '7', '8', '9'], matches = [];
  for (let i = 0; i < string.length; i += 1)(numbers.includes(string[i]) === true) && matches.push(string[i]);
  return matches;
}

function hydrate(string) {
  string = string.split('');
  let sum = 0, matches = (match(string));
  for (let i = 0; i < matches.length; i += 1) sum += parseInt(matches[i], 10);
  return (sum === 1) ? `${sum} copo de água` : `${sum} copos de água`;
}

module.exports = hydrate;