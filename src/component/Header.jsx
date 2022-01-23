import React from 'react';
import NoteIcon from '@material-ui/icons/Note';

function Header(){
    return (
        <div>
            <header>
                <h1><NoteIcon /> Post It</h1>
            </header>
        </div>
    );
}

export default Header;