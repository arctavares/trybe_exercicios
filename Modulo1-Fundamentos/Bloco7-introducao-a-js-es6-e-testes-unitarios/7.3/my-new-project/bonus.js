// Dados
const professionalBoard = [
  {
    id: '8579-6',
    firstName: 'Ana',
    lastName: 'Gates',
    specialities: ['UX', 'Design'],
  },
  {
    id: '5569-4',
    firstName: 'George',
    lastName: 'Jobs',
    specialities: ['Frontend', 'Redux', 'React', 'CSS'],
  },
  {
    id: '4456-4',
    firstName: 'Leila',
    lastName: 'Zuckerberg',
    specialities: ['Context API', 'RTL', 'Bootstrap'],
  },
  {
    id: '1256-4',
    firstName: 'Linda',
    lastName: 'Bezos',
    specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
  },
  {
    id: '9852-2-2',
    firstName: 'Jeff',
    lastName: 'Cook',
    specialities: ['Ruby', 'SQL'],
  },
  {
    id: '4678-2',
    firstName: 'Paul',
    lastName: 'Dodds',
    specialities: ['Backend'],
  },
];

// Pesquisa
const searchEmployee = (id, detail) => {
  for(let i = 0; i < detail.length; i += 1){
    if(id === detail[i].id) {
      return [detail[i].firstName,detail[i].lastName,detail[i].specialities]
    }
    if(id !== detail[detail.length-1]){
      return 'ID não identificada';
    }
  }
};

// console.log(professionalBoard[0].id);
// console.log(searchEmployee('0000-0', professionalBoard));

module.exports = searchEmployee;

// REFATORAR DETAIL DEVE SER AS KEYS DO OBJETO