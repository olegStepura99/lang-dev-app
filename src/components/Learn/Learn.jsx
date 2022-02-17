import React, { useEffect } from "react";
import ProgressBar from "../ProgressBar/ProgressBar";
import BtnNext from "./BtnNext/BtnNext";


const Learn = ({library, wordIndex, speak, setWordIndex }) => {
    useEffect(() => {
        speak(library[wordIndex].translate)
    }, [wordIndex])

    return (
        <>
            <ProgressBar library={library} wordIndex={wordIndex}/>
            <section style={{textAlign:'center'}}>
                <span>{library[wordIndex].word}</span>
                <h3>{library[wordIndex].translate}</h3>
            </section>
            <BtnNext library={library} wordIndex={wordIndex} setWordIndex={setWordIndex} />
        </>
    )
}

export default Learn;