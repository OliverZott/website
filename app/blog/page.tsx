/* eslint-disable @next/next/no-img-element */
import Blog from "@/components/Blog";
import { getAllPosts } from "@/utils/ReadBlogs";

export default function Blogs() {

    const posts = getAllPosts();

    return (
        <main>
            <img
                className="bg-img"
                alt="fundusalm"
                src="/fundusalm.webp"
                srcSet="/fundusalm.webp 1920w, /fundusalm-900.webp 900w"
            />
            <div className='container'>
                <h1>My Example Blog</h1>
                <Blog posts={posts} />
            </div>
        </main>
    )
}