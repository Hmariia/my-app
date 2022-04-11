import {  Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
        <ul>
            <li>
                <Link className="link" to="#">HOME</Link>
            </li>
            <li>
                <Link className="link" to="#">ABOUT</Link>
            </li>
            <li>
                <Link className="link" to="#">MENU</Link>
            </li>
            <li>
                <Link className="link" to="#">CONTACT</Link>
            </li>
            <li>
                <Link className="link" to="#">OPEN HOURS</Link>
            </li>
        </ul>
  </nav>
  )
}

export default Navbar