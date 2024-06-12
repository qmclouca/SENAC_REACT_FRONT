import CarrinhoComponent from "../../components/Carrinho/CarrinhoComponent";
import { UsuarioProps } from "../../interfaces/UsuarioProps";
import { postPedido, getUltimoPedidoEmAberto } from "../../services/PedidoService";
import { postProduto } from "../../services/ProdutoService";
import { postUsuario } from "../../services/UsuarioService";
import { Pedido } from "../../interfaces/Pedido";
import { useEffect, useState } from "react";
import { Produto } from "../../interfaces/Produto";

const PaginaInicial: React.FC = () => {
  const [pedidoSalvo, setPedidoSalvo] = useState<Pedido | null>(null);
  const [produtoSalvo, setProdutoSalvo] = useState<Produto | null>(null);
  const [usuarioSalvo, setUsuarioSalvo] = useState<UsuarioProps | null>(null);

  useEffect(() => {
    const salvarUsuarioEProduto = async () => {
      try {
        const response = await postUsuario(usuario);
        const usuarioSalvoData: UsuarioProps = response.data; 
        setUsuarioSalvo(usuarioSalvoData);
        
        const produtoResponse = await postProduto(produto);
        const produtoSalvoData: Produto = produtoResponse.data; 
        setProdutoSalvo(produtoSalvoData);
      } catch (error) {
        console.error('Erro ao salvar usuário ou produto:', error);
      }
    };

    salvarUsuarioEProduto();
  }, []);

  useEffect(() => {
    const salvarPedido = async () => {
      try {
        if (usuarioSalvo && produtoSalvo) {
          const pedido: Pedido = {
            itensPedido: [
              {
                produto: produtoSalvo,
                quantidade: 1,
                valor: 19.99,
              },
              {
                produto: produtoSalvo,
                quantidade: 1,
                valor: 19.99,
              },
              {
                produto: produtoSalvo,
                quantidade: 1,
                valor: 19.99,
              }
            ],
            usuario: usuarioSalvo,
            subtotal: 10.99,
            taxaDeEntrega: 5,
            valor: 15.99
          };

        
          let ultimoPedidoResponse = await getUltimoPedidoEmAberto(1);
          if (ultimoPedidoResponse == null) { 
            ultimoPedidoResponse = await postPedido(pedido);
          }
          const ultimoPedidoData: Pedido = ultimoPedidoResponse.data;
          setPedidoSalvo(ultimoPedidoData);
        }
      } catch (error) {
        console.error('Erro ao salvar pedido:', error);
      }
    };

    salvarPedido();
  }, [usuarioSalvo, produtoSalvo]);

  const produto: Produto = {
    nome: "X-burguer",
    descricao: "Saboroso",
    valor: 19.99,
    linkFoto: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGBaisU9d80P-ks9Pplz_SoWB6iK7W08iZcg&s"
  };

  const usuario: UsuarioProps = {
    id: 1,
    nome: 'João',
    username: 'joao.joao'
  };

  return (
    <div className="pagina-inicial">
      <h1>Página Inicial</h1>
      {pedidoSalvo && <CarrinhoComponent pedido={pedidoSalvo} />}
    </div>
  );
};

export default PaginaInicial;