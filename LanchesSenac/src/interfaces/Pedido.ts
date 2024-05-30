import { ItemCarrinhoProps } from "./ItemCarrinhoProps";
import { UsuarioProps } from "./UsuarioProps";

export interface Pedido {
    id?: number;
    itensPedido: ItemCarrinhoProps[]
    subtotal: number;
    taxaDeEntrega: number;
    total: number;
    usuario: UsuarioProps;
}