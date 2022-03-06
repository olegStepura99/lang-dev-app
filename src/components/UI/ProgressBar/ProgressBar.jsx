import React from "react";
import classes from './ProgressBar.module.css'

const ProgressBar = ({library, correctWords}) => {
    const progressBarWidth = {
        width:`${(100 / library.length) * correctWords}vw`,
      }

    return(
        <div className={classes.progressBarContainer}>
            <div className={classes.progressBar} style={progressBarWidth}></div>
        </div>
    )
}

export default ProgressBar;