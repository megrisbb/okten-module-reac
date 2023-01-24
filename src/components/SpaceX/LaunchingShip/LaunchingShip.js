import './LaunchingShip.css'

const LaunchingShip = ({ship}) => {
    const {flight_number, mission_name, launch_year, links} = ship;
        return (
        <div className={'ships-info'}>
            <div>Flight number: {flight_number}</div>
            <div>Mission name:{mission_name}</div>
            <div>Launch year: {launch_year}</div>
            <img src={links.mission_patch_small} alt={mission_name}/>
        </div>
    );
};

export {LaunchingShip};