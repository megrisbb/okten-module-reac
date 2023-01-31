const Car = ({car, setUpdateCar}) => {
    const {id, brand, price, year} = car;
    return (
        <div>
            <div>Id: {id}</div>
            <div>Brand: {brand}</div>
            <div>Price: {price}</div>
            <div>Year: {year}</div>
            <button onClick={() => setUpdateCar(car)}>update</button>
            <button>delete</button>
        </div>
    );
};

export {Car};