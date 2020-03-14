import React, { Component } from "react";
import WateringSchedule from "./WateringSchedule";
import { connect } from "react-redux";
import { getPlants, deletePlant } from "../actions/plantActions";
import {Row} from 'reactstrap';
import { loadUser } from "../actions/authActions";
import PropTypes from "prop-types";
import store from "../store";
import moment from 'moment';

class Schedule extends Component {
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
    });
  }
  // markWatered = () => {
  //   this.props.markWatered();
  // };
  render() {
    const { plants } = this.props.plant;
    const userID = this.props.user;
    return (
      <Row>
        {this.props.isAuthenticated && this.props.user ? (
          <div>
            {plants.map(({ _id, name, user, waterSchedule}) =>
              userID._id === user ? (
                <WateringSchedule
                  key = {_id}
                  name = {name}
                  timeTillDate={waterSchedule}
                />
              ) : null
            )}
          </div>
        ) : null}
      </Row>
    );
  }
}

const mapStateToProps = state => ({
  plant: state.plant,
  user: state.auth.user,
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(mapStateToProps, { getPlants, deletePlant, loadUser })(Schedule);
