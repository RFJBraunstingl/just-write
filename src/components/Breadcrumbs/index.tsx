import React, {useState} from "react";
import styles from './styles.module.css'

interface Props {
    path: string;
    onPathSelected: (path: string) => void;
    onRootPathSelected?: () => void;
    onFileRename: (newName: string) => void;
}

const Breadcrumbs = (
    {
        path,
        // TODO
        onRootPathSelected = () => {},
        onFileRename
    }: Props) => {

    const [fileName, setFileName] = useState<string>(path)
    const [showFileNameDialog, setShowFileNameDialog] = useState<boolean>(false)

    const handleFileNameClicked = () => {
        setFileName(path)
        setShowFileNameDialog(true)
    }

    return (
        <div className={styles.Wrapper}>
            <span className={styles.Path} onClick={onRootPathSelected}>All files</span>
            <span>/</span>
            <span className={styles.Path} onClick={handleFileNameClicked}>{path}</span>
            {showFileNameDialog && <dialog open className={styles.EditNameDialog}>
                <h3>enter a new name:</h3>
                <input type='text' value={fileName} onChange={e => setFileName(e.target.value)}/>
                <button onClick={() => {
                    onFileRename(fileName)
                    setShowFileNameDialog(false)
                }}>save</button>
            </dialog>}
        </div>)
}

export default Breadcrumbs