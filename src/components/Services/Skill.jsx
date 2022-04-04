import React, { useEffect, useState } from "react";
import './skill-style.css';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import Icon1 from '../../images/svg-1.svg';
import {
    ServicesContainer,
    ServicesH1,
    ServicesWrapper,
    ServicesCard,
    ServicesIcon,
    ServicesH2,
    ServicesP
  } from './ServicesElements';
  import {
    ImageWrapper,
    Image
  } from './ServicesElements';


function Skill(props) {
    
    return (
      <Col>
        <Card key= {props.id} style={{ width: '10rem', height: '16rem' }}>
            <Card.Img variant="top" src={props.img} style={{ width: '9rem', height: '14rem' , padding: '20px' , 
                      flexDirection: 'column', justifyContent: 'flex-start', alignItems:'center'}}/>
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>{props.skill}</Card.Text>
            </Card.Body>
        </Card>
      </Col>   
    );
  }


export default Skill;