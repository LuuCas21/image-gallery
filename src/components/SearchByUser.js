import { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

import './SearchByUser.css';

const SearchByUser = (props) => {
    const [userInput, setUserInput] = useState('');

    const getSearchInput = (event) => {
        setUserInput(event.target.value.toLowerCase());
    };

    const submitHandler = (event) => {
        event.preventDefault();
        props.onGetUserName(userInput);
    }

    const iconStyles = {
        color: '#fff',
        cursor: 'pointer',
        margin: '0',
        fontSize: '15px'
    }

    return (
        <div className='search__user_input'>
            <form onSubmit={submitHandler}>
            <input tpe='text' placeholder='Search  for images' onChange={getSearchInput} />
            <button type='submit'>{<FaSearch style={iconStyles}/>}</button>
            </form>
        </div>
    );
}

export default SearchByUser;
