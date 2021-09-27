const searchEmployee = require('./bonus');
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

test('test if its a function', () => {
  expect('function').toBe(typeof (searchEmployee));
})

test('test if return info from id 8579-6', () => {
  expect([professionalBoard[0].firstName, professionalBoard[0].lastName, professionalBoard[0].specialities]).toStrictEqual(searchEmployee('8579-6', professionalBoard))
})

test('test if return (ID does not exist)', () => {
  expect('ID não identificada').toBe(searchEmployee('0000-0', professionalBoard));
})