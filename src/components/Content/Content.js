import React, { useRef, useEffect, useState } from "react";

import classes from "./Content.module.css";

import DesktopNavBar from "../NavBar/DesktopNavBar/DesktopNavBar";
import Section from "../../containers/Section/Section";
import FirstPage from "../FirstPage/FirstPage";
import MobileNavBar from "../NavBar/MobileNavBar/MobileNavBar";
import Experience from "../Experience/Experience";
import Education from "../Education/Education";
import Skills from "../Skills/Skills";
import Connect from "../Connect/Connect";
import ReactGA from "react-ga";

const Content = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const navbarRef = useRef(null);
  const firstPageRef = useRef(null);

  const navItems = [
    { label: "Experience", ref: useRef(null), type: "item", component: <Experience /> },
    { label: "Education", ref: useRef(null), type: "item", component: <Education /> },
    { label: "My Skills", ref: useRef(null), type: "item", component: <Skills /> },
    { label: "Connect", ref: useRef(null), type: "button", component: <Connect /> }, // <-- Specify it as a 'button'
  ];

  useEffect(() => {
    const adjustFirstPageHeight = () => {
      if (navbarRef.current && firstPageRef.current) {
        const navbarHeight = navbarRef.current.offsetHeight;
        firstPageRef.current.style.height = `calc(100vh - ${navbarHeight}px)`;
      }
    };

    const handleResize = () => {
      adjustFirstPageHeight();
      setIsMobile(window.innerWidth <= 768);
    };

    // Initial adjustment and mobile check
    adjustFirstPageHeight();
    setIsMobile(window.innerWidth <= 768);

    // Listen for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleScrollToSection = (ref, label) => {
    if (ref.current) {
      console.log(label);
      // Sending event to Google Analytics
      ReactGA.event({
        category: 'User',
        action: 'Clicked NavBar Button',
        label: label
      });
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      {isMobile ? (
        <MobileNavBar
          isMenuOpen={isMenuOpen}
          setMenuOpen={setMenuOpen}
          navItems={navItems}
          onNavItemClick={handleScrollToSection}
        />
      ) : (
        <DesktopNavBar
          ref={navbarRef}
          navItems={navItems}
          onNavItemClick={handleScrollToSection}
        />
      )}

      <FirstPage />
      {navItems.map((item, index) => (
        <Section key={index} ref={item.ref}>
          {item.component ? item.component : <div className={classes.Section}>
            <h1>{item.label}</h1>
            <h1>🚧 Work in Progress 🔨</h1>
          </div>
          }

        </Section>
      ))}
    </>
  );
};

export default Content;
