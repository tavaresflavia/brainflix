import Comment from "../Comment/Comment";
import videoDetails from "../../data/video-details.json"

const CommentList = () => {

    console.log(videoDetails[0].comments);

   
    return (
        <section className = "card-list">

            {videoDetails[0].comments.map((el) => {

                return (<Comment 
                name = {el.name} 
                comment = {el.comment} 
                date = {new Date(el.timestamp).toLocaleDateString("en-US")} 
                />)

            })}

            
        </section>
    );
};

export default CommentList;