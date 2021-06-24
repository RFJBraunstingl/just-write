import React from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResponsiveEditor from "./components/ResponsiveEditor";

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
