import Comment from "../Comment/Comment";

const CommentList = ({ selectedVideo }) => {

    return (
        <section className = "comment-list">

            {selectedVideo.comments.map((el) => {

                return (<Comment 
                key = {el.id}
                id = {el.id}
                name = {el.name} 
                comment = {el.comment} 
                date = {new Date(el.timestamp).toLocaleDateString("en-US")} 
                />)

            })}

            
        </section>
    );
};

export default CommentList;