import email from './email';

class ListaDeEmail {
    constructor(private listaDeEmail: email[] = []) {

    }

    get all(): email[] { return this.listaDeEmail }

    getEmaiSentBy(enderecoDeEmail: string): email[] {
        return this.listaDeEmail.filter((mail => mail.remetente === enderecoDeEmail));
    }
    
    getByEmailFrom(enderecoDeEmail: string): email[] {
      return this.listaDeEmail.filter((mail) => mail.remetente === enderecoDeEmail);
    }
}

const friendEmail = 'friend@personalmail.com';
const myEmail = 'me@personalmail.com';

const email1 = new email(
  myEmail,
  friendEmail,
  'Car wash',
  'There\'s a new car wash in town. Did you know?',
);

console.log(email1.mensagem);