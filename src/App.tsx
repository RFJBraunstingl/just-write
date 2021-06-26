import React, {useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResponsiveEditor from "./components/ResponsiveEditor";
import {LOCAL_STORAGE_KEY_TEXT} from './Constants'
import Breadcrumbs from "./components/Breadcrumbs";

function App() {

    const [path, setPath] = useState<string>('New file')
    const [text, setText] = useState<string>('')

    // load initial text
    useEffect(() => {
        const text = localStorage.getItem(LOCAL_STORAGE_KEY_TEXT + path)
        if (text) {
            setText(text)
        }
    }, [setText])

    // store updates
    useEffect(() => localStorage.setItem(LOCAL_STORAGE_KEY_TEXT + path, text), [text])

    const handleFileRename = (newName: string) => {
        setPath(newName)
    }

    return (
        <div className="App">
            <Header/>
            <Breadcrumbs path={path} onPathSelected={setPath} onFileRename={handleFileRename} />
            <ResponsiveEditor text={text} onTextUpdate={setText}/>
            <Footer/>
        </div>
    );
}

export default App;
