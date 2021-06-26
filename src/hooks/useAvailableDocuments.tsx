import {KEY_NAMES} from "../Constants";

const useAvailableDocuments = () => {
    const asString = localStorage.getItem(KEY_NAMES)

    if (!asString) {
        return []
    }

    return JSON.parse(asString) as string[]
}

export default useAvailableDocuments