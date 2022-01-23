import React from 'react';
import {Fab, Zoom} from '@material-ui/core';
//import CloseIcon from '@material-ui/icons/Close';
import CancelIcon from '@material-ui/icons/Cancel';

function Post(props){

    function handleClick(){
        props.onChecked(props.id);
    }

    return (
            <div className='post'>
                <div>
                    <h2>{props.title}</h2>
                    <p>{props.post}</p>
                </div>
                <Zoom in={true}>
                    <Fab 
                        onClick={handleClick}
                    >
                        <CancelIcon />
                    </Fab>
                </Zoom>
            </div>
    )
}

export default Post;