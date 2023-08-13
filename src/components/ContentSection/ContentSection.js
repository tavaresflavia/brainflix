import { useEffect, useState } from "react";
import CommentSection from "../CommentSection/CommentSection.js";
import CurrentVideoDetails from "../CurrentVideoDetails/CurrentVideoDetails";
import "./ContentSection.scss";
import axios from "axios";
const SERVER_URL  = process.env.REACT_APP_API_URL;


const ContentSection = ({ selectedVideo }) => {
  const [displayedVideo, setDisplayedVideo] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(()=>{
    axios
        .get(SERVER_URL + "/videos/" + selectedVideo.id)
        .then((response)=> {
          setDisplayedVideo(response.data);
          setIsLoading(false);
          window.scrollTo(0, 0);

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
