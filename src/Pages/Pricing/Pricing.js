import * as React from "react";
import {
  createTheme,
  ThemeProvider,
  styled,
  Container,
  Box,
  Card,
  CardActions,
  Button,
  Typography,
  Grid,
  CardHeader,
  CardContent,
  DialogTitle,
  Dialog,
  Slide,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";
import GlobalStyles from "@mui/material/GlobalStyles";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import CommonLandingPage from "../../Components/CommonLandingPage/CommonLandingPage";
import WhiteBackGround from "../../Components/BackGround/WhiteBackGround/WhiteBackGround";
import Footer from "../../Components/Footer/Footer";
import PricingLandingImage from "../../Assests/PricingLandingImage.png";

const tiers = [
  {
    title: "For Startups",
    description: "Free",
    buttonText: "Sign up for free",
    buttonVariant: "outlined",
    showButton: false,
  },
  {
    title: "Standard",
    description: "Pay As You Go",
    buttonText: "Get started",
    buttonVariant: "contained",
    showButton: false,
  },
  {
    title: "Pro",
    price: "",
    description: ["Contact Us Per Year"],
    buttonText: "Contact us",
    buttonVariant: "outlined",
    showButton: true,
  },
];

const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: "600",
  lineHeight: "normal",
}));

const SubHeading = styled(Typography)(({ theme }) => ({
  color: "#6D6D6D",
  textAlign: "center",
  fontFamily: "Poppins",
  fontSize: "2rem",
  fontStyle: "normal",
  fontWeight: "400",
  lineHeight: "normal",
  [theme.breakpoints.down("sm")]: {
    fontSize: "2.2rem",
  },
}));

const TagLine = styled(Typography)(({ theme }) => ({
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
const TechLink = styled("a")(({ theme }) => ({
  fontSize: "1.8rem",
  fontFamily: "Poppins",
  fontWeight: 400,
  lineHeight: "30px",
  color: "blue",
  textDecoration: "underlined",
  [theme.breakpoints.down("sm")]: {
    fontSize: "1.3rem",
    lineHeight: "3rem",
  },
}));

const ContactButton = styled(Button)(({ theme }) => ({
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

const CloseButton = styled(Button)(({ theme }) => ({
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

const BottomWrapper = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  marginTop: "50px",
  marginBottom: "50px",
}));

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const heading =
  "Innovate Without Limits - Competitive Pricing, Outstanding Results.";
const subHeading =
  "At TechClockers, innovation knows no bounds. Experience competitive pricing without compromising on outstanding results.";

const defaultTheme = createTheme();

export default function Pricing() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <CommonLandingPage
        image={PricingLandingImage}
        heading={heading}
        subHeading={subHeading}
      />
      <WhiteBackGround />
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyles
          styles={{ ul: { margin: 0, padding: 0, listStyle: "none" } }}
        />
        <Container
          disableGutters
          maxWidth="xl"
          component="main"
          sx={{ pt: 8, pb: 6, mt: "10rem" }}
        >
          <Heading gutterBottom>Pricing</Heading>
          {/* <SubHeading>
            Quickly build an effective pricing table for your potential
            customers with this layout. It&apos;s built with default MUI
            components with little customization.
          </SubHeading> */}
        </Container>
        <Container maxWidth="lg" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map((tier) => (
              <Grid
                item
                key={tier.title}
                xs={12}
                sm={tier.title === "Enterprise" ? 12 : 6}
                md={4}
              >
                <Card sx={{ height: "25rem" }}>
                  <CardHeader
                    title={tier.title}
                    subheader={tier.subheader}
                    titleTypographyProps={{
                      align: "center",
                      fontFamily: "Poppins",
                      fontSize: "2.6rem",
                      color: "#fff",
                    }}
                    action={
                      tier.title === "Pro" ? (
                        <StarBorderIcon fontSize="large" />
                      ) : null
                    }
                    subheaderTypographyProps={{
                      align: "center",
                      fontFamily: "Poppins",
                      fontSize: "2rem",
                    }}
                    sx={{
                      fontSize: "2rem",
                      backgroundColor: "#2071EB",
                    }}
                  />
                  <CardContent>
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "baseline",
                        mb: 2,
                      }}
                    >
                      {/* <Typography
                        component="h2"
                        variant="h3"
                        color="text.primary"
                        fontFamily="Roboto"
                        fontSize="3rem"
                      >
                        ${tier.price}
                      </Typography> */}
                      {/* <Typography
                        variant="h6"
                        color="text.secondary"
                        fontFamily="Roboto"
                        fontSize="3rem"
                      >
                        /mo
                      </Typography> */}
                    </Box>
                    <Typography
                      variant="subtitle1"
                      align="center"
                      key={tier.description}
                      fontFamily="Poppins"
                      fontSize="2.2rem"
                    >
                      {tier.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    {tier.showButton && ( // Only show the button if showButton is true
                      <Button
                        fullWidth
                        variant={tier.buttonVariant}
                        sx={{ fontFamily: "Poppins", fontSize: "2rem" }}
                      >
                        {tier.buttonText}
                      </Button>
                    )}
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ThemeProvider>
      <BottomWrapper>
        {/* <TagLine>If you got any thing to Enquiry please get in Touch</TagLine> */}
        <ContactButton variant="contained" onClick={handleClickOpen}>
          Contact Us
        </ContactButton>
      </BottomWrapper>
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
}
