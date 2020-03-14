import React, { Component } from "react";
import { Container, ListGroup, ListGroupItem, Button } from "reactstrap";
import { connect } from "react-redux";
import { getPlants, deletePlant } from "../actions/plantActions";
import { loadUser } from "../actions/authActions";
import PropTypes from "prop-types";
import store from '../store';

class ShoppingList extends Component {

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
      <Container>
        {this.props.isAuthenticated && this.props.user ? 
        <ListGroup>
          {plants
          .map(({ _id, name, user }) => (
           userID._id === user ? 
            <ListGroupItem key={_id}>
              <Button
              className="remove-btn"
              color="danger"
              size="sm"
              onClick={this.deleteThis.bind(this, _id)}
              >
                &times;
              </Button>
              {name}
            </ListGroupItem>
            
            : null
          ))}
        </ListGroup> : <div>Log in first</div>}
      </Container>
    );
  }
}

const mapStateToProps = state => ({
  plant: state.plant,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPlants, deletePlant, loadUser })(ShoppingList);
