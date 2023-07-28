import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import Comments from "./components/CommentSection/CommentSection.js";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo.js";
import VideoList from "./components/VideoList/VideoList.js";
import CurrentVideoDetails from "./components/CurrentVideoDetails/CurrentVideoDetails";
import videos from "./data/videos.json";
import { useState } from "react";

function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const selectVideo = (selectedId) => {
    let selectedVideo = videos.find((el) => el.id === selectedId);
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
      <Nav />

      <CurrentVideo 
      selectedVideo={currentVideo} />

      <main className="main">

        <div className = "main__content">

          <CurrentVideoDetails 
          selectedVideo={currentVideo} />

          <Comments />

        </div>
        <VideoList 
        selectVideo={selectVideo} 
        selectedVideo={currentVideo} />
        
      </main>
    </>
  );
}

export default App;
