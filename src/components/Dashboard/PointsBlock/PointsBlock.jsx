import React,{useContext} from 'react';
import Store from '../../../context';
import classes from './PointsBlock.module.css'

const PointsBlock = () => {
    const contextObj = useContext(Store);
    return (
    <div className={classes.pointsBlock}>
        <h3> {contextObj.points} points</h3>
    </div>
    )
}


export default  PointsBlock;