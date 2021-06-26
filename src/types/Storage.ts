export type Storage = {
    getAllNames: () => string[];
    getContentForName: (name: string) => string;
    setContentForName: (name: string, content: string) => void;
}