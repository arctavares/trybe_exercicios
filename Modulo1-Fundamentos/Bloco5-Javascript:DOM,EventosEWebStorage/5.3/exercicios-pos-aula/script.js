function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.

//Exercicio 1

const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];

let daysUl = document.querySelector('#days');


for (let i = 0; i < dezDaysList.length; i += 1) {
  daysUl.appendChild(document.createElement('li')).innerText = dezDaysList[i];

}

for (let i = 0; i < dezDaysList.length; i += 1) {
  daysUl.children[i].classList.add('day');
}

let holidays = [24, 25, 31];

for (let i = 0; i < holidays.length; i += 1) {
  daysUl.children[holidays[i] + 1].classList.add('holiday');
}

let fridays = [4, 11, 18, 25];

for (let i = 0; i < fridays.length; i += 1) {
  daysUl.children[fridays[i] + 1].classList.add('friday');
}

//Exercicio 2

let string = 'Feriados';
let buttons = document.querySelector('.buttons-container');

function holidayButton(string) {
  buttons.appendChild(document.createElement('button')).id = 'btn-holiday';
  buttons.firstElementChild.textContent = string;
}

holidayButton(string);

//Exercicio 3
let button = buttons.firstElementChild;
button.addEventListener("click", clickHolidays);

let daysLi = document.querySelectorAll(".holiday");

for (let i = 0; i < daysLi.length; i += 1) {
  daysLi[i].style.color = 'rgb(119, 119, 119)';
}

function clickHolidays() {
  for (let i = 0; i < daysLi.length; i += 1) {
    if (daysLi[i].style.color === 'rgb(119, 119, 119)') {
      daysLi[i].style.color = 'blue';
    } else {
      daysLi[i].style.color = 'rgb(119, 119, 119)';
    }
  }
}

//Exercicio 4

let friday = 'Sexta-feira';
function fridayButton(friday) {
  buttons.appendChild(document.createElement('button')).id = 'btn-friday';
  buttons.querySelector('#btn-friday').textContent = friday;
}
fridayButton(friday);

//Exercicio 5

let fridayButtonChange = document.querySelector('#btn-friday');
fridayButtonChange.addEventListener('click', changeFriday);

let fridaysLi = document.querySelectorAll(".friday");

function changeFriday() {
  for (let i = 0; i < fridaysLi.length; i += 1) {
    if (parseInt(fridaysLi[i].innerText) === fridays[i]) {
      fridaysLi[i].innerText = 'Sextou!';
    } else {
      fridaysLi[i].innerText = fridays[i];
    }
  }
}

//Exercicio 6

let daysArray = daysUl.children;

for (let i = 0; i < daysArray.length; i += 1) {
  daysArray[i].addEventListener('mouseover', increaseSize);
  daysArray[i].addEventListener('mouseleave', decreaseSize)
}

function increaseSize(event) {
  event.target.style.fontSize = '30px';
}

function decreaseSize(event) {
  event.target.style.fontSize = '20px';
}

//Exercicios 7

let task = 'cozinhar';

let myTasks = document.querySelector('.my-tasks');

function addTasks(string){
  myTasks.appendChild(document.createElement('span')).id = 'cook';
  myTasks.querySelector('#cook').innerText = string;
}

addTasks(task);

//Exercicio 8

let cor = 'grey';
/*
let clicar = document.querySelector('#cook');
clicar.addEventListener('click', changeBGColor);
clicar.cor = 'grey';

function changeBGColor(event){
  event.target.appendChild(document.createElement('div')).style.backgroundColor = cor;
}
*/

let clicar = document.querySelector('#cook');
clicar.addEventListener('click', function(){
  document.querySelector('.my-tasks').appendChild(document.createElement('div')).style.backgroundColor = cor;
});

/*
function changeBGColor(){
  document.querySelector('.my-tasks').appendChild(document.createElement('div')).style.backgroundColor = 'grey';
}
*/
//Exercicio 9

