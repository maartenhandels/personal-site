import React from "react";

import classes from "./MyCareerCard.module.css";

import Card from "../../UI/Card/Card";

const MyCareerCard = ({ subtitle, title, description }) => {
    return (
        <Card>
            <div className={classes.Subtitle}>
                <div className={classes.SubtitleCircle}></div>
                <p className={classes.SubtitleText}>{subtitle}</p>
            </div>
            <h4 className={classes.Title}>{title}</h4>
            <p className={classes.Description}>{description}</p>
        </Card>
    )
}

export default MyCareerCard;