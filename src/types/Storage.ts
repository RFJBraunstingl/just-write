// TODO: use promises
export type Storage = {
    getAllNames: () => string[];
    getContentForName: (name: string) => string | null;
    setContentForName: (name: string, content: string | null) => void;
}