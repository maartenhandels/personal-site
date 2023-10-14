import React from "react";

import classes from "./SectionTitle.module.css";

const SectionTitle = ({subtitle, title}) => {
    return (
        <>
            <h3 className={classes.SectionSubtitle}>{subtitle}</h3>
            <h1 className={classes.SectionTitle}>{title}</h1>
        </>
    )
}

export default SectionTitle;