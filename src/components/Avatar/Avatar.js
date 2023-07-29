import "./Avatar.scss";
import avatarSrc from "../../assets/images/Mohan-muruge.jpg";


const Avatar = ({form}) => {
    return (
        <img className= {form ? "avatar avatar--form" : "avatar avatar--nav"} src={avatarSrc} alt="user avatar" />
    );
};

export default Avatar;