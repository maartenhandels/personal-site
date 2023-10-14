import React from "react";

import classes from "./ColumnsContainer.module.css";

const ColumnsContainer = ({ className, children }) => {
    return (
        <div className={`${classes.ColumnsContainer} ${className}`}>
            {children}
        </div>
    )
}

export default ColumnsContainer;