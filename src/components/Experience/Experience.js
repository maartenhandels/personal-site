import React from "react";

import classes from "./Experience.module.css";

import SectionTitle from "../UI/SectionTitle/SectionTitle";
import InfoCard from "../UI/InfoCard/InfoCard";
import ColumnsContainer from "../../containers/ColumnsContainer/ColumnsContainer";

const Experience = () => {
    const navigateToTiqets = () => {
        window.open('https://www.tiqets.com', '_blank');
    }

    const navigateToOptum = () => {
        window.open('https://www.optum.com', '_blank');
    }

    const navigateToSmowltech = () => {
        window.open('https://smowl.net/en/', '_blank');
    }

    return (
        <ColumnsContainer>
            <div className={classes.SectionTitle}>
                <SectionTitle
                    title="Experience"
                    subtitle="👨‍💻 Software Engineering"
                />
            </div>
            <div>
                <InfoCard
                    subtitle="Tiqets.com - Expedia Group B2B"
                    title="Backend Engineer"
                    description="Building scalable backend services for Tiqets.com, the online ticketing platform
                    helping travelers discover and book ways to experience culture, now part of Expedia Group B2B.
                    Tech Stack: Python, FastAPI, Flask, PostgreSQL, Kubernetes, AWS, Datadog,
                    API design, distributed systems, observability and cloud-native architecture."
                    onClickHandler={navigateToTiqets}
                />
                <InfoCard
                    subtitle="Optum - United Health Group"
                    title="Software Engineer"
                    description="Built cloud microservices for the healthcare industry leader and Fortune 500's
                    5th company using a SCRUM methodology. Tech Stack: Java (Spring), Python, Docker, Kubernetes,
                    Azure, SQL (PostgreSQL), Kafka, Redis, Jenkins, Git and more."
                    onClickHandler={navigateToOptum}
                />
                <InfoCard
                    subtitle="Optum - United Health Group"
                    title="Software Engineer Associate"
                    description="Built cloud microservices for the healthcare industry leader and Fortune 500's
                    5th company using a SCRUM methodology. Tech Stack: Java (Spring), Python, Docker, Kubernetes,
                    Azure, SQL (PostgreSQL), Kafka, Redis, Jenkins, Git and more."
                    onClickHandler={navigateToOptum}
                />
                <InfoCard
                    subtitle="Smowltech"
                    title="Software Developer Intern"
                    description="Web Development for SmowlTech (EdTech company), offering automatic proctoring
                    solutions to improve eLearning. TechStack: JavaSript, PHP, HTML, CSS, Git."
                    onClickHandler={navigateToSmowltech}
                />
            </div>
        </ColumnsContainer>
    );
}

export default Experience;
