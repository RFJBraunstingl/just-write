import React from "react"
import styles from './MarkdownInput.module.css'
import {EditorProps} from "../ResponsiveEditor/EditorProps";

const MarkdownInput: React.FC<EditorProps> = ({text, onTextUpdate}: EditorProps) => (
    <textarea
        className={styles.MarkdownInputTextArea}
        value={text || ''}
        onChange={e => onTextUpdate(e.target.value)}/>
)

export default MarkdownInput