import './User.css'

const User = ({user}) => {
    const {id, name, surname} = user;
    return (
        <div>
            <div className="user">
                <h1>{id} - {name} {surname}</h1>
            </div>
        </div>
    );
};

export {User};