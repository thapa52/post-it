import React, { useState } from 'react';
import {Fab, Zoom} from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

function InputPost(props){

    const [isExtended, setIsExtended] = useState(false);

    const [post, setPost] = useState({
        title: "",
        content: ""
    });

    function changeHandle(event){
        const {name, value} = event.target;

        setPost((prevPosts) => {
            return {
                ...prevPosts,
                [name] : value
            };
        });
    }

    function submitPost(event){
        props.onAdd(post)
        setPost({
            title: "",
            content: ""
        })
    }

    function extended(){
        setIsExtended(true)
    }

    

    return (
        <div>
            <div className='input-post'>
                <input 
                    onClick={extended}
                    onChange={changeHandle}
                    type="text" 
                    name="title" 
                    value={post.title}
                    placeholder={isExtended ? "Post Title" : "Type your post" } 
                />
                {isExtended && <textarea 
                    onChange={changeHandle}
                    name="content" 
                    value={post.content}
                    placeholder="Post your thoughts..." 
                    rows={ isExtended ? 3 : 1} 

                />}
                <Zoom in={isExtended}>
                    <Fab 
                        onClick={submitPost}
                    > 
                        <SendIcon />
                    </Fab>
                </Zoom>
            </div>
        </div>
    )
}

export default InputPost