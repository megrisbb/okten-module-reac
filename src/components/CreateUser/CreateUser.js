import {useEffect, useState} from "react";
import {UserForm, Users} from "../index";

import {usersService} from "../../sevices";


const CreateUser = () => {
    const [users, setUsers] = useState([])

    useEffect(() => {
        usersService.getAll().then(({data}) => setUsers([...data]))
    }, [])

    return (
        <div>
            <UserForm setUsers={setUsers}/>
            <hr/>
            <Users users={users}/>
        </div>
    );
};

export {CreateUser};