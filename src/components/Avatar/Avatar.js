import "./Avatar.scss";
import avatarSrc from "../../assets/images/Mohan-muruge.jpg";


const Avatar = (form) => {
    return (
        <img className= {form ? "avatar--form" : "avatar--nav"} src={avatarSrc} alt="avatar" />
    );
};

export default Avatar;