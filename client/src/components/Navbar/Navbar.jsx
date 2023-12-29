import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';
import logo from "../../assets/logo2.png";
import search from "../../assets/search.svg";
import Avatar from "../../components/Avatar/Avatar";
import Button from "../../components/Button/Button";

const Navbar = () => {
  let user = null;
  return (
    <>
      <nav>
        <div className="navbar">
          <Link to="/" className="nav-items logo">
            <img src={logo} alt="stackoverflow" className="nav-logo" />
          </Link>
          <Link to="/" className="nav-items nav-btn">
            Person
          </Link>
          <Link to="/" className="nav-items nav-btn">
            About
          </Link>
          <Link to="/" className="nav-items nav-btn">
            For Teams
          </Link>
          <form>
            <input type="text" placeholder="Search..." />
            <img src={search} alt="search" className="icon" />
          </form>
          {user == null ? (
            <Link to="/Auth" className="nav-items nav-links">
              Log In
            </Link>
          ) : (
            <>
              <Link to='/Profile'>
                <Avatar
                  children="M"
                  backgroundColor="lightblue"
                  px="2px"
                  py="9px"
                  color="red"
                  borderRadius="10px"
                  fontSize="16px"
                ></Avatar>
              </Link>
              <Button />
            </>
          )}
        </div>
      </nav>
    </>
  );
};
export default Navbar;
