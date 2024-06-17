import React, { useState } from "react";
import {
  Grid,
  Typography,
  Button,
  styled,
  Box,
  Container,
} from "@mui/material";
import { testimonialPageData } from "../../../Context/TestimonialData";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import StarRateIcon from '@mui/icons-material/StarRate';


const MainBox = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "auto",
}));

const CircleContainer = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "250px",
  height: "250px",
  border: "4px solid #2071EB",
  borderRadius: "50%",
}));

const Wrapper = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
}));

const ImageBox = styled("img")(({ theme }) => ({
  position: "absolute",
  width: "80px",
  height: "80px",
  borderRadius: "50%",
  border: "4px solid #2071EB",
  overflow: "hidden",
  // boxShadow: "0 0 0 4px #222, 0 0 0 6px #fff",
}));

const Image = styled("img")(({ theme }) => ({
  position: "absolute",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  borderRadius: "50%",
  objectFit: "cover",
}));

const Description = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  textAlign: "justify",
  fontFamily: "Roboto",
  fontSize: "2.4rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "45px",
}));
const Name = styled(Typography)(({ theme }) => ({
  color: "#000",
  textAlign: "justify",
  fontFamily: "Poppins",
  fontSize: "2.4rem",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
}));

const Designation = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  textAlign: "justify",
  fontFamily: "Roboto",
  fontSize: "2.2rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "25px",
}));

const StyledButton = styled(Button)(({ theme }) => ({
  width: "40px",
  height: "60px",
  borderRadius: "50%",
  border: "1px solid #2071EB",
}));

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrevious = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? testimonialPageData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === testimonialPageData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const calculatePosition = (index, total) => {
    const angle = (index / (total - 1)) * Math.PI + Math.PI / 2;
    const radius = 220;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);
    return { x, y };
  };

  return (
    <Container style={{ marginTop: "25rem" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={6}>
          <MainBox>
            <CircleContainer>
              <Wrapper>
                <Image src={testimonialPageData[activeIndex].img} />
                {testimonialPageData.map((item, index) => {
                  const position = calculatePosition(
                    index,
                    testimonialPageData.length
                  );
                  return (
                    <ImageBox
                      key={index}
                      alt={item.name}
                      src={item.img}
                      onClick={() => handleImageClick(index)}
                      style={{
                        transform: `translate(${position.x}px, ${position.y}px)`,
                      }}
                    ></ImageBox>
                  );
                })}
              </Wrapper>
            </CircleContainer>
          </MainBox>
        </Grid>
        <Grid item xs={12} sm={6} md={6}>
          <MainBox flexDirection={"column"}>
            <Description>
              {testimonialPageData[activeIndex].description}
            </Description>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Box>
              <StarRateIcon fontSize="large"/>
              <StarRateIcon fontSize="large"/>
              <StarRateIcon fontSize="large"/>
              <StarRateIcon fontSize="large"/>
              <StarRateIcon fontSize="large"/>
            </Box>
            <Name>{testimonialPageData[activeIndex].name}</Name>
            <Designation>
              {testimonialPageData[activeIndex].designation}
            </Designation>
          </MainBox>
        </Grid>
      </Grid>
      <Grid container spacing={2} mt={"18rem"}>
        <Grid item xs={12}>
          <Box display={"flex"} justifyContent={"center"}>
            <StyledButton onClick={handlePrevious}>
              <ChevronLeftIcon fontSize="large" />
            </StyledButton>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <StyledButton onClick={handleNext}>
              <ChevronRightIcon fontSize="large" />
            </StyledButton>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Testimonials;
