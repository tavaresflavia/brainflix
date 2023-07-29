import { useState } from "react";
import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo.js";
import ContentSection from "./components/ContentSection/ContentSection";
import VideoList from "./components/VideoList/VideoList.js";
import videos from "./data/videos.json";


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
        <ContentSection
        selectedVideo={currentVideo}/>
        <VideoList 
        selectVideo={selectVideo} 
        selectedVideo={currentVideo} />
        
      </main>
    </>
  );
}

export default App;
