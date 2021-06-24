import React from "react";
import {EditorProps} from "../../../types/EditorProps";
import styles from "./styles.module.css";
import MarkdownInput from "../../MarkdownInput";
import MarkdownPreview from "../../MarkdownPreview";

const SplitScreenEditor = (props: EditorProps) => <div className={styles.Wrapper}>
    <div className={styles.Textbox}>
        <MarkdownInput {...props} />
    </div>
    <div className={styles.Divider}/>
    <div className={styles.Textbox}>
        <MarkdownPreview markdownText={props.text}/>
    </div>
</div>

export default SplitScreenEditor