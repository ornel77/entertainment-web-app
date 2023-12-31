import { useState } from 'react';
import { setResult } from '../../store/inputSlice';
import './SearchBar.scss';
import { useDispatch } from 'react-redux';

const SearchBar = () => {
  const dispatch = useDispatch()
  const [inputValue, setInputValue] = useState("")

  const handleChange = (e) => {
    setInputValue(e.target.value)
  }
  
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(setResult(inputValue))
  }

  return (
    <section className='container search-container'>
      <form onSubmit={handleSubmit}>
        <label htmlFor='inputSearch'>
          <svg width='32' height='32' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'>
            <path
              d='M27.613 25.72 23.08 21.2a10.56 10.56 0 0 0 2.253-6.533C25.333 8.776 20.558 4 14.667 4S4 8.776 4 14.667c0 5.89 4.776 10.666 10.667 10.666A10.56 10.56 0 0 0 21.2 23.08l4.52 4.533a1.333 1.333 0 0 0 1.893 0 1.333 1.333 0 0 0 0-1.893ZM6.667 14.667a8 8 0 1 1 16 0 8 8 0 0 1-16 0Z'
              fill='#FFF'
            />
          </svg>
          <input
            type='text'
            name='inputSearch'
            id='inputSearch'
            placeholder='Search for movies or TV series'
            className='search-bar'
            onChange={handleChange}
          />
        </label>
      </form>
      <p> </p>
    </section>
  );
};

export default SearchBar;
