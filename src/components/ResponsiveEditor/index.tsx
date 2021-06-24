import React, {useState} from 'react'
import PropTypes from 'prop-types'
import useWindowDimensions from "../../hooks/useWindowDimensions";
import SplitScreenEditor from "./SplitScreenEditor";
import FullScreenEditor from "./FullScreenEditor";

interface Props {
    initialText?: string,
    previewModeActive?: boolean
}

const splitScreenThreshold = 1200 // px

const ResponsiveEditor: React.FC<Props> = (
    {
        initialText,
    }: Props) => {

    const {width} = useWindowDimensions()
    const isSplitScreenMode = width < splitScreenThreshold

    const [text, setText] = useState(initialText || '')

    if (isSplitScreenMode) {
        return <SplitScreenEditor text={text} onTextUpdate={setText} />
    } else {
        return <FullScreenEditor text={text} onTextUpdate={setText}/>
    }
}

ResponsiveEditor.propTypes = {
    initialText: PropTypes.string,
    previewModeActive: PropTypes.bool
}

export default ResponsiveEditor