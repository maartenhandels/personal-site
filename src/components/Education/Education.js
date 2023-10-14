import React from "react";

import classes from "../Education/Education.module.css";

import SectionTitle from "../UI/SectionTitle/SectionTitle";
import InfoCard from "../UI/InfoCard/InfoCard";
import ColumnsContainer from "../../containers/ColumnsContainer/ColumnsContainer";

const Education = () => {
    const navigateToDeusto = () => {
        window.open('https://www.deusto.es/en/home', '_blank')
    }
    return(
        <ColumnsContainer className={classes.Education}>
            <div className={classes.SectionTitle}>
                <SectionTitle
                    title="Education"
                    subtitle="🎓 University"
                />
            </div>
            <div className={classes.Cards}>
                <InfoCard
                    subtitle="University of Deusto"
                    title="Computer Engineering"
                    description="Bachelor's Degree in Computer Engineering at the presitgious university of Deusto."
                    onClickHandler={navigateToDeusto}
                />
                <InfoCard
                    subtitle="University of Deusto"
                    title="Business Management and Administration"
                    description="Bachelor's Degree in Business Management and Administration at the presitgious
                    university of Deusto, famous for it's Busines Faculty known as Deusto Business School or DBS."
                    onClickHandler={navigateToDeusto}
                />
            </div>
        </ColumnsContainer>
    )
}

export default Education;