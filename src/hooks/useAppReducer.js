import {useContext} from "react";
import {StateContext} from "../components/hoc/StateProvider";


const useAppReducer = (item) => item(useContext(StateContext))

export {
    useAppReducer
}