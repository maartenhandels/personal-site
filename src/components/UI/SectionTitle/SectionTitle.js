import React from "react";

import classes from "./SectionTitle.module.css";

const SectionTitle = ({ subtitle, title, className }) => {
    return (
        <div className={className}>
            <h3 className={classes.SectionSubtitle}>{subtitle}</h3>
            <h1 className={classes.SectionTitle}>{title}</h1>
        </div>
    )
}

export default SectionTitle;