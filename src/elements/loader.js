import React from 'react';
import s from '../styles/styles.module.scss';

import { Loader } from '../assets/icons';

const LoaderComponent = ({ loading }) => {
    return (
        <div className={loading && s.loader}>
            <div className={s.loader__wrap}>
                <p className={s.loader__wrap_title}>Loading...</p>
                <Loader />
            </div>
        </div>
    )
}

export default LoaderComponent;