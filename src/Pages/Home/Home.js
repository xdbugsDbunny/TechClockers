import React from "react";
import WhiteBackground from "../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import TopSection from "./TopSection/TopSection";
import { Box, styled } from "@mui/material";
import SerivceSection from "./ServiceSection/SerivceSection";
import DomainSection from "./DomainSection/DomainSection";
import MidSection from "./MidSection/MidSection";
import OurTeam from "./OurTeam/OurTeam";
import Footer from "../../Components/Footer/Footer";
import HomeLandingPage from "./HomeLandingPage/HomeLandingPage";

const Wrapper = styled(Box)({
  // display: "flex",
  // flexDirection: "column",
});

const Home = () => {
  return (
    <>
      <HomeLandingPage />
      <TopSection />
      <SerivceSection />
      <DomainSection />
      <MidSection />
      <OurTeam />
      <Footer />
    </>
  );
};

export default Home;
