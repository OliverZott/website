import React from "react";
import Image from "next/image";
import { BlogPost } from '../interfaces/BlogPost';

interface BlogProps {
    posts: BlogPost[];
}

const Blog: React.FC<BlogProps> = ({ posts }) => {

    // Sort posts by date in descending order (newest first)
    function parseDate(dateStr: string) {
        const [day, month, year] = dateStr.split('.').map(Number);
        return new Date(year, month - 1, day);
    }
    posts.sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime());

    function renderBlog(post: BlogPost) {
        return (
            <div>
                <div key={post.slug}>
                    <h2>{post.title}</h2>
                    <p>Author: {post.author}, Date: {post.date}</p>
                    <p>{post.content}</p>

                    {post.media.map((media) => (
                        <div key={media.path}>
                            <Image
                                src={media.path}
                                width={600}
                                height={450}
                                alt={media.title}
                            />
                        </div>
                    ))}

                </div>
            </div>
        )
    }

    return (
        <main>
            <div>
                {posts.map((post) => (
                    <div key={post.slug}>
                        {renderBlog(post)}
                    </div>
                ))}
            </div>
        </main>
    )
}

export default Blog;
