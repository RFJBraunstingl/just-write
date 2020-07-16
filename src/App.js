import React from "react";
import "./App.css";
import Header from './components/Header/Header'
import TextEditArea from "./components/TestEditText/TestEditText"
import { LOCAL_STORAGE_KEY_TEXT } from "./Constants";
import Footer from "./components/Footer/Footer";

function App() {

  const loadInitialText = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY_TEXT) || ''
  }

  return <div className="App">
    <Header />
    <TextEditArea initialText={loadInitialText()} />
    <Footer />
  </div>;
}

export default App;
