import React, { Component } from "react";
import { Button, Form, FormGroup, Label, Input } from "reactstrap";
import "../index.css";

class AddPlant extends Component {
  render() {
    return (
      <div className="formContainer">
        <Form className="searchPlant" onSubmit={this.onSubmitSearch}>
          <FormGroup >
            <Label for="nickname">Search Plant Type</Label>
            <Input
              type="text"
              name="plantType"
              id="plantType"
              placeholder="Search Plant Type"
              onChange={this.onChange}
            />
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Search Plant
            </Button>
          </FormGroup>
          </Form>
        <Form className="addPlantForm" onSubmit={this.onSubmit}>
          <FormGroup >
            <Label for="nickname">Plant Nickname</Label>
            <Input
              type="text"
              name="nickname"
              id="nickname"
              placeholder="Plant Nickname"
              onChange={this.onChange}
            />
            <Button color="dark" style={{ marginTop: "2rem" }} block>
              Add Plant
            </Button>
          </FormGroup>
        </Form>
      </div>
    );
  }
}

export default AddPlant;
