import React, {useState, useEffect} from 'react';
import { useCookies } from 'react-cookie';
import styles from './App.module.css'
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import {BrowserRouter, Routes, Route, Link} from 'react-router-dom';
import Library from './components/Library/Library';
import Learn from './components/Learn/Learn';
import Games from './components/Games/Games';
import WriteIt from './components/Games/AppGames/Writeit';
import Checkit from './components/Games/AppGames/Checkit';
import Store  from './context';


function App() {

  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  const [wordIndex, setWordIndex] = useState(0);
  const [correctWords, setCorrectWords] = useState(0);
  const [errorWords, setErrorWords] = useState(0);
  const [playWords, setPlayWords] = useState(library.slice(-10));
  const [cookie, setCookie] = useCookies(['points']);
  const [points, setPoints] = useState(+cookie.points || 0);
  
  useEffect(() => {
    if(!correctWords) return;
    setPoints(points + 1);
    setCookie('points', points + 1);
  }, [correctWords])

  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word);
    speakInstance.voice = speechSynthesis.getVoices()[8];
    speechSynthesis.speak(speakInstance)
  }
  return (
    <BrowserRouter>
      <Store.Provider value={{correctWords, setCorrectWords, errorWords, setErrorWords, playWords, points, setPoints}}>
        <Header/>
        <Routes>
          <Route path='/'  element={<Dashboard/>}/>
          <Route path='/library'  element={<Library library={library} setLibrary={setLibrary}/>}/>
          <Route path='/games'  element={<Games/>}/>
          <Route 
                path='/learn'  
                element={<Learn 
                              speak={speak} 
                              library={library}
                              wordIndex={wordIndex} 
                              setWordIndex={setWordIndex}
                          />}
          />
        </Routes>
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;






          {/* <Route path='/game' element={
            <>
              <div className={styles.progressBarContainer}>
                  <div className={styles.progressBar} style={progressBarWidth}></div>
              </div>
              <nav className={styles.gameNav}>
                  <Link to="/games" className={styles.btnBack}></Link>
                  <ul className={styles.results}>
                    <li>Errors: {errorWords}</li>
                    <li>Correct: {correctWords}</li>
                    <li>Points: {points} </li>
                  </ul>
              </nav>
              <section className = {styles.gameContainer}>
                {games.map((game,index) => <Route key={index} path={`/game/check-it`}>
                  <game.component wordIndex={wordIndex} setWordIndex={setWordIndex} speak={speak} playWords={playWords} />
              </section>
            </>
          </Route>  */}