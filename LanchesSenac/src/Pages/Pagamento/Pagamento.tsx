import ResumeCardOption from "../../components/PayPage/ResumeCardOption";
import ResumeConfirmation from "../../components/PayPage/ResumeConfirmation";
import ResumePayCheck from "../../components/PayPage/ResumePayCheck";
import ProductResume from "../../components/PayPage/ResumeProduct";
import ResumeUser from "../../components/PayPage/ResumeUser";


const pagamento =() =>{
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
            productName =""
            productImg =""
            qtdItem =""
            valueItem =""
            valueTotal =""/>
        </div>
        <div className="Resume-PayCheck">
            <ResumePayCheck
            howToPay=""
            payForm =""
            />
        </div>
        <div>
            <ResumeCardOption
            name =""
            card = ""
            cash =""/>
        </div>

        <div>
            <ResumeConfirmation
            total =""
            obs =""
            delivery =""
            toPayBtn =""/>
        </div>
      


        
        
        </>
    );




};

export default pagamento;