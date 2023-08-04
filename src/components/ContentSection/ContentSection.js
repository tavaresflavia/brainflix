import { useEffect, useState } from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import "./ContentSection.scss";
import axios from "axios";

const ContentSection = ({ selectedVideo }) => {
  const ENDPOINT = "https://project-2-api.herokuapp.com";
  const API_KEY = "?api_key=9698ede0-665d-40a1-8a7e-5cf3275f693d";
  const [displayedVideo, setDisplayedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(()=>{
    axios
        .get(`${ENDPOINT}/videos/${selectedVideo.id}${API_KEY}`)
        .then((response)=> {
          setDisplayedVideo(response.data);
          setIsLoading(false);

        })
        .catch( (err) => {
          console.log(err);
          setHasError(true);
        })
  },[selectedVideo.id])
  
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
    <div className="content-section">

      <CurrentVideoDetails selectedVideo={displayedVideo} />

      <CommentSection selectedVideo={displayedVideo} />
      
    </div>
  );
};

export default ContentSection;
