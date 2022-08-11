import axios from 'axios';
import React, { useState, useContext, useEffect } from 'react';

const categoryTable = {
  sports: 21,
  history: 23,
  politics: 24,
  mythology: 20,
};

const API_ENDPOINT = 'https://opentdb.com/api.php?';

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isWaiting, setIsWaiting] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [showQuestion, setShowQuestion] = useState(false);
  const [questions, setQuestions] = useState([]);
  const [index, setIndex] = useState(0);
  const [numCorrect, setNumCorrect] = useState(0);
  const [formAPI, setFormAPI] = useState({
    amount: 10,
    category: 'sports',
    difficulty: 'easy',
  });

  const fetchData = async () => {
    const { amount, category, difficulty } = formAPI;
    const categoryId = categoryTable[category];
    const url = `${API_ENDPOINT}amount=${amount}&category=${categoryId}&difficulty=${difficulty}&type=multiple`;
    setIsLoading(true);
    setIsError(false);
    setIsWaiting(false);
    setShowQuestion(false);
    const data = await axios(url).catch((err) => {
      setIsError(true);
      setIsLoading(false);
      setIsWaiting(true);
      console.log(err);
    });
    setQuestions(data.data.results);
    setIsLoading(false);
    setShowQuestion(true);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
  };
  const handleChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setFormAPI((curr) => {
      return { ...curr, [name]: value };
    });
  };
  const handleClickAnswer = (e) => {
    setIndex((curr) => curr + 1);
  };

  return (
    <AppContext.Provider
      value={{
        isWaiting,
        setIsWaiting,
        isLoading,
        setIsLoading,
        isError,
        setIsError,
        questions,
        setQuestions,
        showModal,
        setShowModal,
        showQuestion,
        setShowQuestion,
        index,
        setIndex,
        numCorrect,
        setNumCorrect,
        handleChange,
        handleClickAnswer,
        handleSubmit,
        formAPI,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
