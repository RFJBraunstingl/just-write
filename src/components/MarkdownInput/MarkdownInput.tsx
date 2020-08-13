import React from "react"
import PropTypes from 'prop-types'
import styles from './MarkdownInput.module.css'

interface Props {
    onTextChange: (newText: string) => void
}

const MarkdownInput: React.FC<Props> = ({onTextChange}: Props) => (
    <textarea
        className={styles.MarkdownInputTextArea}
        onChange={e => onTextChange(e.target.value)}/>
)

MarkdownInput.propTypes = {
    onTextChange: PropTypes.func.isRequired
}

export default MarkdownInput