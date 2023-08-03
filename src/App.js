import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import UploadPage from "./pages/UploadPage/UploadPage.js";
import HomePage from "./pages/HomePage/HomePage";
import SuccessSubmitPage from "./pages/SuccessSubmitPage/SuccessSubmitPage";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";

function App() {
  return (

      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/upload" element={<UploadPage />} />
          <Route
            path="/videos/:id"
            element={<HomePage />}
          />
          <Route path="/submitted" element={<SuccessSubmitPage/>}/>
          <Route path="*" element={<NotFoundPage/>}/>
        </Routes>
      </BrowserRouter>

  );
}

export default App;
