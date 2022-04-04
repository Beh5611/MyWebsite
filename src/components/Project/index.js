import React from 'react';
// import "./style.css";
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
  github
}) => {
  
  console.log(github);
  let gh;
  if (github){
    gh = <ButtonGroup> <IconButton edge='fales'  href='https://www.github.com' color='primary' disableRipple='true' ><GitHubIcon/></IconButton> </ButtonGroup>;
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
                {/* <ButtonGroup>
                  
                  <IconButton edge='fales'  href='https://www.github.com' color='primary' disableRipple='true' ><GitHubIcon/></IconButton>
              </ButtonGroup> */}
              </TextWrapper>
              {/* <ButtonGroup>
                  
                  <IconButton edge='fales'  href='https://www.github.com' color='primary' disableRipple='true' ><GitHubIcon/></IconButton>
              </ButtonGroup> */}
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
