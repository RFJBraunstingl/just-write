import React from "react";
import {EditorProps} from "../EditorProps";
import styles from "./styles.module.css";
import MarkdownInput from "../../MarkdownInput/MarkdownInput";
import MarkdownPreview from "../../MarkdownPreview/MarkdownPreview";

const SplitScreenEditor = ({text, onTextUpdate}: EditorProps) => <div className={styles.Wrapper}>
    <div className={styles.TextInputWrapper}>
        <MarkdownInput onTextChange={onTextUpdate}/>
    </div>
    <div className={styles.Divider}/>
    <div className={styles.MarkdownPreviewWrapper}>
        <MarkdownPreview markdownText={text}/>
    </div>
</div>

export default SplitScreenEditor