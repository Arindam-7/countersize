import React from 'react'
import {NavLink} from 'react-router-dom'
import "./Navbar.scss"
import { Button } from '@mui/material';

const Navbar = () => {
    return (
        <>
            <nav>
                <Button className="btn"><NavLink to="https://thearnabsaha.github.io/countersize/" className="navItems" exact>Counter</NavLink></Button>
                <Button className="btn"><NavLink to="/size" className="navItems" exact>Size</NavLink></Button>
            </nav>
        </>
    )
}

export default Navbar
