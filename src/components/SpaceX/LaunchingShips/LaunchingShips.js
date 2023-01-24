import {useEffect, useState} from "react";
import {LaunchingShip} from "../LaunchingShip/LaunchingShip";
import './LaunchingShips.css'

const LaunchingShips = () => {
    const [ships, setShips] = useState([])

    useEffect(() => {
        fetch('https://api.spacexdata.com/v3/launches/')
            .then(value => value.json())
            .then(value => setShips(value));
    }, [])

    return (
        <div>
            <h1 className={'ships-title'}>SpaceX - All missile launches</h1>

            <div className={'ships-body'}>
                {ships
                    .filter(value => value.launch_year !== '2020')
                    .map(ship => <LaunchingShip key={ship.flight_number} ship={ship}/>)
                }
            </div>
        </div>
    );
};

export {LaunchingShips};