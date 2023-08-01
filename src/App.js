import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import CurrentVideo from "./components/CurrentVideo/CurrentVideo.js";
import ContentSection from "./components/ContentSection/ContentSection";
import VideoList from "./components/VideoList/VideoList.js";
import videos from "./data/videos.json";
import Upload from "./pages/UploadPage/UploadPage.js";


function App() {
  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const selectVideo = (selectedId) => {
    const selectedVideo = videos.find((el) => el.id === selectedId);
    setCurrentVideo(selectedVideo);
  };

  return (
    <>
      <Nav />

      <CurrentVideo selectedVideo={currentVideo} />

      <main className="main">
        <ContentSection selectedVideo={currentVideo} />

        <VideoList onVideoSelect={selectVideo} selectedVideo={currentVideo} />
        </main>
        <BrowserRouter>
          <Routes>
            <Route path="/upload" element={<Upload/>}/>
          </Routes>
        </BrowserRouter>
     
    </>
  );
}

export default App;
