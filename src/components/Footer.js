import PropTypes from 'prop-types'

const Footer = ({ footer }) => {
  return (
    <footer className="main-footer">
        <p>{footer}</p>
    </footer>
  )
}

Footer.defaultProps = {
    footer: 'Copyright &copy; 2022 My Website',
}
  
Footer.propTypes = {
    footer: PropTypes.string.isRequired,
}

export default Footer