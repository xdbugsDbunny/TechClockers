import React from "react";
import { servicePageData } from "../../../Context/OurServicesData";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  Link,
  Typography,
  styled,
} from "@mui/material";
import EastIcon from "@mui/icons-material/East";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround";



const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomDot = ({ onClick, active }) => (
  <button
    style={{
      backgroundColor: active ? "#2071EB" : "#6D6D6D", // Change the color of the dots
      width: "8px",
      height: "8px",
      margin: "0 5px", // Adjust the spacing between dots
      borderRadius: "50%",
      border: "none",
      outline: "none",
    }}
    onClick={onClick}
  />
);

const Circle = styled(Box)(({ theme }) => ({
  backgroundColor: "#2071EB",
  borderRadius: "50%",
  height: "75px",
  width: "75px",
  position: "absolute",
  top: "15%",
  left: "25%",
  transform: "translateX(-50%)",
  zIndex: "2",
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}));

const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Inter",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textAlign: "center",
}));

const CardContainer = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  marginBottom: "5rem",
  marginTop: "10rem",
}));

const CardText = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontFamily: "Poppins",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
  width: "75%",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

const ButtonBox = styled(Box)(({ theme }) => ({
  width: "98%",
  display: "flex",
  height: "auto",
  marginTop: "5rem",
  justifyContent: "flex-end",
  marginBottom: "5rem",
  [theme.breakpoints.down("md")] : {
    justifyContent:'center'
  }
}));

const MoreButton = styled(Button)(({ theme }) => ({
  borderRadius: "5px",
  border: "3px solid #2071EB",
  background: "#2071EB",
  color: "#fff",
  fontSize: "2.6rem",
  fontFamily: "Inter",
  fontWeight: "500",
  lineHeight: "3.5rem",
  textTransform: "none",
  // padding: "1rem 3.8rem 1rem 3.8rem",
  display: "inline-flex",
  marginTop: "1rem",
  [theme.breakpoints.down('sm')] : {
    fontSize: "2.2rem",
    lineHeight: "2rem",
    marginTop:'5rem'
  },
  "&:hover": {
    background: "#fff",
    color: "#2071EB",
  },
}));

const SerivceSection = () => {
  const handleCardActionsClick = () => {
    // Perform any desired actions when CardActions is clicked
    window.open("/services", "_parent");
  };

  const handleMoreButton = () => {
    // Perform any desired actions when CardActions is clicked
    window.open("/services", "_parent");
  };

  return (
    <>
      <Box sx={{height:'auto',width:'100%', marginTop:'5rem'}}>
        <WhiteBackground />
        <Heading>OUR SERVICES</Heading>
        <Carousel
          responsive={responsive}
          infinite={true}
          swipeable={true}
          draggable={false}
          autoPlay={true}
          showDots={3}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customDot={<CustomDot />}
          arrows={false}
          containerClass="react-multi-carousel-list"
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-100-px"
        >
          {servicePageData.map((item, index) => (
            <CardContainer key={index}>
              <Card sx={{ width: {xs:'350px',sm:'350px'} }}>
                <Circle><img src={item.icon} alt="Icon" style={{width:'40px', height:'40px'}}/></Circle>
                <Link
                  target="_parent"
                  rel="noopener noreferrer"
                  onClick={handleCardActionsClick}
                  style={{ textDecoration: "none" }}
                >
                  <CardActionArea>
                    <CardMedia
                      component="img"
                      height="250"
                      image={item.img}
                      alt={item.name}
                    />

                    <CardActions sx={{ backgroundColor: "#2071EB" }}>
                      <CardText size="small" sx={{ color: "white" }}>
                        {item.heading}
                      </CardText>
                      <Box
                        sx={{ width: "25%" }}
                        display={"flex"}
                        justifyContent={"flex-end"}
                      >
                        <EastIcon fontSize="large" sx={{ color: "white" }} />
                      </Box>
                    </CardActions>
                  </CardActionArea>
                </Link>
              </Card>
            </CardContainer>
          ))}
        </Carousel>
        <ButtonBox>
          <MoreButton variant="contained" onClick={handleMoreButton}>
            More Services
          </MoreButton>
        </ButtonBox>
      </Box>
    </>
  );
};

export default SerivceSection;
