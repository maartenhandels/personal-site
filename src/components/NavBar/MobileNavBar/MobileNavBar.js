import React from "react";

import classes from "./MobileNavBar.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";

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
        <FontAwesomeIcon
          icon={isMenuOpen ? faXmark : faBars}
          size="2x"
          onClick={() => setMenuOpen(!isMenuOpen)}
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
            <div onClick={() => onNavItemClickHandler(item.ref)}>
              {item.label}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MobileNavBar;
