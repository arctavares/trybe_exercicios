export default class email {
    private _remetente: string;
    private _destinatario: string;
    private _assunto: string;
    private _mensagem: string;

    constructor(remetente: string, destinatario: string, assunto: string, mensagem: string) {
        this._remetente = remetente;
        this._destinatario = destinatario;
        this._assunto = assunto;
        this._mensagem = mensagem;
    }

    set assunto(a: string) {
        if(a.length <= 40) {
            this._assunto = a;
        }
    }

    get assunto(): string {
        return this._assunto;
    }

    get remetente(): string {
        return this._remetente;
    }

    get destinatario(): string {
        return this._destinatario;
    }

    get mensagem(): string {
        return `
        De: ${this._remetente}
        Para: ${this._destinatario}
        ${this._assunto}

        ${this._mensagem}
        `
    }
}   