// FUNÇÕES DE VERIFICAÇÃO
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');
const endereco = document.getElementById('endereco');
const cidade = document.getElementById('cidade');

const resumoCurriculo = document.getElementById('resumoCurriculo');
const cargo = document.getElementById('cargo');
const descricaoCargo = document.getElementById('descricaoCargo');
resumoCurriculo.value = ''; // Ṕor algum motivo ele inicia do 9


function verifyMaxSize(string, maxSize) {
  if (string.value.length > maxSize) {
    string.placeholder = `Excedeu o limite de tamanho do ${string.name}`;
  }
  return true;
}

function verifyMinSize(string, minSize) {
  if (string.value.length <= minSize) {
    string.placeholder = `${string.name} não cumpriu com o tamanho minimo de ${minSize}`;
  }
}

function verifyRequirement(string) {
  if (string.value.length === 0) {
    string.style.border = '1px solid red';
  }
}

function verifyMultipleRequirements(string, maxSize, minSize) {
  if (verifyRequirement(string)) {
    verifyMaxSize(string, maxSize);
    verifyMinSize(string, minSize);
  }
}

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

const date = document.getElementById('data');
date.DatePickerX.init();

const button = document.getElementById('enviar');

button.addEventListener('click', (event) => {
  event.preventDefault();
  verifyMultipleRequirements(nome, 40, 0);
  verifyMultipleRequirements(email, 50, 0);
  verifyMultipleRequirements(cpf, 11 , 11);
  verifyMultipleRequirements(endereco, 200, 0);
  verifyMultipleRequirements(cidade, 28, 0);
  verifyMultipleRequirements(resumoCurriculo, 1000, 0);
  verifyMultipleRequirements(cargo, 40, 0);
  verifyMultipleRequirements(descricaoCargo, 500, 0);
})
