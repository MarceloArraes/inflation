import { Link } from '@tanstack/react-router';
import DarkModeToggle from './DarkModeToggle';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/scroll">Scroll</Link>
        </li>
        <li>
          <Link to="/narrative">Narrative</Link>
        </li>
      </ul>
      <DarkModeToggle />
    </nav>
  );
};

export default Navbar;
