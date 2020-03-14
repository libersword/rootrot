import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import PlantCrew from "./PlantCrew";
import AddPlant from "./AddPlant";
import Schedule from "./Schedule";
import styled from "styled-components";

const SplitPane = styled.div`
  display: flex;
  height: 100vh;
`;
const LeftPane = styled.div`
  flex: 1;
  position: relative;
  outline: none;
  width: 200px;
  background-color: #90aa86;
`;

const RightPane = styled.div`
  flex: 6;
  padding: 20px;
`;

const Menu = styled.div`
  text-align: center;
  width: 100%;
`;

const MenuItem = styled.div`
padding: 10px 0;
border: 1px solid #626949;
&:hover {
  background-color: #2E2A1B; 
}

`

const MenuItemLink = styled.a`
color: #fff;
&:hover {
  color: #fff;
  text-decoration: none; 
}
`;

const Body = () => {
  return (
    <Router>
      <SplitPane>
        <LeftPane>
          <Menu>
          <MenuItemLink href="/">
            <MenuItem>
              Plant Crew
            </MenuItem>
            </MenuItemLink>
            <MenuItemLink href="/add-plant">
            <MenuItem>
              Add Plant
            </MenuItem>
            </MenuItemLink>
            <MenuItemLink href="/watering-schedule">
            <MenuItem>
              Watering Schedule
            </MenuItem>
            </MenuItemLink>
          </Menu>
        </LeftPane>
        <RightPane>
          <Route exact path="/" component={PlantCrew} />
          <Route path="/add-plant" component={AddPlant} />
          <Route path="/watering-schedule" component={Schedule} />
        </RightPane>
      </SplitPane>
    </Router>
  );
};

export default Body;
