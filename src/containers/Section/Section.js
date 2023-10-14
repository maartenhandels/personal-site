import React from "react";

import classes from "./Section.module.css";

const Section = React.forwardRef(({className, children}, ref) => {
    return (
        <div ref={ref} className={`${classes.Section} ${className}`}>
            {children}
        </div>
    );
});

export default Section;