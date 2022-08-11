import React from 'react';
import { useGlobalContext } from './context';

const Question = () => {
  const {
    questions,
    index,
    setIndex,
    handleClickAnswer,
    setNumCorrect,
    numCorrect,
    setShowModal,
    setShowQuestion,
  } = useGlobalContext();
  const { question, correct_answer, incorrect_answers } = questions[index];

  let randomAnswers = [...incorrect_answers];
  const randomNum = Math.floor(Math.random) * 4;
  randomAnswers.splice(randomNum, 0, correct_answer);

  const handleIndex = () => {
    if (index === questions.length - 1) {
      setShowQuestion(false);
      setShowModal(true);
    }
    setIndex((curr) => curr + 1);
  };

  const handleClick = (e) => {
    if (e.target.textContent === correct_answer) {
      setNumCorrect((curr) => curr + 1);
    }
    handleIndex();
  };
  return (
    <section className='quiz'>
      {index > 0 && (
        <span>
          {numCorrect} correct <br />
        </span>
      )}
      <span>Question {index + 1}</span>
      <h2 dangerouslySetInnerHTML={{ __html: question }}></h2>
      {randomAnswers.map((answer) => (
        <button
          key={answer}
          className='answer-btn'
          onClick={(e) => handleClick(e)}
          dangerouslySetInnerHTML={{ __html: answer }}
        ></button>
      ))}
      <button className='next-question' onClick={handleIndex}>
        skip question
      </button>
    </section>
  );
};

export default Question;
