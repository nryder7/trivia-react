import React from 'react';
import { useGlobalContext } from './context';

import SetupForm from './SetupForm';
import Loading from './Loading';
import Modal from './Modal';
import Question from './Question';

function App() {
  const { isLoading, isWaiting, showModal, showQuestion } = useGlobalContext();
  return (
    <main>
      {isWaiting && <SetupForm />}
      {isLoading && <Loading />}
      {showModal && <Modal />}
      {showQuestion && <Question />}
    </main>
  );
}

export default App;
