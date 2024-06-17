import React from "react";
import "./TestPage.css"; // Make sure to adjust the CSS file path
import { productDatapage } from "../../../Context/ProductData";
import { Reveal } from "../../../Utils/Reveal";
import { Box, Container, Grid, Typography, styled } from "@mui/material";

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

const TestPage = () => {
  return (
    <Box sx={{ height: "auto", width: "100%" }}>
      <Container maxWidth="lg">
        <Heading gutterBottom>Our Products</Heading>
        <Grid container spacing={10} sx={{ marginTop: "auto" }}>
          {productDatapage.map((item, index) => (
            <Grid
              item
              xs={12}
              sm={12}
              md={6}
              key={index}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <div className="newcard">
                <div
                  className="newlines"
                  style={{ background: item.colorCode }}
                ></div>
                <div className="newimgBox">
                  <img src={item.img} alt="" />
                </div>
                <div className="newContent">
                  <div className="newdetail">
                    <h2>{item.name}</h2>
                    <div className="newdata">
                      <h3>{item.description}</h3>
                    </div>
                    <div className="newaction">
                      <a
                        href={item.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <button style={{ background: item.colorCode }}>
                          Privacy Policy
                        </button>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TestPage;
