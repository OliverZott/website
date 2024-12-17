export interface BlogPost {
    title: string;
    author: string;
    slug: string;
    date: string;
    content: string;
    media: Array<{
        path: string;
        title: string
    }>;
}
