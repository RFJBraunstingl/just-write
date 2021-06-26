import {KEY_CONTENT} from "../Constants";

const useSaveContent = () => (name: string, content: string | null) => {

    const key = KEY_CONTENT + name

    if (!content) {
        localStorage.removeItem(key)
    } else {
        localStorage.setItem(key, content)
    }
}

export default useSaveContent