import { Link } from "react-router-dom";
import { useState } from "react";
import imageSrc from "../../assets/images/Upload-video-preview.jpg";
import publishIcon from "../../assets/images/publish.svg";
import Button from "../Button/Button";
import "./Upload.scss";

const Upload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleChangeDescription = (e) => {
    setDescription(e.target.value);
  };


  const isTitleValid = () => {
    if (title && title.length < 5) {
      return false;
    }
    return true;
  };

  const isDescriptionValid = () => {
    if (description && description.length < 10) {
      return false;
    }
    return true;
  };

  const isFormValid = () => {
    if (!title || !description || !isTitleValid() || !isDescriptionValid() ) {
      return false;
    }
    return true;
  };

  return (
    <section className="upload">
      <h1 className="upload__page-title">Upload Video</h1>
      <form className="upload__form" id="form">
        <label className="upload__label">
          VIDEO THUMBNAIL
          <input
            className="upload__img"
            type="image"
            alt="uplaod video preview"
            src={imageSrc}></input>
        </label>
        <div className="upload__text-inputs">
          <label className="upload__label" htmlFor="title">
            TITLE YOUR VIDEO
            <input
              type="text"
              className={
                "upload__title " +
                (isTitleValid() ? "" : "upload__title--invalid")
              }
              name="title"
              value={title}
              id="title"
              placeholder="Add a title to your video"
              onChange={handleChangeTitle}></input>
          </label>
          <label className="upload__label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
            <textarea
              className={
                "upload__description " +
                (isDescriptionValid() ? "" : "upload__description--invalid")
              }
              id="description"
              value={description}
              placeholder="Add a description to your video"
              onChange={handleChangeDescription}></textarea>
          </label>
        </div>
      </form>
      <div className="upload__links">
        <Link to="/submitted" className={"upload__publish-link " + (isFormValid() ? "":"upload__publish-link--disabled")} >
          <Button
            location="publish"
            iconSrc={publishIcon}
            altText="publish icon"
            innerText="PUBLISH"
          />
        </Link>
        <Link to="/" className="upload__cancel-link" >
          <div className="upload__cancel-wrapper">CANCEL</div>
        </Link>
      </div>
    </section>
  );
};

export default Upload;
