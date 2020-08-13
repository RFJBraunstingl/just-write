import React, {useState} from 'react'
import MarkdownInput from "../MarkdownInput/MarkdownInput";
import MarkdownPreview from "../MarkdownPreview/MarkdownPreview";
import styles from './ResponsiveEditor.module.css'
import PropTypes from 'prop-types'

interface Props {
    initialText?: string,
    previewModeActive?: boolean
}

const ResponsiveEditor: React.FC<Props> = (
    {
        initialText,
        previewModeActive
    }: Props) => {

    const [text, setText] = useState(initialText || '')

    return (
        <div
            className={styles.Wrapper}>
            <div id='markdownInputWrapper'
                 hidden={previewModeActive}
                 className={styles.TextInputWrapper}>
                <MarkdownInput onTextChange={setText}/>
            </div>
            <div id='responsiveEditorDivider'
                 hidden={previewModeActive}
                 className={styles.Divider}/>
            <div id='markdownPreviewWrapper'
                 className={styles.MarkdownPreviewWrapper}>
                <MarkdownPreview markdownText={text}/>
            </div>
        </div>
    )
}

ResponsiveEditor.propTypes = {
    initialText: PropTypes.string,
    previewModeActive: PropTypes.bool
}

export default ResponsiveEditor