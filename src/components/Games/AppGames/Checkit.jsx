import React, { useState,useEffect, useMemo, useContext } from 'react';
import Store from '../../../context';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import GameNav from '../GameNav/GameNav';
import classes from './AppGames.module.css';
const Checkit = ({setWordIndex, wordIndex, speak}) => {
    const data = useContext(Store);
    const randomWords = useMemo(() => data.playWords.sort(() => Math.random() -0.5), [data.correctWords])
    const [currentWords, setCurrentWords] = useState(['random', 'correct', 'random2']);
    const [errorWords, setErrorWords] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);

    useEffect(() =>{
        setCurrentWords([
            randomWords[wordIndex].word.toLowerCase(),
            randomWords[(wordIndex + 1)%randomWords.length].word.toLowerCase(),
            randomWords[(wordIndex + 2)%randomWords.length].word.toLowerCase()
        ].sort(() => Math.random() -0.5))
    }, [correctWords])

    const CheackWord = (word) => {
        if(word.toLowerCase() === randomWords[wordIndex].word.toLowerCase()){
            speak(randomWords[wordIndex].translate);
            setCorrectWords(correctWords + 1);
            data.setPoints(data.points + 1)
            if(wordIndex !== data.playWords.length - 1) setWordIndex(wordIndex + 1);
            else alert("Win Game");
   
        } else{
            setErrorWords(errorWords + 1);
            if(errorWords >= 2) alert("game over")
        } 
    }

    return (
        <>
            <ProgressBar library={data.playWords}  correctWords={correctWords}/>
            <GameNav errorWords={errorWords} correctWords={correctWords}/>
            <section className={classes.gameContaiter}>
                <span>Write a tranlsation for this word</span>
                <h3>{randomWords[wordIndex].translate.toLowerCase()}</h3>
                <ul className={classes.btnContainer}>
                    {currentWords.map((word,index) => (
                        <li key={index} className={classes.btnCheck} onClick={ () => CheackWord(word)}>{word}</li>
                    ))}
                </ul>
            </section>
        </>
    )
}

export default Checkit;