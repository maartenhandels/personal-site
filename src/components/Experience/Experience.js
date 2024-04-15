import React from "react";

import classes from "./Experience.module.css";

import SectionTitle from "../UI/SectionTitle/SectionTitle";
import InfoCard from "../UI/InfoCard/InfoCard";
import ColumnsContainer from "../../containers/ColumnsContainer/ColumnsContainer";

const Experience = () => {
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
                    subtitle="Optum - United Health Group"
                    title="Software Engineer"
                    description="Building cloud microservices for the healthcare industry leader and Fortune 500's
                    5th company using a SCRUM methodology. Tech Stack: Java (Spring), Python, Docker, Kubernetes,
                    Azure, SQL (PostgreSQL), Kafka, Redis, Jenkins, Git and more."
                    onClickHandler={navigateToOptum}
                />
                <InfoCard
                    subtitle="Optum - United Health Group"
                    title="Software Engineer Associate"
                    description="Building cloud microservices for the healthcare industry leader and Fortune 500's
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
