import s from '../../styles/styles.module.scss';

export const Loader = (props) => {
    return (
        <svg {...props} className={s.loader__spinner} width="65px" height="65px" viewBox="0 0 66 66" xmlns="http://www.w3.org/2000/svg">
            <circle className={s.loader__path} fill="none" strokeWidth="6" strokeLinecap="round" cx="33" cy="33" r="30"></circle>
        </svg>
    )
}