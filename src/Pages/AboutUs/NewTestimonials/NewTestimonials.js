import { Box, Container, Grid, Typography, styled } from "@mui/material";
import React from "react";
import { testimonialPageData } from "../../../Context/TestimonialData";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import { Reveal } from "../../../Utils/Reveal";

const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Inter",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textAlign: "center",
  marginTop: "5rem",
  marginBottom: "5rem",
}));

const BlueCircle = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "250px",
  borderRadius: "50%",
  border: "10px solid #2071EB",
  background: "#FFF",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const Name = styled(Typography)(({ theme }) => ({
  color: "#000",
  textAlign: "start",
  fontFamily: "Poppins",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineFeight: "normal",
  textTransform: "none",
}));

const Designation = styled(Typography)(({ theme }) => ({
  color: "#2071EB",
  fontFamily: "Poppins",
  fontSize: "2.4rem",
  fontStyle: "normal",
  fontWeight: "500",
  lineHeight: "normal",
  textTransform: "capitalize",
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "#6D6D6D",
  fontFamily: "Roboto",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  width: "30rem",
  textAlign: "center",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  height: "auto",
  width: "100%",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#6D6D6D",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "5rem",
}));
const NewTestimonials = () => {
  return (
    <>
      <Box sx={{ height: "auto", width: "100%" }}>
        {/* <WhiteBackground /> */}
        <Container maxWidth="lg">
          <Heading gutterBottom>Client Testimonials</Heading>
          {/* <SubHeading gutterBottom>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim.
          </SubHeading> */}
          <Grid container spacing={5}>
            {testimonialPageData.map((item, index) => (
              <Grid item xs={12} sm={6} md={6} key={index}>
                <Wrapper>
                  <BlueCircle>
                    <img
                      src={item.img}
                      alt=""
                      height={"175px"}
                      width={"175px"}
                      style={{borderRadius:'50%', background:'grey'}}
                    />
                  </BlueCircle>
                  <Reveal>
                    <Name>{item.name}</Name>
                  </Reveal>
                  <Reveal>
                    <Description>{item.description}</Description>
                  </Reveal>
                  <Reveal>
                    {/* <Designation>{item.designation}</Designation> */}
                  </Reveal>
                </Wrapper>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default NewTestimonials;
