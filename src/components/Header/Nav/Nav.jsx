import React from "react";
import { Link } from "react-router-dom";
import  styles from './Nav.module.css'

const Nav = () => {
    return (
        <nav className ={styles.nav}> 
            <Link to="/">Home</Link>
            <Link to="/games">Games</Link>
            <Link to="/library">Library</Link>
            <Link to="/learn">Learn</Link>
        </nav>
    )
}

export default Nav;