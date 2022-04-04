import React from 'react';
// import "./style.css";
// import { Button } from '../ButtonElements';
// import { ButtonGroup, IconButton } from '@material-ui/core'
// import GitHubIcon from '@material-ui/icons/GitHub'
// import LaunchIcon from '@material-ui/icons/Launch'

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
    // <div className='item' id ={id}>
    //   <Column1>
    //     <TextWrapper>
    //       {/* <div className='description'>
    //         <h1>{headline}</h1>
    //         <p>{description}</p>
    //       </div> */}
    //       <Heading lightText={lightText}>{headline}</Heading>
    //       <Subtitle darkText={darkText}>{description}</Subtitle>
    //     </TextWrapper>
    //   </Column1>
    //   <Column2>
    //     <ImgWrap>
    //       <img src={img} className='featured-image' alt="Girl in a jacket" ></img>
    //     </ImgWrap>
    //   </Column2>
    // </div>
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
                    <IconButton edge='fales'  href='https://www.github.com' color='primary' disableRipple='true' ><GitHubIcon/></IconButton>
                    <IconButton  edge='false' href='https://www.linkedin.com' color='primary' disableRipple='true' ><LinkedInIcon/></IconButton>
                  </ButtonGroup>
              </TextWrapper>
              {/* <InfoRow>
                  <ButtonGroup>
                    <IconButton edge='fales'  href='https://www.github.com' color='primary' disableRipple='true' ><GitHubIcon/></IconButton>
                    <IconButton  edge='false' href='https://www.linkedin.com' color='primary' disableRipple='true' ><LinkedInIcon/></IconButton>
                  </ButtonGroup>
                
              </InfoRow> */}
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

// Original code in return
{/* <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}>{description}</Subtitle>
                <BtnWrap>
                  <Button
                    to='home'
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact='true'
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer> */}
