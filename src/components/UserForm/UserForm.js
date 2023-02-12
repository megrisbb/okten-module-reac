import {useForm} from "react-hook-form";

const UserForm = () => {
    const {register, handleSubmit, reset, formState:{errors, isValid}, setValue} = useForm({mode:'all'})

    const submit = (data) => {
        console.log(data)
    };

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'Name'} {...register('name')}/>
            <input type="text" placeholder={'Username'} {...register('username')}/>
            <input type="text" placeholder={'Email'} {...register('email')}/>
            <input type="text" placeholder={'Phone'} {...register('phone')}/>
            <button>Save</button>
        </form>
    );
};

export {UserForm};