import { text2md, isHeaderLine, countPoundsAtBeginning } from './Text2MarkdownConvertert'
import { isTaggedTemplateExpression, exportAllDeclaration } from '@babel/types';

describe('text2md()', () => {

    it('works on multiple lines', () => {
        expect(text2md(`
            # title
            ## subtitle
        `)).toBe(`<h1>title</h1><h2>subtitle</h2>`)
    })
})

/* TODO: examine what accounts as text - this does not work with dots */
describe('emphasis parsing', () => {

    it('wraps text lines in a paragraph', () => {
        expect(text2md('test')).toBe('<p>test</p>')
    })

    it('returns em for underscors', () => {
        expect(text2md('_test_'))
            .toBe('<p><em>test</em></p>')
    })

    it('returns em for asterisks', () => {
        expect(text2md('*test*'))
            .toBe('<p><em>test</em></p>')
    })

    it('parses emphasis in text', () => {
        expect(text2md('Emphasis, aka italics, with *asterisks* or _underscores_.'))
            .toBe('<p>Emphasis, aka italics, with <em>asterisks</em> or <em>underscores</em>.</p>')
    })

    it('handles double underscores as <strong>', () => {
        expect(text2md('__underscores__'))
            .toBe('<p><strong>underscores</strong></p>')
    })

    it('handles double asterisks as <strong>', () => {
        expect(text2md('**asterisks**'))
            .toBe('<p><strong>asterisks</strong></p>')
    })

    it('handles strong emphasis in text', () => {
        expect(text2md('Strong emphasis, aka bold, with **asterisks** or __underscores__.'))
            .toBe('<p>Strong emphasis, aka bold, with <strong>asterisks</strong> or <strong>underscores</strong>.</p>')
    })

    it('handles combined text', () => {
        expect(text2md('Combined emphasis with **asterisks and _underscores_**.'))
            .toBe('<p>Combined emphasis with <strong>asterisks and <em>underscores</em></strong>.</p>')
    })

    it('handles strikethrough with tildes ~', () => {
        expect(text2md('Strikethrough uses two tildes. ~~Scratch this~~'))
        .toBe('<p>Strikethrough uses two tildes. <del>Scratch this</del></p>')
    })
})

describe('isHeaderLine()', () => {

    it('returns true for # title', () => {
        expect(isHeaderLine('# title')).toBe(true)
    })

    it('returns true for h2', () => {
        expect(isHeaderLine('## title')).toBe(true)
    })

    it('returns true for h3', () => {
        expect(isHeaderLine('### title')).toBe(true)
    })

    it('returns true for h4', () => {
        expect(isHeaderLine('#### title')).toBe(true)
    })

    it('returns true for h5', () => {
        expect(isHeaderLine('##### title')).toBe(true)
    })

    it('returns true for h6', () => {
        expect(isHeaderLine('###### title')).toBe(true)
    })

    it('returns false for random string', () => {
        expect(isHeaderLine('asdf')).toBe(false)
    })

    it('returns false for seven #', () => {
        expect(isHeaderLine('####### seven'))
            .toBe(false)
    })
})

describe('header parsing', () => {

    it('returns a h1 element for #', () => {
        expect(text2md('# title')).toBe('<h1>title</h1>')
    })

    it('returns a h2 element for ##', () => {
        expect(text2md('## a subtitle'))
            .toBe(`<h2>a subtitle</h2>`)
    })

    it('returns a h3 element for ###', () => {
        expect(text2md('### subsubtitle'))
            .toBe(`<h3>subsubtitle</h3>`)
    })

    it('returns a h4 element for ####', () => {
        expect(text2md('#### subsubtitle'))
            .toBe(`<h4>subsubtitle</h4>`)
    })

    it('returns a h5 element for #####', () => {
        expect(text2md('##### subsubtitle'))
            .toBe(`<h5>subsubtitle</h5>`)
    })

    it('returns a h6 element for ######', () => {
        expect(text2md('###### subsubtitle'))
            .toBe(`<h6>subsubtitle</h6>`)
    })
})

describe('countPoundsAtBeginning', () => {

    it('returns 0 for test', () => {
        expect(countPoundsAtBeginning('test'))
            .toBe(0)
    })

    it('returns 1 for #test', () => {
        expect(countPoundsAtBeginning('#test'))
            .toBe(1)
    })

    it('returns 2 for ##test', () => {
        expect(countPoundsAtBeginning('##test'))
            .toBe(2)
    })

    it('returns 3 for ###test', () => {
        expect(countPoundsAtBeginning('###test'))
            .toBe(3)
    })
})