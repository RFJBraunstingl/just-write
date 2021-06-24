import React from 'react'
import SplitScreenEditor from "./SplitScreenEditor";
import FullScreenEditor from "./FullScreenEditor";
import {EditorProps} from "../../types/EditorProps";

const splitScreenThreshold = 992

const ResponsiveEditor: React.FC<EditorProps> = (props: EditorProps) => {

    const isSplitScreenMode = (window.innerWidth >= splitScreenThreshold)

    if (isSplitScreenMode) {
        return <SplitScreenEditor {...props} />
    } else {
        return <FullScreenEditor {...props} />
    }
}

export default ResponsiveEditor