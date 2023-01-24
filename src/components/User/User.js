import './User.css'

const User = ({user, setUserDetails}) => {
    const {id, name, surname} = user;
    return (
        <div>
            <div className="user">
                <h1>{id} - {name} {surname}</h1>
                <button onClick={()=> setUserDetails(user)} className={'user-button'}>Show all the information about this user</button>
            </div>
        </div>
    );
};

export {User};