import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('user');
    navigate('/login');
  };

  const [searchQuery,setsearchQuery]=useState('');
  const handlequery=(e)=>{
    e.preventDefault();
    if(searchQuery.trim()){
      navigate(`/products?search=${searchQuery}`);
    }
  };

  return (
    <nav className='navbar'>
      <h2 className='site-name'>
        <Link to="/" className="site-link">Sneakzzy</Link>
      </h2>

      <form className="search-Bar" onSubmit={handlequery}>
        <input type="text" className="SearchInput" value={searchQuery} placeholder='Search shoes' onChange={(e)=>setsearchQuery(e.target.value)}/>
        <button className="submit-button">
          🔍
        </button>
      </form>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/products">Products</Link>
        <Link to="/cart">Cart</Link>

        {user ? (
          <>
            <span className="welcome-user">Hi, {user.email}</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
