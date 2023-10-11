import React from "react";

import classes from "./NavBarButton.module.css";

const NavBarButton = ({label, onClick}) => {
    return (
        <div className={classes.NavBarButton} onClick={onClick}>
            {label}
        </div>
    )
}

export default NavBarButton;