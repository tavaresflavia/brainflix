import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Nav from "./components/Nav/Nav.js";
import UploadPage from "./pages/UploadPage/UploadPage.js";
import HomePage from "./pages/HomePage/HomePage";

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
          {/* <Route path="*" element={<NotFoundPage/>}/> */}
        </Routes>
      </BrowserRouter>

  );
}

export default App;
