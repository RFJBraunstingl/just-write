import React, {useState} from 'react'
import PropTypes from 'prop-types'
import SplitScreenEditor from "./SplitScreenEditor";
import FullScreenEditor from "./FullScreenEditor";

interface Props {
    initialText?: string,
    previewModeActive?: boolean
}

const splitScreenThreshold = 992

const ResponsiveEditor: React.FC<Props> = (
    {
        initialText,
    }: Props) => {

    const [text, setText] = useState(initialText || '')

    const isSplitScreenMode = (window.innerWidth >= splitScreenThreshold)

    if (isSplitScreenMode) {
        return <SplitScreenEditor text={text} onTextUpdate={setText}/>
    } else {
        return <FullScreenEditor text={text} onTextUpdate={setText}/>
    }
}

ResponsiveEditor.propTypes = {
    initialText: PropTypes.string,
    previewModeActive: PropTypes.bool
}

export default ResponsiveEditor