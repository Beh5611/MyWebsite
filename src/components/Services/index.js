import React from 'react';

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
 
    
    <div>
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
