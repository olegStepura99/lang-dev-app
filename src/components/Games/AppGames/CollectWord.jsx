import React, {useMemo,useState,useContext,useEffect ,useRef } from 'react';
import Store from '../../../context';
import ProgressBar from '../../UI/ProgressBar/ProgressBar';
import GameNav from '../GameNav/GameNav';
import classes from './AppGames.module.css';


const CollectWord = ({setWordIndex, wordIndex, speak}) => {
    const data = useContext(Store);
    const [randomWords, setRandomWords] = useState(data.playWords.sort(() => Math.random() -0.5))
    const [currentWords, setCurrentWords] = useState(['random', 'correct', 'random2']);
    const [errorWords, setErrorWords] = useState(0);
    const [correctWords, setCorrectWords] = useState(0);
    const input = useRef()

    let randomWordArray = randomWords[wordIndex].translate.split('');
    randomWordArray.sort(() => Math.random() - 0.5)
  


    useEffect(() =>{
        setCurrentWords([
            randomWords[wordIndex].translate.toLowerCase(),
            randomWords[(wordIndex + 1)%randomWords.length].translate.toLowerCase(),
            randomWords[(wordIndex + 2)%randomWords.length].translate.toLowerCase()
        ].sort(() => Math.random() -0.5))
    }, [data.correctWords])

    const CheackWord = (event) => { 
        event.preventDefault(); 
        if(input.current.value.toLowerCase() === randomWords[wordIndex].translate.toLowerCase()){
            speak(randomWords[wordIndex].translate)
            setCorrectWords(correctWords + 1)
            if(wordIndex !== data.playWords.length - 1) setWordIndex(wordIndex + 1);
            else alert("Game is over");
            if(wordIndex !== data.playWords.length - 1) setWordIndex(wordIndex + 1);
            else alert("Win Game");
            data.setPoints(data.points + 1)
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
                <span>Collect a word from letters</span>
                <ul className={classes.letterContainer}>
                    {randomWordArray.map((letter,index) => (
                        <li key={index} className={classes.letter}>{letter.toLowerCase()}</li>
                    ))}
                </ul>
                <form onSubmit={CheackWord} className={classes.writeWordBlock}>
                    <input ref={input} type="text" />
                    <button className={classes.btnOk}>OK</button>
                </form>
            </section>
        </>
    )
}

export default CollectWord;