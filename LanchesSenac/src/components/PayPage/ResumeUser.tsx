import { ResumeUser } from '../../interfaces/PayPage/ResumeUser'
import './InfoUser.css'



const ResumeUser: React.FC<ResumeUser> = ({username, phone, address})=>{
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