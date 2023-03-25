import React, { useEffect } from 'react'
import { useState } from 'react'

const PostList = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const url = 'https://jsonplaceholder.typicode.com/posts';
            const res = await fetch(url);
            const posts = await res.json();
            setPosts(posts)
        }
        fetchPosts()
    },[])

    return (
        <div>
            <h1>Post List</h1>
            {posts.map(post => <h3 key={post.id}>{post.title}</h3>)}
        </div>
    )
}

export default PostList