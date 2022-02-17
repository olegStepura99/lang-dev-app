import React, { useContext } from 'react';
import Store from '../../../context';
import classes from './LevelBlock.module.css'

const LevelBlock = () => {
    const contextObj = useContext(Store);
    return (
        <div className={classes.levelBlock}>
            <span>level</span>
            <h3>{(0.2*Math.sqrt(contextObj.points)).toFixed() } level</h3>
            <p>Learn 750 new words in one course</p>
            <div className={classes.levelBackground}></div>
        </div>
    )
}


export default LevelBlock;