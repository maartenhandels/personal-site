import React, {useRef, useEffect} from "react";

import classes from "./Section1.module.css";

import NavBar from "../NavBar/NavBar";
import Section from "../Section/Section";

const Content = () => {
    const navbarRef = useRef(null);
    const firstPageRef = useRef(null);

    const navItems = [
        {label: "My Studies", ref: useRef(null), type: "item"},
        {label: "My Career", ref: useRef(null), type: "item"},
        {label: "More", ref: useRef(null), type: "item"},
        {label: "Connect", ref: useRef(null), type: "button"}  // <-- Specify it as a 'button'
    ];

    useEffect(() => {
        if (navbarRef.current && firstPageRef.current) {
            const navbarHeight = navbarRef.current.offsetHeight;
            firstPageRef.current.style.height = `calc(100vh - ${navbarHeight}px)`;
        }
    }, []);

    const handleScrollToSection = (ref) => {
        if (ref.current) {
            ref.current.scrollIntoView({behavior: 'smooth'});
        }
    };


    return (
        <>
            <NavBar ref={navbarRef} navItems={navItems} onNavItemClick={handleScrollToSection}/>
            <div ref={firstPageRef} className={classes.FirstPage}>
                <div>Hello World</div>
            </div>
            {navItems.map((item, index) => (
                <Section key={index} ref={item.ref} className={classes.FirstPage}>
                    <div>{item.label}</div>
                </Section>
            ))}
        </>
    )
}

export default Content;