import viewsSrc from "../../assets/images/views.svg";
import likesSrc from "../../assets/images/likes.svg";
import "./EngagementIcon.scss";


const EngagementIcon = ({type, data}) => {
    return (
        <p>
            <img src={type=== "views" ? viewsSrc : likesSrc }></img> {data}
        </p>
    );
};

export default EngagementIcon;