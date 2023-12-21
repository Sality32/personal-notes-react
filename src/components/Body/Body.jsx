import List from './List'
import Form from './Form';

const Body = ({ unArchivedNotes, archivedNotes, setNotes, lastId, setLastId })=> {
  return (
    <div className='note-app__body'>
      <Form setNotes={setNotes} lastId={lastId} setLastId={setLastId}/>
      <List title="Unarchived Notes" setNotes={setNotes} notes={unArchivedNotes}/>
      <List title="Archived Notes" setNotes={setNotes} notes={archivedNotes}/>
    </div>
  )
}

export default Body;