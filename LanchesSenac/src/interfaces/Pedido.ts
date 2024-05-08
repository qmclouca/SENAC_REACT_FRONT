import { ItemCarrinhoProps } from "./ItemCarrinhoProps";

export interface Pedido {
    id: number;
    itens: ItemCarrinhoProps[]
}