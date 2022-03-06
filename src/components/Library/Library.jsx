import React, {useRef, useContext} from 'react';
import classes from './Library.module.css';
import AddWordBlock from './AddWordBlock/AddWordBlock';
import WordsTable from './WordsTable/WordsTable';
import Store from '../../context';

const Library = () => {
    const inputValue = useRef();
    const data = useContext(Store);
    
    const deleteWord = (id) => {
        const updateLibrary = data.library.filter((word, index) => index !== id);
        data.setLibrary(updateLibrary);
        localStorage.setItem('library', JSON.stringify(updateLibrary))
    }

    const addNewWord = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`);
        const translation = await response.json();
        const updateLibrary = [...data.library,{word: translation.word, translate: translation.translate, learn:0}];
        data.setLibrary(updateLibrary)
        localStorage.setItem('library', JSON.stringify(updateLibrary))
        inputValue.current.value = '';
    }

    return (
        <section onSubmit = {addNewWord} className={classes.libraryBlock}>
           <span>Add new <b>Word</b></span>
            <AddWordBlock inputValue={inputValue}/>
            <WordsTable deleteWord={deleteWord}/>
        </section>
    )
}

export default Library;