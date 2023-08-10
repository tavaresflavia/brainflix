import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo.js";
import ContentSection from "../../components/ContentSection/ContentSection";
import VideoList from "../../components/VideoList/VideoList.js";
const SERVER_URL  = process.env.REACT_APP_API_URL;

const HomePage = () => {
  
  const [currentVideo, setCurrentVideo] = useState(null);
  const [videos, setVideos] = useState([]);
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get(SERVER_URL + "/videos/")
      .then((response) => {
        const videoId = id || response.data[0].id;
        const selectedVideo = response.data.find((el) => el.id === videoId);
        setCurrentVideo(selectedVideo);
        setVideos(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setHasError(true);
      });
  }, [id]);

  if (isLoading) {
    return <p> Loading...</p>;
  }

  if (hasError) {
    return (
      <p>Oops! We're experiencing some technical difficulties and unable to
        retrieve the data at the moment.</p>
    );
  }

  return (
    <>
      <CurrentVideo selectedVideo={currentVideo} />

      <main className="main">
        <ContentSection selectedVideo={currentVideo} />

        <VideoList 
        selectedVideo={currentVideo} 
        videos = {videos}/>
      </main>
    </>
  );
};

export default HomePage;
