import React, { useState } from 'react';

const InputComponent = ({ onChange, className }) => {

    const [inputVal, setInputVal] = useState('');

    const handleInputChange = (event) => {
        const { value } = event.target;

        setInputVal(value)
        typeof onChange === 'function' && onChange(value.toLowerCase())
    }

    return (
        <input 
            name={'advance_input'}
            type={'text'} 
            className={className}
            value={inputVal} 
            onChange={handleInputChange}
            placeholder={'Start your search...'} 
        />
    )
}

export default InputComponent;