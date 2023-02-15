import {useParams} from "react-router-dom";

import {CommentsDetails} from "../../components";

const PostDetailsPage = () => {

    const {postId} = useParams();

    return (
        <div>
            <CommentsDetails postId={postId}/>
        </div>
    );
};

export {PostDetailsPage};