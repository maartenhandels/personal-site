import React, { useRef, useEffect } from "react";

import classes from "./Content.module.css";

import NavBar from "../NavBar/NavBar";
import Section from "../Section/Section";
import FirstPage from "../FirstPage/FirstPage";

const Content = () => {
  const navbarRef = useRef(null);
  const firstPageRef = useRef(null);

  const navItems = [
    { label: "My Career", ref: useRef(null), type: "item" },
    { label: "My Skills", ref: useRef(null), type: "item" },
    { label: "More", ref: useRef(null), type: "item" },
    { label: "Connect", ref: useRef(null), type: "button" }, // <-- Specify it as a 'button'
  ];

  useEffect(() => {
    if (navbarRef.current && firstPageRef.current) {
      const navbarHeight = navbarRef.current.offsetHeight;
      firstPageRef.current.style.height = `calc(100vh - ${navbarHeight}px)`;
    }
  }, []);

  const handleScrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <NavBar
        ref={navbarRef}
        navItems={navItems}
        onNavItemClick={handleScrollToSection}
      />
      <FirstPage />
      {navItems.map((item, index) => (
        <Section key={index} ref={item.ref} className={classes.FirstPage}>
          <h1 className={classes.Section}>🚧 Work in Progress 🔨</h1>
        </Section>
      ))}
    </>
  );
};

export default Content;
