import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navBar">
      <h1>Spider Blog</h1>
      <Link to="/">Homepage</Link>
      <Link to="/create-form">Create Blog</Link>
    </nav>
  );
};

export default NavBar;
