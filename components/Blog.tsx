/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { title } from "process";


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


const Blog: React.FC<BlogProps> = ({ posts }) => {

    function renderBlog(post: any) {
        console.log(post);
        return (
            <div>
                <div key={post.title}>
                    <h2>{post.title}</h2>
                    <p>Author: {post.author}, Date: {post.date}</p>
                    <p>{post.content}</p>


                    {/* <img className="bg-img" alt={post.media[1].title} src={post.media[1].path} /> */}

                    <Image
                        src={post.media[0].path}
                        width={600}
                        height={450}
                        alt={post.media[1].title}
                    />
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
