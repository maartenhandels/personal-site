import React from "react";

import classes from "./Connect.module.css";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/fontawesome-free-brands";

const Connect = () => {
    return (
        <div className={classes.Connect}>
            <div className={classes.Content}>
                <SectionTitle title="Connect" subtitle="📨️ Contact Details" />
                <div className={classes.ContactDetails}>
                    <h3 className={classes.Subtitle}>CONTACT ME</h3>
                    <h2 className={classes.Title}>Got Questions? Reach Out!</h2>
                    <div className={classes.ContactDetail}>
                        <img
                            src={process.env.PUBLIC_URL + "/images/email.svg"}
                            className={classes.EmailIcon}
                            alt="email-icon"
                        />
                        <a href="mailto:maartenhandels@gmail.com?subject=Wanted to chat about..."
                           className={classes.ContactDetailLink}
                        >
                            maartenhandels@gmail.com
                        </a>
                    </div>
                    <div className={classes.ContactDetail}>
                        <FontAwesomeIcon icon={faLinkedin} className={classes.LinkedinIcon} />
                        <a href="https://www.linkedin.com/in/maarten-handels-cuesta/"
                           className={classes.ContactDetailLink}
                        >
                            maarten-handels-cuesta
                        </a>
                    </div>
                </div>
            </div>
            <p className={classes.Footer}>© 2023 - Developed by Maarten Handels.</p>
        </div>

    )
}

export default Connect;