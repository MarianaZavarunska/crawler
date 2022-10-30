export interface ICrawledPage {
    url: string;
    title: string[];
    description: string[];
    h1: string[];
    h2: string[];
    links: string[];
    createdAt: string;
    updatedAt: string;
    _id:string;
    parentID:string;
    depth: number;
}
