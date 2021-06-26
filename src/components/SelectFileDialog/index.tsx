import React, {useState} from "react";
import useStorage from "../../hooks/useStorage";
import styles from './styles.module.css'

interface Props {
    onFileSelected: (name: string) => void;
    onCreateNewFile: () => void;
    onCancel: () => void;
}

const SelectFileDialog = ({onFileSelected, onCreateNewFile, onCancel}: Props) => {

    const storage = useStorage()
    const [files] = useState<string[]>(storage.getAllNames())

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