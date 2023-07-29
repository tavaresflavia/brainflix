import commentIcon from "../../assets/images/add_comment.svg";
import uploadIcon from "../../assets/images/upload.svg";
import  "./Button.scss"

const Button = ({form}) => {

    //added if else to improve readability 
    
    if (form){
        return (
            <button className= " button button--form">
                <img className = "button__icon" src={commentIcon} alt="add comment icon" /> COMMENT
            </button>
        );
    }else{
        return (
        <a href="#" className= "button button--nav">
            <img className = "button__icon" src={uploadIcon} alt="upload icon" /> UPLOAD
        </a>
        );
    }
    
};

export default Button;