import { ResumeConfirmation } from '../../interfaces/PayPage/ResumeConfirmation'
import './EndConfirmation.css'



const ResumeConfirmation: React.FC<ResumeConfirmation> = ({delivery,obs,total,toPayBtn}) =>{
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