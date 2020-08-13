import React from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import ResponsiveEditor from "./components/ResponsiveEditor/ResponsiveEditor";

function App() {
  return (
    <div className="App">
      <Header />
      <ResponsiveEditor />
      <Footer />
    </div>
  );
}

export default App;
