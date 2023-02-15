const Album = ({album}) => {

    const {id, userId, title} = album;

    return (
        <div>
            <div>
                <div>Id: {id}</div>
                <div>User id: {userId}</div>
                <div>Title: {title}</div>
            </div>
        </div>
    );
};

export {Album};