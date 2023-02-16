import {createContext, useReducer} from "react";

import {initialCats, initialDogs, newCatReducer, newDogReducer} from "../../reducers";



const StateContext = createContext(null);
const StateProvider = ({children}) => {

    const reducers = {
        catsReducer: useReducer(newCatReducer, null, initialCats),
        dogReducer: useReducer(newDogReducer, null, initialDogs)
    }

    return (
        <StateContext.Provider value={reducers}>
            {children}
        </StateContext.Provider>
    );
};

export {
    StateProvider,
    StateContext
};