import React from "react";
import "./App.css";
import Header from './components/Header/Header'
import TextEditArea from "./components/TestEditText/TestEditText"

function App() {

  const loadInitialText = () => {
    return 'test lol'
  }

  return <div className="App">
    <Header />
    <TextEditArea initialText={loadInitialText()} />
  </div>;
}

export default App;
