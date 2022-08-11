import React from 'react';
import { useGlobalContext } from './context';

const SetupForm = () => {
  const { handleChange, handleSubmit, formAPI } = useGlobalContext();
  return (
    <section>
      <form className='setup-form' onSubmit={(e) => handleSubmit(e)}>
        <div className='form-control'>
          <label htmlFor='amount'>number of questions</label>
          <input
            className='form-input'
            type='text'
            name='amount'
            id='amount'
            value={formAPI.amount}
            onChange={handleChange}
          />
        </div>
        <div className='form-control'>
          <label htmlFor='category'>category</label>
          <select
            className='form-input'
            name='category'
            id='category'
            value={formAPI.category}
            onChange={handleChange}
          >
            <option value='history'>history</option>
            <option value='mythology'>mythology</option>
            <option value='politics'>politics</option>
            <option value='sports'>sports</option>
          </select>
        </div>
        <div className='form-control'>
          <label htmlFor='difficulty'>difficulty</label>
          <select
            className='form-input'
            name='difficulty'
            id='difficulty'
            value={formAPI.category}
            onChange={handleChange}
          >
            <option value='easy'>easy</option>
            <option value='medium'>medium</option>
            <option value='hard'>hard</option>
          </select>
        </div>
        <button className='submit-btn' onSubmit={(e) => handleSubmit(e)}>
          generate quiz
        </button>
      </form>
    </section>
  );
};

export default SetupForm;
