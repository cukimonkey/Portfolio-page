import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";


const greeting = "Hello, I am Ursula!";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    fontSize="50px"
    
  >
  <Avatar alt="Ursula Armstrong" src={process.env.PUBLIC_URL + "/avatar1.jpg"} sx={{ width: 56, height: 56 }}/>
  <h1 style={{fontSize: "20px"}}>{greeting}</h1> <br></br>
  <h2>{bio1}</h2>
  <h2>{bio2}</h2>
  </FullScreenSection>
  
);

export default LandingSection;
