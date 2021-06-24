import React, {useState} from "react";
import {EditorProps} from "../EditorProps";
import MarkdownInput from "../../MarkdownInput/MarkdownInput";
import MarkdownPreview from "../../MarkdownPreview/MarkdownPreview";

const FullScreenEditor = ({text, onTextUpdate}: EditorProps) => {

    const [isEditMode, setEditMode] = useState<boolean>(true)

    if (isEditMode) {
        return <MarkdownInput onTextChange={onTextUpdate}/>
    } else {
        return <MarkdownPreview markdownText={text}/>
    }
}

export default FullScreenEditor