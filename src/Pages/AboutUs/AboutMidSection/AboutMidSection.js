import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import vision from "../../../Assests/About/vision.png";
import mission from "../../../Assests/About/mission.png";

const Circle = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "330px",
  height: "330px",
  borderRadius: "50%",
  backgroundColor: "rgba(32, 113, 235, 0.20)",
  margin: "auto",
  [theme.breakpoints.down("sm")]: {
    width: "300px",
    height: "300px",
  },
}));

const SmallCircleOne = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  background: "rgba(32, 113, 235, 0.30)",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "hidden",
  margin: "auto",
  animation: "circleOne 6s linear infinite",
  "@keyframes circleOne": {
    "0%": {
      transform: "rotate(0deg) translate(-165px) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg) translate(-165px) rotate(0deg)",
    },
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const SmallCircleTwo = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  background: "rgba(32, 113, 235, 0.30)",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "hidden",
  margin: "12rem",
  animation: "smallCircleFirst 10s linear infinite",
  "@keyframes smallCircleFirst": {
    "0%": {
      transform: "rotate(0deg) translate(-165px) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(360deg) translate(-165px) rotate(0deg)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SmallCircleThree = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  position: "absolute",
  width: "120px",
  height: "120px",
  borderRadius: "50%",
  background: "rgba(32, 113, 235, 0.30)",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "hidden",
  margin: "auto",
  animation: "circle 6s linear infinite",
  "@keyframes circle": {
    "0%": {
      transform: "rotate(360deg) translate(-165px) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(0deg) translate(-165px) rotate(0deg)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const SmallCircleFour = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "75px",
  height: "75px",
  borderRadius: "50%",
  background: "rgba(32, 113, 235, 0.30)",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  overflow: "hidden",
  margin: "12rem",
  animation: "smallCircle 10s linear infinite",
  "@keyframes smallCircle": {
    "0%": {
      transform: "rotate(360deg) translate(-165px) rotate(0deg)",
    },
    "100%": {
      transform: "rotate(0deg) translate(-165px) rotate(0deg)",
    },
  },
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

const TextBox = styled(Box)(({ theme }) => ({
  position: "absolute",
  width: "340px",
  height: "340px",
  padding: "5rem",
}));

const CircleHeading = styled(Typography)(({ theme }) => ({
  color: "#2071EB",
  fontFamily: "Poppins",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
}));

const CircleText = styled(Typography)(({ theme }) => ({
  color: "#6D6D6D",
  fontFamily: "Roboto",
  fontSize: "1.5rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
}));

const AboutMidSection = () => {
  return (
    <>
      <Container maxWidth="md" style={{ marginTop: "20rem" }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              position={{ xs: "initial", sm: "relative" }}
              height={{ xs: "350px", sm: "500px" }}
            >
              <Circle>
                <SmallCircleOne>
                  <img src={mission} alt="" height={"75px"} width={"75px"} />
                </SmallCircleOne>
                <SmallCircleTwo></SmallCircleTwo>
                <TextBox>
                  <CircleHeading>MISSION</CircleHeading>
                  <CircleText>
                    To empower next-generation startups by providing them with
                    the tools, expertise, and support they need to transform
                    their visionary ideas into reality. We believe that by
                    valuing time and adhering to timely delivery, we can make a
                    lasting impact on our clients' businesses and help shape the
                    future of technology.
                  </CircleText>
                </TextBox>
              </Circle>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <Box
              position={{ xs: "initial", sm: "relative" }}
              height={{ xs: "350px", sm: "500px" }}
            >
              <Circle>
                <SmallCircleThree>
                  <img src={vision} alt="" height={"75px"} width={"75px"} />
                </SmallCircleThree>
                <SmallCircleFour></SmallCircleFour>
                <TextBox>
                  <CircleHeading>VISION</CircleHeading>
                  <CircleText>
                    Techclockers envisions becoming a leading provider of
                    cutting-edge technology solutions. We prioritize innovation
                    and creativity to deliver transformative services that set
                    our clients apart. With a client-centric approach, we ensure
                    timely delivery, exceed expectations, and empower success in
                    the dynamic digital landscape.
                  </CircleText>
                </TextBox>
              </Circle>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AboutMidSection;
