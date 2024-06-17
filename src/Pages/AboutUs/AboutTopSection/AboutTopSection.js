import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import arrow from "../../../Assests/About/arrow.png";
import Trial from "../../../Assests//OurDomainImages/domain2.png";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import pattern from "../../../Assests/Home/pattern.png";
import { Reveal } from "../../../Utils/Reveal";
import { ImageReveal } from "../../../Utils/ImageReveal";

const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  textAlign: "start",
  fontFamily: "Poppins",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "normal",
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Roboto",
  fontSize: "2.4rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
}));

const Text = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Roboto",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginLeft: "3rem",
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  position: "relative",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "1rem",
}));

const PatternImage = styled("img")(({ theme }) => ({
  width: "250px",
  height: "250px",
  position: "absolute",
  top: "10rem",
  left: "45%",
  zIndex: "-1",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));
const Image = styled("img")(({ theme }) => ({
  width: "400px",
  height: "auto",
  position: "absolute",
  top: "5rem",
  left: "10%",
  [theme.breakpoints.down("sm")]: {
    position: "initial",
    width: "350px",
  },
}));

const TopSection = () => {
  return (
    <>
      {/* <WhiteBackground /> */}
      <Container maxWidth="lg" sx={{ marginTop: { xs: "5rem", sm: "10rem" } }}>
        <Reveal>
          <Heading gutterBottom>About us</Heading>
        </Reveal>
        <Reveal>
          <SubHeading gutterBottom>
            Welcome to TechClockers Private Limited - Empowering Next-Gen
            Startups with Cutting-Edge Technology Solutions!
          </SubHeading>
        </Reveal>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={5} md={6}>
            <Box display={"flex"} alignItems={"flex-start"} marginTop={"4rem"}>
              <img src={arrow} alt="arrow" />{" "}
              <Reveal>
                <Text>
                  About Us: At TechClockers, we understand the significance of
                  time in the fast-paced world of technology.
                </Text>
              </Reveal>
            </Box>
            <Box display={"flex"} alignItems={"flex-start"} marginTop={"4rem"}>
              <img src={arrow} alt="arrow" />{" "}
              <Reveal>
                <Text>
                  As a technology service-based company, we are committed to
                  helping startups develop innovative and impactful products
                  that keep them ahead of the curve.
                </Text>
              </Reveal>
            </Box>
            <Box display={"flex"} alignItems={"flex-start"} marginTop={"4rem"}>
              <img src={arrow} alt="arrow" />{" "}
              <Reveal>
                <Text>
                  Our team of experts is passionate about delivering timely and
                  top-notch solutions to our clients, ensuring their success in
                  the ever-evolving digital landscape.
                </Text>
              </Reveal>
            </Box>
            {/* <Box display={"flex"} alignItems={"flex-start"} marginTop={"4rem"}>
              <img src={arrow} alt="arrow" />{" "}
              <Text>
                To empower next-generation startups by providing them with the
                tools, expertise, and support they need to transform their
                visionary ideas into reality
              </Text>
            </Box> */}
          </Grid>
          <Grid item xs={12} sm={7} md={6}>
            <RightBox>
              <PatternImage src={pattern} alt="" />
              <Image src={Trial} alt="" height={"auto"} width={"350px"} />
            </RightBox>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Box display={"flex"} alignItems={"flex-start"} marginTop={"4rem"}>
              <img src={arrow} alt="arrow" />{" "}
              <Reveal>
                <Text>
                  To empower next-generation startups by providing them with the
                  tools, expertise, and support they need to transform their
                  visionary ideas into reality.
                </Text>
              </Reveal>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TopSection;
