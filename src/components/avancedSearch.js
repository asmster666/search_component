import React, { useState, useEffect } from 'react';
import s from '../styles/styles.module.scss';

import { CustomSearchResult, InputComponent } from '../elements';

const AdvancedSearch = ({ goods, categories }) => {

    const [input, setInput] = useState('');
    const [start, setStart] = useState(false);

    useEffect(() => {
        if(input && input.length === 3) {
          setStart(true)
        } else {
          if(input.length < 3) {
            setStart(false)
          }
        }
    }, [ input, start ])

    return (
        <div className={s.search}>
          <div className={s.searchWrap}>
            <InputComponent 
              className={start ? s.searchWrap__input + ' ' + s.searchWrap__inputActive : s.searchWrap__input} 
              onChange={setInput} 
            />
            <CustomSearchResult 
              start={start} 
              searchParam={input} 
              goods={goods} 
              categories={categories} 
            />
            {/* optional on click show more items (advanced sorting for goods and categories) */}
            {/* <div className={s.searchWrap__expandBtn}>Show more results</div> */}
          </div>
        </div>
    )
}

export default AdvancedSearch;