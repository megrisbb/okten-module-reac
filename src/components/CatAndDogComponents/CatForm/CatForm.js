import {useForm} from "react-hook-form";

import {useAppReducer} from "../../../hooks/useAppReducer";

import {catsActions} from "../../../reducers/catReducer";

const CatForm = () => {
    const {register, reset, handleSubmit} = useForm();

    const [, dispatch] = useAppReducer(value => value.catsReducer);

    const save = (cat) => {
        dispatch(catsActions.ADD(cat))
    };

    return (
        <form onSubmit={handleSubmit(save)}>
            <input type="text" placeholder={'name'} {...register('name')}/>
            <button>Save</button>
        </form>
    );
};

export {CatForm};