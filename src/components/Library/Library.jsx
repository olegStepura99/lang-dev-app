import React, {useRef} from 'react';
import classes from './Library.module.css';
import deleteBtn from './../../assets/img/delete.svg'
import AddWordBlock from './AddWordBlock/AddWordBlock';

const Library = ({library, setLibrary}) => {
    const inputValue = useRef();

    const deleteWord = (id) => {
        const updateLibrary = library.filter((word, index) => index !== id);
        setLibrary(updateLibrary);
        localStorage.setItem('library', JSON.stringify(updateLibrary))
    }

    const addNewWord = async (event) => {
        event.preventDefault();
        const response = await fetch(`https://tmp.myitschool.org/API/translate/?source=ru&target=en&word=${inputValue.current.value}`);
        const translation = await response.json();
        const updateLibrary = [...library,{word: translation.word, translate: translation.translate, learn:0}];
        setLibrary(updateLibrary)
        localStorage.setItem('library', JSON.stringify(updateLibrary))
        inputValue.current.value = '';
    }

    return (
        <section onSubmit = {addNewWord} className={classes.libraryBlock}>
           <span>Add new <b>Word</b></span>
            <AddWordBlock inputValue={inputValue}/>
           <div className={classes.wordsTable}>
               <ul>
                   <li><h3>Word</h3></li>
                   <li><h3>Translation</h3></li>
                   <li><h3>Learn</h3></li>
               </ul>

               {library.map((word, index) => (
                       <ul key={index}>
                           <li>{word.word}</li>
                           <li>{word.translate}</li>
                           <li>{word.learn}</li>

                           <div className={classes.settings}>
                                <button onClick={() => deleteWord(index)}>
                                    <img src={deleteBtn} alt="delete word button" />
                                </button>
                           </div>
                       </ul>
                   ))}
           </div>
        </section>
    )
}

export default Library;