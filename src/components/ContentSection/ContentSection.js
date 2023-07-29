import CommentSection from "../CommentSection/CommentSection.js";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import "./ContentSection.scss";
import videosDetail from "../../data/video-details.json";



const ContentSection = ({selectedVideo}) => {

    const displayedVideo = videosDetail.find((el) => el.id === selectedVideo.id);

    return (
        <div className = "content-section">

          <CurrentVideoDetails 
          selectedVideo={displayedVideo}/>

          <CommentSection
          selectedVideo={displayedVideo}/>

        </div>
    );
};

export default ContentSection;