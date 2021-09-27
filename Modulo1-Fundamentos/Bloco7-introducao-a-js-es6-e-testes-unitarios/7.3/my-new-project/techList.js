function techList(array, nome) {
  
  if(array.length === 0){
    return "Vazio!";
  }

  let orderArray = array.sort();
  let arrayList = [];
  for(let i = 0; i < orderArray.length; i += 1){
    let auxObject = {
      tech: array[i],
      name: nome
    }
    arrayList.push(auxObject);
  }
  return arrayList;
}

module.exports = techList;

