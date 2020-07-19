import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JustWriteArea from "./components/TestEditText/JustWriteArea";
import { LOCAL_STORAGE_KEY_TEXT } from "./Constants";
import Footer from "./components/Footer/Footer";

function App() {
  const loadInitialText = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY_TEXT) || "";
  };

  return (
    <div className="App">
      <Header />
      <JustWriteArea initialText={loadInitialText()} />
      <Footer />
    </div>
  );
}

export default App;
