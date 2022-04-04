import styled from 'styled-components';

export const InfoContainer = styled.div`
  color: #fff;
  background: ${({ lightBg }) => (lightBg ? '#f9f9f9' : '#010606')};

  @media screen and (max-width: 768px) {
    padding: 100px 0;
  }
`;





// Original code
export const InfoWrapper = styled.div`
  display: grid;
  z-index: 1;
  // height: 860px;
  // height: 900px;
  height: auto;
  min-height: 900px;
  
  width: 100%;
  max-width: 1100px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 24px;
  justify-content: center;
`;

export const InfoRow = styled.div`
  display: grid;
  grid-auto-columns: minmax(auto, 1fr);
  align-items: center;
  grid-template-areas: ${({ imgStart }) =>
    imgStart ? "'col2 col1'" : "'col1 col2'"};
  /* Must use '\' css class \'' */

  @media screen and (max-width: 768px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const TextWrapper = styled.div`
  max-width: 540px;
  padding-top: 0;
  padding-bottom: 10px;
  margin-bottom: 0px;
`;

export const TopLine = styled.div`
  // color: #01bf71;
  color: #3137fd;
  font-size: 16px;
  line-height: 16px;
  font-weight: 700;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Heading = styled.h1`
  margin-bottom: 24px;
  font-size: 48px;
  line-height: 1.1;
  font-weight: 600;
  color: ${({ lightText }) => (lightText ? '#f7f8fa' : '#010606')};
  //color: ${({ lightText }) => (lightText ? '#3137fd' : '#3137fd')};

  @media screen and (max-width: 480px) {
    font-size: 32px;
  }
`;

export const Subtitle = styled.p`
  max-width: 440px;
  margin-bottom: 35px;
  font-size: 18px;
  line-height: 24px;
  color: ${({ darkText }) => (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
  display: flex;
  justify-content: flex-start;
`;

export const ImgWrap = styled.div`
  padding-top: 0px;
  margin-top: 0px;
  // max-width: 555px;
  // height: 1000%;
  max-width: 100%;
  height: 100%;
  object-fit: contain;
  // transform: scale(0.6);
  
  @media screen and (max-width: 768px) {
    // max-width: 350px;
    transform: scale(0.5);
    max-width: 100%;
    height: 100%;
  }
`;

export const Img = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  margin-top: 0;
  margin-right: 0;
  margin-left: 10px;
  padding-right: 0;
  padding-top: 0;
  padding-bottom: 10px;
  padding-top: 0px;
  padding-bottom: 0px;
`;
