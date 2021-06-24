import React from "react"
import styles from './styles.module.css'
import {EditorProps} from "../../types/EditorProps";

const MarkdownInput: React.FC<EditorProps> = ({text, onTextUpdate}: EditorProps) => (
    <textarea
        className={styles.MarkdownInputTextArea}
        value={text || ''}
        onChange={e => onTextUpdate(e.target.value)}/>
)

export default MarkdownInput