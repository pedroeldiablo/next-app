import React from 'react';
import axios from 'axios';

const Index = ({posts}) => {
        return (
            <div>
                <h1>Home</h1>
                <h2>Rendering</h2>
                <ul>
                    {posts.map(post => (
                         <li key={post.id}>{post.title}</li>

                    ))}
                </ul>
            </div>
        );
};

Index.getInitialProps = async () => { 
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    const { data } = res;
    return { posts: data };
};

export default Index;
