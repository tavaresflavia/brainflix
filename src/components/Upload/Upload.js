import imageSrc from "../../assets/images/Upload-video-preview.jpg";
import "./Upload.scss";

const Upload = () => {
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
              className="upload__title"
              name="title"
              id="title"
              placeholder="Add a title to your video"></input>
          </label>
          <label className="upload__label" htmlFor="description">
            ADD A VIDEO DESCRIPTION
            <textarea
              className="upload__description"
              id="description"
              placeholder="Add a description to your video"></textarea>
          </label>
          
        </div>
      </form>
    </section>
  );
};

export default Upload;
