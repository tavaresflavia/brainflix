import "./CommentSection.scss";
import Form from "../Form/Form.js";
import CommentList from "../CommentList/CommentList.js";

const Comments = () => {
    return (
    <section className="comment-section">
      <p className="comment-section__count">3 comments</p>
          <Form/>
          <CommentList/>
      </section>
    );
};

export default Comments;