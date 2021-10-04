function createEmail(string) {
  let array = string.split(' ');
  for (let i = 0; i < array.length; i += 1) i !== array.length - 1 && (array[i] = array[i] + '_');
  return array.join('') + '@trybe.com'
}

const newEmployees = (callBack) => {
  const employees = {
    id1: callBack('Pedro Guerra'), // Nome: Pedro Guerra -> Chame sua função passando o nome Pedro Guerra como parâmetro, substituindo as aspas
    id2: callBack('Luiza Drumond'), // Nome: Luiza Drumond -> Chame sua função passando o nome Luiza Drumond como parâmetro, substituindo as aspas
    id3: callBack('Carla Paiva'), // Nome: Carla Paiva -> Chame sua função passando o nome Carla Paiva como parâmetro, substituindo as aspas
  }
  return employees;
};

console.log(newEmployees(createEmail));
