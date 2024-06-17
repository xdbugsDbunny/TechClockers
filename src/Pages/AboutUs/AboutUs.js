import React from "react";
import TopSection from "./AboutTopSection/AboutTopSection";
import AboutMidSection from "./AboutMidSection/AboutMidSection";
import Testimonials from "./Testimonials/Testimonials";
import { Box } from "@mui/material";
import Footer from "../../Components/Footer/Footer";
import CommonLandingPage from "../../Components/CommonLandingPage/CommonLandingPage";
import NewTestimonials from "./NewTestimonials/NewTestimonials";
import AboutLandingImage from "../../Assests/About/AboutLandingImage.png"
// import Products from "./Products/Products";
import TestPage from "./Products/TestPage";

const heading = "At TechClockers, we understand the significance of time in the fast-paced world of technology."
const subHeading = "At TechClockers, we value time's essence in the rapidly-evolving world of technology. Our mission is to deliver innovative solutions with precision and promptness."
const AboutUs = () => {
  return (
    <>
      <CommonLandingPage image={AboutLandingImage} heading={heading} subHeading={subHeading} />
      <TopSection />
      <Box height={{xs:"700px",sm:'500px'}}>
        <AboutMidSection />
      </Box>
      <NewTestimonials />
      {/* <Products/> */}
      <TestPage/>
      <Footer />
    </>
  );
};

export default AboutUs;
