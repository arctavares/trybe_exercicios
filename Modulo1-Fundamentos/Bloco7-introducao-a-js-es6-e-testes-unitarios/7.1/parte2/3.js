const paragrafo = document.getElementById('contador');
const button = document.getElementById('botao');

button.addEventListener('click', () => {
  let count = parseInt(paragrafo, 10) + 1;
  paragrafo.innerText = (parseInt(paragrafo.innerText, 10) + 1).toString();
})