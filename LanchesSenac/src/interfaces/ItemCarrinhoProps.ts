import { Produto } from "./Produto";

export interface ItemCarrinhoProps {
    produto: Produto;
    quantidade: number;
    subtotal: number;
    index: number;
}