import './Users.css'
import {User} from "../User/User";
import {useEffect, useState} from "react";
import {userService} from "../../services/userService";

const Users = () => {
    const [users, setUsers] = useState([])

    const [userDetails, setUserDetails] = useState(null)

    useEffect(() => {
        userService.getAll()
            .then(value => value.data)
            .then(value => setUsers([...value]))
    }, [])

    return (
        <div>
            <h1 className={'user-details'}>User Details:</h1>
            {userDetails && <div>Email: {userDetails.email} <hr/> Phone: {userDetails.phone}</div> }
            <div className={'user-body'}>
                {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
            </div>
        </div>
    );
};

export {Users};