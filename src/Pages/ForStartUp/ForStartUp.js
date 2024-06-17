import React from "react";
import ForStartUpTopSection from "./ForStartUpTopSection/ForStartUpTopSection";
import ForStartUpBottonSection from "./ForStartUpBottonSection/ForStartUpBottonSection";
import ForStartUpMidSection from "./ForStartUpMidSection/ForStartUpMidSection";
import { Box } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import CommonLandingPage from "../../Components/CommonLandingPage/CommonLandingPage";
import LandingImage from "../../Assests/Startup/LandingImage.png";

const heading = "Empowering Startups to Embrace the Future, Right on Time."
const subHeading = "At TechClockers, we empower startups to seize opportunities and thrive in the digital age, providing timely and innovative solutions that pave the way for a promising future."

const ForStartUp = () => {
  return (
    <>
      <CommonLandingPage
        image={LandingImage}
        heading={heading}
        subHeading={subHeading}
      />
      <ForStartUpTopSection />
      <ForStartUpMidSection />
      <ForStartUpBottonSection />
      <Footer />
    </>
  );
};

export default ForStartUp;
