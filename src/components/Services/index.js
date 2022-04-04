import React from 'react';
import Icon1 from '../../images/svg-1.svg';
import Icon2 from '../../images/svg-3.svg';
import Icon3 from '../../images/svg-5.svg';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import SkillList from './SkillList';
import './style.css';
import {languages, frameworks} from  './languages'
import {
  ServicesContainer,
  ServicesH1,
  ServicesWrapper,
  ServicesCard,
  ServicesIcon,
  ServicesH2,
  ServicesP
} from './ServicesElements';
function arraysEqual(a, b) {
  if (a === b) return true;
  if (a == null || b == null) return false;
  if (a.length !== b.length) return false;

  // If you don't care about the order of the elements inside
  // the array, you should sort both arrays here.
  // Please note that calling sort on an array will modify that array.
  // you might want to clone your array first.

  for (var i = 0; i < a.length; ++i) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}
const Services = (props) => {
  let header = <ServicesH1>Failed</ServicesH1>;
  if (arraysEqual(Object.values(props), languages)){
    header = <ServicesH1>Programming Languages</ServicesH1>;
  }
  else if (arraysEqual(Object.values(props), frameworks)){
    header = <ServicesH1>Frameworks, Libraries and Tools</ServicesH1>;
  }
  
  return (
    // <ServicesContainer id='services'>
    //   <ServicesH1>Our Services</ServicesH1>
    //   <ServicesWrapper>
    //       <SkillList entry = {L}/>
    //   </ServicesWrapper>
    // </ServicesContainer>


    //-------------------
    // <div className='zone wrapper'>
    //   <SkillList className='zone' entry = {L}/>
    // </div>
    
    //-------------------
    // <div>
    //   <ServicesContainer id='services'>
    //     <ServicesH1>Programming languages</ServicesH1>
    //     <Container>
    //       <Row xs={2} sm={3} md={4} lg = {6} xl = {7}>
    //         <SkillList className='item' entry = {L}/>
    //       </Row>
    //     </Container>
    //   </ServicesContainer>
    // </div>
    
    <div>
      {/* <ServicesContainer id='services'> */}
      <ServicesContainer id='skills'>
        {header}
        <Container>
          <Row xs={2} sm={3} md={4} lg = {6} xl = {7}>
            <SkillList className='item' entry = {props}/>
          </Row>
        </Container>
      </ServicesContainer>
    </div>    
  );
};

export default Services;

    // <ServicesContainer id='services'>
    //   <ServicesH1>Our Services</ServicesH1>
    //   <ServicesWrapper>
    //     <ServicesCard>
    //       <ServicesIcon src={Icon1} />
    //       <ServicesH2>Reduce Expenses</ServicesH2>
    //       <ServicesP>
    //         We help reduce your fees and increase your overall revenue.
    //       </ServicesP>
    //     </ServicesCard>
    //     <ServicesCard>
    //       <ServicesIcon src={Icon2} />
    //       <ServicesH2>Virtual Offices</ServicesH2>
    //       <ServicesP>
    //         You can access our platform online anywhere in the world.
    //       </ServicesP>
    //     </ServicesCard>
    //     <ServicesCard>
    //       <ServicesIcon src={Icon3} />
    //       <ServicesH2>Premium Benefits</ServicesH2>
    //       <ServicesP>
    //         Unlock our special membership card that returns 5% cash back.
    //       </ServicesP>
    //     </ServicesCard>
    //   </ServicesWrapper>
    // </ServicesContainer>
