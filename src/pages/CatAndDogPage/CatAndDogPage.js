import {CatForm, Cats, Dogs, DogsForm} from "../../components";

import css from './CatAndDogPage.module.css'

const CatAndDogPage = () => {
    return (
        <div className={css.Animals}>

            <div className={css.Cats}>
                <h2>Cats</h2>
                <CatForm/>
                <hr/>
                <Cats/>
            </div>


            <div className={css.Dogs}>
                <h2>Dogs</h2>
                <DogsForm/>
                <hr/>
                <Dogs/>
            </div>

        </div>
    );
};

export {CatAndDogPage};