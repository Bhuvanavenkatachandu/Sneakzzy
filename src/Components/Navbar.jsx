import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const [searchQuery, setsearchQuery] = useState('');
  const handlequery = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <nav className="navbar">
      <h2 className="site-name">
        <Link to="/" className="site-link">Sneakzzy</Link>
      </h2>

      <form className="search-Bar" onSubmit={handlequery}>
        <input
          type="text"
          className="SearchInput"
          value={searchQuery}
          placeholder="Search shoes"
          onChange={(e) => setsearchQuery(e.target.value)}
        />
        <button className="submit-button">🔍</button>
      </form>

      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/products">Products</Link></li>
        <li><Link to="/cart">Cart</Link></li>

        {user ? (
          <>
            <li className="welcome-user">Hi, {user.email}</li>
            <li>
              <button className="logout-btn" onClick={handleLogout}>Logout</button>
            </li>
          </>
        ) : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
          </>
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
