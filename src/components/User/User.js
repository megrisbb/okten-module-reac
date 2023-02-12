const User = ({user}) => {
    const {id, name, username, email, phone} = user;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <div>Username: {username}</div>
            <div>Email: {email}</div>
            <div>Phone: {phone}</div>
        </div>
    );
};

export {User};