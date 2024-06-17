import { Box, Button, Paper, Typography, styled } from "@mui/material";

export const LeftBox = styled(Box)(({theme})=>({
  width:'100%',
  height:'auto',
  padding:'5rem',
  [theme.breakpoints.down("md")]: {
    padding:'2rem',
  },
  [theme.breakpoints.down("sm")]: {
    padding:'1rem',
  },
}))

export const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fff",
  padding: theme.spacing(1),
  textAlign: "center",
  display: "flex",
  flexDirection: "column",
  width: "35rem",
  height: "100%",
  borderRadius: "20px",
  boxShadow: "0px 4px 41px 0px rgba(0, 0, 0, 0.25)",
  lineHeight: "3rem",
  marginTop: "10rem",
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    marginTop: "5rem",
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "2.6rem",
  fontFamily: "Inter",
  fontWeight: "700",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.6rem",
  },
}));

export const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "2.6rem",
  fontFamily: "Poppins",
  fontWeight: "500",
  textTransform: "capitalize",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.1rem",
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: "rgba(0, 0, 0, 0.87)",
  textAlign: "justify",
  fontSize: "1.8rem",
  fontFamily: "Roboto",
  lineHeight: "3rem",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.6rem",
    lineHeight: "2.4rem",
  },
}));

export const LearnMore = styled(Button)(({ theme }) => ({
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
  marginTop: "5rem",
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

export const Wrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  width: "auto",
  justifyContent: "flex-start",
  alignItems: "center",
  margin: "20px",
}));

export const Circle = styled(Box)(({ theme }) => ({
  width: "50px",
  height: "50px",
  flexShrink: 0,
  borderRadius: "50%",
  background: "#2071EB",
  display:'flex',
  justifyContent:'center',
  alignItems:'center'
}));

export const ItemHeading = styled(Box)(({ theme }) => ({
  color: "#000",
  fontSize: "1.6rem",
  fontFamily: "Poppins",
  fontWeight: 500,
  textAlign: "start",
  marginLeft: "3rem",
  lineHeight: "2rem",
}));

export const CircleBox = styled(Box)(({ theme }) => ({
  height: "5rem",
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}));

export const PatternImage = styled('img')(({ theme }) => ({
  width:'250px',
  height:'250px',
  position:'absolute',
  top: '58%',
  left: '45%',
  zIndex:'-1',
  [theme.breakpoints.down("md")]: {
    display:'none'
  },
}));
