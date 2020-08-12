import React from 'react'
import marked from 'marked'
import styles from 'Previewer.module.css'
import PropTypes from 'prop-types'

interface Props {
    markdownText: string
}

const Previewer: React.FC<Props> = ({ markdownText }) => (
    <div
        className={styles.Previewer}
        dangerouslySetInnerHTML={{ __html: marked(markdownText) }}
    />
)

Previewer.propTypes = {
    markdownText: PropTypes.string.isRequired
}

export default Previewer