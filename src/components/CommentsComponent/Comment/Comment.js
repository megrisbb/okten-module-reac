import {Link} from "react-router-dom";

const Comment = ({comment}) => {

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <div>Post Id: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <Link to={postId.toString()}>Current Post</Link>
        </div>
    );
};

export {Comment};