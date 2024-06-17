import React, { forwardRef, useEffect, useRef, useState } from "react";
import { servicePageData } from "../../Context/OurServicesData";
import {
  Box,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Slide,
  useMediaQuery,
} from "@mui/material";
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
  CloseButton,
  TechLink,
} from "./OurServicesStyle";

import { Reveal } from "../../Utils/Reveal";
import { ImageReveal } from "../../Utils/ImageReveal";
import arrow from "../../Assests/OurServiceImages/arrow.png";
import Footer from "../../Components/Footer/Footer";
import CommonLandingPage from "../../Components/CommonLandingPage/CommonLandingPage";
import ServiceLandingImage from "../../Assests/OurServiceImages/ServiceLandingImage.png";



const heading = "Your Vision, Our Expertise - Together, We Clock Success."
const subHeading = "At TechClockers, we believe in synergy, combining our visionary expertise with your aspirations, as we march together towards unparalleled success."

const OurService = () => {
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
        image={ServiceLandingImage}
        heading={heading}
        subHeading={subHeading}
      />
      {/* <WhiteBackground /> */}
      <Container maxWidth="lg">
        <Reveal>
          <PageHeading>OUR SERVICES</PageHeading>
        </Reveal>
        {servicePageData.map((item, index) => (
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
                            <Points>{point?.pointD}</Points>
                          </PointWrapper>
                        </Reveal>
                        <Reveal>
                          <PointWrapper>
                            <img src={arrow} alt="" />
                            <Points>{point?.pointE}</Points>
                          </PointWrapper>
                        </Reveal>
                        <Reveal>
                          <PointWrapper>
                            <img src={arrow} alt="" />
                            <Points>{point.pointC}</Points>
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
                      // justifyContent={"center"}
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
          {/* <TagLine>
            Ready to take your startup to new heights with TechClockers? Get in
            touch with us today! Reach out via email at
            techsupport@techclockers.com to discuss your project requirements
            and schedule a consultation.
          </TagLine> */}
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
              <TechLink href="mailto:techsupport@techclockers.com">
                techsupport@techclockers.com
              </TechLink>{" "}
              to discuss your project requirements and schedule a consultation.
            </TagLine>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {/* <Button onClick={handleClose}>Disagree</Button> */}
          <CloseButton variant="contained" onClick={handleClose}>
            Close
          </CloseButton>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default OurService;
