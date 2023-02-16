import {useAppReducer} from "../../../hooks/useAppReducer";

import {catsActions} from "../../../reducers/catReducer";

const Cat = ({cat}) => {
    const [, dispatch] = useAppReducer(value => value.catsReducer);
    const {id, name} = cat;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <button onClick={()=>dispatch(catsActions.DELETE_BY_ID(id))}>Delete</button>
        </div>
    );
};

export {Cat};