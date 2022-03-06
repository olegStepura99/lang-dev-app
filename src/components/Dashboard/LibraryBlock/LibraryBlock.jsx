import React, {useContext} from 'react';
import classes from './LibraryBlock.module.css'
import Store from '../../../context';
import {Link} from 'react-router-dom';

const LibraryBlock = () => {
    const data = useContext(Store);
    return (
        <div className={classes.libraryBlock }>
            <p>There are {data.library.length} words in your library<br />
                <b>Add new? </b>
            </p>
            <Link to="/library" className={classes.btnLink}>Add new word</Link>
        </div>
    )
}
export default LibraryBlock;