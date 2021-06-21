import React from 'react'
import marked from 'marked'
import styles from './MarkdownPreview.module.css'
import PropTypes from 'prop-types'

interface Props {
    markdownText: string
}

const MarkdownPreview: React.FC<Props> = ({ markdownText }: Props) => (
    <div
        className={styles.Previewer}
        dangerouslySetInnerHTML={{ __html: marked(markdownText) }}
    />
)

MarkdownPreview.propTypes = {
    markdownText: PropTypes.string.isRequired
}

export default MarkdownPreview
