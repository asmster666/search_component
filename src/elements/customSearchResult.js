import React from 'react';
import s from '../styles/styles.module.scss';

import { CategoriesList, ProductsList } from '../elements';

const CustomSearchResult = ({ start, searchParam, goods, categories }) => {
    return (
        <div 
            id={'customSearchResult'}
            className={s.searchWrap__customList} 
            style={{display: start ? 'flex' : 'none'}}
        >
            <CategoriesList searchParam={searchParam} categories={categories} />
            <ProductsList searchParam={searchParam} goods={goods} />
        </div>
    )
}

export default CustomSearchResult;