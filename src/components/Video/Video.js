import "./Video.scss";

const Video = ({ id, title, channel, imgSrc, onVideoSelect }) => {
  
  const handleClick = () =>{
    onVideoSelect(id);
  }
  
    return (
    <div className="video" onClick= {handleClick} >
      <div className="video__img-wrapper">
        <img className="video__img" src={imgSrc} alt="video poster"></img>
      </div>
      <div className= "video__content">
        <h3 className="video__title">{title}</h3>
        <p className="video__channel">{channel}</p>
      </div>
    </div>
  );
};

export default Video;
