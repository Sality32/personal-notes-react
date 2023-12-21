import { useState } from 'react';
import Input from '../atomic/input';

const Form = ({ setNotes, lastId, setLastId})=> {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const id = lastId+1;
    const note = { id, title, body, archived: false, createdAt: new Date().toISOString()};
    setNotes((prevNotes) => [...prevNotes, note]);
    setTitle("");
    setBody("");
    setLastId(id);
    
  };

  return (
    <div className='note-input'>
      <h2>New Note</h2>
      <form onSubmit={handleSubmit}>
        <p className='note-input__title__char-limit'>
          Character left: {50 - title.length}
        </p>
        <Input
        value={title}
        onChange={setTitle}
        name="title"
        type="text"
        placeholder="Input Title"
        required="required"
        />
        <Input
        value={body}
        onChange={setBody}
        name="body"
        type="textarea"
        placeholder="Input Body"
        required="required"
        />
        <button>Submit</button>
      </form>

    </div>
  )

}
export default Form;