import Input from '../Atomic/Input';

const Header = ({ search, setSearchTitle}) => {
  return (
    <div className="note-app__header">
      <h1>Notes</h1>
      <div className='note-search'>
        <Input
        value={search}
        onChange={setSearchTitle}
        type="search"
        id="search_note"
        name="search_note"
        placeholder=" Find Notes..."
        required=""/>
      </div>
    </div>
  );
};

export default Header;