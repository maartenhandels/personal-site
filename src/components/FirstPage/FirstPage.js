import React from "react";

import classes from "./FirstPage.module.css";
import Section from "../Section/Section";

const FirstPage = () => {
  return (
    <Section className={classes.FirstPage}>
      <div className={classes.Content}>
        <h1 className={classes.ProfessionText}>💻 Software Engineer</h1>
        <h2 className={classes.Text}>
          Building{" "}
          <span className={classes.LightBlue}>Cloud Microservices</span> at
          United Health Group -{" "}
          <span className={classes.LightBlue}>Fortune 5</span>
        </h2>
      </div>
      <div className={classes.Wrapper}>
        <div className={classes.ImageWrapper}>
          <img
            src={process.env.REACT_APP_PUBLIC_URL + "/images/me.jpeg"}
            alt="Me.jpeg"
            className={classes.Image}
          />
        </div>
      </div>
    </Section>
  );
};

export default FirstPage;
