import { ResumeConfirmationProps } from '../../interfaces/PayPage/ResumeConfirmationProps'
import './ResumeConfirmation.css'



const ResumeConfirmation: React.FC<ResumeConfirmationProps> = ({delivery,obs,total,toPayBtn}) =>{
    return(
        <>
            <div>
                <h1>Confirme o Pedido</h1>
                <h2>{total}</h2>
                <h3>{delivery}</h3>
                <p>{obs}</p>

                <button>{toPayBtn}</button>
            
                


                
            </div>
        
        </>

    )
}

export default ResumeConfirmation;