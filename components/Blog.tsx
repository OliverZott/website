import React from "react";

interface BlogProps {
    posts: {
        slug: string;
        title: string;
        date: string;
        author: string;
        content: string;
    }[];
}


const Blog: React.FC<BlogProps> = ({ posts }) => {

    function renderBlog(post: any) {
        return (
            <div>
                <div key={post.title}>
                    <h2>{post.title}</h2>
                    <p>Author: {post.author}, Date: {post.date}</p>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        )
    }

    return (
        <main>
            <div>
                <h1>Blog</h1>
                {posts.map((post) => (
                    renderBlog(post)
                ))}

            </div>
        </main>
    )
}

export default Blog;
