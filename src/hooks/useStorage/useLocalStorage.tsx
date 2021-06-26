/* implement the storage API using local browser storage */

const KEY_NAMES = '@just-write:file-names'
const KEY_CONTENT = '@just-write:'

const useLocalStorage = () => {
    function getKey(name: string) {
        return KEY_CONTENT + name;
    }

    const getAllNames = () => {
        const asString = localStorage.getItem(KEY_NAMES)

        if (!asString) {
            return []
        }

        return JSON.parse(asString) as string[]
    }

    const setNames = (names: string[]) => {
        localStorage.setItem(KEY_NAMES, JSON.stringify(names))
    }

    const getContentForName = (name: string) => {
        return localStorage.getItem(getKey(name))
    }

    const removeName = (name: string) => {
        const names = getAllNames()
        setNames(names.filter(n => n !== name))
    }

    const addName = (name: string) => {
        const names = getAllNames()

        if (!names.find(n => n === name)) {
            names.push(name)
            setNames(names)
        }
    }

    const setContentForName = (name: string, content: string | null) => {
        const key = getKey(name);

        if (!content) {
            localStorage.removeItem(key)
            removeName(name)
        } else {
            localStorage.setItem(key, content)
            addName(name)
        }
    }

    return {
        getAllNames,
        getContentForName,
        setContentForName,
    }
}

export default useLocalStorage