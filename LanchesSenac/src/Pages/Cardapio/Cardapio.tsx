import LancheCard from "../../components/LancheCard/LancheCard";

const Cardapio = () => {
    return (
      <>
      <div className="products-display">
            <LancheCard 
             image="https://hamburguerdesucesso.com.br/wp-content/uploads/2021/05/lanches-mais-vendidos-no-brasil-melhores.jpg"
             description="X-Angus"
             whereToGo="xpto" 
             cardTitle="X-ANGUS" 
             price="R$ 45,00" />

              <LancheCard 
             image="https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/05/26/234426928-lanches-veganosedicase.jpg"
             description="X-Verdura"
             whereToGo="XPTO" 
             cardTitle="X-VERDURA" 
             price="R$ 60,00" />
        </div>
       </>

    );
};

  export default Cardapio;