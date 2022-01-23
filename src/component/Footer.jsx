import React from 'react';
import CopyrightIcon from '@material-ui/icons/Copyright';

function Footer(){

    const today = new Date();
    const currentYear = today.getFullYear();
    
    
    return (
        <footer>
            <p><CopyrightIcon fontSize='small'/>copyright @copy {currentYear}</p>
        </footer>
    );
}

export default Footer;