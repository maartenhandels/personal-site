import React from 'react';

import classes from "./Skills.module.css"

import Skill from "./Skill/Skill";


import {faJava} from "@fortawesome/fontawesome-free-brands";
import {faPython} from "@fortawesome/fontawesome-free-brands";
import {faJsSquare} from "@fortawesome/fontawesome-free-brands";
import {faReact} from "@fortawesome/fontawesome-free-brands";
import {faPeopleLine} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import ColumnsContainer from "../../containers/ColumnsContainer/ColumnsContainer";

const Skills = ({ skills }) => {

    const technicalSkills = [
        { icon: faJava, name: 'Java' },
        { icon: faPython, name: 'Python' },
        { icon: faJsSquare, name: 'Javascript' },
        { src: process.env.PUBLIC_URL + "/images/spring-boot-icon.png", name: 'Spring' },
        { icon: faReact, name: 'React'},
        { src: process.env.PUBLIC_URL + "/images/microsoft-icon.png", name: 'Azure'},
        { src: process.env.PUBLIC_URL + "/images/docker-icon.png", name: 'Docker'},
        { src: process.env.PUBLIC_URL + "/images/kubernetes-icon.png", name: 'Kubernetes'},
        { src: process.env.PUBLIC_URL + "/images/kafka-icon.png", name: 'Kafka'},

    ];

    const softSkills = [
        { src: process.env.PUBLIC_URL + "/images/scrum-icon.png", name: 'Scrum' },
        { icon: faPeopleLine, name: 'Team Work' },
        { src: process.env.PUBLIC_URL + "/images/leader-icon.png", name: 'Leadership' },
    ]

    return (
        <ColumnsContainer>
            <SectionTitle title="Skills" subtitle="🪚 Professional Skills" className={classes.SkillsTitle}/>
            <div className={classes.SkillsList}>
                <SectionTitle subtitle="Technical Skills" />
                <div className={classes.SkillsGroup}>
                    {technicalSkills.map((skill, index) => (
                        <Skill key={index} skill={skill.name} icon={skill.icon} src={skill.src}/>
                    ))}
                </div>
                <SectionTitle subtitle="Soft Skills" />
                <div className={classes.SkillsGroup}>
                    {softSkills.map((skill, index) => (
                        <Skill key={index} skill={skill.name} icon={skill.icon} src={skill.src}/>
                    ))}
                </div>
            </div>
        </ColumnsContainer>
    );
}

export default Skills;
