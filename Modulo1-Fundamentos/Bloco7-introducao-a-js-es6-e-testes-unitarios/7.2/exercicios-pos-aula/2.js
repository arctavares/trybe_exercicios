const lesson1 = {
  materia: 'Matemática',
  numeroEstudantes: 20,
  professor: 'Maria Clara',
  turno: 'manhã',
};

const lesson2 = {
  materia: 'História',
  numeroEstudantes: 20,
  professor: 'Carlos',
};

const lesson3 = {
  materia: 'Matemática',
  numeroEstudantes: 10,
  professor: 'Maria Clara',
  turno: 'noite',
};

const addProperty = (destination, origin, property) => destination[property] = origin[property];

addProperty(lesson2, lesson3, 'turno');

console.log(lesson2);

const returnKeys = (object) => Object.keys(object);

console.log(returnKeys(lesson2));

const returnSize = (object) => returnKeys(object).length;

console.log(returnSize(lesson2));

const returnValues = (object) => Object.values(object);

console.log(returnValues(lesson2));

const allLessons = {
}

const returnClasses = (object1, object2, object3, propertyNames) => {
  allLessons[propertyNames[0]] = object1;
  allLessons[propertyNames[1]] = object2;
  allLessons[propertyNames[2]] = object3;
}
const propertyNames = ['lesson1', 'lesson2', 'lesson3'];

returnClasses(lesson1, lesson2, lesson3, propertyNames);

console.log(allLessons)

const totalStudentNumber = (object) => {
  let total = 0;
  for (let i = 0; i < returnSize(object); i += 1) {
    total += object[propertyNames[i]].numeroEstudantes;
  }
  return total;
}

console.log(totalStudentNumber(allLessons));

const getKey = (object, position) => returnValues(object)[position];

console.log(getKey(lesson1, 0));

const checkPair = (object, key, value) => object[key] === value ? true : false;

console.log(checkPair(lesson3, 'turno', 'noite'));

console.log(checkPair(lesson3, 'materia', 'Maria Clara'));

// BONUS

const studentPresence = (object, value) => {
  let total = 0;
  for (let i = 0; i < returnSize(object); i += 1) {
    if(object[propertyNames[i]].materia === value){
      total += object[propertyNames[i]].numeroEstudantes;
    }
  }
  return total;
}

console.log(studentPresence(allLessons, 'Matemática'));