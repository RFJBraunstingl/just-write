import React, {useState} from "react";
import {EditorProps} from "../../../types/EditorProps";
import MarkdownInput from "../../MarkdownInput";
import MarkdownPreview from "../../MarkdownPreview";
import styles from "./styles.module.css";
import ToggleEditModeButton, {Mode} from "./ToggleEditModeButton";

const FullScreenEditor = (props: EditorProps) => {

    const [isEditMode, setEditMode] = useState<boolean>(true)

    return (
        <>
            <div className={styles.Wrapper}>
                {isEditMode ?
                    <MarkdownInput {...props} /> :
                    <MarkdownPreview markdownText={props.text}/>}
            </div>
            <ToggleEditModeButton onModeChange={(newMode) => setEditMode(newMode === Mode.EDIT)} />
        </>
    )
}

export default FullScreenEditor