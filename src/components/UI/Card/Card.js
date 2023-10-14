import React from "react";

import classes from "./Card.module.css";

const Card = ({ className, children, onClickHandler }) => {
    return (
      <div className={`${classes.Card} ${className}`} onClick={onClickHandler}>
          {children}
      </div>
    );
}

export default Card;