import React from "react";

import classes from "./Skill.module.css";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

const Skill = ({ skill, icon, src }) => {
    return (
        <div className={classes.Skill} >
            {icon ?
                <FontAwesomeIcon icon={icon} size="3x"/> :
                <img src={src} alt={`${skill} icon`} className={classes.IconImage}/>
            }

            <h4 className={classes.SkillText}>{skill}</h4>
        </div>
    )
}

export default Skill;