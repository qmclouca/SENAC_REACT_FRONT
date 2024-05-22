import { ResumePayCheckProps } from "../../interfaces/PayPage/ResumePayCheckProps"
import "./ResumePayCheck.css"



const ResumePayCheck: React.FC<ResumePayCheckProps> = ({payForm,howToPay})=>{
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