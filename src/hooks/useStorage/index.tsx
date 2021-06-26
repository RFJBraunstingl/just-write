import {Storage} from "../../types/Storage";
import useLocalStorage from "./useLocalStorage";

const useStorage: () => Storage = useLocalStorage;

export default useStorage