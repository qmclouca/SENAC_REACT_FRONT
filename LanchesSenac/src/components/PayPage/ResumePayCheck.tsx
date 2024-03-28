import { ResumePayCheck } from "../../interfaces/PayPage/ResumePayCheck"
import "./PayCheck.css"



const ResumePayCheck: React.FC<ResumePayCheck> = ({payForm,howToPay})=>{
    return(
        <>
        
        <div>
            <h2>{payForm}</h2>
            <h3>{howToPay}</h3>
        </div>

        </>
    )
}
export default ResumePayCheck;