import {KEY_NAMES} from "../Constants";

const useAllNames = () => {
    const asString = localStorage.getItem(KEY_NAMES)

    if (!asString) {
        return []
    }

    return JSON.parse(asString) as string[]
}

export default useAllNames