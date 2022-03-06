import React, {useContext} from "react";
import {Link} from 'react-router-dom';
import styles from './GameNav.module.css'
import Store from '../../../context';

const GameNav = ({errorWords,correctWords}) =>{
    const data = useContext(Store);

    return (
        <nav className={styles.gameNav}>
            <Link to="/games" className={styles.btnBack}></Link>
            <ul className={styles.results}>
                <li>Errors: {errorWords}</li>
                <li>Correct: {correctWords}</li>
                <li>Points: {data.points} </li>
            </ul>
        </nav>
    )
}

export default GameNav;