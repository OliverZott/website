import Blog from "@/components/Blog";
import { getAllPosts } from "@/utils/ReadBlogs";

export default function Blogs() {

    const posts = getAllPosts();
    console.log(posts);

    return (
        <main>
            <div>
                <h1>Blog</h1>
                <Blog posts={posts} />


                <main>
                    <div>
                        <h1>Blog</h1>

                        {posts.map((post) => (
                            <Blog posts={posts} />
                            // <div key={post.title}>
                            //     <h2>{post.title}</h2>
                            //     <p>Date: {post.date}</p>
                            //     <p>Author: {post.author}</p>
                            // </div>
                        ))}

                    </div>
                </main>
            </div>
        </main>
    )
}