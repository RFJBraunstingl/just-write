import React from "react";
import styles from './styles.module.css'
import useAvailableDocuments from "../../hooks/useAvailableDocuments";

interface Props {
    onFileSelected: (name: string) => void;
    onCreateNewFile: () => void;
    onCancel: () => void;
}

const SelectFileDialog = ({onFileSelected, onCreateNewFile, onCancel}: Props) => {

    const files = useAvailableDocuments()

    return (
        <dialog open>
            <ul className={styles.ListWrapper}>
                {files.map(file =>
                    <li className={styles.FileLink} onClick={() => onFileSelected(file)}>{file}</li>)
                }
            </ul>
            <button onClick={onCancel}>cancel</button>
            <button onClick={onCreateNewFile}>create new file</button>
        </dialog>
    )
}

export default SelectFileDialog