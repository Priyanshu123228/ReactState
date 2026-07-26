import { useState } from "react"
import "./Comment.css";
import CommentForm from "./CommentForm";

export default function Comment() {
    let [comments, setComments] = useState([{
        username: "@ps",
        remarks: "Be happy so that universe could make you more happy",
        rating: 5,
    }]);
    let addNewComment = (comment) => {
        setComments((currComment) => [...currComment, comment]);
    };
    return (
        <>
            <div>
                <h3>All Comments</h3>
                {comments.map((comment,idx)=>(
                    <div className="comment" key={idx}>
                    <span>{comment.remarks}</span>
                    &nbsp;&nbsp;
                    <span>(rating={comment.rating})</span>
                    &nbsp;&nbsp;
                    <p>{comment.username}</p>
                </div>
                ))}
                
            </div>

            <CommentForm addNewComment={addNewComment}/>
        </>
    );
}