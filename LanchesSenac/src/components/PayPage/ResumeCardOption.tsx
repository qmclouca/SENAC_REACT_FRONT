import { ResumeCardOptionProps } from '../../interfaces/PayPage/ResumeCardOptionProps'
import "./ResumeCardOption.css"


const ResumeCardOption: React.FC<ResumeCardOptionProps> = ({name, cash, card}) =>{
    return(
        <>
        <div>
            <h2>{name}</h2>
           <input type="radio" id="cash" name="cash" value="cash" />
           <label htmlFor="{cash}">{cash}</label>
           <input type="radio" id="card" name="card" value="card" />
           <label htmlFor="card">{card}</label>
        </div>
        
        
        </>
    )


}
export default ResumeCardOption;