import './LancheCard.css';
import { ProductCardProps } from "../../interfaces/ProductCardProps";

const LancheCard: React.FC<ProductCardProps> = ({image, description, whereToGo, cardTitle, price}) => {
    return (
        <>            
            <div  className="card card-extra-styles">
                <h2 className="card-title">{cardTitle}</h2>
                <img src={image} className="product-card__image" alt={cardTitle} />
                <div className="card-body">
                    <p className="card-text-description">{description}</p>
                    <p className="card-text-price">{price}</p>
                    <button className="btn btn-primary">{whereToGo}</button>
                </div>
            </div>
        </>
    );
};

export default LancheCard;
