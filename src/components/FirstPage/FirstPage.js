import React from "react";

import classes from "./FirstPage.module.css";
import Section from "../../containers/Section/Section";

const FirstPage = () => {
  return (
    <Section className={classes.FirstPage}>
      <div className={classes.Content}>
        <h1 className={classes.ProfessionText}>💻 Backend Engineer</h1>
        <h2 className={classes.Text}>
          Building{" "}
          <span className={classes.LightBlue}>Backend Software</span> at
          Tiqets.com -{" "}
          <span className={classes.LightBlue}>Expedia Group B2B</span>
        </h2>
      </div>
      <div className={classes.Wrapper}>
        <div className={classes.ImageWrapper}>
          <img
            src={process.env.PUBLIC_URL + "/images/me_2.jpeg"}
            alt="Me.jpeg"
            className={classes.Image}
          />
        </div>
      </div>
    </Section>
  );
};

export default FirstPage;
