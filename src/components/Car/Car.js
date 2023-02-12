import {carService} from "../../services";

const Car = ({car, setUpdateCar, setCars}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button onClick={() => {
                carService.deleteById(id).then(async () => {
                    const {data} = await carService.getAll();
                    setCars([...data])
                }).catch(err => console.log(err))
            }}>delete</button>
        </div>
    );
};

export {Car};