import React, { Component } from 'react';
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input
} from 'reactstrap';
import { connect } from 'react-redux';
import { addPlant } from '../actions/plantActions';
import PropTypes from 'prop-types';
import { loadUser } from '../actions/authActions';
import store from '../store';

class PlantModal extends Component {
  componentDidMount() {
    this.setState({
      user: store.dispatch(loadUser())
    })
  }
  
  state = {
    modal: false,
    name: ''
  }
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object.isRequired
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  onChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  } 

  onSubmit = (e) => {
    e.preventDefault();
    const newPlant = {
      user: this.props.user._id,
      name: this.state.name
    }

    this.props.addPlant(newPlant);

    //close modal
    this.toggle();

  }

  render() {
    return(
      <div>
        { this.props.isAuthenticated ? 
        <Button
        color="dark"
        style={{marginBottom: '2rem'}}
        onClick={this.toggle}
        >Add Plant</Button>
        : <h4>Please Log In to Manage Plants</h4>}
        <Modal
        isOpen = {this.state.modal}
        toggle={this.toggle}
        > 
          <ModalHeader 
          toggle = {this.toggle}
          >Add Plant</ModalHeader>
        <ModalBody>
          <Form
          onSubmit={this.onSubmit}
          >
            <FormGroup>
              <Label for="plant">
                Plant Name
              </Label>
              <Input
              type="text"
              name="name"
              id = "plant"
              placeholder = "Add plant"
              onChange = {this.onChange}
              />
              <Button 
              color="dark"
              style={{marginTop:'2rem'}}
              block
              >Add Plant</Button>
            </FormGroup>
          </Form>
        </ModalBody>
        </Modal>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.auth.user,
  plant: state.plant,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPlant })(PlantModal);