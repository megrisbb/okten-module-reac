const Todo = ({todo}) => {
    const {id, userId, title, completed} = todo;
    return (
        <div>
            <div>Id: {id}</div>
            <div>User id: {userId}</div>
            <div>Title: {title}</div>
            <div>Completed: {completed}</div>
        </div>
    );
};

export {Todo};