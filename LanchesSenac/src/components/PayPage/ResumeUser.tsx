import { ResumeUserProps } from '../../interfaces/PayPage/ResumeUserProps'
import "./ResumeUser.css"



const ResumeUser: React.FC<ResumeUserProps> = ({username, phone, address})=>{
    return (
        <>
            <div>
                <h2>{username}</h2>
                <h2>{phone}</h2>
                <p>{address}</p>
            </div>
        
        
        </>

    )
}

export default ResumeUser;