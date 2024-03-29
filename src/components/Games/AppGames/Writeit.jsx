import React, {useRef, useState, useContext } from 'react';
import classes from './AppGames.module.css';
import Store from '../../../context';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import GameNav from '../GameNav/GameNav';


const WriteIt = ({ setWordIndex, wordIndex, speak}) => {
    const data = useContext(Store);
    const input = useRef()
    const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() -0.5))
    const [errorWords, setErrorWords] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);

    const CheackWord = (event) => { 
        event.preventDefault(); 
        if(input.current.value.toLowerCase() === randomWords[wordIndex].translate.toLowerCase()){
            speak(randomWords[wordIndex].translate)
            setCorrectWords(correctWords + 1)
            data.setPoints(data.points + 1)
            if(wordIndex !== data.playWords.length - 1) setWordIndex(wordIndex + 1);
            else alert("Win Game");
            input.current.value = "";
        } else{
            setErrorWords(errorWords + 1)
            input.current.value = "";
            if(errorWords >= 2) alert("game over")
        }
    }

    return (
        <>
            <ProgressBar library={data.playWords}  correctWords={correctWords}/>
            <GameNav errorWords={errorWords} correctWords={correctWords}/>
            <section className={classes.gameContaiter}>
                <span>Write a tranlsation for this word</span>
                <h3>{randomWords[wordIndex].word.toLowerCase()}</h3>
                <form onSubmit={CheackWord} className={classes.writeWordBlock}>
                    <input ref={input} type="text" />
                    <button className={classes.btnOk}>OK</button>
                </form>
            </section>
        </>
    )
}

export default WriteIt;