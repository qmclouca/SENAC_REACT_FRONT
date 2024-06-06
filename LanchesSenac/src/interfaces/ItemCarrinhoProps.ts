import { Produto } from "./Produto";

export interface ItemCarrinhoProps {
    produto: Produto;
    quantidade: number;
    valor: number;
}