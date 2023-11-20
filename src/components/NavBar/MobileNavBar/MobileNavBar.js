import React from "react";

import classes from "./MobileNavBar.module.css";
import Hamburger from 'hamburger-react'


const MobileNavBar = ({
  isMenuOpen,
  setMenuOpen,
  navItems,
  onNavItemClick,
}) => {
  const onNavItemClickHandler = (ref) => {
    onNavItemClick(ref);
    setMenuOpen(!isMenuOpen);
  };
  return (
    <div className={classes.MobileNavBar}>
      <div className={classes.TopBar}>
          <div className={classes.Emoji}>👋</div>
          <Hamburger
              toggled={isMenuOpen}
              toggle={setMenuOpen}
              color="#130f49"
          />
      </div>
      <div
        className={
          isMenuOpen
            ? `${classes.FullScreenMenu} ${classes.Open}`
            : `${classes.FullScreenMenu} ${classes.Closed}`
        }
      >
          <div className={classes.NavOptions}>
              {navItems.map((item) => (
                  <div onClick={() => onNavItemClickHandler(item.ref, item.label)} className={classes.NavOption}>
                      {item.label}
                  </div>
              ))}
         </div>
      </div>


    </div>
  );
};

export default MobileNavBar;
