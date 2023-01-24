import {Users} from "./components/Users/Users";
import {LaunchingShips} from "./components/SpaceX/LaunchingShips/LaunchingShips";

import './App.css'


const App = () => {
    return (
        <div className={'body'}>
            <Users/>
            <LaunchingShips/>
        </div>
    );
};

export {App};