import React, {useRef} from 'react';
import classes from './Games.module.css';
import imgCheackCorrect from './../../assets/img/check-the-correct-one.svg';
import imgSelectTranslation from './../../assets/img/select-translation.svg';
import imgSprintGuess from './../../assets/img/sprint-guess.svg';
import imgPutTranslation from './../../assets/img/put-translation.svg';
import imgSpeakAndCheck from './../../assets/img/speak-and-check.svg';
import imgWriteTranslation from './../../assets/img/write-translation.svg';
import { Link } from 'react-router-dom';

const Games = () => {
   const GAMES = [
       {img: imgCheackCorrect, path:'check-it', name:'Check correct word'},
       {img: imgWriteTranslation, path:'write-it', name:'Write correct word'},
       {img: imgSprintGuess, path:'listen-and-write', name:'Listen and write word'},
       {img: imgPutTranslation, path:'collect-word', name:'Collect the word'},
   ] 
    return (
        <section className={classes.gameContainer}>
           {GAMES.map((game, index)=> (
                <Link key={index} to={'/game/' + game.path}>
                    <div className={classes.gameBlock}>
                        <div>
                            <h2>{game.name}</h2>
                        </div>
                        <img src={game.img} alt={game.name} />
                    </div>
                </Link>
            ))}
        </section>
    )
}

export default Games;