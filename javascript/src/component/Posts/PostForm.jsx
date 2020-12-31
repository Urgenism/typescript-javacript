import React, { Component } from "react";
import { Form, FormGroup, Input, Label } from "reactstrap";

export class PostForm extends Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Label for='exampleEmail'>Email</Label>
          <Input
            type='email'
            name='email'
            id='exampleEmail'
            placeholder='with a placeholder'
          />
        </FormGroup>
      </Form>
    );
  }
}

export default PostForm;
