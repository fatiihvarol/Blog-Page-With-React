import { Link } from 'react-router-dom'
const Navbar = () => {


    return (
        <nav className="navigation">
            <h1>Fatih's Blog</h1>
            <Link to="/">Home Page</Link>
            <Link to="/create">New Blog</Link>
        </nav>
    );
}

export default Navbar;
