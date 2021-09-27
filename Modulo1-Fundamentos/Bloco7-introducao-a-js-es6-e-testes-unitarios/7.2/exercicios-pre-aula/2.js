const student1 = {
  Html: 'Muito Bom',
  Css: 'Bom',
  JavaScript: 'Ótimo',
  SoftSkills: 'Ótimo',
};

const student2 = {
  Html: 'Bom',
  Css: 'Ótimo',
  JavaScript: 'Ruim',
  SoftSkills: 'Ótimo',
  Git: 'Bom', // chave adicionada
};

const returnKeysAndValues = (object) => {
  const keys = Object.keys(object);
  for(let i = 0; i < keys.length; i += 1){
    console.log(`${keys[i]} -> Nivel: ${object[keys[i]]}`);
  }
}

returnKeysAndValues(student1);
console.log(' ');
returnKeysAndValues(student2);