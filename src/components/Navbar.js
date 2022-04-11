import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
            <Link className="link" to="/">HOME</Link>
            <Link className="link" to="/about">ABOUT</Link>
            <Link className="link" to="#">MENU</Link>
            <Link className="link" to="/contact">CONTACT</Link>
            <Link className="link" to="#">OPEN HOURS</Link>
        </ul>
  </nav>
  )
}

export default Navbar