import { Box, Button, Divider, Typography, styled } from "@mui/material";

export const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontSize: "2rem",
  fontFamily: "Inter",
  fontWeight: "700",
  lineHeight: "2.5rem",
  paddingLeft:'5rem',
  textAlign:'start',
  [theme.breakpoints.down("md")]: {
    fontSize: "1.8rem",
    paddingLeft:'2rem',
    lineHeight: "2.4rem",
  },
  [theme.breakpoints.down("sm")]: {
    ffontSize: "1.8rem",
    paddingLeft:'2rem',
    lineHeight: "2.4rem",
    marginTop:'4rem'
  },
}));

export const Heading = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontSize: "3rem",
  fontFamily: "Inter",
  fontWeight: "700",
  lineHeight: "4.2rem",
  textAlign:'start',
  paddingLeft:'5rem',
  [theme.breakpoints.down("md")]: {
    fontSize: "2rem",
    lineHeight: "2.6rem",
    marginTop:'5rem',
    paddingLeft:'2rem',
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "2rem",
    lineHeight: "2.6rem",
    marginTop:'10rem',
    // marginBottom: "3rem",
    paddingLeft:'2rem',
  },
}));

export const Text = styled(Typography)(({ theme }) => ({
  color: "#FFF",
  fontSize: "2rem",
  fontFamily: "Poppins",
  fontWeight: 500,
  lineHeight: "2rem",
  [theme.breakpoints.down("sm")]: {
    lineHeight: "2rem",
    marginBottom: "3rem",
  },
}));

export const LearnMore = styled(Button)(({ theme }) => ({
  borderRadius: "5px",
  border: "3px solid #FFF",
  background: "#fff",
  color: "#2071EB",
  fontSize: "2.6rem",
  fontFamily: "Inter",
  fontWeight: "500",
  lineHeight: "3.5rem",
  textTransform: "none",
  display: "inline-flex",
  marginTop: "6rem",
  boxShadow:'4px 4px 0 #FFF',
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.2rem",
    lineHeight: "2rem",
    marginTop: "3rem",
  },
  "&:hover": {
    background: "#2071EB",
    color: "#FFF",
  },
}));

export const StyledDivider1 = styled(Divider)({
  height: "3px",
  transform: "rotate(-90.15deg)",
  flexShrink: "0",
  background: "#FFF",
  marginBottom: "1.5rem",
  zIndex: "-1",
});

export const BinderImage = styled("img")({
  height: "5rem",
  width: "5rem",
});

export const IconWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "150px",
  height: "150px",
  borderRadius: "150px",
  background: "#42C2FF",
  zIndex: "-1",
}));

export const MiniWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "135px",
  height: "135px",
  borderRadius: "135px",
  background: "#FFF",
}));

export const IconImage = styled("img")({
  height: "80px",
  width: "80px",
});

export const Image = styled("img")(({ theme }) => ({
  width: "60rem",
  height: "auto",
  marginTop:'-7rem',
  [theme.breakpoints.down("md")]: {
    width: "38rem",
    height: "auto",
    marginTop:'-2rem'
  },
  [theme.breakpoints.down("sm")]: {
    width: "32rem",
    height: "auto",
    marginTop:'-7rem',
  },
}));

export const RightBox = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));