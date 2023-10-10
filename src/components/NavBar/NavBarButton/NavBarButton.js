import React from "react";

import classes from "./NavBarButton.module.css";

const NavBarButton = ({ label }) => {
    return(
        <div className={classes.NavBarButton}>
            {label}
        </div>
    )
}

export default NavBarButton;