import { Link } from "react-router-dom";
import './../src/header.css';

const Header = () => {
  return (
    <nav className="header">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/select">Select Page</Link></li>
        <li><Link to="/booking">Booking</Link></li>
        <li><Link to="/guest-info">Guest Information</Link></li>
      </ul>
    </nav>
  );
};

export default Header;
