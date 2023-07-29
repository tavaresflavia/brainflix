import "./CurrentVideoDetails.scss";
import EngagementIcon from "../EngagementIcon/EngagementIcon.js";


const CurrentVideoDetails = ({ selectedVideo }) => {
 
  return (
    <section className="video-details">
      <h1 className="video-details__title">{selectedVideo.title}</h1>
      <article className="details">
        <div className="details__upload">
          <p className="details__channel">By {selectedVideo.channel}</p>
          <p className="details__date">
            {new Date(selectedVideo.timestamp).toLocaleDateString("en-US")}
          </p>
        </div>
        <div className="details__stats">
          <EngagementIcon type="views" data={selectedVideo.views} />
          <EngagementIcon type="likes" data={selectedVideo.likes} />
        </div>
      </article>
      <p className="details__description">{selectedVideo.description}</p>
    </section>
  );
};

export default CurrentVideoDetails;
