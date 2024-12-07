import { ItemCarrinhoProps } from "./ItemCarrinhoProps";

export interface Pedido {
    id: number;
    itens: ItemCarrinhoProps[]
    subtotal: number;
    taxaDeEntrega: number;
    total: number;
}