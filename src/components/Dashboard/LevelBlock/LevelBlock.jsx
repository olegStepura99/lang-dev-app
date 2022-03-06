import React, { useContext } from 'react';
import Store from '../../../context';
import classes from './LevelBlock.module.css'

const LevelBlock = () => {
    const contextObj = useContext(Store);
    return (
        <div className={classes.levelBlock}>
            <h3>{(0.2*Math.sqrt(contextObj.points)).toFixed() } level</h3>
            <p>Play games to level up</p>
            <div className={classes.levelBackground}></div>
        </div>
    )
}


export default LevelBlock;