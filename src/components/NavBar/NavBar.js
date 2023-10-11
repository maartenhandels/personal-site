import React from "react";

import classes from "./NavBar.module.css"

import NavBarItem from "./NavBarItem/NavBarItem";
import NavBarButton from "./NavBarButton/NavBarButton";


const NavBar = React.forwardRef(({navItems, onNavItemClick}, ref) => {
    return (
        <nav ref={ref} className={classes.NavBar}>
            <div className={classes.NavBarContainer}>
                <div className={classes.Emoji}>👋</div>
                <div className={classes.NavBarItems}>
                    {navItems.map((item, index) => {
                        if (item.type === "button") {
                            return (
                                <NavBarButton
                                    label={item.label}
                                    key={index}
                                    onClick={() => onNavItemClick(item.ref)}
                                />
                            );
                        } else {
                            return (
                                <NavBarItem
                                    label={item.label}
                                    key={index}
                                    onClick={() => onNavItemClick(item.ref)}
                                />
                            );
                        }
                    })}
                </div>
            </div>
        </nav>
    )
});


export default NavBar;