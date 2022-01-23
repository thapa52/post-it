import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer'
import InputPost from './InputPost'
import Post from './Post';
//import posts from '../Posts';

function App(){
    const [posts, setPosts] = useState([]);

    function addPost(newPost){
        setPosts((prevPosts) => {
            return [...prevPosts, newPost]
        })
    }

    function deletePost(id){
        setPosts((prevPosts) => {
            return prevPosts.filter((postItem, index) => {
                return index !== id;
            });
        });
    }
    
    return (
        <div>
            <Header />
            <InputPost 
                onAdd={addPost}
            />
            {posts.map((postItem, index) => <Post
                key={index}
                id={index}
                title={postItem.title} 
                post={postItem.content}
                onChecked={deletePost}
            />
            )}
            <Footer />
        </div>
    )
}

export default App;