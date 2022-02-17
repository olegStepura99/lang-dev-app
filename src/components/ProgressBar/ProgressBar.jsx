import React from "react";
import classes from './ProgressBar.module.css'

const ProgressBar = ({library, wordIndex}) => {
    const progressBarWidth = {
        width:`${(100 / library.slice(-10).length) * (wordIndex +1)}vw`,
      }

    return(
        <div className={classes.progressBarContainer}>
            <div className={classes.progressBar} style={progressBarWidth}></div>
        </div>
    )
}

export default ProgressBar;