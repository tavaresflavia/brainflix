import "./CurrentVideoDetails.scss";
import EngagementIcon from "../EngagementIcon/EngagementIcon.js";
import videosDetail from "../../data/video-details.json";

const CurrentVideoDetails = ({ selectedVideo }) => {
  const displayedVideo = videosDetail.find((el) => el.id === selectedVideo.id);

  return (
    <section className="video-details">
      <h1 className="video-details__title">{displayedVideo.title}</h1>
      <article className="details">
        <div className="details__upload">
          <p className="details__channel">By {displayedVideo.channel}</p>
          <p className="details__date">
            {new Date(displayedVideo.timestamp).toLocaleDateString("en-US")}
          </p>
        </div>
        <div className="details__stats">
          <EngagementIcon type="views" data={displayedVideo.views} />
          <EngagementIcon type="likes" data={displayedVideo.likes} />
        </div>
      </article>
      <p className="details__description">{displayedVideo.description}</p>
    </section>
  );
};

export default CurrentVideoDetails;
