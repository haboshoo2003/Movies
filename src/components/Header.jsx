import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className='container'> {/* تم تعديل خطأ إملائي بسيط countainer إلى container */}
            <div className='logo'>
                <Link to='/'>Movies</Link> {/* ⚠️ تم تصحيح حرف L الكبير هنا */}
            </div>
            <ul className='nav-links'>
                <li>
                    <NavLink to='/'>Watchlist</NavLink>
                </li>
                <li>
                    <NavLink to='/watched'>Watched</NavLink>
                </li>
                <li>
                    <NavLink className="btn" to="/add">Add</NavLink>
                </li>
            </ul>
        </div>
    </div>
  );
}

export default Header;
