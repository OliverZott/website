

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

    return (
        <main>
            <div>
                <h1>Blog</h1>

                <ul>
                    {posts.map((post) => (
                        <li key={post.slug}>
                            <h2>{post.title}</h2>
                            <p>Date: {post.date}</p>
                            <p>Author: {post.author}</p>
                        </li>
                    ))}
                </ul>

            </div>
        </main>
    )
}

export default Blog;
