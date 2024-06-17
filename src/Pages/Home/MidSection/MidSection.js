import {
  Box,
  Button,
  Container,
  Grid,
  Typography,
  styled,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import cornars from "../../../Assests/Home/cornars.png";
import rentv from "../../../Assests/Home/RentV.png";
import pattern from "../../../Assests/Home/pattern.png";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import { Reveal } from "../../../Utils/Reveal";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const PatternBox = styled("img")(({ theme }) => ({
  padding: 0,
  margin: "0",
  height: "250px",
  width: "250px",
  position: "absolute",
  top: "45%",
  left: "55%",
  zIndex: "-1",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
  [theme.breakpoints.down("md")]: {
    display: "none",
  },
}));

const LeftBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  padding: "5rem",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
  },
}));

const RightBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  padding: "10rem",
  position: "relative",
  [theme.breakpoints.down("md")]: {
    padding: "1rem",
    marginTop: "10rem",
  },
  [theme.breakpoints.down("sm")]: {
    padding: "1rem",
    marginTop: "2rem",
  },
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: "#2071EB",
  fontFamily: "Poppins",
  fontSize: "3.6rem",
  fontStyle: "normal",
  fontWeight: 700,
  lineHeight: "normal",
  marginBottom: "2rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.6rem",
  },
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#6D6D6D",
  fontFamily: "Roboto",
  fontSize: "3rem",
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginBottom: "2rem",
  height: "10rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.4rem",
    height: "10rem",
  },
}));

const ProjectName = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Poppins",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "60px" /* 187.5% */,
}));

const StyledButton = styled(Button)(({ theme }) => ({
  borderRadius: "5px",
  border: "3px solid #2071EB",
  background: "#2071EB",
  color: "#fff",
  fontSize: "2.6rem",
  fontFamily: "Inter",
  fontWeight: "500",
  lineHeight: "3.5rem",
  textTransform: "none",
  display: "inline-flex",
  marginTop: "10rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.2rem",
    lineHeight: "2rem",
    marginTop: "5rem",
  },
  "&:hover": {
    background: "#fff",
    color: "#2071EB",
  },
}));

const CustomDot = ({ onClick, active }) => (
  <button
    style={{
      backgroundColor: active ? "#2071EB" : "#6D6D6D", // Change the color of the dots
      width: "10px",
      height: "10px",
      margin: "0 5px", // Adjust the spacing between dots
      borderRadius: "50%",
      border: "none",
      outline: "none",
      marginBottom: "5rem",
    }}
    onClick={onClick}
  />
);

const MidSection = () => {

  // const GetInTouch = () => {
  //   alert("Working");
  // };

  const projects = [
    {
      name: "Cornars",
      subheading:
        "Cornars Inc is on a mission to build D-Apps across all corners of internet",
      img: cornars,
      buttonText: "Check Cornars",
      url: "https://cornars.com/home",
    },
    {
      name: "Rent V",
      subheading:
        "At RentV, we believe in the power of sharing and the strength of community.",
      img: rentv,
      buttonText: "Check RentV",
      url: "https://www.rentvahan.com/",
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);

  const handleSlideChange = (currentSlide) => {
    console.log("Current slide index:", currentSlide);

    const numProjects = projects.length;

    // Calculate the new activeSlide value within bounds
    let newActiveSlide = (currentSlide + numProjects) % numProjects;

    setActiveSlide(newActiveSlide);
  };

  const [currentProject, setCurrentProject] = useState(projects[0]);
  useEffect(() => {
    setCurrentProject(projects[activeSlide]);
  }, [activeSlide]);

  console.log("activeSlide:", activeSlide);
  console.log("currentProject:", currentProject);

  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <WhiteBackground />
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={6} md={6}>
            <LeftBox>
              <Reveal>
                <Heading>Our Successful Projects</Heading>
              </Reveal>
              <Reveal>
                <ProjectName>{currentProject?.name}</ProjectName>
              </Reveal>
              <Reveal>
                <SubHeading>{currentProject?.subheading}</SubHeading>
              </Reveal>
              <Reveal>
              <StyledButton
                  variant="contained"
                  // onClick={GetInTouch}
                  href={currentProject?.url} // Add this line to set the URL from currentProject
                  target="_blank"
                >
                  {currentProject?.buttonText} {/* Update button text */}
                </StyledButton>
              </Reveal>
            </LeftBox>
          </Grid>
          <Grid item xs={12} sm={6} md={6}>
            <RightBox>
              <PatternBox src={pattern} />
              <Carousel
                responsive={responsive}
                infinite={true}
                swipeable={true}
                draggable={false}
                autoPlay={true}
                showDots={true}
                autoPlaySpeed={3000}
                keyBoardControl={true}
                customDot={<CustomDot />}
                arrows={false}
                slidesToSlide={1}
                partialVisible={false}
                containerClass="react-multi-carousel-list"
                dotListClass="custom-dot-list-style"
                itemClass="carousel-item-padding-40-px"
                afterChange={(previousSlide, { currentSlide, onMove }) => {
                  handleSlideChange(currentSlide);
                }}
              >
                <div>
                  <img src={cornars} alt="" height={"100%"} width={"100%"} />
                </div>
                <div>
                  <img src={rentv} alt="" height={"100%"} width={"100%"} />
                </div>
              </Carousel>
              <Box
                display={{ xs: "flex", sm: "none" }}
                marginTop={"2rem"}
                justifyContent={"center"}
              >
                <StyledButton
                  variant="contained"
                  // onClick={GetInTouch}
                  href={currentProject?.url} // Add this line to set the URL from currentProject
                  
                >
                  {currentProject?.buttonText} {/* Update button text */}
                </StyledButton>
              </Box>
            </RightBox>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default MidSection;
