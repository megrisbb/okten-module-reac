import css from './NotFoundePage.module.css'

const NotFoundPage = () => {
    return (
        <div>
            <div>
                <p className={css.error}>404</p>
                <p className={css.errorNf}>Not Found Page</p>
            </div>
        </div>
    );
};

export {NotFoundPage};