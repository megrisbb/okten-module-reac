import {useEffect, useState} from "react";

import {commentsService} from "../../../services";

const CommentsDetails = ({postId}) => {


    const [post, setPost] = useState([]);

    useEffect(() => {
        if (postId) {
            commentsService.getById(postId).then(({data}) => setPost(data))
        }
    }, [])

    return (
        <div>
            {post && <>
                <div>Id: {post.id}</div>
                <div>User id: {post.userId}</div>
                <div>Title: {post.title}</div>
                <div>Body: {post.body}</div>
            </>
            }
        </div>
    );
};

export {CommentsDetails};