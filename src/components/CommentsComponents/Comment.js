import {Component} from "react";

class Comment extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        const {postId, id, name, email, body} = this.props.comment
        return (
            <div>
                <div>Post id: {postId}</div>
                <div>Id: {id}</div>
                <div>Name: {name}</div>
                <div>Email: {email}</div>
                <div>Body: {body}</div>
            </div>
        )
    }
}

export {
    Comment
};