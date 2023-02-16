import {Component} from "react";

class Post extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {userId, id, title, body} = this.props.post
        return (
            <div>
                <div>User id: {userId}</div>
                <div>Id: {id}</div>
                <div>Title: {title}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {
    Post
};