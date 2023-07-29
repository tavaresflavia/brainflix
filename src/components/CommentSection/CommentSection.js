import "./CommentSection.scss";
import Form from "../Form/Form.js";
import CommentList from "../CommentList/CommentList.js";

const Comments = ({selectedVideo}) => {

    return (
    <section className="comment-section">
      <p className="comment-section__count">{selectedVideo.comments.length} Comment{selectedVideo.comments.length > 1 ? "s":""}
      </p>
          <Form/>
          <CommentList 
          selectedVideo = {selectedVideo}/>
      </section>
    );
};

export default Comments;