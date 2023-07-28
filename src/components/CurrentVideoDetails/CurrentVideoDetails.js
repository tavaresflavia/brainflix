import "./CurrentVideoDetails.scss";
import EngagementIcon from "../EngagementIcon/EngagementIcon.js";

const CurrentVideoDetails = () => {
    return (
        <section className = "video-details">
            <h1 className = "video-details__title"> title</h1>
            <article className = "details">
            <div className = "details__upload">
            <p className = "details__channel">By channel</p>
            <p className = "details__date">date</p>
            </div>
            <div className = "details__stats">
            <EngagementIcon
            type = "views" data ="views"/>
            <EngagementIcon
            type = "likes" data ="likes"/>
            </div>
            </article>
        
        </section>
    );
};

export default CurrentVideoDetails;