import React from 'react';
import classes from './GameBlock.module.css'
import PlayButton from './../../../assets/img/play.svg'

const GameBlock = () => {
    
    return (
        <div className={classes.gameBlock }>
            <p>The most populat game is <br />
                <b>Speak IT</b>
            </p>
            <img className={classes.btnPlay} src={PlayButton} alt="" />
            <button className={classes.btnRandom}>Play random game</button>
        </div>
    )
}


export default GameBlock;