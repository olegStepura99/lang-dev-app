import React from "react";
import styles from './BtnNext.module.css'

const BtnNext = ({library, wordIndex, setWordIndex}) => {
    return(
        <div onClick={() => {
            if(wordIndex === library.length - 1) setWordIndex(0);
            else setWordIndex(wordIndex + 1);
            }} 
          className={styles.btnNext}>
        </div>
    )
}

export default BtnNext;