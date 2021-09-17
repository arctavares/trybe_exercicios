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

const formulario = document.getElementById('formulario');

const button = document.getElementById('sendButton');

button.addEventListener('click', (event) => {
  event.preventDefault();
});

validation.init(formulario, {
  events: ["change", "paste", "keyup"]
}); // CORRETO


