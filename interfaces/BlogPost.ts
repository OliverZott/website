export interface Media {
    path: string;
    title: string;
}



export interface BlogPost {
    title: string;
    author: string;
    slug: string;
    date: string;
    content: string;
    media: Media[];
}
