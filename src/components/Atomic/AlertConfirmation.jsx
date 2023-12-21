const AlertConfirmation = ({ message, titleAlert, id, onConfirm, onCancel}) => {
  return (
    <div className='note-alert__confirmation'>
      <div className='note-alert__message'>
        <h2>{titleAlert}</h2>
        <p>{message}</p>
      </div>
      <div className='note-alert__buttons'>
        <button onClick={()=>onConfirm(id)}>Confirm</button>
        <button onClick={()=>onCancel()}>Cancel</button>
      </div>
    </div>
  )
}

export default AlertConfirmation;