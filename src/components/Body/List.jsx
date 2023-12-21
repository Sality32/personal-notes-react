import Items from '../Atomic/Items'

const List = ({ notes, title, setNotes}) => {
  return (
    <>
      <h2>{title}</h2>
      <div className='notes-list'>
        {notes.length > 0 ? (
            notes.map(note=> ( <Items key={note.id} {...note} setNotes={setNotes} dateTime={note.createdAt} archived={note.archived} />))
        ): (
        <p className="notes-list__empty-message">Empty notes</p>
        )}
      </div>
    </>
  )
}

export default List;