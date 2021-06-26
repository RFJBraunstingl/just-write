import {KEY_CONTENT} from "../Constants";

const removeName = (names: string[], name: string) => names.filter(n => n !== name)

const addName = (names: string[], name: string) => {
    if (!names.find(n => n === name)) {
        names.push(name)
    }

    return names;
}

const useSaveContent = () => (name: string, content: string | null) => {

    const key = KEY_CONTENT + name

    if (!content) {
        localStorage.removeItem(key)
    } else {
        localStorage.setItem(key, content)
    }
}

export default useSaveContent