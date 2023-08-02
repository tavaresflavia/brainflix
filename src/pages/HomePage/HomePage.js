import {useState, useEffect} from "react";
import {useParams} from "react-router-dom";
import "./HomePage.scss";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo.js";
import ContentSection from "../../components/ContentSection/ContentSection";
import VideoList from "../../components/VideoList/VideoList.js";
import videos from "../../data/videos.json";

const HomePage = () => {
    const ENDPOINT = "https://project-2-api.herokuapp.com";
    const API_KEY = "9698ede0-665d-40a1-8a7e-5cf3275f693d";
    const [currentVideo, setCurrentVideo] = useState(videos[0]);
    const {id} = useParams();

    const videoId = id || videos[0].id

    useEffect(() => {
      const selectedVideo = videos.find((el) => el.id === videoId);
      setCurrentVideo(selectedVideo);},[videoId])
    

  return (
    <>
      <CurrentVideo selectedVideo={currentVideo} />

      <main className="main">
        
        <ContentSection selectedVideo={currentVideo} />

        <VideoList selectedVideo={currentVideo} />

      </main>
    </>
  );
};

export default HomePage;
