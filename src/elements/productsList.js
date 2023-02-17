import React, { useState, useEffect } from 'react';
import s from '../styles/listItems.module.scss';

const ProductsList = ({ searchParam, goods }) => {
    // not useState cause it's asynchronious
    let startSortedArray = [], 
        endSortedArray = [];
    const [filterArray, setFilterArray] = useState([]);
    const [emptyFilterArray, setEmptyFilterArray] = useState(false);

    const handleFillingArray = (array, newItem) => {
        array.push(newItem)
    }

    useEffect(() => {
        if(searchParam !== '' && searchParam.length >= 3 && goods) {
            // eslint-disable-next-line
            goods.map(good => {
                let item = good.title.toString().toLowerCase();

                // array of goods what starts with input
                item.startsWith(searchParam) && handleFillingArray(startSortedArray, good)
                // array of goods what includes input
                item.includes(searchParam) && !item.startsWith(searchParam) && handleFillingArray(endSortedArray, good)
            })

            // no goods found
            if(startSortedArray.length === 0 && endSortedArray.length === 0) {
                setEmptyFilterArray(true)
                setFilterArray([])
            } 

            // join arrays
            setFilterArray(startSortedArray.filter((item, ind) => startSortedArray.indexOf(item) === ind).concat(endSortedArray.filter((item, ind) => endSortedArray.indexOf(item) === ind)))

            // empty arrays for next search
            
            // eslint-disable-next-line
            startSortedArray = []
            // eslint-disable-next-line
            endSortedArray = []
        }

    }, [searchParam, goods])

    useEffect(() => {
        // empty arrays when search param is shorter than 3 chars
        if(searchParam && searchParam.length < 3)  {
            // eslint-disable-next-line
            startSortedArray = []
            // eslint-disable-next-line
            endSortedArray = []
        }
    }, [searchParam])

    const template = (items) => {
        return items && items.map(item => {
            return (
                <div key={item.id} className={s.products__item}>
                    <div className={s.products__item_img}>
                        <img src={item.images[0]} alt={'product'} />
                    </div>
                    <div className={s.products__item_info}>
                        <p>{item.title}</p>
                        <p className={s.products__item_infoPrice}>{item.price} $</p>
                        <p style={{overflow: 'hidden', maxHeight: '36px', textOverflow: 'ellipsis'}}>{item.description}</p>
                    </div>
                </div>
            )
        })
    }

    const templateTable = (items) => {
        return items && items.map(item => {
            return (
                <div key={item.id} className={s.productsTable__item}>
                    <span>{item.title}</span> 
                    <span style={{ marginLeft: '15px' }}><b>{item.price} $</b></span>
                </div>
            )
        })
    }

    return (
        <div className={searchParam !== '' ? s.products : s.productsTable}>
            { 
                (filterArray && filterArray.length !== 0) ? 
                    template(filterArray) : 
                        ( filterArray.length === 0 && emptyFilterArray ? <div id={'emptyProducts'}></div> : templateTable(goods) ) 
            }
        </div>
    )
}

export default ProductsList;