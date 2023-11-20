"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import northLogo from "public/images/NHF_logo_SVG.svg";
import "./Header.css";
import JsHamburger from "../JsHamburger/JsHamburber";

const Header = ({ hideHeader }) => {
  const [activeSection, setActiveSection] = useState(null);

  // Add scroll event listener when the component mounts
  useEffect(() => {
    const vhToPixels = (vh) => {
      const windowHeight = window.innerHeight;
      return (vh * windowHeight) / 100;
    };

    const offsetAdjustment = vhToPixels(10);

    // Function to handle scroll and update active section
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        // Check that window is defined is necessary to prevent build errors
        const scrollPosition = window.scrollY;

        // Define the sections and their corresponding IDs
        const sections = {
          header:
            document.getElementById("header").offsetTop - offsetAdjustment,
          services:
            document.getElementById("services").offsetTop - offsetAdjustment,
          about: document.getElementById("about").offsetTop - offsetAdjustment,
          gallery:
            document.getElementById("gallery").offsetTop - offsetAdjustment,
          process:
            document.getElementById("process").offsetTop - offsetAdjustment,
          quiz: document.getElementById("quiz").offsetTop - offsetAdjustment,
          contact:
            document.getElementById("contact").offsetTop - offsetAdjustment,
        };

        //Find the active section based on scroll position
        const newActiveSection = Object.entries(sections).find(
          ([_, offset], index, array) =>
            scrollPosition >= offset &&
            (index === array.length - 1 || scrollPosition < array[index + 1][1])
        );

        if (newActiveSection && newActiveSection[0] !== activeSection) {
          setActiveSection(newActiveSection[0]);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeSection]);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <header
      id="header"
      className={`sticky top-0 z-10 ${hideHeader ? "hidden" : ""}`}
      role="banner"
    >
      <div
        className="bg-northBlue fixed w-full h-[10vh] flex items-center justify-between  p-2"
        role="navigation"
      >
        <div>
          <JsHamburger />
        </div>

        <div className="w-full md:hidden"></div>
        <Image
          src={northLogo}
          alt="north hardwoods logo and link to home page"
          onClick={() => scrollToSection("header")}
          className="h-[10vh] max-h-[90px] p-2 w-auto header-logo cursor-pointer my-[9px]"
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToSection("header")
            }
          }}
          role="link"
          tabIndex={0}
        />

        <span
          className={`header-links cursor-pointer md:flex hidden ${
            activeSection === "services" ? "active active-section" : ""
          }`}
          onClick={() => scrollToSection("services")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToSection("services")
            }
          }}
          role="link"
          tabIndex={1}
          alt="link to services section"
        >
          Services
        </span>
        <div></div>
        <span
          className={`header-links cursor-pointer md:flex hidden ${
            activeSection === "about" ? "active active-section" : ""
          }`}
          onClick={() => scrollToSection("about")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToSection("about")
            }
          }}
          role="link"
          tabIndex={2}
          alt="link to about section"
        >
          About
        </span>
        <div></div>
        <span
          className={`header-links cursor-pointer md:flex hidden ${
            activeSection === "gallery" ? "active active-section" : ""
          }`}
          onClick={() => scrollToSection("gallery")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToSection("gallery")
            }
          }}
          role="link"
          tabIndex={3}
          alt="link to gallery section"
        >
          Gallery
        </span>
        <div></div>
        <span
          className={`header-links cursor-pointer md:flex hidden ${
            activeSection === "process" ? "active active-section" : ""
          }`}
          onClick={() => scrollToSection("process")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToSection("process")
            }
          }}
          role="link"
          tabIndex={4}
          alt="link to process section"
        >
          Process
        </span>
        <div></div>
        <span
          className={`header-links cursor-pointer md:flex hidden ${
            activeSection === "quiz" ? "active active-section" : ""
          }`}
          onClick={() => scrollToSection("quiz")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToSection("quiz")
            }
          }}
          role="link"
          tabIndex={5}
          alt="link to quiz section"
        >
          Guide
        </span>
        <div></div>
        <span
          className={`header-links cursor-pointer md:flex hidden ${
            activeSection === "contact" ? "active active-section" : ""
          }`}
          onClick={() => scrollToSection("contact")}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              scrollToSection("contact")
            }
          }}
          role="link"
          tabIndex={6}
          alt="link to contact section"
        >
          Contact
        </span>
        <div></div>
      </div>
    </header>
  );
};

Header.noHMR = true; // Disable HMR for this component

export default Header;
