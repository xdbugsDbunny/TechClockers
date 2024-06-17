import { Button, Link, Typography, styled } from "@mui/material";

export const LogoImage = styled("img")(({ theme }) => ({
  height: "100px",
  width: "100px",
  [theme.breakpoints.down("sm")]: {
    display: "none",
  },
}));

export const Techclockers = styled(Link)(({ theme }) => ({
  fontFamily: "Inter",
  fontSize: "3rem",
  fontWeight: 700,
  lineHeight: "35px",
  letterSpacing: "0em",
  textAlign: "left",
  marginLeft: "-65px",
  textDecoration:'none',
  color:'#fff',
  cursor:'pointer',
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    textAlign: "center",
    marginLeft:'-65px'
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    textAlign: "center",
    marginLeft:'1rem'
  },
}));

export const NavButtons = styled(Button)(({theme})=>({

  color: "#fff",
  fontFamily: "Poppins",
  fontSize: "2rem",
  fontWeight: 600,
  lineHeight: "4rem",
  letterSpacing: "0em",
  textAlign: "left",
  textTransform: "none",
  position: "relative", // Required to position the underline properly
  marginLeft:'3rem',
  "&:hover": {
    textDecoration: "none", // Remove default text decoration on hover
    "&::after": {
      content: "''",
      position: "absolute",
      left: 0,
      bottom: 0,
      width: "100%",
      height: "3px", // Adjust the height of the underline as needed
      background: "white", // Adjust the color of the underline as needed
      animation: "underlineAnimation 1s backwards", // Duration and animation name for the underline
    },
  },
  "@keyframes underlineAnimation": {
    to: {
      width: 0, // Animating the width to create an underline effect
    },
  },
  [theme.breakpoints.down('md')] : {
    marginLeft:'0.5rem',
    fontSize: "1.6rem",
  }
}))
