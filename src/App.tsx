import React, {useEffect, useState} from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ResponsiveEditor from "./components/ResponsiveEditor";
import Breadcrumbs from "./components/Breadcrumbs";
import SelectFileDialog from "./components/SelectFileDialog";
import useSaveContent from "./hooks/useSaveContent";
import useReadContent from "./hooks/useReadContent";
import useAvailableDocuments from "./hooks/useAvailableDocuments";
import useSetAvailableDocuments from "./hooks/useSetAvailableDocuments";

function App() {

    const [availableDocuments, setAvailableDocuments] = useState<string[]>(useAvailableDocuments())
    const [path, setPath] = useState<string>('New file')
    const [text, setText] = useState<string>('')
    const [showAllFilesDialog, setShowAllFilesDialog] = useState<boolean>(false)
    const saveContent = useSaveContent()
    const readContent = useReadContent()
    const updateAvailableDocuments = useSetAvailableDocuments()

    // load initial text
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => setText(readContent(path) || ''), [path, setText])

    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => updateAvailableDocuments(availableDocuments), [availableDocuments])

    // store updates
    // eslint-disable-next-line react-hooks/exhaustive-deps
    useEffect(() => saveContent(path, text), [text])

    const handleFileRename = (newName: string) => {
        const oldName = path;

        saveContent(oldName, null)
        saveContent(newName, text)
        setAvailableDocuments(prevState =>
            [...prevState, newName].filter(n => n !== oldName))

        setPath(newName)
    }

    const handleCreateFile = () => {
        setShowAllFilesDialog(false)
        setPath('New file')
        setText('')
    }

    const handleFileSelected = (selectedFile: string) => {
        setShowAllFilesDialog(false)
        setPath(selectedFile)
        setText(readContent(selectedFile) || '')
    }

    return (
        <div className="App">
            {showAllFilesDialog &&
            <SelectFileDialog
                onFileSelected={handleFileSelected}
                onCreateNewFile={handleCreateFile}
                onCancel={() => setShowAllFilesDialog(false)}/>
            }
            <Header/>
            <Breadcrumbs
                path={path}
                onPathSelected={setPath}
                onFileRename={handleFileRename}
                onRootPathSelected={() => setShowAllFilesDialog(!showAllFilesDialog)}/>
            <ResponsiveEditor text={text} onTextUpdate={setText}/>
            <Footer/>
        </div>
    );
}

export default App