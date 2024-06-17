import { Box, Button, Typography, styled } from "@mui/material"

export const PageHeading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "2.6rem",
  fontFamily: "Inter",
  fontWeight: "700",
  textAlign: "center",
  marginTop: "10rem",
}));

export const Image = styled("img")(({ theme }) => ({
  width: "40rem",
  height: "auto",
  [theme.breakpoints.down('sm')] : {
    width:'400px'
  }
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "2.4rem",
  fontFamily: "Poppins",
  fontWeight: 600,
  [theme.breakpoints.down('sm')] : {
    fontSize: "2.6rem",
  }
}));

export const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "1.8rem",
  fontFamily: "Roboto",
  // fontWeight: 500,
  [theme.breakpoints.down('sm')] : {
    fontSize: "2.4rem",
  }
}));

export const Points = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "1.6rem",
  fontFamily: "Roboto",
  fontWeight: 500,
  lineHeight: "1",
  marginLeft: "10px",
  [theme.breakpoints.down('sm')] : {
    fontSize: "2.3rem",
  }
}));

export const IconBox = styled(Box)(({ theme }) => ({
  backgroundColor: "#2071EB",
  height: "30px",
  width: "30px",
  borderRadius: "50%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

export const PointWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  marginTop: "1.5rem",
  alignItems:'center'
}));

export const TagLine = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontSize: "1.8rem",
  fontFamily: "Poppins",
  fontWeight: 400,
  lineHeight: "30px",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
    lineHeight: "3rem",
  },
}));
export const TechLink = styled('a')(({ theme }) => ({
  fontSize: "1.8rem",
  fontFamily: "Poppins",
  fontWeight: 400,
  lineHeight: "30px",
  color:'blue',
  textDecoration:'underlined',
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
    lineHeight: "3rem",
  },
}));

export const ContactButton = styled(Button)(({ theme }) => ({
  display: "inline-flex",
  padding: "15px 50px",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "250px",
  borderRadius: "10px",
  background: "#42C2FF",
  color: "#FFF",
  fontSize: "2rem",
  fontFamily: "Poppins",
  fontWeight: "500",
}));

export const BottomWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "50px",
  marginBottom: "50px",
}));
export const CloseButton = styled(Button)(({ theme }) => ({
  display: "inline-flex",
  // padding: "15px 50px",
  justifyContent: "center",
  alignItems: "center",
  height: "50px",
  width: "auto",
  borderRadius: "10px",
  background: "#42C2FF",
  color: "#FFF",
  fontSize: "1.6rem",
  fontFamily: "Poppins",
  fontWeight: "500",
}));