import React, { Component } from "react";
import { Container, Row, Button } from "reactstrap";
import { connect } from "react-redux";
import { getPlants, deletePlant } from "../actions/plantActions";
import { loadUser } from "../actions/authActions";
import PropTypes from "prop-types";
import store from '../store';
import PlantCard from './PlantCard'

class PlantCrew extends Component {
  
  static propTypes = {
    getPlants: PropTypes.func.isRequired,
    plant: PropTypes.object.isRequired,
    user: PropTypes.object,
    isAuthenticated: PropTypes.bool
  };
  componentDidMount() {
    this.props.getPlants();
    this.setState({
      user: store.dispatch(loadUser())
    })
  }
  deleteThis = id => {
    this.props.deletePlant(id);
  };

  render() {
    const { plants } = this.props.plant;
    const userID = this.props.user;
    
    return (
      <Row>
      {this.props.isAuthenticated && this.props.user ? 
      <Container className = "plantWrapper">
        {plants.map(({ _id, name, user, type, waterValue }) => ( 
          userID._id === user ?
          
          <PlantCard 
          key={_id}
          name = {name}
          type = {type}
          waterValue = {waterValue}
          delete = {this.deleteThis.bind(this, _id)}
        /> : null 
        ))}
      </Container> : null }
      </Row>
    );
  }
} 

const mapStateToProps = state => ({
  plant: state.plant,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPlants, deletePlant, loadUser })(PlantCrew);
