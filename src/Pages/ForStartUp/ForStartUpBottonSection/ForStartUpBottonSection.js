import { Box, Container, Grid, Paper, Typography, styled } from "@mui/material";
import React from "react";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(4),
  height: "400px",
  boxShadow: "0px 4px 41px 0px rgba(0, 0, 0, 0.25)",
  borderRadius: "10px",
  "&:hover": {
    boxShadow: "0px 4px 41px 0px rgba(28, 43, 94, 0.25)",
    cursor: "pointer",
  },
  [theme.breakpoints.down('md')] : {
    height: "450px",
  },
  [theme.breakpoints.down('sm')] : {
    height: "auto",
  },
}));

const MainHeading = styled(Typography)(({ theme }) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "5rem",
  marginBottom:'5rem',
  [theme.breakpoints.down('sm')] : {
    fontSize:'2.2rem'
  }
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#6D6D6D",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "2.3rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineFeight: "50px",
  [theme.breakpoints.down('sm')] : {
    fontSize:'1.8rem',
    lineFeight: "25px",
  }
}));

const ItemHeading = styled(Typography)(({ theme }) => ({
  color: " #1C2B5E",
  textAlign: "justify",
  textShadow: "0px 4px 41px 0px rgba(0, 0, 0, 0.25)",
  fontFamily: "Poppins",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: 600,
  lineHeight: "45px",
  [theme.breakpoints.down('md')] : {
    fontSize:'1.8rem',
    lineHeight: "30px",
  },
  [theme.breakpoints.down('sm')] : {
    fontSize:'2rem',
    lineHeight: "25px",
  },
}));

const ItemText = styled("li")(({ theme }) => ({
  color: "#000",
  textShadow: " 0px 4px 41px 0px rgba(0, 0, 0, 0.25)",
  fontFamily: "Roboto",
  fontSize: "1.8rem",
  fontStyle: "normal",
  lineHeight: "25px",
  [theme.breakpoints.down('md')] : {
    fontSize:'1.6rem',
    lineHeight: "20px",
  },
  [theme.breakpoints.down('sm')] : {
    fontSize:'1.6rem',
    lineHeight: "35px",
  },

}));

const ForStartUpBottonSection = () => {
  return (
    <>
      <WhiteBackground />
      <Container maxWidth="lg">
        <Box sx={{ flexGrow: 1, mt:{xs:'10rem',sm:'15rem'} }}>
          <MainHeading gutterBottom>MVP Life Cycle</MainHeading>
          <Grid container spacing={5}>
            <Grid item xs={12} sm={4} md={4}>
              <Item>
                <ItemHeading>1. MVP Project Scoping</ItemHeading>
                <ul>
                  <ItemText>
                    Setting the business needs or startup's purpose of building
                    the product
                  </ItemText>
                  <ItemText>
                    MVP conceptualization and software outlining
                  </ItemText>
                  <ItemText>
                    Setting features, functionality and building the design
                    architecture
                  </ItemText>
                  <ItemText>Choosing the technology stack needed</ItemText>
                </ul>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>
                <ItemHeading>2. MVP Planning</ItemHeading>
                <ul>
                  <ItemText>
                    MVP Project Plan (Deciding what would the MVP cover;
                    features, business scope, services, etc.)
                  </ItemText>
                  <ItemText>
                    MVP Project Assessment (costs and skills needed){" "}
                  </ItemText>
                  <ItemText>
                    MVP Budget Planning: Estimating the costs of building the
                    product
                  </ItemText>
                  <ItemText>MVP Project Timeline</ItemText>
                </ul>
              </Item>
            </Grid>
            <Grid item xs={12} sm={4} md={4}>
              <Item>
                <ItemHeading>3. Building the MVP</ItemHeading>
                <ul>
                  <ItemText>MVP Designing (UX and UI)</ItemText>
                  <ItemText>
                    MVP Coding: creating a functional working MVP with all the
                    features needed
                  </ItemText>
                  <ItemText>
                    MVP Launching: Testing is needed before the official launch
                  </ItemText>
                  <ItemText>
                    MVP Testing: Valuable feedback from users to create a better
                    MVP
                  </ItemText>
                </ul>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </>
  );
};

export default ForStartUpBottonSection;
