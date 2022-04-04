import React from 'react';


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

const InfoSection = ({
  lightBg,
  imgStart,
  topLine,
  lightText,
  headline,
  description,
  buttonLabel,
  img,
  alt,
  id,
  primary,
  darkText,
  dark,
  dark2
}) => {
  console.log(primary);
  return (
    <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
            
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>I'm a Computer Science major finishing up my second year at the <strong>University of Toronto</strong>.</Subtitle>
                <Subtitle darkText={darkText}>I enjoy learning about web development, and making websites. I'm currently in the process of becoming more comfortable with React/CSS and would like to start learning NodeJS.</Subtitle>
                <Subtitle darkText={darkText}>My curiousity, as well as desire for self-improvement and learning are what set me apart.</Subtitle>
                
                <ButtonGroup>
                    <IconButton edge='fales'  href='https://www.github.com/Beh5611' color='primary' disableRipple='true' ><GitHubIcon/></IconButton>
                    <IconButton  edge='false' href='https://https://www.linkedin.com/in/behrouz-akhbari-9b8731183/' color='primary' disableRipple='true' ><LinkedInIcon/></IconButton>
                  </ButtonGroup>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
  );
};

export default InfoSection;

