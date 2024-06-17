import React, { useEffect, useRef, useState } from "react";
import "./footer.scss";
import Spinner from "../../Assests/Footer/Spinner.gif";
import Logo from "../../Assests/Footer/logo.png";
import Facebook from "../../Assests/Footer/facebook.png";
import Instagram from "../../Assests/Footer/instagram.png";
import LinkidIn from "../../Assests/Footer/linkidIn.png";
import Twitter from "../../Assests/Footer/twitter.png";
import Send from "../../Assests/Footer/send.png";
import CopyRights from "../../Assests/Footer/copyRights.png";
import GooglePlayStore from "../../Assests/Footer/playStore.png";
import AppStoreBadge from "../../Assests/Footer/appStore.png";
import { Box, Grid, styled } from "@mui/material";
import BlueBackground from "../BackGround/BlueBackGround/BlueBackground";

const SupportBox = styled(Box)(({ theme }) => ({
  height: "auto",
  width: "auto",
  marginTop: "2rem",
  [theme.breakpoints.down("md")]: {
    marginLeft: "8rem",
  },
}));

const AboutBox = styled(Box)(({ theme }) => ({
  height: "auto",
  width: "auto",
  marginTop: "2rem",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "3rem",
  },
}));

const SubscribeBox = styled(Box)(({ theme }) => ({
  height: "auto",
  width: "auto",
  marginTop: "2rem",
  [theme.breakpoints.down("sm")]: {
    marginLeft: "3rem",
  },
}));

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const onClickSubscibe = () => {
    alert('Entered email: ' + email);
  };
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    const minRadius = 1;
    const maxRadius = 2;
    const numBubbles = 100;
    const bubbles = [];

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    function Bubble(x, y, radius, dx, dy) {
      this.x = x;
      this.y = y;
      this.radius = radius;
      this.dx = dx;
      this.dy = dy;

      this.draw = function () {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "white"; // Set the bubble color
        ctx.strokeStyle = "white"; // Set the bubble border color
        ctx.fill();
        ctx.stroke();
        ctx.closePath();
      };

      this.update = function () {
        if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
          this.dx = -this.dx;
        }

        if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
          this.dy = -this.dy;
        }

        this.x += this.dx;
        this.y += this.dy;

        this.draw();
      };
    }

    function generateBubbles() {
      for (let i = 0; i < numBubbles; i++) {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = Math.random() * (canvas.width - 2 * radius) + radius;
        const y = Math.random() * (canvas.height - 2 * radius) + radius;
        const dx = (Math.random() - 0.5) * 2; // Random velocity in x-direction
        const dy = (Math.random() - 0.5) * 2; // Random velocity in y-direction

        bubbles.push(new Bubble(x, y, radius, dx, dy));
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      for (let i = 0; i < bubbles.length; i++) {
        bubbles[i].update();
      }
    }

    generateBubbles();
    animate();

    // Cleanup function to cancel animation frame and perform any necessary cleanup
    return () => cancelAnimationFrame(animate);
  }, []);

  return (
    <>
      <div className="footer footer-theme">
        <canvas
          ref={canvasRef}
          style={{
            backgroundColor: "#2071EB",
            width: "100%",
            height: "100%",
            zIndex: -10,
            position: "absolute",
          }}
        />
        <div className="footer-inside">
          <div className="footer-content">
            <div className="footer-links">
              <Grid container spacing={1}>
                <Grid item xs={12} sm={6} md={4}>
                  <div
                    className="footer-logo-location footer-link"
                    style={{
                      display: "flex",
                      justifyContent: "flex-start",
                      flexDirection: "column",
                      marginLeft: "3rem",
                    }}
                  >
                    <div>
                      <a href={"/"} style={{ marginTop: 0 }}>
                        <img src={Logo} alt="Logo" />
                        <p>Techclockers</p>
                      </a>
                      <div>
                        <div className="footer-location  footer-theme">
                          <a
                            // href="https://goo.gl/maps/nCGNpb3uS3Fu1V1x9"
                            target="_blank"
                            className="footer-theme"
                          >
                            210,<br />
                            Balaji Serenity,<br />
                            Electronics City, Phase No.1 ,<br/> 
                            Bengaluru,<br/> Karnataka <br></br>560111, India{" "}
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                  <AboutBox>
                    <div className="footer-about footer-link">
                      <h5>About</h5>
                      <div className="footer-links-inside">
                        <a href={"/forstartups"} className="footer-theme">
                          For Start-ups
                        </a>
                        <a href={"/services"} className="footer-theme">
                          Services
                        </a>
                        <a href={"/domains"} className="footer-theme">
                          Domain
                        </a>
                        <a href={"/pricing"} className="footer-theme">
                          Pricing
                        </a>
                        <a href={"/aboutus"} className="footer-theme">
                          About Us
                        </a>
                      </div>
                    </div>
                  </AboutBox>
                </Grid>
                <Grid item xs={6} sm={6} md={2}>
                  <SupportBox>
                    <div className="footer-more footer-link">
                      <h5>Support</h5>
                      <div className="footer-links-inside">
                        <a href={"/faqs"} className="footer-theme">
                          FAQs
                        </a>
                      </div>
                    </div>
                  </SupportBox>
                </Grid>
                <Grid item xs={12} sm={6} md={4}>
                  <SubscribeBox>
                    <div className="footer-subscribe footer-link">
                      <h5>Subscribe to Our Updates</h5>
                      <div className="footer-links-subscribe">
                        <div className="footer-input">
                          <input
                            type="text"
                            placeholder="Enter Your Email"
                            id="footer-email-field"
                            className="footer-email-field"
                            onChange={handleInputChange}
                          />
                          <button onClick={onClickSubscibe}>
                            <img src={Send} alt="Send Button" />
                          </button>
                        </div>
                        <div className="footer-socialmedia-links">
                          <a
                            href="https://www.instagram.com/cisapp/"
                            target="_blank"
                            className="footer-theme"
                          >
                            <img src={Instagram} alt="Instagram" />
                          </a>
                          <a
                            href="https://www.linkedin.com/company/cisapp/"
                            target="_blank"
                            className="footer-theme"
                          >
                            <img src={LinkidIn} alt="LinkidIn" />
                          </a>
                          <a
                            href="https://twitter.com/connectinsingle"
                            target="_blank"
                            className="footer-theme"
                          >
                            <img src={Twitter} alt="Twitter" />
                          </a>
                          <a
                            href=""
                            target="_blank"
                            className="footer-theme"
                          >
                            <img src={Facebook} alt="Facebook" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </SubscribeBox>
                </Grid>
              </Grid>
              <div className="footer-border"></div>
              {/* <div className="footer-copy-rights"> */}
                {/* <img src={CopyRights} alt="CopyRights" /> */}
                {/* <p className="text-theme">
                  {" "}
                  <a href="/terms" className="text-theme">
                    Copyright CiSApp 2021 
                  </a>{" "}
                  <span style={{fontSize:'2.6rem',color:'#fff'}}>{" "}|{" "}</span>
                  <a href="/privacy" className="text-theme">
                    Privacy Policy
                  </a>
                </p> */}
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
