import { Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ProjectsSection from "./ProjectsSection";

function Card ({ title, description, imageSrc })  {
return(
  <div className="CardContainer" style={{color:"black", backgroundColor: 'white', borderRadius: "1em"}}>
    <div className="CardImage">
      <img src={imageSrc} style={{borderRadius: "1em"}}/>
    </div>
    <div className="CardHeader" style={{fontSize: "30px", margin: '20px'}}>{title}</div>
    <div className="CardDescription" style={{fontSize: "17px", margin: '20px', textAlign: "justify"}}>{description}</div>
    <div className="CardArrow" style={{fontSize: "17px", color: "blue", margin: '20px'}} > See more <FontAwesomeIcon icon={faArrowRight} size="1x" /></div>

  </div>
);

}
export default Card;
