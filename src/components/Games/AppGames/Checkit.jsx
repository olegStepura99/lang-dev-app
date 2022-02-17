import React, { useState,useEffect, useMemo, useContext } from 'react';
import Store from './../../../context';
import classes from './AppGames.module.css';





const Checkit = ({setWordIndex, wordIndex, speak}) => {
    const data = useContext(Store);
    
    const randomWords = useMemo(() => data.playWords.sort(() => Math.random() -0.5), [data.correctWords])

    const [currentWords, setCurrentWords] = useState(['random', 'correct', 'random2']);

    useEffect(() =>{
        setCurrentWords([
            randomWords[wordIndex].word.toLowerCase(),
            randomWords[(wordIndex + 1)%randomWords.length].word.toLowerCase(),
            randomWords[(wordIndex + 2)%randomWords.length].word.toLowerCase()
        ].sort(() => Math.random() -0.5))
    }, [data.correctWords])

    const CheackWord = (word) => {
        if(word.toLowerCase() === randomWords[wordIndex].word.toLowerCase()){
            speak(randomWords[wordIndex].translate)
            data.setCorrectWords(data.correctWords + 1)
            if(wordIndex !== data.playWords.length - 1) setWordIndex(wordIndex + 1);
            else alert("Game is over");
   
        } else{
            data.setErrorWords(data.errorWords + 1)
            
        }
    }

    return (
        <section className={classes.gameContaiter}>
            <span>Write a tranlsation for this word</span>
            <h3>{randomWords[wordIndex].translate}</h3>
            <ul className={classes.btnContainer}>
                {currentWords.map((word,index) => (
                    <li key={index} className={classes.btnCheck} onClick={ () => CheackWord(word)}>{word}</li>
                ))}
            </ul>
        </section>
    )
}

export default Checkit;