import { showFormattedDate } from '../../utils'

const Card = ({ title, body, dateTime }) => {
  return (
    <div className='note-item__content'>
      <h3 className='note-item__title'>{title}</h3>
      <p className='note-item__date'>{showFormattedDate(dateTime)}</p>
      <p className='note-item__body'>{body}</p>
    </div>
  )
}

export default Card;