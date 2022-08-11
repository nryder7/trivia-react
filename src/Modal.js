import React from 'react';
import { useGlobalContext } from './context';

const Modal = () => {
  const {
    index,
    numCorrect,
    setNumCorrect,
    setIsWaiting,
    setShowModal,
    setIndex,
  } = useGlobalContext();
  const handleClick = () => {
    setShowModal(false);
    setIndex(0);
    setNumCorrect(0);
    setIsWaiting(true);
  };
  return (
    <div className='modal'>
      <button className='close-btn' onClick={handleClick}>
        x
      </button>
      <h2>
        {((parseInt(numCorrect) / parseInt(index)) * 100).toFixed(0)}% correct
      </h2>
    </div>
  );
};

export default Modal;
