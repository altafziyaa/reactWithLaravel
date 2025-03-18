import { useEffect, useState } from "react";
import { getPosts } from "../api";  // Importing the API call

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        // Fetch posts when the component mounts
        const fetchPosts = async () => {
            const postsData = await getPosts(); // Call async function
            setPosts(postsData); // Update state with fetched posts
        };

        fetchPosts(); // Call the function
    }, []);

    return (
        <div>
            <h1>Blog Posts</h1>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id}>
                        <h2>{post.title}</h2>
                        <p>{post.content}</p>
                    </div>
                ))
            ) : (
                <p>No posts available.</p>
            )}
        </div>
    );
}

export default Home;
