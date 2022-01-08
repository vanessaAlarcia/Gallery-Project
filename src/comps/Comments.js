import React, {useState} from "react";

const Comments = () => {
    const [comment, setComment] = useState('');

    const handleComment = () => {
        console.log("comment added.")
    }

    return (
        <div>
            <div><button onClick={handleComment}>Add Comment</button></div>
            <div>Comment</div>
            <div>Comment</div>
        </div>
    )
}

export default Comments;