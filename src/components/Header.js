import PropTypes from 'prop-types'

const Header = ({ title }) => {
    return (
        <header className="main-header">
            <h1>{title}</h1>   
        </header>
    )
}

Header.defaultProps = {
    title: 'Sloth Cafe',
}
  
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

export default Header