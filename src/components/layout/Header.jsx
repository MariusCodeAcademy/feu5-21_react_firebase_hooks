import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './header.scss';
import { useAuthCtx } from '../../store/AuthProvider';
import Logout from '../auth/Logout';

function Header() {
  const { isLoggedIn } = useAuthCtx();
  return (
    <header>
      <div className="container">
        <Link to={'/'} className="logo text-decoration-none text-white">
          Logo
        </Link>
        <nav>
          <NavLink className="text-decoration-none text-white px-2" to={'/'}>
            Home page
          </NavLink>
          {isLoggedIn && (
            <>
              <NavLink
                className="text-decoration-none text-white px-2"
                to={'/posts'}
              >
                Posts
              </NavLink>
              <NavLink
                className="text-decoration-none text-white px-2"
                to={'/posts/add'}
              >
                Create Post
              </NavLink>
              <NavLink
                className="text-decoration-none text-white px-2"
                to={'/profile'}
              >
                Profile
              </NavLink>
              <NavLink
                className="text-decoration-none text-white px-2"
                to={'/login'}
              >
                <Logout />
              </NavLink>
            </>
          )}
          {!isLoggedIn && (
            <NavLink
              className="text-decoration-none text-white px-2"
              to={'/login'}
            >
              Login
            </NavLink>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Header;
