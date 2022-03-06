import React, {useState, useEffect} from 'react';
import {useCookies} from 'react-cookie';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import Header from './components/Header/Header';
import Library from './components/Library/Library';
import Learn from './components/Learn/Learn';
import Games from './components/Games/Games';
import Store  from './context';
import WriteIt from './components/Games/AppGames/WriteIt';
import CheckIt from './components/Games/AppGames/CheckIt';
import ListenAndWrite from './components/Games/AppGames/ListenAndWrite';
import CollectWord from './components/Games/AppGames/CollectWord';


function App() {
  const [library, setLibrary] = useState(JSON.parse(localStorage.getItem('library')) || []);
  const [wordIndex, setWordIndex] = useState(0);
  const [playWords, setPlayWords] = useState(library);
  const [cookie, setCookie] = useCookies(['points']);
  const [points, setPoints] = useState(+cookie.points || 0);
  
  useEffect(() =>{
    setCookie("points", +points)
}, [points])


  const speak = (word) => {
    const speakInstance = new SpeechSynthesisUtterance(word);
    speakInstance.voice = speechSynthesis.getVoices()[8];
    speechSynthesis.speak(speakInstance)
  }
  return (
    <BrowserRouter>
      <Store.Provider value={{ library, setLibrary, playWords, points, setPoints}}>
        <Header/>
        <Routes>
          <Route path='/' element={<Dashboard/>}/>
          <Route path='/library' element={<Library library={library} setLibrary={setLibrary}/>}/>
          <Route path='/learn' element={<Learn speak={speak} library={library} wordIndex={wordIndex} setWordIndex={setWordIndex}/>}/>
          <Route path='/games' element={<Games/>}/>
          <Route path='/game/check-it' element={<CheckIt setWordIndex={setWordIndex} wordIndex={wordIndex} speak={speak}/>}/>
          <Route path='/game/write-it' element={<WriteIt setWordIndex={setWordIndex} wordIndex={wordIndex} speak={speak}/>}/>
          <Route path='/game/listen-and-write' element={<ListenAndWrite setWordIndex={setWordIndex} wordIndex={wordIndex} speak={speak}/>}/>
          <Route path='/game/collect-word' element={<CollectWord setWordIndex={setWordIndex} wordIndex={wordIndex} speak={speak}/>}/>
        </Routes> 
      </Store.Provider>
    </BrowserRouter>
  );
}

export default App;