export default class ItemDoPedido {
    private _nome: string;
    private _preco: number;
    constructor(nome: string, preco: number) {
        this._nome = nome;
        this._preco = preco;
    }

    get nome():string { return this.nome; }
    set nome(novoValor: string){
        if(novoValor.length < 3) {
            throw new Error('Nome deve conter no minimo 3 caracteres');
        }
        this._nome = novoValor;
    }
    get preco():number {return this._preco}
    set preco(novoValor: number) {
        if(novoValor < 0) {
            throw new Error('O preço deve ser positivo');
        }
        this._preco = novoValor;
    }
}   