import viewsSrc from "../../assets/icons/views.svg";
import likesSrc from "../../assets/icons/likes.svg";
import "./EngagementIcon.scss";
import "./EngagementIcon.scss";

const EngagementIcon = ({ type, data }) => {

  return (
    <p className="engagement">
      <img
        className="engagement__icon"
        src={type === "views" ? viewsSrc : likesSrc}
        alt={type === "views" ? "views icon" : "like icon"}></img>
      {data}
    </p>
  );
  
};

export default EngagementIcon;
