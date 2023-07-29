import { directive } from "@babel/types";
import commentIcon from "../../assets/images/add_comment.svg";
import uploadIcon from "../../assets/images/upload.svg";
import  "./Button.scss"

const Button = (form) => {

    //added if else to improve readability 

    if (form){
        return (
            <div className= "button-wrapper">
            <button className= "button--form">
                <img src={commentIcon} alt="add comment icon" /> COMMENT
            </button>
            </div>
        );
    }else{
        return (
        <a href="#" className= "button--nav">
            <img src={uploadIcon} alt="upload icon" /> UPLOAD
        </a>
        );
    }
    
};

export default Button;