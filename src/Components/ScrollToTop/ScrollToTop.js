import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import ScrollToTopIcon from "./ScrollToTopIcon.png";

const ScrollToTopButton = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const yOffset = window.pageYOffset;
      setShowButton(yOffset > 200);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const buttonStyle = {
    position: "fixed",
    bottom: "2rem",
    right: "2rem",
    zIndex: 1000,
    display: showButton ? "block" : "none",
  };

  return (
    <img
      src={ScrollToTopIcon}
      height={"75px"}
      width={"75px"}
      alt=""
      onClick={scrollToTop}
      style={{...buttonStyle,cursor:'pointer'}}
    />
  );
};

export default ScrollToTopButton;
