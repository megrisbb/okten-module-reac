const Cat = ({cat, dispatch}) => {
    const {id, name} = cat;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Name: {name}</div>
            <button onClick={()=>dispatch({type:'DELETE_CAT', payload: id})}>DELETE</button>
        </div>
    );
};

export {Cat};