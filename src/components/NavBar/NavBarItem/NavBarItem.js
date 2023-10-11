import React from "react";

import classes from "./NavBarItem.module.css";

const NavBarItem = ({ label, onClick }) => {
  return (
    <div className={classes.NavBarItem} onClick={onClick}>
      {label}
    </div>
  );
};

export default NavBarItem;
