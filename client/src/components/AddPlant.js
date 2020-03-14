import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import { connect } from "react-redux";
import { addPlant } from "../actions/plantActions";
import PropTypes from "prop-types";
import { loadUser } from "../actions/authActions";
import store from "../store";
import { Redirect } from "react-router-dom";

class AddPlant extends Component {
  componentDidMount() {
    this.setState({
      user: store.dispatch(loadUser())
    });
  }

  state = {
    redirect: false,
    name: "",
    type: " ",
    waterValue: ' '
  };
  static propTypes = {
    isAuthenticated: PropTypes.bool,
    user: PropTypes.object,
  };

  redirect = () => {
    this.setState({
      redirect: true
    });
  };

  onChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleChange = (e) => {
    this.setState({waterValue: parseInt(e.target.value)});
  }

  onSubmit = e => {
    e.preventDefault();
    const newPlant = {
      user: this.props.user._id,
      name: this.state.name,
      type: this.state.type,
      waterSchedule: this.state.waterValue
    };

    this.props.addPlant(newPlant);

    //redirect on submit
    this.redirect();
  };

  render() {
    if (this.state.redirect === true) {
      return <Redirect to="/" />;
    }
    return (
      <div>
        {this.props.isAuthenticated ? (
          // <Button
          // color="dark"
          // style={{marginBottom: '2rem'}}
          // onClick={this.toggle}
          // >Add Plant</Button>
          // : <h4>Please Log In to Manage Plants</h4>}
          // <Modal
          // isOpen = {this.state.modal}
          // toggle={this.toggle}
          // >
          //   <ModalHeader
          //   toggle = {this.toggle}
          //   >Add Plant</ModalHeader>
          // <ModalBody>
          <Form onSubmit={this.onSubmit}>
            <FormGroup>
              <Label for="plant">Plant Name</Label>
              <Input
                type="text"
                name="name"
                id="plant"
                placeholder="Add plant"
                onChange={this.onChange}
              />
              <Input
                type="text"
                name="type"
                id="type"
                placeholder="Plant Type"
                onChange={this.onChange}
              />
              </FormGroup>
              <FormGroup>
                <Label for="selectWater">
                  Select Watering Schedule
                </Label>
                  <Input type="select" name="selectWater" id="selectWater" value={this.state.selectValue} onChange={this.handleChange}>
                    <option value = "1">Once a day</option>
                    <option value = "7">Once a week</option>
                    <option value = "10">Every Ten Days</option>
                    <option value = "14">Every Two Weeks</option>
                    <option value = "21">Every Three Weeks</option>
                  </Input>
              </FormGroup>
              <Button color="dark" style={{ marginTop: "2rem" }} block>
                Add Plant
              </Button>
          </Form>
        ) : (
          <div>Please Log in</div>
        )}
        {/* </ ModalBody> */}
        {/* // </Modal> */}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  user: state.auth.user,
  plant: state.plant,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { addPlant })(AddPlant);
