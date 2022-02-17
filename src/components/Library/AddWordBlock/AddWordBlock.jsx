import React from 'react';
import classes from './AddWordBlock.module.css';
import addBtn from './../../../assets/img/add.svg'
 
const AddWordBlock = ({inputValue}) =>{
    
    return(
        <form className={classes.addWordBlock}>
            <input ref={inputValue} type="text" />
            <button><img src={addBtn} alt="Add word button" /></button>
        </form>
    )
}

export default AddWordBlock;