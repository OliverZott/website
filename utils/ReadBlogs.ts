import fs from 'fs';
import path from 'path';
import { BlogPost, Media } from '../interfaces/BlogPost';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPosts(): BlogPost[] {
    try {
        const fileNames = fs.readdirSync(postsDirectory);
        const blogPosts: BlogPost[] = [];

        fileNames.forEach((fileName) => {
            const filePath = path.join(postsDirectory, fileName);
            const fileContentsJsonString = fs.readFileSync(filePath, 'utf8');
            const contentsObject = JSON.parse(fileContentsJsonString);

            const blogPost: BlogPost = {
                title: contentsObject.metadata.title,
                author: contentsObject.metadata.author,
                slug: fileName.replace(/\.json$/, ''),
                date: contentsObject.metadata.date,
                content: contentsObject.content,
                media: contentsObject.media.map((media: Media) => ({
                    path: media.path,
                    title: media.title,
                })),
            };

            blogPosts.push(blogPost);
        });

        return blogPosts;
    } catch (error) {
        console.error('Error reading blog post files:', error);
        return [];
    }
}