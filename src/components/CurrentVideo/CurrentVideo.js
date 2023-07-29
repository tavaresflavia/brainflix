import "./CurrentVideo.scss";

const CurrentVideo = ({selectedVideo}) => {

  return (
    <section className="current-video">
      <video
        className="current-video__player"
        controls
        poster={selectedVideo.image}></video>
    </section>
  );
  
};

export default CurrentVideo;
