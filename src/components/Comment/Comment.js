import "./Comment.scss"

const Comment = ({name, comment, date}) => {
    return (
    <article className="comment-card">
        <div className="comment-card__avatar">
        </div>
        <div className="comment-card__content">
            <div className="comment-card__name-box">
            <h3 className="comment-card__name">{name}</h3>
            <p className="comment-card__date">{date}</p>
            </div>
            <p className="comment-card__text">
            {comment}
            </p>
        </div>
    </article>
   
    );
};

export default Comment;