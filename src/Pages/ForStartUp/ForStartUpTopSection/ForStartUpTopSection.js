import { Box, Container, Typography, styled } from "@mui/material";
import React from "react";
import { topSegment } from "../../../Context/EcoSystemData";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import Circle from "../../../Assests/Startup/Circle.png";
import { motion } from "framer-motion";
import { ImageReveal } from "../../../Utils/ImageReveal";

const CircleImage = styled("img")(({ theme }) => ({
  width: "55%",
  height: "55%",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "100%",
    marginTop: "2rem",
  },
}));

const Wrapper = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  marginTop: "10rem",
  [theme.breakpoints.down("sm")]: {
    marginTop: "auto",
  },
}));

const ForStartUpTopSection = () => {
  return (
    <>
      <WhiteBackground />
      <Container sx={{ marginTop: { xs: "2rem", sm: "10rem" } }}>
        <Wrapper>
          <CircleImage src={Circle} alt="Circle" />
        </Wrapper>
      </Container>
    </>
  );
};

export default ForStartUpTopSection;

// {
//   /* <Circle>
//   {topSegment.map((item, index) => {
//     const rotationAngle = degreesBetweenSegments * index;
//     const translationX = -Math.cos((rotationAngle * Math.PI) / 180) * 300;
//     const translationY = -Math.sin((rotationAngle * Math.PI) / 180) * 300;
//     return (
//       <SmallCircle
//         key={index}
//         style={{
//           transform: `translate(${translationX}px, ${translationY}px)`,
//         }}
//       >
//         <CircleText>{item.heading}</CircleText>
//       </SmallCircle>
//     );
//   })}
//   <TextBox>
//     <CircleHeading>Start up Ecosystem</CircleHeading>
//     <CircleText>Ideas</CircleText>
//     <CircleText>Invention</CircleText>
//     <CircleText>Research</CircleText>
//     <CircleText>Startup Team Members</CircleText>
//     <CircleText>Investors</CircleText>
//     <CircleText>Mentors&Advisors</CircleText>
//     <CircleText>Entrepreneurs</CircleText>
//   </TextBox>
// </Circle>; */
// }
// const Circle = styled(Box)(({ theme }) => ({
//   position: "relative", // Use relative positioning to contain the SmallCircles
//   width: "600px",
//   height: "600px",
//   borderRadius: "50%",
//   backgroundColor: "#2071EB",
//   margin: "auto",
// }));

// const SmallCircle = styled(Box)(({ theme }) => ({
//   display: "flex",
//   justifyContent: "center",
//   alignItems: "center",
//   position: "absolute",
//   width: "150px",
//   height: "150px",
//   borderRadius: "50%",
//   background: "#42C2FF",
//   overflow: "hidden",
//   left: "40%",
//   top: "40%",
// }));

// const TextBox = styled(Box)(({ theme }) => ({
//   position: "absolute",
//   width: "600px",
//   height: "600px",
//   display: "flex",
//   padding: "5rem",
//   textAlign: "center",
//   flexDirection: "column",
//   justifyContent: "center",
//   alignItems: "center",
// }));

// const CircleHeading = styled(Typography)(({ theme }) => ({
//   color: "#fff",
//   fontFamily: "Poppins",
//   fontSize: "3rem",
//   fontStyle: "normal",
//   fontWeight: 600,
//   lineHeight: "normal",
// }));

// const CircleText = styled(Typography)(({ theme }) => ({
//   color: "#fff",
//   fontFamily: "Poppins",
//   fontSize: "2rem",
//   fontStyle: "normal",
//   fontWeight: "400",
//   lineHeight: "normal",
//   textAlign: "center",
// }));
