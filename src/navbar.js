import { Link } from "react-router-dom";
const Navbar = () => {
    const github = "https://github.com/cahillathehun/";
    const linkedin = "https://ie.linkedin.com/in/alex-cahill"
    return (
        <nav className="navbar">
            <h1>Ahleks</h1>
            <div className="links">
                {/* internal links */}
                <Link to="/">HOME</Link>
                <Link to="/poems">POEMS</Link>
                <Link to="/stats">STATS</Link>
                {/* external links */}
                <a href={github} target="_blank" rel="noreferrer">GITHUB</a>
                <a href={linkedin} target="_blank" rel="noreferrer">LINKEDIN</a>
            </div>
        </nav>
     );
}

export default Navbar;
