import css from './HomePage.module.css'

const HomePage = () => {
    return (
        <div>
            <h1 className={css.helloOktenTitle}>Hello okten</h1>
            <div className={css.oktenLogo}>
            <img src="https://s3.eu-central-1.amazonaws.com/listmusor/production/137328/logo/big/616d321a0e868.png" alt="Okten Web"/>
            </div>
        </div>
    );
};

export {HomePage};