import React from "react";

import classes from "./InfoCard.module.css";

import Card from "../Card/Card";

const InfoCard = ({ subtitle, title, description, onClickHandler }) => {
    return (
        <Card className={classes.InfoCard} onClickHandler={onClickHandler}>
            <div className={classes.Subtitle}>
                <div className={classes.SubtitleCircle}></div>
                <p className={classes.SubtitleText}>{subtitle}</p>
            </div>
            <h4 className={classes.Title}>{title}</h4>
            <p className={classes.Description}>{description}</p>
        </Card>
    )
}

export default InfoCard;