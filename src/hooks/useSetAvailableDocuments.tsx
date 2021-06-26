import {KEY_NAMES} from "../Constants";

const useSetAvailableDocuments = () => {
    return function (availableDocuments: string[]) {
        localStorage.setItem(KEY_NAMES, JSON.stringify(availableDocuments))
    }
}

export default useSetAvailableDocuments