import React, { useEffect, useState } from "react";
import './skill-style.css';
import {Card, Button, ListGroup, ListGroupItem} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';



function Skill(props) {
    
    return (
      <Col>
        <Card key= {props.id} style={{ width: '10rem', height: 'auto' }}>
            <Card.Img variant="top" src={props.img} style={{ width: '9rem', height: '11rem' , padding: '20px' , 
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