import React, {useContext} from 'react';
import classes from './WordsTable.module.css';
import deleteBtn from './../../../assets/img/delete.svg'
import Store from '../../../context';

const WordsTable = ({deleteWord}) =>{
    const data = useContext(Store);

    return(
        <div className={classes.wordsTable}>
            <ul>
               <li><h3>Word</h3></li>
               <li><h3>Translation</h3></li>
            </ul>
            {data.library.map((word, index) => (
               <ul key={index}>
                   <li>{word.word}</li>
                   <li>{word.translate}</li>
                    <div className={classes.settings}>
                        <button onClick={() => deleteWord(index)}>
                            <img src={deleteBtn} alt="delete word button" />
                        </button>
                    </div>
                </ul>
            ))}
        </div>

    )
}

export default WordsTable;