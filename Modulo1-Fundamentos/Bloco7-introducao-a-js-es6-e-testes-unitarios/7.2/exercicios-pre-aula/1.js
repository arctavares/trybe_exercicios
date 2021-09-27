const returnNewKey = (objeto, chave, valor) => objeto[chave] = valor;

const info = {
  nome: 'Armando'
}

returnNewKey(info, 'sobrenome', 'tavares')

console.log(info);
