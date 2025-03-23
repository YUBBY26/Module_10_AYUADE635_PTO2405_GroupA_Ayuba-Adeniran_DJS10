
import React, { useEffect, useState } from "react";

 const DataFetcher = () => {

const [posts, setData] = useState([]);
const [error, setError] = useState(null);



const fetchPost = async () => {
    try {
        const res = await fetch('https://jsonplaceholder.typicode.com/posts');
        
        if (!res.ok) {
           throw new Error('Data fetching failed');
        }
        
        const posts = await res.json();
        setData(posts);

    } catch (error) {
        console.error(error);
        setError('Data fetching failed');
    }

};
useEffect(() => {
    fetchPost();
    }, []);
    
    return (
        <>
        <div>
            { error ? (
                    <h1 style={{ color: 'orangered', textWeight: 'bold' }}>{error}</h1>
                ) : (
                    <ol>
                    <h1>Posts</h1>
                    {posts.map((post) => (
                        <li key={post.id}>
                        <strong>{post.title}</strong>
                        <p>{post.body}</p>
                        </li>
                    ))}
                    </ol>
                )}
        </div>
        </>
    );
};
export default DataFetcher;