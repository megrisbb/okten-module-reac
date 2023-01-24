import {useEffect, useState} from "react";
import {userService} from "../../services/userService";
import {UserDetails} from "../UserDetails/UserDetails";
import {User} from "../User/User";

import './Users.css'

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
            {userDetails && <UserDetails key={userDetails} userDetails={userDetails}/>}

            <div className={'user-body'}>
                {users.map(user => <User key={user.id} user={user} setUserDetails={setUserDetails}/>)}
            </div>

        </div>
    );
};

export {Users};