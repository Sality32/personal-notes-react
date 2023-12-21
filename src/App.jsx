// App.js
import { useEffect, useState } from 'react';
import Header from './components/Header/Header';
import { getInitialData, getLastId } from './utils';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';

const App = () =>{
  const [searchTitle, setSearchTitle] = useState("");
  const [searchedNotes, setSearchedNotes] = useState([]);
  const [notes, setNotes] = useState(getInitialData());
  const [lastId, setLastId] = useState(getLastId())

  const unArchivedNotes = (searchedNotes || notes).filter((note) => !note.archived);
  const archivedNotes = (searchedNotes || notes).filter((note)=> note.archived);
  useEffect(()=> {
    setSearchedNotes(
      notes.filter((note)=> note.title.toUpperCase().includes(searchTitle.toUpperCase()))
    );
  }, [searchedNotes, notes]);
  return (
    <div className='note-app'>
      <Header search={searchTitle} setSearchTitle={setSearchTitle}/>
      <Body 
      unArchivedNotes={unArchivedNotes} 
      archivedNotes={archivedNotes} 
      setNotes={setNotes} 
      lastId={lastId}
      setLastId={setLastId}/>
      <Footer name="Yoga Subagja" year="2023" portofolioLink="https://github.com/Sality32" />
    </div>
  )
}

export default App;