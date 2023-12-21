const Footer = ({ name, year, portofolioLink }) => {
  return (
    <div className='note-app__footer'>
      <p> Copyright &#169; {year} <a className='note-app__footer-link' target='_blank' href={portofolioLink}>{name}</a></p>
    </div>
  )
}
export default Footer;