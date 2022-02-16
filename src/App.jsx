import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header/Header";
import Shop from "./components/Shop/Shop";
import "react-toastify/dist/ReactToastify.min.css";

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
