import React, { Component, Fragment } from "react";
import styled from "styled-components";
import { Button } from "reactstrap";
import rootrot from './assets/rootrot.svg';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  min-width: 33.333%;
  
`;

const Card = styled.div`
display: flex;
flex-direction:column;
background-color: #fff;
border: .25px solid #707070;
width:100%;

.cardImg {
  width: 100%;
  min-height:200px;
  background-image:url(${rootrot});
  background-size: cover;
  background-repeat: no-repeat;
  background-position:center;
}
.cardBody {
  width: 100%;
  height: 100%;
  background-color: #f1f2f2;
  padding: 20px;
  border-left: .25px solid #707070;

  h4 {
    font-size: 17px;
  }
}
    
}
`;
const PlantCard = props => {
  return (
    <CardContainer>
        <Card>
          <div className="cardImg"></div>
          <div className="cardBody">
              <h4>{props.name}</h4>
              <h4>{props.type}</h4>
              <h4>{props.waterValue}</h4>
              <Button 
              className="remove-btn"
              color="danger"
              size="sm"
              onClick = {props.delete}
              >Delete Plant</Button>
          </div>
        </Card> 
      </CardContainer>
    );
};

export default PlantCard;
