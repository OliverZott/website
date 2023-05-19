import fs from 'fs'
import path from 'path';


const postsDirectory = path.join(process.cwd(), 'posts');

// TODO: deserialize json string to blog-etity
//  - create blog entity
//  - use serializer
export function getAllPosts() {

    try {
        const fileNames = fs.readdirSync(postsDirectory);
        var blogPosts = [];

        return fileNames.map((fileName) => {
            const filePath = path.join(postsDirectory, fileName);
            const fileContentsJsonString = fs.readFileSync(filePath, 'utf8');

            const contentsObject = JSON.parse(fileContentsJsonString);

            return {
                title: contentsObject.metadata.title,
                author: contentsObject.metadata.author,
                slug: fileName.replace(/\.json$/, ''),
                date: contentsObject.metadata.date,
                content: contentsObject.content
            }
        })
    } catch (error) {
        console.log("WTFFFFFFFFFFFF");
        console.error('Error reading blog post files:', error);
        console.log(error);
        return [];
    }

}