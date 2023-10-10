import React from "react";

import classes from "./NavBar.module.css"

import NavBarItem from "./NavBarItem/NavBarItem";
import NavBarButton from "./NavBarButton/NavBarButton";



const NavBar = () => {
    const navItems = ["About Me", "My Studies", "My Career", "More"]
    return (
        <nav className={classes.NavBar}>
            <div className={classes.NavBarContainer}>
                <div className={classes.Emoji}>👋</div>
                <div className={classes.NavBarItems}>
                    {navItems.map(
                        (text, index) => (
                        <NavBarItem label={text} key={index} />
                        )
                    )}
                    <NavBarButton label="Connect" />
                </div>
            </div>
        </nav>
    )
}

export default NavBar;