import React, {useState} from "react";
import {EditorProps} from "../EditorProps";
import MarkdownInput from "../../MarkdownInput/MarkdownInput";
import MarkdownPreview from "../../MarkdownPreview/MarkdownPreview";
import styles from "./styles.module.css";
import ToggleEditModeButton from "./ToggleEditModeButton";

const FullScreenEditor = ({text, onTextUpdate}: EditorProps) => {

    const [isEditMode, setEditMode] = useState<boolean>(true)
    return (
        <>
            <div className={styles.Wrapper}>
                {isEditMode ?
                    <MarkdownInput onTextChange={onTextUpdate}/> :
                    <MarkdownPreview markdownText={text}/>}
            </div>
            <ToggleEditModeButton />
        </>
    )
}

export default FullScreenEditor