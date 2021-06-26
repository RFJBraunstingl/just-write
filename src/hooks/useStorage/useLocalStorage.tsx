/* implement the storage API using local browser storage */

const KEY_NAMES = '@just-write:file-names'

const useLocalStorage = () => {
    const getAllNames = () => {
        const asString = localStorage.getItem(KEY_NAMES)

        if (!asString) {
            return []
        }

        return JSON.parse(asString) as string[]
    }

    return {
        getAllNames,
        getContentForName: (name: string) => '',
        setContentForName: (name: string, content: string) => {},
    }
}

export default useLocalStorage