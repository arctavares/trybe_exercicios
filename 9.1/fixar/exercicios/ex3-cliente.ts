export default class cliente {
    private _nome: string;
    constructor(nome: string) {
        this._nome = nome;
    }
    get nome():string {
        return this._nome;
    }
    set nome(novoValor: string) {
        if(novoValor.length < 3) {
            throw new Error("nome must be at least 3 characters");
        }
        this._nome = novoValor;
    }
}