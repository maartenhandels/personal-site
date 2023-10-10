import React from "react";

import classes from "./NavBarItem.module.css"

const NavBarItem = ({ label }) => {
    return (
        <div className={classes.NavBarItem}>
            {label}
        </div>
    )
}

export default NavBarItem;