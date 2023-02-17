import React, { useEffect, useState } from 'react';
import s from '../styles/listItems.module.scss';

const CategoriesList = ({ searchParam, categories }) => {

    // not useState cause it's asynchronious
    let startSortedArr = [], 
        endSortedArr = [];
    const [filterArray, setFilterArray] = useState([]);
    const [emptyFilterArray, setEmptyFilterArray] = useState(false);

    const handleFillingArray = (array, newItem) => {
        array.push(newItem)
    }

    useEffect(() => {
        if(searchParam !== '' && searchParam.length >= 3 && categories) {
            // eslint-disable-next-line
            categories.map(category => {
                let item = category.toString().toLowerCase();

                // array of categories what starts with input
                item.startsWith(searchParam) && handleFillingArray(startSortedArr, category)
                // array of categories what includes input
                item.includes(searchParam) && !item.startsWith(searchParam) && handleFillingArray(endSortedArr, category)
            })

            // no categories found
            if(startSortedArr.length === 0 && endSortedArr.length === 0) {
                setEmptyFilterArray(true)
                setFilterArray([])
            } 

            // join arrays
            setFilterArray(startSortedArr.filter((item, ind) => startSortedArr.indexOf(item) === ind).concat(endSortedArr.filter((item, ind) => endSortedArr.indexOf(item) === ind)))

            // empty arrays for next search

            // eslint-disable-next-line
            startSortedArr = []
            // eslint-disable-next-line
            endSortedArr = []
        }

    }, [searchParam, categories])

    useEffect(() => {
        // empty arrays when search param is shorter than 3 chars
        if(searchParam && searchParam.length < 3)  {
            // eslint-disable-next-line
            startSortedArr = []
            // eslint-disable-next-line
            endSortedArr = []
        }
    }, [searchParam])

    const template = (array, classN) => {
        return array && array.map((item, key) => <p key={`category_${key}`} className={classN}>{item}</p>)
    }

    return (
        <div className={searchParam !== '' ? s.categories : s.categoriesTable}>
            { 
                (filterArray && filterArray.length !== 0) ? 
                    template(filterArray, s.categories__item) : 
                        ( filterArray.length === 0 && emptyFilterArray ? <div id={'emptyCategories'}></div> : template(categories, s.categoriesTable__item) ) 
            }
        </div>
    )
}

export default CategoriesList;