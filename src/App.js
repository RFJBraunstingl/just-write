import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import JustWriteArea from "./components/TestEditText/JustWriteArea";
import { LOCAL_STORAGE_KEY_TEXT, LOCAL_STORAGE_KEY_MODE } from "./Constants";
import Footer from "./components/Footer/Footer";

function App() {
  const [mode, setMode] = useState("SIDE_BY_SIDE");

  const loadInitialText = () => {
    return localStorage.getItem(LOCAL_STORAGE_KEY_TEXT) || "";
  };

  return (
    <div className="App">
      <Header onViewModeChanged={setMode} />
      <JustWriteArea initialText={loadInitialText()} viewMode={mode} />
      <Footer />
    </div>
  );
}

export default App;
