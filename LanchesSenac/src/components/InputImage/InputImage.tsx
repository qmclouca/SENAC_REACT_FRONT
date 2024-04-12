import { useRef, useState } from "react";
import "./InputImage.css";

const InputImage = () => {

    const [image, setImage] = useState("");
    const inputFile = useRef<HTMLInputElement | null>(null);
    const templateImage: string  = "https://cdn-icons-png.flaticon.com/512/3570/3570168.png";

    const imageOnChange = (event:any) => {
        if (event.target.files && event.target.files[0]) {
            setImage(window.URL.createObjectURL(event.target.files[0]));
        }
    }

    const imageOnClick = (event:any) => {
        inputFile.current.click();
    }

    return (
        <div className="conteiner-input-image">
            <div className="input-image">
                <input className="input" ref={inputFile} type="file" onChange={imageOnChange}/>
                <div className="image-selector-background"  onClick={imageOnClick}>
                    { 
                    image ? <img src={image}/> :
                    <div className="conteiner-template-empty-image">
                        <img className="template-empty-image" src={templateImage}/>
                        <span>Clique para inserir uma imagem</span>
                    </div> 
                    } 
                </div>
            </div>
        </div>
    )

}

export default InputImage;

