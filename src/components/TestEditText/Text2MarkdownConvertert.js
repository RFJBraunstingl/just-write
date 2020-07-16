export const text2md = (text) => {
    let result = ''

    splitByLine(text)
        .forEach(line => result += (parseLine(line)))

    return result
}

export const splitByLine = (text) => {
    return text.split(/\r?\n/)
        .map(line => line.trim())
        .filter(line => line.length > 0)
}

export const parseLine = (line) => {
    if (isHeaderLine(line))
        return parseHeaderLine(line)

    return parseTextLine(line)
}

export const isHeaderLine = (line) => {
    return /^#{1,6} .*/.test(line)
}

export const parseHeaderLine = (line) => {
    const numOfPunds = countPoundsAtBeginning(line)
    const stripped = stripPoundsAtBeginning(line)
    return `<h${numOfPunds}>${stripped}</h${numOfPunds}>`
}

export const countPoundsAtBeginning =
    (line) => line.lastIndexOf('#') + 1

// + 1 for removing the space between pounds and text
export const stripPoundsAtBeginning =
    (input) => input.substring(countPoundsAtBeginning(input) + 1)

const parseTextLine = (line) => {
    return line
        /* replace double underscors as strong */
        .replace(/^__(?=(\w))/, '<strong>')
        .replace(/(?<=(\W))__(?=(\w))/, '<strong>')
        .replace(/(?<=(\w))__(?=(\W))/, '</strong>')
        .replace(/(?<=(\w))__$/, '</strong>')
        /* replace double asterisks as strong */
        .replace(/^\*\*(?=(\w))/, '<strong>')
        .replace(/(?<=(\W))\*\*(?=(\w))/, '<strong>')
        .replace(/(?<=(\w))\*\*(?=(\W))/, '</strong>')
        .replace(/(?<=(\w))\*\*$/, '</strong>')
        /* replace underscors as em */
        .replace(/^_(?=(\w))/, '<em>')
        .replace(/(?<=(\W))_(?=(\w))/, '<em>')
        .replace(/(?<=(\w))_(?=(\W))/, '</em>')
        .replace(/(?<=(\w))_$/, '</em>')
        /* replace asterisks as em */
        .replace(/^\*(?=(\w))/, '<em>')
        .replace(/(?<=(\W))\*(?=(\w))/, '<em>')
        .replace(/(?<=(\w))\*(?=(\W))/, '</em>')
        .replace(/(?<=(\w))\*$/, '</em>')
        /* replace tildes as del */
        .replace(/^~~(?=(\w))/, '<del>')
        .replace(/(?<=(\W))~~(?=(\w))/, '<del>')
        .replace(/(?<=(\w))~~(?=(\W))/, '</del>')
        .replace(/(?<=(\w))~~$/, '</del>')
}