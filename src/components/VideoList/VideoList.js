import videos from "../../data/videos.json";
import Video from "../Video/Video.js";
import "./VideoList.scss";

const VideoList = ({ onVideoSelect, selectedVideo }) => {
  const listedVideos = videos.filter((el) => el.id !== selectedVideo.id);

  return (
    <section className="video-list">
      <h2 className="video-list__title">NEXT VIDEOS</h2>
      {listedVideos.map((el) => {
        return (
          <Video
            key={el.id}
            id={el.id}
            title={el.title}
            channel={el.channel}
            imgSrc={el.image}
            onVideoSelect={onVideoSelect}
          />
        );
      })}
    </section>
  );
};

export default VideoList;
