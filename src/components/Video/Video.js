import "./Video.scss";
import { Link } from "react-router-dom";

const Video = ({ id, title, channel, imgSrc}) => {

  return (
    <Link className="video" to={`/videos/${id}`}>
    <div className="video__container" >
      <div className="video__img-wrapper">
        <img 
        className="video__img" 
        src={imgSrc} 
        alt= {`${title} Poster`}></img>
      </div>
      <div className="video__content">
        <h3 className="video__title">{title}</h3>
        <p className="video__channel">{channel}</p>
      </div>
    </div>
    </Link>
  );
};

export default Video;
