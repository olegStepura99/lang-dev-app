import React, {useRef, useState, useContext } from 'react';
import classes from './AppGames.module.css';
import Store from '../../../context';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import GameNav from '../GameNav/GameNav';

const ListenAndWrite = ({ setWordIndex, wordIndex, speak}) => {
    const data = useContext(Store);
    const input = useRef()
    const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() -0.5))
    const [errorWords, setErrorWords] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);

    
    const CheackWord = (event) => { 
        event.preventDefault(); 
        if(input.current.value.toLowerCase() === randomWords[wordIndex].translate.toLowerCase()){
            setCorrectWords(correctWords + 1)
            if(wordIndex !== data.playWords.length - 1) setWordIndex(wordIndex + 1);
            else alert("Win Game");
            input.current.value = "";
            data.setPoints(data.points + 1)
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
                <span>Listen word and write it in English</span>
                <button className={classes.btnListen} onClick={() => speak(randomWords[wordIndex].translate)}/>
                <form onSubmit={CheackWord} className={classes.writeWordBlock}>
                    <input ref={input} type="text" />
                    <button className={classes.btnOk}>OK</button>
                </form>
            </section>
        </>
    )
}

export default ListenAndWrite;