import { Box, Container, Grid } from "@mui/material";
import React from "react";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import pattern from "../../../Assests/Home/pattern.png";
import {
  Circle,
  CircleBox,
  Heading,
  Item,
  ItemHeading,
  LearnMore,
  LeftBox,
  PatternImage,
  SubHeading,
  Text,
  Wrapper,
} from "./TopSectionStyles";

import { Reveal } from "../../../Utils/Reveal";
import smile from "../../../Assests/Home/smile.png";
import shield from "../../../Assests/Home/shield.png";
import checked from "../../../Assests/Home/checked.png";
import exam from "../../../Assests/Home/exam.png";

const itemData = [
  { text: "Supper Quality Well Results", icon: exam },
  { text: "Professional & Trusted Staff", icon: shield },
  { text: "Committed To Success", icon: checked },
  { text: "100% Client Satisfied", icon: smile },
];

const TopSection = () => {
  return (
    <>
      <WhiteBackground />
      <Container maxWidth="xl">
        <Grid container spacing={0}>
          <Grid item xs={12} sm={7} md={7}>
            <LeftBox>
              <Reveal>
                <Heading gutterBottom>About Us</Heading>
              </Reveal>
              <Reveal>
                <SubHeading gutterBottom>We provide the best services</SubHeading>
              </Reveal>
              <Reveal>
                <Text>
                  Our team comprises highly skilled and experienced
                  professionals who are passionate about technology and
                  dedicated to delivering excellence. Innovation: We foster a
                  culture of innovation and creativity, enabling us to offer
                  unique solutions that set our clients apart from the
                  competition. Timely Delivery: As our name suggests, we value
                  time and understand the significance of timely project
                  delivery. We take pride in meeting deadlines and ensuring
                  smooth product launches. Client-Centric Approach: Your success
                  is our success. We prioritize understanding your business
                  goals and work closely with you throughout the project to
                  ensure we exceed your expectations. Scalability: Our solutions
                  are designed to grow with your business. We build flexible and
                  scalable products that can adapt to changing market demands.
                  Contact Us: Ready to take your startup to new heights with
                  TechClockers? Get in touch with us today!
                </Text>
              </Reveal>
              <Reveal>
                <LearnMore href="/aboutus">Learn More</LearnMore>
              </Reveal>
            </LeftBox>
          </Grid>
          <Grid item xs={12} sm={5} md={5}>
            <Box
              display={"flex"}
              justifyContent={"center"}
              position={"relative"}
            >
              <Item>
                {itemData.map((item, index) => (
                  <Wrapper key={index}>
                    <CircleBox>
                      <Circle>
                        <img src={item.icon} alt="" />
                      </Circle>
                    </CircleBox>
                    <ItemHeading>{item.text}</ItemHeading>
                  </Wrapper>
                ))}
              </Item>
              <PatternImage src={pattern} alt="" />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default TopSection;
