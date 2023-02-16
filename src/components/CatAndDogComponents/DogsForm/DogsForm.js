import {useForm} from "react-hook-form";

import {useAppReducer} from "../../../hooks/useAppReducer";

import {dogsActions} from "../../../reducers";

const DogsForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppReducer(value => value.dogReducer);

    const save = (dog) => {
        dispatch(dogsActions.ADD(dog))
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <button>Save</button>
        </form>
    );
};

export {DogsForm};