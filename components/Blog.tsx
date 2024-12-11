/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";


interface BlogProps {
    posts: {
        slug: string;
        title: string;
        date: string;
        author: string;
        content: string;
        media: [
            {
                path: string;
                title: string;
            }
        ]
    }[];
}

// TODO: iterate over images in media property
// TODO: order blog posts by Creation date
const Blog: React.FC<BlogProps> = ({ posts }) => {


    function renderBlog(post: any) {
        console.log(post);
        return (
            <div>
                <div key={post.slug}>
                    <h2>{post.title}</h2>
                    <p>Author: {post.author}, Date: {post.date}</p>
                    <p>{post.content}</p>


                    {post.media.map((media: any) => (
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
                    renderBlog(post)
                ))}
            </div>
        </main>
    )
}

export default Blog;
