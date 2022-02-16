import React from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';
import Header from './components/Header/Header';
import Shop from './components/Shop/Shop';

const App = () => {
  return (
    <>
      <ToastContainer />
      <Header />
      <Shop />
    </>
  );
};

export default App;
