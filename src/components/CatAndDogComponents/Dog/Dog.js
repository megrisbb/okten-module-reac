import {useAppReducer} from "../../../hooks/useAppReducer";

import {dogsActions} from "../../../reducers";

const Dog = ({dog}) => {
    const [, dispatch] = useAppReducer(value => value.dogReducer);
    const {id, name} = dog;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <button onClick={()=>dispatch(dogsActions.DELETE_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {Dog};