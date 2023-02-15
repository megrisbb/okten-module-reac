import {Link, useNavigate} from "react-router-dom";

const Comment = ({comment}) => {

    const navigate = useNavigate();

    const {postId, id, name, email, body} = comment;

    return (
        <div>
            <div>Post Id: {postId}</div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Email: {email}</div>
            <div>Body: {body}</div>
            <button onClick={()=>navigate(postId.toString())}>Current Post</button>
        </div>
    );
};

export {Comment};