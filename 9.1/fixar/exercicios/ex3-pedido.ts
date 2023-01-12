import cliente from './ex3-cliente';
import ItemDoPedido from './ex3-itemDoPedido';

export default class pedido {
    private _cliente: cliente;
    private _items: ItemDoPedido[] = [];
}