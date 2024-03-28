import { ResumeProduct } from "../../interfaces/PayPage/ResumeProduct"
import "./ProductResume.css"


const ResumeProduct: React.FC<ResumeProduct> = ({productName,productImg,qtdItem,valueItem,valueTotal}) =>{
    return(

        <div>
            <h2>{productName}</h2>
            <img src={productImg} alt="" />
            <p>{qtdItem}</p>
            <h4>{valueItem}</h4>
            <h3>{valueTotal}</h3>
        </div>

    )
}

export default ResumeProduct;