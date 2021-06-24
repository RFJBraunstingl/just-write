import React from "react";
import styles from "../ResponsiveEditor.module.css";
import MarkdownInput from "../../MarkdownInput/MarkdownInput";
import MarkdownPreview from "../../MarkdownPreview/MarkdownPreview";
import {EditorProps} from "../EditorProps";

const FullScreenEditor = ({text, onTextUpdate}: EditorProps) => (
    <div
        className={styles.Wrapper}>
        <div id='markdownInputWrapper'
             className={styles.TextInputWrapper}>
            <MarkdownInput onTextChange={onTextUpdate}/>
        </div>
        <div id='responsiveEditorDivider'
             className={styles.Divider}/>
        <div id='markdownPreviewWrapper'
             className={styles.MarkdownPreviewWrapper}>
            <MarkdownPreview markdownText={text}/>
        </div>
    </div>
)

export default FullScreenEditor