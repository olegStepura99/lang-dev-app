import React,{useContext} from 'react';
import Store from '../../../context';
import classes from './PointsBlock.module.css'

const PointsBlock = () => {
    const contextObj = useContext(Store);
    return (
    <div className={classes.pointsBlock}>
        <span>Common exprience</span>
        <h3> {contextObj.points} points</h3>
    </div>
    )
}


export default  PointsBlock;