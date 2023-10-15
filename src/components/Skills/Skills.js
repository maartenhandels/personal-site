import React, { useEffect, useRef } from 'react';

import classes from "./Skills.module.css"

import Skill from "./Skill/Skill";


import {faJava} from "@fortawesome/fontawesome-free-brands";
import {faPython} from "@fortawesome/fontawesome-free-brands";
import {faReact} from "@fortawesome/fontawesome-free-brands";
import {faPeopleLine} from "@fortawesome/free-solid-svg-icons";
import SectionTitle from "../UI/SectionTitle/SectionTitle";
import ColumnsContainer from "../../containers/ColumnsContainer/ColumnsContainer";

const Skills = ({ skills }) => {

    const skillsList = [
        { icon: faJava, name: 'Java' },
        { icon: faPython, name: 'Python' },
        { icon: faReact, name: 'React'},
        { icon: faPeopleLine, name: 'Team Work' },
        { src: process.env.PUBLIC_URL + "/images/spring-boot-logo.png", name: 'Spring' },
        { icon: faJava, name: 'React'},
    ];

    return (
        <ColumnsContainer>
            <SectionTitle title="Skills" subtitle="🪚 Professional Skills" className={classes.SkillsTitle}/>
            <div className={classes.SkillsList}>
                {skillsList.map((skill, index) => (
                    <Skill key={index} skill={skill.name} icon={skill.icon} src={skill.src}/>
                ))}
            </div>
        </ColumnsContainer>
    );
}

export default Skills;
