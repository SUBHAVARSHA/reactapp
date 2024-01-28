import "../css/NavBar.css"
import { Link } from "react-router-dom";

const NavBar = () => {
    return (
        <ol>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/education">Education</Link></li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Sign Up</Link></li>
            <li><Link to="/feedbackform">Feedback</Link></li>
            <li><Link to="/callback">Callback</Link></li>
            <li><Link to="/useRef">Reference</Link></li>
            <li><Link to="/useMemo">Memo</Link></li>
        </ol>
    );
}

export default NavBar;

