import React, {useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResponsiveEditor from "./components/ResponsiveEditor";
import {LOCAL_STORAGE_KEY_TEXT} from './Constants'

function App() {

    const [text, setText] = useState<string>('')

    // load initial text
    useEffect(() => {
        const text = localStorage.getItem(LOCAL_STORAGE_KEY_TEXT)
        if (text) {
            setText(text)
        }
    }, [setText])

    // store updates
    useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY_TEXT, text), [text])

    return (
        <div className="App">
            <Header/>
            <ResponsiveEditor text={text} onTextUpdate={setText}/>
            <Footer/>
        </div>
    );
}

export default App;
