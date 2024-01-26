import "../css/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ol>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/experience">Experience</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/sign-up">Sign-Up</Link></li>
        </ol>
    );
}

export default NavBar;

