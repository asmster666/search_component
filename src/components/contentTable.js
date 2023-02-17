import React, { useState } from 'react';
import s from '../styles/styles.module.scss';

import { ProductsList, CategoriesList } from '../elements';

const ContentTables = ({ goods, categories }) => {

    const [showCategories, setShowCategories] = useState(false);
    const [showProducts, setShowProducts] = useState(false);

    const showCategoriesFn = () => {
        setShowCategories(!showCategories)
    }

    const showProductsFn = () => {
        setShowProducts(!showProducts)
    }

    return (
        <div className={s.contentTables}>
            <div className={s.contentTables__wrap}>
                <p 
                    className={showCategories ? s.contentTables__wrap_section + ' ' + s.contentTables__wrap_sectionOpen : s.contentTables__wrap_section}
                    onClick={showCategoriesFn}
                >Categories</p>
                <div className={showCategories ? s.contentTables__wrap_table + ' ' + s.contentTables__wrap_tableOpen : s.contentTables__wrap_table}>
                    <CategoriesList searchParam={''} categories={categories} />
                </div>
            </div>

            <div className={s.contentTables__wrap}>
                <p 
                    className={showProducts ? s.contentTables__wrap_section + ' ' + s.contentTables__wrap_sectionOpen : s.contentTables__wrap_section}
                    onClick={showProductsFn}
                >Products</p>
                <div className={showProducts ? s.contentTables__wrap_table + ' ' + s.contentTables__wrap_tableOpen : s.contentTables__wrap_table}>
                    <ProductsList searchParam={''} goods={goods} />
                </div>
            </div>
        </div>
    )
}

export default ContentTables;