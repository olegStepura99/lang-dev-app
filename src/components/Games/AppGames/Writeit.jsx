import React, {useRef, useState, useContext } from 'react';
import classes from './AppGames.module.css';
import Store from './../../../context';





const WriteIt = ({ setWordIndex, wordIndex, speak}) => {
    const data = useContext(Store);
    const input = useRef()
    const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() -0.5))


    const CheackWord = (event) => { 
        event.preventDefault(); 
        if(input.current.value.toLowerCase() === randomWords[wordIndex].translate.toLowerCase()){
            speak(randomWords[wordIndex].translate)
            data.setCorrectWords(data.correctWords + 1)
            if(wordIndex !== data.playWords.length - 1) setWordIndex(wordIndex + 1);
            else alert("Game is over");
            input.current.value = "";
        } else{
            data.setErrorWords(data.errorWords + 1)
            input.current.value = "";
        }
    }

    return (
        <section className={classes.gameContaiter}>
            <span>Write a tranlsation for this word</span>
            <h3>{randomWords[wordIndex].word}</h3>
            <form onSubmit={CheackWord} className={classes.writeWordBlock}>


                <input ref={input} type="text" />
                <button className={classes.btnOk}>OK</button>
            </form>
        </section>
    )
}

export default WriteIt;