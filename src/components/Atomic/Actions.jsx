const Action = ({ onAlert, noteTitle, archived }) => {
  return (
    <div className='note-item__action'>
      <button
        onClick={() => onAlert(`Are you sure to delete '${noteTitle}' from list ?`, 'Delete Note', true, false)}
        aria-label='Delete'
        className='note-item__delete-button'
        >
          Delete
      </button>
      <button
        onClick={() => onAlert(`Are you sure to ${archived ? 'unarchive' : 'archive'} '${noteTitle}' from list ?`, archived ? 'Unarchive Note' : 'Archive Note', false, true)}
        aria-label='Archive'
        className='note-item__archive-button'
      >
        { archived ? 'Unarchive' : 'Archive'}
      </button>
    </div>
  )
}

export default Action;