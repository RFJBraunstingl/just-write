import React from "react";
import ResponsiveEditor from "./ResponsiveEditor";
import {mount, shallow, render} from "enzyme";
import {SMALL_SCREEN_WIDTH} from "../../Constants";

describe('ResponsiveEditor', () => {

    let editor

    beforeEach(() => {
        editor = mount(<ResponsiveEditor/>)
    })

    it('hides the Input if preview mode is active', () => {
        editor.setProps({
            previewModeActive: true
        })

        expect(editor.find('#markdownInputWrapper[hidden=true]'))
            .toHaveLength(1)
    })

    it('hides the divider in preview mode', () => {
        editor.setProps({
            previewModeActive: true
        })

        expect(editor.find('#responsiveEditorDivider[hidden=true]'))
            .toHaveLength(1)
    })

    it('only renders the markdown input on small screens when not in Preview mode', () => {
        // TODO
    })
})