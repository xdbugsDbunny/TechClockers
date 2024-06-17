import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import Arrow from "../../../Assests/Startup/Arrow.png";
import { ImageReveal } from "../../../Utils/ImageReveal";

const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "20px",
  marginTop: "8rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.2rem",
    marginTop: "8rem",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#6D6D6D",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "2.3rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "50px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.8rem",
    lineHeight: "25px",
  },
}));

const TriangleImage = styled("img")(({ theme }) => ({
  width: "80%",
  height: "80%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("sm")]: {
    marginTop: "auto",
  },
}));

const ForStartUpMidSection = () => {
  return (
    <>
      <WhiteBackground />
      <Container maxWidth="xl">
        <Heading gutterBottom>Our Services</Heading>
        {/* <SubHeading>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim .
        </SubHeading> */}
        <Wrapper>
          {/* <ImageReveal side={500}> */}
          <TriangleImage src={Arrow} alt="Circle" />
          {/* </ImageReveal> */}
        </Wrapper>
      </Container>
    </>
  );
};

export default ForStartUpMidSection;
