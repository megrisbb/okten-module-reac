import './Simpsons.css';
const Simpsons = (props) => {
    let {itemName, picture, age, info} = props;
    return (
        <div className='simpsonsCard'>
            <h2>{itemName}</h2>
            <p>{age}</p>
            <p className={'simpsInfo'}>{info}</p>
            <img className='simpsImg' src={picture} alt={itemName}/>
        </div>
    );
};

export {Simpsons};