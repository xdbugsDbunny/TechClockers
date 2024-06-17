import { Box, Button, Divider, Grid } from "@mui/material";
import React from "react";
import { Reveal } from "../../Utils/Reveal";
import BlueBackground from "../BackGround/BlueBackGround/BlueBackground";
import Header from "../Header/Header";
import {
  Heading,
  Image,
  LearnMore,
  RightBox,
  SubHeading,
  Text,
} from "./CommonLandingPageStyles";
import { BounceEffect } from "../../Utils/BounceEffect";

const CommonLandingPage = ({ image, heading,subHeading }) => {
  return (
    <>
      <Box height={"100vh"} width={"100%"}>
        <Header />
        <BlueBackground />
        <Grid
          container
          spacing={0}
          mt={{ xs: "0px", sm: "100px" }}
          justifyContent={"space-around"}
        >
          <Grid item xs={12} sm={12} md={6}>
            <Reveal>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "100%",
                  height: { xs: "25rem", sm: "10rem",md:'50rem' },
                  // background:'pink',
                  flexDirection:'column'
                }}
              >
                <Heading gutterBottom>{heading}</Heading>
                <SubHeading gutterBottom display={{xs:'none',md:'flex'}}>{subHeading}</SubHeading>
                {/* <LearnMore>Learn More</LearnMore> */}
              </Box>
            </Reveal>
          </Grid>
          <Grid item xs={12} sm={12} md={6}>
            <RightBox>
              <BounceEffect>
                <Image src={image} />
              </BounceEffect>
            </RightBox>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default CommonLandingPage;