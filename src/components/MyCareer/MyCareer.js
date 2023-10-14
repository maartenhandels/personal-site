import React from "react";

import classes from "./MyCareer.module.css";

import SectionTitle from "../UI/SectionTitle/SectionTitle";
import MyCareerCard from "./MyCareerCard/MyCareerCard";

const MyCareer = () => {
    return (
        <div className={classes.MyCareer}>
            <div className={classes.SectionTitle}>
                <SectionTitle
                    title="My Career"
                    subtitle="Software Engineering"
                />
            </div>
            <div className={classes.CareerCards}>
                <MyCareerCard
                    subtitle="2022 - Today"
                    title="Associate Software Engineer"
                    description="Building Java Spring Microservices with technologies
                    such as Docker and Kubernetes and deploying them to the cloud with Azure."
                />
                <MyCareerCard
                    subtitle="2021 - 2022"
                    title="Graduate Software Engineer"
                    description="Building Java Spring Microservices with technologies
                    such as Docker and Kubernetes and deploying them to the cloud with Azure."
                />
            </div>

        </div>
    );
}

export default MyCareer;