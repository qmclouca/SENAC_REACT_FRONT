import ResumeCardOption from "../../components/PayPage/ResumeCardOption";
import ResumeConfirmation from "../../components/PayPage/ResumeConfirmation";
import ResumePayCheck from "../../components/PayPage/ResumePayCheck";
import ProductResume from "../../components/PayPage/ResumeProduct";
import ResumeUser from "../../components/PayPage/ResumeUser";
import { PagamentoProps } from "../../interfaces/PayPage/PagamentoProps";


const Pagamento =() =>{
    return(
        <>
        <div className="Resume-User">
            <ResumeUser
            username = "AMANDA"
            phone = "966-mole 66-Dura"
            address = "Na casa da mãe Joana!"/>
        </div>
        <div className="Resume-Product">
            <ProductResume
            productName ="X-Tudo Delícia"
            productImg =""
            qtdItem ="1"
            valueItem ="R$65,00"
            valueTotal ="R$65,00"/>
        </div>
        <div className="Resume-PayCheck">
            <ResumePayCheck
            howToPay="Cartão"
            payForm ="Crédito"
            />
        </div>
        <div className="Resume-CardOption">
            <ResumeCardOption
            name ="MasterCard"
            card = "1234123123"
            cash =""/>
        </div>

        <div className="Resume-Confirmation">
            <ResumeConfirmation
            total ="R$65,00"
            obs ="Tudo que tenho direito"
            delivery ="Buscar no local"
            toPayBtn =""/>
        </div>
              
        
        </>
    );




};

export default Pagamento;