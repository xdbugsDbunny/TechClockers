import { Box, Button, Divider, Grid } from "@mui/material";
import React from "react";
import { Reveal } from "../../../Utils/Reveal";
import BlueBackground from "../../../Components/BackGround/BlueBackGround/BlueBackground";
import Header from "../../../Components/Header/Header";
import {
  BinderImage,
  Heading,
  IconImage,
  IconWrapper,
  LearnMore,
  MainWrapper,
  MiniWrapper,
  StyledDivider1,
  SubHeading,
  Text,
  Image,
} from "./HomeLandingPageStyle";
import binder from "../../../Assests/Home/binder.png";
import icon1 from "../../../Assests/Home/icon1.png";
import icon2 from "../../../Assests/Home/icon2.png";
import icon3 from "../../../Assests/Home/icon3.png";
import { BounceEffect } from "../../../Utils/BounceEffect";
import homeLandingImage from "../../../Assests/Home/homeLandingImage.png";

const HomeLandingPage = () => {
  return (
    <>
      <Box height={"100vh"} width={"100%"}>
        <Header />
        <BlueBackground />
        <Grid
          container
          spacing={2}
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
                  height: { xs: "25rem", sm: "10rem", md: "50rem" },
                  textAlign: "center",
                  flexDirection:'column'
                }}
              >
                <Heading gutterBottom>
                  TechClockers - Where Ideas Meet Precision Technology.
                </Heading>
                <SubHeading gutterBottom display={{xs:'none',md:'flex'}}>
                At TechClockers, we bridge the gap between imagination and reality, delivering precision technology solutions that bring your ideas to life.
                </SubHeading>
              </Box>
            </Reveal>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: { xs: "none", sm: "none", md: "flex" } }}
          >
            <BounceEffect delay={1} speed={0.1}>
              <MainWrapper marginTop="20rem">
                <StyledDivider1 width="325px" />
                <BinderImage src={binder} alt="" sx={{ marginTop: "-12px" }} />
                <IconWrapper marginTop="-20px">
                  <MiniWrapper>
                    <IconImage src={icon1} alt="" height="" width="" />
                  </MiniWrapper>
                </IconWrapper>
              </MainWrapper>
            </BounceEffect>
            <BounceEffect delay={0.5} speed={0.8}>
              <MainWrapper marginTop="22rem">
                <StyledDivider1 width="390px" />
                <BinderImage src={binder} alt="" sx={{ marginTop: "10px" }} />
                <IconWrapper marginTop="-10px">
                  <MiniWrapper>
                    <IconImage src={icon2} alt="" height="" width="" />
                  </MiniWrapper>
                </IconWrapper>
              </MainWrapper>
            </BounceEffect>
            <BounceEffect delay={1} speed={0.1}>
              <MainWrapper marginTop="20rem">
                <StyledDivider1 width="325px" />
                <BinderImage src={binder} alt="" sx={{ marginTop: "-12px" }} />
                <IconWrapper marginTop="-10px">
                  <MiniWrapper>
                    <IconImage src={icon3} alt="" height="" width="" />
                  </MiniWrapper>
                </IconWrapper>
              </MainWrapper>
            </BounceEffect>
          </Grid>
          <Grid
            item
            xs={12}
            sm={12}
            md={6}
            sx={{ display: { xs: "flex", sm: "flex", md: "none" } }}
          >
            <Box width={"100%"} display={"flex"} justifyContent={"center"}>
              <BounceEffect delay={1} speed={0.1}>
                <Image src={homeLandingImage} />
              </BounceEffect>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </>
  );
};

export default HomeLandingPage;
