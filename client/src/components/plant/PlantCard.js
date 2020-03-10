import React, { Fragment } from "react";
import styled from "styled-components";
import chuck from '../../assets/elephant-ear200.jpeg';

const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`;

const Card = styled.div`
display: flex;
flex-direction:column;
flex: 0 0 25%;
max-width:33.333%;
background-color: #fff;
border: .25px solid #707070;

.cardImg {
  width: 100%;
  min-height:200px;
  background-image:url(${chuck});
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
`
;

const PlantCard = props => {
  return (
    <Fragment>
      <CardContainer>
        <Card>
          <div class="cardImg"></div>
          <div class="cardBody">
              <h4>Chuck</h4>
              <h4>Elephant Ear Plant</h4>
          </div>
        </Card>
      </CardContainer>
    </Fragment>
  );
};

export default PlantCard;
