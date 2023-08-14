import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./HomePage.scss";
import CurrentVideo from "../../components/CurrentVideo/CurrentVideo.js";
import ContentSection from "../../components/ContentSection/ContentSection";
import VideoList from "../../components/VideoList/VideoList.js";
const SERVER_URL  = process.env.REACT_APP_API_URL;

const HomePage = () => {
  const { id } = useParams();
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    axios
      .get(SERVER_URL + "/videos/")
      .then((response) => {
      
  
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
  const videoId = id || videos[0].id;
  const selectedVideo = videos.find((el) => el.id === videoId);

  return (
    <>
      <CurrentVideo selectedVideo={selectedVideo} />

      <main className="main">
        <ContentSection selectedVideo={selectedVideo} />

        <VideoList 
        selectedVideo={selectedVideo} 
        videos = {videos}/>
      </main>
    </>
  );
};

export default HomePage;
