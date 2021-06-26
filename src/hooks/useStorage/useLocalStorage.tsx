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

    const getContentForName = (name: string) => {
        return localStorage.getItem(getKey(name))
    }

    const setContentForName = (name: string, content: string | null) => {
        const key = getKey(name);

        if (!content) {
            localStorage.removeItem(key)
        } else {
            localStorage.setItem(key, content)
        }
    }

    return {
        getAllNames,
        getContentForName,
        setContentForName,
    }
}

export default useLocalStorage