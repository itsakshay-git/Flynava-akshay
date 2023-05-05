import React from "react";
import styles from "./Nav.module.css";
import { FaSearch } from "react-icons/fa";
import { Link } from "react-router-dom";

const Nav = ({ setIsLoggedIn }) => {
  return (
    <div className={styles.nav}>
      <h1 className={styles.logo}>Wookie</h1>
      <div className={styles.navlist}>
        <ul>
          <li>
          <Link to="/home">Home</Link>
          </li>
          <li>
          <Link to="/Genre">Genre</Link>
          </li>
          <li>
          <Link to="/Comedy">Comedy</Link>
          </li>
          <li>
          <Link to="/Action">Action</Link>
          </li>
          <li>
          <Link to="/Romance">Romance</Link>
          </li>
          <li>
          <Link to="/Topimdb">Top IMDB</Link>
          </li>
        </ul>
        <div>
          <form action="" className={styles.search}>
            <input type="search" placeholder="Enter Keywords Here" />
            <button>
              <FaSearch />
            </button>
          </form>
        </div>
        <button className={styles.btn} onClick={() => setIsLoggedIn(false)}>
            LOGOUT
        </button>
      </div>
    </div>
  );
};

export default Nav;
