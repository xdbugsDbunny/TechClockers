import React, { useState } from "react";
import "./OurTeam.css";
import raju from "../../../Assests/OurTeam/raju.png";
import uday from "../../../Assests/OurTeam/uday.png";
import vishwa from "../../../Assests/OurTeam/vishwa.jpg";
import yogesh from "../../../Assests/OurTeam/yogesh.png";
import suraj from "../../../Assests/OurTeam/suraj.jpg";
import yousuf from "../../../Assests/OurTeam/yousuf.png";
import mohamed from "../../../Assests/OurTeam/mohamed.png";
import nirmala from "../../../Assests/OurTeam/nirmala.jpg";
import susritha from "../../../Assests/OurTeam/susritha.png";
import hiran from "../../../Assests/OurTeam/hiran.png"
import A from "../../../Assests/OurTeam/A.png"

import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import { Box, Container, Typography } from "@mui/material";
import styled from "@emotion/styled";
import WhiteBackground from "../../../Components/BackGround/WhiteBackGround/WhiteBackGround"

const teamMembers = [
  {
    id: 1,
    name: "Srinivas Raju",
    role: "Director",
    imageSrc: raju,
  },
  {
    id: 2,
    name: "Uday Kiran",
    role: "Director",
    imageSrc: uday,
  },
  {
    id: 3,
    name: "Vishwanath Reddy",
    role: "Product Designer",
    imageSrc: vishwa,
  },
  {
    id: 4,
    name: "Yogesh",
    role: "QA Testing Lead",
    imageSrc: yogesh,
  },
  {
    id: 5,
    name: "Suraj Singh Negi",
    role: "Full Stack Developer",
    imageSrc: suraj,
  },
  {
    id: 6,
    name: "Yousuf",
    role: "Flutter Developer",
    imageSrc: yousuf,
  },
  {
    id: 7,
    name: "Mohamed",
    role: "Flutter Developer",
    imageSrc: mohamed,
  },
  {
    id: 8,
    name: "Nirmala",
    role: "Automation Test Engineer ",
    imageSrc: nirmala,
  },
  {
    id: 9,
    name: "Susritha",
    role: "Full Stack Developer",
    imageSrc: susritha,
  },
  {
    id: 10,
    name: "Hiran",
    role: "Flutter Developer",
    imageSrc: hiran,
  },
  {
    id: 11,
    name: "Rushikesh",
    role: "Flutter Developer",
    imageSrc: A,
  },
];

const Heading = styled(Typography)(({ theme }) => ({
  color: "#000",
  fontFamily: "Inter",
  fontSize: "2.6rem",
  fontStyle: "normal",
  fontWeight: "700",
  lineHeight: "normal",
  textAlign: "center",
  marginTop: "5rem",
}));

const OurTeam = () => {
  const [activeContent, setActiveContent] = useState(1);

  const handleClick = (contentId) => {
    setActiveContent(contentId);
    console.log(contentId);
  };

  return (
    <>
      <WhiteBackground/>
      <Heading>Our Team</Heading>
      <Container maxWidth="xl">
        <div className="body">
          <div className="container">
            <div className="icon">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`imgBx ${
                    activeContent === member.id ? "active" : ""
                  }`}
                  style={{ "--i": `${member.id}`.toLowerCase() }}
                  onClick={() => handleClick(member.id)}
                  data-id={`content${member.id}`}
                >
                  <img src={member.imageSrc} alt={member.name} />
                </div>
              ))}
            </div>
            <div className="content">
              {teamMembers.map((member) => (
                <div
                  key={member.id}
                  className={`contentBx ${
                    activeContent === member.id ? "active" : ""
                  }`}
                  id={`content${member.id}`}
                >
                  <div className="card">
                    <div className="imgBx">
                      <img src={member.imageSrc} alt={member.name} />
                    </div>
                    <div className="textBx">
                      <h2>
                        {member.name}
                        <br />
                        <span>{member.role}</span>
                      </h2>
                      <ul className="sci">
                        <li>
                          <a href="#">
                            <FacebookIcon
                              sx={{ fontSize: { xs: "medium", sm: "large" } }}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <InstagramIcon
                              sx={{ fontSize: { xs: "medium", sm: "large" } }}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <TwitterIcon
                              sx={{ fontSize: { xs: "medium", sm: "large" } }}
                            />
                          </a>
                        </li>
                        <li>
                          <a href="#">
                            <LinkedInIcon
                              sx={{ fontSize: { xs: "medium", sm: "large" } }}
                            />
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default OurTeam;
