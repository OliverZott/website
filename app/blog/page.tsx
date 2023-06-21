/* eslint-disable @next/next/no-img-element */
import Blog from "@/components/Blog";
import { getAllPosts } from "@/utils/ReadBlogs";

export default function Blogs() {

    const posts = getAllPosts();
    console.log(posts);

    return (
        <main>
            <img className="bg-img" alt="fundusalm" src="/fundusalm.jpg" />
            <div className='container'>
                <h1>Blog</h1>
                <Blog posts={posts} />

                <main>
                    <div>
                        <h1>Blog</h1>

                        {/* {posts.map((post) => (
                            <Blog posts={posts} />
                        ))} */}

                    </div>
                </main>
            </div>
        </main>
    )
}