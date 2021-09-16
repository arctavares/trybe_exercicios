let estados = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goías',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraíma',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
} //https://gist.github.com/kavalcante/16106796c430c1711a71c5ba1213cee5

const select = document.getElementById('estado');
const objectSize = Object.keys(estados).length;

const values = Object.keys(estados);
const contend = Object.values(estados);

for (let i = 0; i < objectSize; i += 1) {
  let option = document.createElement('option')
  select.appendChild(option);
  select.children[i].value = values[i];
  select.children[i].innerHTML = contend[i];
}

/* Teste da data
Verificar o formato da data dd/mm/aaaa .
O dia deve ser > 0 e <= 31.
O mês deve ser > 0 e <= 12.
O ano não pode ser negativo.
Caso alguma das condições seja inválida no momento do envio do formulário, exibir via alert uma mensagem de erro contextualizada.
*/

const date = document.getElementById('data');
const button = document.getElementById('enviar');

function verifyDate(event) {
  event.preventDefault();
  let inputDate = date.value;
  inputDate = inputDate.replaceAll(' ','');
  let arrayDate = inputDate.split('/');
  let day = parseInt(arrayDate[0], 10);
  let month = parseInt(arrayDate[1], 10);
  let year = parseInt(arrayDate[2], 10);

  if(inputDate[2] !== '/'  || inputDate[5] !== '/'){
    alert('Formato da data incorreto');
  }

  if (day <= 0 || day >= 31) {
    alert('Dia inserido está incorreto');
  }else if(month <= 0 || month > 12){
    alert('Mês inserido está incorreto');
  }else if(year < 0){
    alert('Ano inserido está incorreto');
  }
}

button.addEventListener('click', verifyDate)