import React from 'react';
import { Button } from '../ButtonElements';
import Carousel from 'react-bootstrap/Carousel';
import { IconButton, ButtonGroup} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  ImgWrap,
  Img
} from './InfoElements';


function githubLink(props){
  const gh = props.gh;
  if (gh){
    return <ButtonGroup> <IconButton edge='fales'  href='https://www.github.com' color='primary' disableRipple='true' ><GitHubIcon/></IconButton> </ButtonGroup>;
  }else{
    return;
  }
};

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  lessons,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2,
  github,
  githubLink
}) => {
  
  console.log(githubLink);
  let gh;
  if (github){
    gh = <ButtonGroup> <IconButton edge='false'  href="https://github.com/Beh5611/MyWebsite" color='primary' disableRipple='true' ><GitHubIcon/></IconButton> </ButtonGroup>;
  }else{
    gh = <Subtitle darkText={darkText}>Note: Code will not be provided to uphold Academic Integrity.</Subtitle>;
  };
  return (
    
      <InfoContainer lightBg={lightBg} id='projects'>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <Subtitle darkText={darkText}>{lessons}</Subtitle>
                {gh}
                
              </TextWrapper>
              
            </Column1>
            <Column2>
              {/* <ImgWrap> */}
                <Img src={img} alt={alt} />
              {/* </ImgWrap> */}
              
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> 

  );
};

export default InfoSection;
