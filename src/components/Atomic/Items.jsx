import { useState } from 'react';
import Action from './Actions';
import Card from './Card'
import AlertConfirmation from './AlertConfirmation';

const Items = ({ id, title, body, dateTime, setNotes, archived}) => {
  const [showAlert, setShowAlert] = useState(false);
  const [message, setMessage] = useState("Test");
  const [titleAlert, setTitleAlert] = useState("Test Title")
  const [isDelete, setIsDelete] = useState(false);
  const [isArchive, setIsArchive] = useState(false);

  const onAlert = (message, title, isDelete, isArchive) => {
    setMessage(message);
    setTitleAlert(title);
    setIsDelete(isDelete);
    setIsArchive(isArchive);
    setShowAlert(true);
  }
  const onConfirm = (noteId) => {
    if(isDelete && !isArchive){
      setNotes((notes) => notes.filter((note) => note.id !== noteId))
    }else if(isArchive && !isDelete){
      setNotes((notes) => notes.map((note) => {
        if(note.id === noteId){
          return { ...note, archived: !note.archived}
        }else {
          return note;
        }
      }))
    }
    setShowAlert(false);
  }
  const onCancel = () => {
    setShowAlert(false);

  }
  return (
    <div className='note-item'>
      <Card
        title={title}
        body={body}
        dateTime={dateTime}
      />
      <Action
        onAlert={onAlert}
        noteTitle={title}
        archived={archived}
      />
      {showAlert && (
        (
          <AlertConfirmation
            message={message}
            titleAlert={titleAlert}
            id={id}
            isDelete={isDelete}
            onConfirm={onConfirm}
            onCancel={onCancel}
          />
        )
      )}
    </div>

  )
}

export default Items;