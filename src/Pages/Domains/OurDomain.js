import React, { forwardRef, useEffect, useRef, useState } from "react";
import { domainPageData } from "../../Context/OurDomainsData";
import { Box, Container, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Grid, Slide, useMediaQuery } from "@mui/material";
import EastRoundedIcon from "@mui/icons-material/EastRounded";
import {
  PageHeading,
  Image,
  Heading,
  SubHeading,
  Points,
  IconBox,
  PointWrapper,
  TagLine,
  ContactButton,
  BottomWrapper,
  TechLink,
  CloseButton,
} from "./OurDomainsStyle";

import { Reveal } from "../../Utils/Reveal";
import { ImageReveal } from "../../Utils/ImageReveal";
import arrow from "../../Assests/OurServiceImages/arrow.png";
import Footer from "../../Components/Footer/Footer";
import WhiteBackground from "../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import CommonLandingPage from "../../Components/CommonLandingPage/CommonLandingPage";
import DomainLandingImage from "../../Assests/OurDomainImages/DomainLandingImage.png";

const heading = "Unleashing Innovation, One Timely Product at a Time."

const subHeading = "At TechClockers, we merge your vision with our expertise, creating a powerful alliance that paves the way for unparalleled success."

const OurDomain = () => {
  const screenWidth = window.innerWidth;

  const isMobile = screenWidth < 600;
  const Transition = forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });
  
    const [open, setOpen] = useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  return (
    <>
      <CommonLandingPage
        image={DomainLandingImage}
        heading={heading}
        subHeading={subHeading}
      />
      {/* <WhiteBackground /> */}
      <Container maxWidth="lg">
        <Reveal>
          <PageHeading>OUR DOMAINS</PageHeading>
        </Reveal>
        {domainPageData.map((item, index) => (
          <Grid container spacing={6} key={index} marginTop={"5rem"}>
            {isMobile ? (
              <>
                <Grid item xs={12} sm={6} md={6}>
                  <ImageReveal side={-500}>
                    <Image src={item.img} alt="" />
                  </ImageReveal>
                </Grid>
                <Grid item xs={12} sm={6} md={6}>
                  <Box>
                    <Reveal>
                      <Heading>{item.heading}</Heading>
                    </Reveal>
                    <Reveal>
                      <SubHeading>{item.subHeading}</SubHeading>
                    </Reveal>
                    {item.points.map((point, pointIndex) => (
                      <Box key={pointIndex}>
                        <Reveal>
                          <PointWrapper>
                            <img src={arrow} alt="" />
                            <Points>{point.pointA}</Points>
                          </PointWrapper>
                        </Reveal>
                        <Reveal>
                          <PointWrapper>
                            <img src={arrow} alt="" />
                            <Points>{point.pointB}</Points>
                          </PointWrapper>
                        </Reveal>
                        <Reveal>
                          <PointWrapper>
                            <img src={arrow} alt="" />
                            <Points>{point.pointC}</Points>
                          </PointWrapper>
                        </Reveal>
                        <Reveal>
                          <PointWrapper>
                            <img src={arrow} alt="" />
                            <Points>{point?.pointD}</Points>
                          </PointWrapper>
                        </Reveal>
                        <Reveal>
                          <PointWrapper>
                            <img src={arrow} alt="" />
                            <Points>{point?.pointE}</Points>
                          </PointWrapper>
                        </Reveal>
                      </Box>
                    ))}
                  </Box>
                </Grid>
              </>
            ) : (
              <>
                {index % 2 === 0 ? (
                  <>
                    <Grid item xs={12} sm={6} md={6}>
                      <ImageReveal side={-500}>
                        <Image src={item.img} alt="" />
                      </ImageReveal>
                    </Grid>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box>
                        <Reveal>
                          <Heading>{item.heading}</Heading>
                        </Reveal>
                        <Reveal>
                          <SubHeading>{item.subHeading}</SubHeading>
                        </Reveal>
                        {item.points.map((point, pointIndex) => (
                          <Box key={pointIndex}>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point.pointA}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point.pointB}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point.pointC}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point?.pointD}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point?.pointE}</Points>
                              </PointWrapper>
                            </Reveal>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                  </>
                ) : (
                  <>
                    <Grid item xs={12} sm={6} md={6}>
                      <Box>
                        <Reveal>
                          <Heading>{item.heading}</Heading>
                        </Reveal>
                        <Reveal>
                          <SubHeading>{item.subHeading}</SubHeading>
                        </Reveal>
                        {item.points.map((point, pointIndex) => (
                          <Box key={pointIndex}>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point.pointA}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point.pointB}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point.pointC}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point?.pointD}</Points>
                              </PointWrapper>
                            </Reveal>
                            <Reveal>
                              <PointWrapper>
                                <img src={arrow} alt="" />
                                <Points>{point?.pointE}</Points>
                              </PointWrapper>
                            </Reveal>
                          </Box>
                        ))}
                      </Box>
                    </Grid>
                    <Grid
                      item
                      xs={12}
                      sm={6}
                      md={6}
                      // display={"flex"}
                      // justifyContent={"flex-end"}
                    >
                      <ImageReveal side={500}>
                        <Image src={item.img} alt="" />
                      </ImageReveal>
                    </Grid>
                  </>
                )}
              </>
            )}
          </Grid>
        ))}
        <BottomWrapper>
        <ContactButton variant="contained" onClick={handleClickOpen}>
          Contact Us
        </ContactButton>
        </BottomWrapper>
      </Container>
      <Footer />
      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle></DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-slide-description">
            <TagLine>
              Ready to take your startup to new heights with TechClockers? Get
              in touch with us today! Reach out via email at {""}
              <TechLink href="mailto:techsupport@techclockers.com">techsupport@techclockers.com</TechLink> to discuss your project requirements
              and schedule a consultation.
            </TagLine>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <CloseButton variant="contained" onClick={handleClose}>Close</CloseButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OurDomain;
