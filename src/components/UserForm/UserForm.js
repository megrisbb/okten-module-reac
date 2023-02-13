import {useForm} from "react-hook-form";

import {joiResolver} from "@hookform/resolvers/joi";
import {userValidator} from "../../validators";

import {usersService} from "../../sevices";

const UserForm = ({setUsers}) => {
    const {register, handleSubmit, reset, formState: {errors, isValid}, setValue} = useForm({
        mode: 'all',
        resolver: joiResolver(userValidator)
    });

    const submit = async (user) => {
        const {data} = await usersService.create(user)
        setUsers(prev => [...prev, data])
        reset()
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            {errors.name && <span>{errors.name.message}</span>}
            <input type="text" placeholder={'username'} {...register('username')}/>
            {errors.username && <span>{errors.username.message}</span>}
            <input type="text" placeholder={'email'} {...register('email')}/>
            {errors.email && <span>{errors.email.message}</span>}
            <input type="text" placeholder={'phone'} {...register('phone')}/>
            {errors.phone && <span>{errors.phone.message}</span>}
            <button>Save</button>
        </form>
    );
};

export {UserForm};