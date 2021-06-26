import React, {useState} from "react";
import styles from './styles.module.css'
import useAvailableDocuments from "../../hooks/useAvailableDocuments";

interface Props {
    path: string;
    onPathSelected: (path: string) => void;
    onRootPathSelected: () => void;
    onFileRename: (newName: string) => void;
}

const Breadcrumbs = (
    {
        path,
        onRootPathSelected,
        onFileRename
    }: Props) => {

    const [fileName, setFileName] = useState<string>(path)
    const [showFileNameDialog, setShowFileNameDialog] = useState<boolean>(false)
    const existingDocuments = useAvailableDocuments()

    const handleFileNameClicked = () => {
        setFileName(path)
        setShowFileNameDialog(true)
    }

    const fileExists = () => existingDocuments.find(doc => doc === fileName)

    return (
        <div className={styles.Wrapper}>
            <span className={styles.Path} onClick={onRootPathSelected}>All files</span>
            <span>/</span>
            <span className={styles.Path} onClick={handleFileNameClicked}>{path}</span>
            {showFileNameDialog && <dialog open className={styles.EditNameDialog}>
                <h3>enter a new name:</h3>
                <input type='text' value={fileName} onChange={e => setFileName(e.target.value)}/>
                {fileExists() ?
                    <span className={styles.Error}>a document with that name already exists!</span> : null
                }
                <button onClick={() => {
                    if (!fileExists()) {
                        onFileRename(fileName)
                    }
                    setShowFileNameDialog(false)
                }}>{fileExists() ? 'cancel' : 'save'}</button>
            </dialog>}
        </div>)
}

export default Breadcrumbs