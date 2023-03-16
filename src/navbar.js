import { Link } from "react-router-dom";
import Poems from "./Poems";
const Navbar = () => {
    const github = "https://github.com/cahillathehun/";
    const linkedin = "https://ie.linkedin.com/in/alex-cahill"
    return (
        <nav className="navbar">
            <h1>Ahleks</h1>
            <div className="links">
                <Link to="/">HOME</Link>
                <Link to="/poems">POEMS</Link>
                <a href={github} target="_blank" rel="noreferrer">GITHUB</a>
                <a href={linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
            </div>
        </nav>
     );
}
 
export default Navbar;