import {KEY_CONTENT} from "../Constants";

const useReadContent = () =>
    (name: string) => localStorage.getItem(KEY_CONTENT + name)

export default useReadContent